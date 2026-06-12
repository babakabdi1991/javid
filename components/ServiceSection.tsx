// components/ServicesSection.tsx
'use client';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    id: 1,
    title: 'ترجمه رسمی مدارک',
    description: 'ترجمه انواع مدارک هویتی، تحصیلی و حقوقی با مهر و امضای رسمی قوه قضاییه',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'ترجمه قضایی',
    description: 'ترجمه تخصصی پرونده‌های قضایی، احکام، قراردادها و مکاتبات حقوقی',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'ترجمه تخصصی',
    description: 'ترجمه متون تخصصی پزشکی، مهندسی، مالی و فناوری اطلاعات',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    id: 4,
    title: 'تحویل فوری',
    description: 'خدمات ترجمه اضطراری با بالاترین سرعت و حفظ کیفیت',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: 'from-orange-500 to-red-500',
  },
];

export function ServicesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="خدمات" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" ref={ref}>
          <div className="inline-block px-4 py-1 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-4">
            خدمات ما
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            خدمات ترجمه <span className="text-primary-600">حرفه‌ای</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            ارائه انواع خدمات ترجمه با بالاترین کیفیت و استانداردهای بین‌المللی
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 overflow-hidden ${
                inView ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-lg mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
              <p className="text-slate-500">{service.description}</p>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}