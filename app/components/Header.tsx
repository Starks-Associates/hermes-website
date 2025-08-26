"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = () => {
    const pathname = usePathname();
    const [openNav, setOpenNav] = useState(false);

    const navItems = [
        { href: "/", label: "HOME" },
        { href: "/services", label: "SERVICES" },
        { href: "/process", label: "PROCESS" },
        { href: "/about-us", label: "ABOUT US" },
        { href: "/contact", label: "CONTACT" },
    ];

    return (
        <header className="max-w-7xl mx-auto px-6 lg:px-0">
            <div className="flex flex-col h-24 md:h-32 justify-center">
                <div className="flex items-center justify-between">
                    <div>
                        <Link href="/">
                            <img src="/images/logo_black.svg" alt="Hermes Logo" />
                        </Link>
                    </div>
                    <div className="block md:hidden">
                        <button onClick={() => setOpenNav(!openNav)}>
                            <svg width="32" height="14" viewBox="0 0 32 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M32 2H0V0H32V2Z" fill="#303030" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M32 8H0V6H32V8Z" fill="#303030" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M32 14H0V12H32V14Z" fill="#303030" />
                            </svg>
                        </button>
                    </div>
                    <nav className="hidden md:block">
                        <ul className="flex items-center space-x-10">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <li key={item.href} className={`${isActive ? "underline font-bold" : "hover:underline"}`}>
                                        <Link href={item.href}>{item.label}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
            {openNav && (
                <div className="bg-white md:hidden pb-8">
                    <ul className="flex flex-col space-y-4">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <li key={item.href} className={`${isActive ? "underline font-bold" : "hover:underline"}`}>
                                    <Link href={item.href}>{item.label}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
