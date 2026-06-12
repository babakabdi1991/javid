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
                ۰۲۱-۲۲۹۲۱۲۲۳-۶
              </li>
            </ul>
          </div>
          <div>
          <div className="flex gap-3">
            {/* Telegram */}
            <a 
              href="https://startransonline.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer"
            >
              <svg 
                className="w-5 h-5 text-slate-400 hover:text-white transition-colors"
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.13-.07-.19-.07-.05-.18-.03-.26-.02-.11.01-1.88 1.19-5.31 3.51-.5.35-.96.52-1.37.51-.45-.01-1.32-.26-1.96-.47-.78-.26-1.4-.4-1.35-.85.03-.23.35-.48.96-.73 3.76-1.64 6.27-2.72 7.53-3.25 3.59-1.51 4.33-1.77 4.82-1.78.11 0 .35.03.51.16.13.11.17.26.18.41-.01.07-.01.14 0 .21z"/>
              </svg>
            </a>

          {/* WhatsApp */}
          <a 
            href="https://startransonline.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer"
          >
            <svg 
              className="w-5 h-5 text-slate-400 hover:text-white transition-colors"
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-5.45-4.45-9.91-9.91-9.91zm0 18.23c-1.5 0-2.97-.4-4.26-1.16l-.3-.18-3.12.82.84-3.04-.2-.31c-.81-1.3-1.24-2.8-1.24-4.34 0-4.55 3.7-8.25 8.25-8.25s8.25 3.7 8.25 8.25-3.7 8.25-8.25 8.25zm4.52-6.12c-.25-.12-1.47-.73-1.7-.81-.23-.08-.39-.12-.56.12-.17.24-.65.81-.8.97-.15.17-.3.19-.55.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.44s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.35-.77-1.85c-.2-.48-.41-.41-.56-.42h-.48c-.17 0-.44.06-.67.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.07-.11-.23-.17-.48-.29z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a 
            href="https://startransonline.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer"
          >
            <svg 
              className="w-5 h-5 text-slate-400 hover:text-white transition-colors"
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428-.254.66-.598 1.216-1.153 1.772-.5.509-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465-.66-.254-1.216-.598-1.772-1.153-.509-.5-.902-1.105-1.153-1.772-.247-.637-.415-1.363-.465-2.428-.047-1.066-.06-1.405-.06-4.122 0-2.717.01-3.056.06-4.122.05-1.065.218-1.79.465-2.428.254-.66.598-1.216 1.153-1.772.5-.509 1.105-.902 1.772-1.153.637-.247 1.363-.415 2.428-.465C8.944 2.01 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z"/>
            </svg>
          </a>
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