
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  function handleClick() {
    router.push("https://startransonline.com/");
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-2xl border-b border-slate-200/60 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="h-16 sm:h-20 flex items-center justify-between">
            
            <a href="https://startransonline.com/" target="_blank" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
              <div className="rounded-xl sm:rounded-2xl bg-slate-900 text-white flex items-center justify-center transition-transform overflow-hidden duration-300 group-hover:rotate-6">
              <div className="rounded-xl sm:rounded-2xl bg-slate-900 text-white flex items-center justify-center transition-transform overflow-hidden duration-300 group-hover:rotate-6">
                <Image 
                  src={"/logo.png"} 
                  alt="star trans" 
                  width={96} 
                  height={64} 
                />
              </div>
              </div>

              <div className="hidden xs:block">
                <h1 className="text-base sm:text-xl font-bold text-slate-900">
                  ترجمه رسمی
                </h1>
                <p className="text-[10px] sm:text-xs text-slate-500">
                  دارالترجمه رسمی
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {['خدمات', 'ویژگی‌ها', 'دفتر ترجمه', 'تماس'].map((item) => (
                <a href="https://startransonline.com/" target="_blank"
                  key={item}
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
                </a>
              ))}
            </nav>

            {/* Desktop Button */}
            <button
              onClick={handleClick}
              className="
                hidden sm:block
                px-4 sm:px-6
                py-2 sm:py-3
                rounded-full
                bg-slate-900
                text-white
                font-medium
                hover:bg-slate-800
                transition-all
                duration-300
                hover:scale-105
                cursor-pointer
                text-sm sm:text-base
              "
            >
              درخواست ترجمه
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors z-50"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-slate-900 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`w-full h-0.5 bg-slate-900 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`w-full h-0.5 bg-slate-900 rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-40 transition-transform duration-300 transform lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="pt-20 pb-6 px-6 h-full flex flex-col">
          {/* Mobile Navigation Items */}
          <nav className="flex flex-col gap-2">
            {['خدمات', 'ویژگی‌ها', 'دفتر ترجمه', 'تماس'].map((item) => (
              <a
                href="https://startransonline.com/"
                target="_blank"
                key={item}
                onClick={handleNavClick}
                className="
                  py-4 px-4
                  text-slate-700
                  font-medium
                  text-lg
                  rounded-xl
                  hover:bg-slate-50
                  transition-colors
                  border-b border-slate-100
                "
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Button */}
          <div className="mt-auto pt-6">
            <button
              onClick={() => {
                handleClick();
                setIsMobileMenuOpen(false);
              }}
              className="
                w-full
                py-4
                rounded-xl
                bg-slate-900
                text-white
                font-medium
                hover:bg-slate-800
                transition-all
                duration-300
                cursor-pointer
                text-base
              "
            >
              درخواست ترجمه
            </button>
          </div>
        </div>
      </div>
    </>
  );
}