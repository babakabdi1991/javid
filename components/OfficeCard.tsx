// // components/OfficeCard.tsx
// 'use client';
// import Link from 'next/link';
// import { useState } from 'react';

// export function OfficeCard() {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleClick = () => {
//     window.open('https://startransonline.com/', '_blank');
//   };

//   return (
//     <section id="دفتر ترجمه" className="py-24 bg-gradient-to-r from-primary-50 via-white to-secondary-50">
//       <div className="container mx-auto px-6">
//         <div className="flex justify-center">
//           <div
//             onClick={handleClick}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//             className="relative group cursor-pointer"
//           >
//             {/* Animated border glow */}
//             <div className={`absolute -inset-1 bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 rounded-2xl blur-xl transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-50'}`}></div>

//             {/* Main Card */}
//             <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 w-[380px] md:w-[480px]">
//               {/* Decorative top bar */}
//               <div className="h-2 bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600"></div>

//               {/* Card Content */}
//               <div className="p-8 text-center">
//                 {/* Icon with animation */}
//                 <div className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center shadow-lg transition-all duration-500 ${isHovered ? 'rotate-3 scale-110' : ''}`}>
//                   <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2m8-10a4 4 0 10-8 0 4 4 0 008 0zm6-3.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
//                   </svg>
//                 </div>

//                 {/* Title with Persian text */}
//                 <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-3 bg-gradient-to-r from-primary-700 to-secondary-700 bg-clip-text text-transparent">
//                   دفتر ترجمه ۶۵۹
//                 </h2>

//                 {/* Subtitle */}
//                 <p className="text-slate-500 mb-6">
//                   مرکز تخصصی ترجمه‌های رسمی و بین‌المللی
//                 </p>

//                 {/* Divider */}
//                 <div className="w-20 h-0.5 bg-gradient-to-r from-primary-300 to-secondary-300 mx-auto mb-6"></div>

//                 {/* Features list */}
//                 <div className="space-y-2 text-right pr-8 mb-6">
//                   <div className="flex items-center gap-2 text-sm text-slate-600">
//                     <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                     <span>ترجمه رسمی کلیه مدارک</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-sm text-slate-600">
//                     <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                     <span>مهر و امضای رسمی قوه قضاییه</span>
//                   </div>
//                   <div className="flex items-center gap-2 text-sm text-slate-600">
//                     <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                     <span>تحویل در کمترین زمان ممکن</span>
//                   </div>
//                 </div>

//                 {/* CTA Button */}
//                 <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${isHovered ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg gap-3' : 'bg-primary-50 text-primary-700'}`}>
//                   <span>مشاهده و ثبت درخواست</span>
//                   <svg className={`w-4 h-4 transition-all duration-300 ${isHovered ? 'translate-x-1' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0l-4-4m4 4l-4 4" />
//                   </svg>
//                 </div>

//                 {/* Hint text */}
//                 <p className="text-xs text-slate-400 mt-4">
//                   با کلیک بر روی کارت به سایت رسمی هدایت می‌شوید
//                 </p>
//               </div>

//               {/* Decorative bottom pattern */}
//               <div className="h-1 bg-gradient-to-r from-primary-100 via-secondary-100 to-primary-100"></div>
//             </div>

//             {/* Floating badge */}
//             <div className={`absolute -top-3 -right-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs px-3 py-1 rounded-full shadow-lg transition-all duration-500 ${isHovered ? 'scale-110 rotate-6' : ''}`}>
//               رسمی
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// components/OfficeCard.tsx
'use client';
import { useState } from 'react';

export function OfficeCard() {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open('https://startransonline.com/', '_blank');
  };

  return (
    <section
      id="دفتر ترجمه"
      className="py-24 bg-gradient-to-br from-fuchsia-50 via-cyan-50 to-amber-50"
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <div
            onClick={handleClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative group cursor-pointer"
          >
            {/* Multi-color glow */}
            <div
              className={`absolute -inset-2 rounded-2xl blur-2xl transition-all duration-500 
              bg-gradient-to-r from-fuchsia-500 via-cyan-500 to-amber-500
              ${isHovered ? 'opacity-90 scale-105' : 'opacity-40'}`}
            />

            {/* Main Card */}
            <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 w-[380px] md:w-[480px] border border-white/40">
              
              {/* Top rainbow bar */}
              <div className="h-2 bg-gradient-to-r from-fuchsia-500 via-cyan-500 via-violet-500 to-amber-400" />

              <div className="p-8 text-center">
                
                {/* Icon */}
                <div
                  className={`w-24 h-24 mx-auto rounded-2xl flex items-center justify-center shadow-xl transition-all duration-500
                  bg-gradient-to-br from-fuchsia-600 via-violet-600 to-cyan-500
                  ${isHovered ? 'rotate-6 scale-110' : ''}`}
                >
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 21v-2a4 4 0 00-4-4H9a4 4 0 00-4 4v2m8-10a4 4 0 10-8 0 4 4 0 008 0zm6-3.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                    />
                  </svg>
                </div>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-3 bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent">
                  دفتر ترجمه ۶۵۹
                </h2>

                <p className="text-slate-600 mb-6">
                  مرکز تخصصی ترجمه‌های رسمی و بین‌المللی
                </p>

                {/* Divider */}
                <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-amber-400" />

                {/* Features */}
                <div className="space-y-3 text-right pr-8 mb-6">
                  {[
                    'ترجمه رسمی کلیه مدارک',
                    'مهر و امضای رسمی قوه قضاییه',
                    'تحویل در کمترین زمان ممکن',
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500" />
                      <span>{text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300
                  ${
                    isHovered
                      ? 'bg-gradient-to-r from-fuchsia-600 via-cyan-600 to-amber-500 text-white shadow-xl'
                      : 'bg-fuchsia-50 text-fuchsia-700'
                  }`}
                >
                  <span>مشاهده و ثبت درخواست</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isHovered ? 'translate-x-1' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0l-4-4m4 4l-4 4"
                    />
                  </svg>
                </div>

                <p className="text-xs text-slate-400 mt-4">
                  با کلیک بر روی کارت به سایت رسمی هدایت می‌شوید
                </p>
              </div>

              {/* Bottom accent */}
              <div className="h-1 bg-gradient-to-r from-amber-300 via-fuchsia-300 to-cyan-300" />
            </div>

            {/* Badge */}
            <div
              className={`absolute -top-3 -right-3 text-white text-xs px-3 py-1 rounded-full shadow-lg transition-all duration-500
              bg-gradient-to-r from-rose-500 to-orange-500
              ${isHovered ? 'scale-110 rotate-6' : ''}`}
            >
              رسمی
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}