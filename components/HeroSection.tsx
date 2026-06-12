// components/HeroSection.tsx
'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 20;
      const y = (clientY / window.innerHeight) * 20;
      heroRef.current.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Particle animation effect
  useEffect(() => {
     if (typeof window === 'undefined') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      color: string;
      velocityX: number;
      velocityY: number;
    }> = [];

    const colors = ['#f97316', '#ec4899', '#06b6d4', '#a855f7', '#10b981', '#f59e0b'];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        velocityX: (Math.random() - 0.5) * 0.5,
        velocityY: (Math.random() - 0.5) * 0.5,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((particle) => {
        particle.x += particle.velocityX;
        particle.y += particle.velocityY;
        
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      requestAnimationFrame(animate);
    }
    
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleClick(){
    router.push("https://startransonline.com/")

  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30" />
      
      {/* Modern animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 -left-20 w-80 h-80 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000"></div>
      </div>

      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10" ref={heroRef}>
        <div className="text-center max-w-5xl mx-auto">
          {/* Modern badge with glow effect */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-2.5 mb-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              ✨ معتبرترین مرکز ترجمه رسمی ایران ✨
            </span>
          </div>

          {/* Main heading with modern gradient */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
              ترجمه رسمی
            </span>
            <br />
            <span className="bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 bg-clip-text text-transparent">
              با کیفیت و دقت بالا
            </span>
          </h1>
 
          <p className="text-xl md:text-2xl !text-gray-400 dark:text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            ارائه خدمات ترجمه رسمی با همکاری مترجمان رسمی قوه قضاییه، 
            <span className="font-semibold text-transparent bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text"> تضمین کیفیت </span>
            و 
            <span className="font-semibold text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text"> تحویل فوری </span>
          </p>

          {/* Modern CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button onClick={handleClick} className="group relative bg-gradient-to-r cursor-pointer from-orange-600 via-pink-600 to-purple-600 hover:from-orange-700 hover:via-pink-700 hover:to-purple-700 text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3 overflow-hidden">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative flex items-center gap-2">
                شروع ترجمه
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4-4m4 4l-4 4" />
                </svg>
              </span>
            </button>
            <button onClick={handleClick}  className="group backdrop-blur-md bg-white/20 cursor-pointer hover:bg-white/30 border-2 border-white/30 text-slate-800 px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-500 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              مشاهده نمونه کارها
            </button>
          </div>

          {/* Modern trust indicators with glass morphism */}
          <div className="mt-20 flex flex-wrap justify-center gap-12">
            {[
              { number: '۱۰+', label: 'سال تجربه', icon: '🏆', color: 'from-amber-500 to-orange-500' },
              { number: '۵۰+', label: 'مترجم رسمی', icon: '👥', color: 'from-blue-500 to-cyan-500' },
              { number: '۱۰K+', label: 'پروژه موفق', icon: '✅', color: 'from-emerald-500 to-teal-500' },
              { number: '۹۸%', label: 'رضایت مشتری', icon: '⭐', color: 'from-purple-500 to-pink-500' },
            ].map((stat) => (
              <div key={stat.label} className="group text-center backdrop-blur-sm bg-white/5 rounded-2xl px-6 py-4 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                  {stat.number}
                </div>
                <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

        {/* Floating modern elements */}
      <div className="absolute top-32 right-8 md:right-20 animate-float">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 opacity-20 blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      </div>
      
      <div className="absolute bottom-32 left-8 md:left-20 animate-float animation-delay-2000">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 opacity-20 blur-lg"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
      </div>
    </section>
  );
}