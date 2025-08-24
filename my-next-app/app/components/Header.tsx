'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();

    const navItems = [
        { href: '/', label: 'HOME' },
        { href: '/services', label: 'SERVICES' },
        { href: '/process', label: 'PROCESS' },
        { href: '/about-us', label: 'ABOUT US' },
        { href: '/contact', label: 'CONTACT' },
    ];

    return (
        <header className="max-w-7xl mx-auto">
            <div className="flex flex-col h-32 justify-center">
                <div className="flex items-center justify-between">
                    <div>
                        <img src="/images/logo_black.svg" alt="Hermes Logo" />
                    </div>
                    <nav>
                        <ul className="flex items-center space-x-10">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <li key={item.href} className={`${isActive ? 'underline font-bold' : 'hover:underline'}`}>
                                        <Link href={item.href}>
                                            {item.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
