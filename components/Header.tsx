// components/Header.tsx
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // return (
  //   <header
  //     className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
  //       isScrolled
  //         ? 'bg-white/90 backdrop-blur-xl shadow-lg py-3'
  //         : 'bg-transparent py-5'
  //     }`}
  //   >
  //     <div className="container mx-auto px-6 flex justify-between items-center">
  //       <div className="flex items-center gap-2">
  //         <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center shadow-lg">
  //           <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
  //           </svg>
  //         </div>
  //         <span className="text-2xl font-bold bg-gradient-to-r from-primary-700 to-secondary-700 bg-clip-text text-transparent">
  //           ترجمه رسمی
  //         </span>
  //       </div>

  //       <nav className="hidden md:flex items-center gap-8">
  //         {['خدمات', 'ویژگی‌ها', 'دفتر ترجمه', 'تماس'].map((item) => (
  //           <Link
  //             key={item}
  //             href={`#${item}`}
  //             className="text-slate-700 hover:text-primary-600 transition-colors duration-300 font-medium"
  //           >
  //             {item}
  //           </Link>
  //         ))}
  //       </nav>

  //       <button className="bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5">
  //         درخواست ترجمه
  //       </button>
  //     </div>
  //   </header>
  // );
  return (
    <header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
    isScrolled
      ? 'bg-white/80 backdrop-blur-2xl border-b border-slate-200/60 shadow-sm'
      : 'bg-transparent'
  }`}
>
  <div className="max-w-7xl mx-auto px-6 lg:px-10">
    <div className="h-20 flex items-center justify-between">
      
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 group">
        <div className="w-11 h-11 rounded-2xl bg-slate-900 text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-6">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10"
            />
          </svg>
        </div>

        <div>
          <h1 className="text-xl font-bold text-slate-900">
            ترجمه رسمی
          </h1>
          <p className="text-xs text-slate-500">
            دارالترجمه رسمی
          </p>
        </div>
      </Link>

      {/* Nav */}
      <nav className="hidden lg:flex items-center gap-10">
        {['خدمات', 'ویژگی‌ها', 'دفتر ترجمه', 'تماس'].map((item) => (
          <Link
            key={item}
            href={`#${item}`}
            className="
              relative
              text-slate-700
              font-medium
              transition-colors
              hover:text-slate-900
              after:absolute
              after:left-0
              after:-bottom-1
              after:h-[2px]
              after:w-0
              after:bg-slate-900
              after:transition-all
              hover:after:w-full
            "
          >
            {item}
          </Link>
        ))}
      </nav>

      {/* CTA */}
      <button
        className="
          px-6
          py-3
          rounded-full
          bg-slate-900
          text-white
          font-medium
          hover:bg-slate-800
          transition-all
          duration-300
          hover:scale-105
        "
      >
        درخواست ترجمه
      </button>
    </div>
  </div>
</header>
  )
}