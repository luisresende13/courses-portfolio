'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/programs', label: 'Programs' },
  { href: '/courses', label: 'Course Overlap' },
  { href: '/accomplishments', label: 'Accomplishments' },
  { href: '/roadmap', label: 'Roadmap' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 font-bold text-slate-900 text-lg tracking-tight">
            <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-200 shrink-0">
              <Image src="/profile.jpeg" alt="Luis Resende" width={32} height={32} className="object-cover w-full h-full" />
            </div>
            AI Learning Portfolio
          </Link>
          <div className="flex items-center gap-1">
            {links.map(({ href, label }) => {
              const active = href === '/' ? pathname === '/' : pathname.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    active
                      ? 'bg-slate-100 text-slate-900'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
