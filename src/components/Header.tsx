'use client';

import Link from 'next/link';

const navItems = [
  { label: 'Women', href: '/catalogue/women' },
  { label: 'Men', href: '/catalogue/men' },
  { label: 'Children', href: '/catalogue/children' },
  { label: 'Gifts', href: '/catalogue/gifts' },
  { label: 'Trench', href: '/catalogue/trench' },
  { label: 'Bags', href: '/catalogue/bags' },
  { label: 'Stories', href: '/catalogue/stories' },
];

export default function Header() {
  return (
    <header className="w-full py-6 border-b border-gray-200">
      <nav className="flex justify-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-sm font-medium text-primary hover:underline hover:opacity-80 transition"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
