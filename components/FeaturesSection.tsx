'use client';

const features = [
  {
    title: 'تضمین کیفیت',
    description: 'بازبینی سه مرحله‌ای ترجمه‌ها توسط ویراستاران حرفه‌ای',
    color: 'indigo',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: 'محرمانگی کامل',
    description: 'حفظ کامل محرمانگی اطلاعات و مدارک مشتریان',
    color: 'emerald',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
  {
    title: 'تحویل آنلاین',
    description: 'دریافت فایل ترجمه شده در کمترین زمان ممکن',
    color: 'cyan',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
  },
  {
    title: 'پشتیبانی ۲۴/۷',
    description: 'پشتیبانی شبانه‌روزی برای پاسخگویی به سوالات شما',
    color: 'violet',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
];

const colorClasses = {
  indigo: {
    icon: 'bg-indigo-100 text-indigo-600',
    glow: 'group-hover:shadow-indigo-200',
  },
  emerald: {
    icon: 'bg-emerald-100 text-emerald-600',
    glow: 'group-hover:shadow-emerald-200',
  },
  cyan: {
    icon: 'bg-cyan-100 text-cyan-600',
    glow: 'group-hover:shadow-cyan-200',
  },
  violet: {
    icon: 'bg-violet-100 text-violet-600',
    glow: 'group-hover:shadow-violet-200',
  },
};

export function FeaturesSection() {
  return (
    <section
      id="ویژگی‌ها"
      className="relative py-28 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white"
    >
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-600 px-4 py-2 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500" />
            مزایای همکاری با ما
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4 flex flex-wrap justify-center items-center gap-2">
  <span>چرا</span>
  <span className="text-indigo-600 bg-indigo-50 px-4 py-1 rounded-2xl">
    استار ترانس
  </span>
  <span>را انتخاب کنید؟</span>
</h2>

          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            ارائه خدمات ترجمه رسمی با دقت، سرعت و استانداردهای حرفه‌ای
            برای افراد، شرکت‌ها و سازمان‌ها.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const colors =
              colorClasses[feature.color as keyof typeof colorClasses];

            return (
              <div
                key={feature.title}
                className={`
                  group
                  relative
                  rounded-3xl
                  bg-white
                  border
                  border-slate-100
                  p-8
                  text-center
                  shadow-sm
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-2xl
                  ${colors.glow}
                `}
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Icon */}
                <div
                  className={`
                    w-16
                    h-16
                    mx-auto
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300
                    ${colors.icon}
                  `}
                >
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-slate-500 leading-relaxed">
                  {feature.description}
                </p>

                {/* Accent line */}
                <div className="mt-6 w-12 h-1 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}