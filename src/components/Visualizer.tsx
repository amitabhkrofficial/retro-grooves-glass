
import { useEffect, useRef } from 'react';
import { useAudio } from '../context/AudioContext';

const Visualizer = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isPlaying, currentTrack } = useAudio();
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const animationFrameRef = useRef<number>(0);
  
  useEffect(() => {
    // Initialize audio context for visualization
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      analyserRef.current = audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize = 256;
      
      const bufferLength = analyserRef.current.frequencyBinCount;
      dataArrayRef.current = new Uint8Array(bufferLength);
      
      // Connect audio element to audio context
      if (document.querySelector('audio')) {
        const audioElement = document.querySelector('audio') as HTMLAudioElement;
        const source = audioContextRef.current.createMediaElementSource(audioElement);
        source.connect(analyserRef.current);
        analyserRef.current.connect(audioContextRef.current.destination);
      }
    }
    
    // Draw function for the visualization
    const draw = () => {
      if (!canvasRef.current || !analyserRef.current || !dataArrayRef.current) return;
      
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      // Set canvas dimensions to match container
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      
      const width = canvas.width;
      const height = canvas.height;
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      if (isPlaying && currentTrack) {
        // Get frequency data
        analyserRef.current.getByteFrequencyData(dataArrayRef.current);
        
        // Draw bars
        const barWidth = width / dataArrayRef.current.length * 1.5;
        let x = 0;
        
        for (let i = 0; i < dataArrayRef.current.length; i++) {
          const barHeight = dataArrayRef.current[i] / 2;
          
          // Create gradient effect
          const gradient = ctx.createLinearGradient(0, height - barHeight, 0, height);
          gradient.addColorStop(0, 'rgba(102, 51, 153, 0.8)'); // Purple top
          gradient.addColorStop(1, 'rgba(0, 255, 202, 0.5)');  // Teal-neon bottom
          
          ctx.fillStyle = gradient;
          ctx.fillRect(x, height - barHeight, barWidth - 1, barHeight);
          
          x += barWidth;
        }
      } else {
        // Draw idle state - simple pulsating line
        ctx.beginPath();
        ctx.moveTo(0, height / 2);
        
        for (let i = 0; i < width; i++) {
          const y = height / 2 + Math.sin(i / 20 + Date.now() / 1000) * 5;
          ctx.lineTo(i, y);
        }
        
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      
      animationFrameRef.current = requestAnimationFrame(draw);
    };
    
    // Start animation
    draw();
    
    // Cleanup
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, currentTrack]);
  
  return (
    <div className="w-full h-32 glassmorphism-dark rounded-lg overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full"></canvas>
    </div>
  );
};

export default Visualizer;
