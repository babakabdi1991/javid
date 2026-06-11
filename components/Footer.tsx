// components/Footer.tsx
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <span className="text-xl font-bold">ترجمه رسمی</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              ارائه خدمات ترجمه رسمی با بالاترین کیفیت و دقت، همراه با گارانتی اصالت ترجمه
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">دسترسی سریع</h3>
            <ul className="space-y-2">
              {['خدمات', 'ویژگی‌ها', 'دفتر ترجمه', 'تماس با ما'].map((item) => (
                <li key={item}>
                  <Link href={`#${item}`} className="text-slate-400 hover:text-primary-400 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">ارتباط با ما</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@official-translation.com
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                ۰۲۱-۱۲۳۴۵۶۷۸
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">شبکه‌های اجتماعی</h3>
            <div className="flex gap-3">
              {['telegram', 'instagram', 'linkedin', 'whatsapp'].map((social) => (
                <div key={social} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer">
                  <div className="w-5 h-5 bg-slate-400 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} ترجمه رسمی. تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}