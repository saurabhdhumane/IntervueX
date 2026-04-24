import { Link } from 'react-router-dom';
import { Mail, ExternalLink } from 'lucide-react';
const footerLinks = {
  Product: [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Screenshots', href: '#screenshots' },
  ],
  Support: [
    { label: 'Help Center', href: 'mailto:hello@nopelt.com' },
    { label: 'Contact Us', href: 'mailto:hello@nopelt.com' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy', isRoute: true },
    { label: 'Terms & Conditions', href: '/terms', isRoute: true },
    { label: 'Delete Account Data', href: '/delete-account', isRoute: true },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Main footer content */}
        <div className="pt-16 pb-12 flex flex-col md:flex-row justify-between gap-12">
          {/* Brand */}
          <div className="max-w-xs">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center shadow-md shadow-indigo-100">
                <span className="text-white font-black text-sm font-display">IX</span>
              </div>
              <span className="text-lg font-black bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent font-display tracking-tight">
                IntervueX
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              The premier interview management suite for high-performance candidates. Designed
              for precision, speed, and success.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {[
                // { Icon: Twitter, href: '#' },
                // { Icon: Linkedin, href: '#' },
                { Icon: ExternalLink, href: '#' },
                { Icon: Mail, href: 'mailto:hello@nopelt.com' },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 lg:gap-20">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h4 className="font-display font-bold text-slate-900 text-sm mb-5">{section}</h4>
                <ul className="space-y-3.5">
                  {links.map(({ label, href, isRoute }) => (
                    <li key={label}>
                      {isRoute ? (
                        <Link
                          to={href}
                          className="text-sm text-slate-500 hover:text-indigo-600 transition-colors font-medium"
                        >
                          {label}
                        </Link>
                      ) : (
                        <a
                          href={href}
                          className="text-sm text-slate-500 hover:text-indigo-600 transition-colors font-medium"
                        >
                          {label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-400 font-medium">
            © 2026 IntervueX by Nopelt. All rights reserved.
          </p>
          <a
            href="mailto:hello@nopelt.com"
            className="text-xs text-slate-400 hover:text-indigo-600 font-medium transition-colors"
          >
            hello@nopelt.com
          </a>
        </div>
      </div>
    </footer>
  );
}
