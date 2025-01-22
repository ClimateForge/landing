"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ButtonCustom from "./ui/button-custom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="flex items-center justify-center h-[102px] bg-[#F9F9FF]">
            <nav
                style={{
                    background: "rgba(255, 255, 255, 0.8)",
                    boxShadow: "1px 1px 8px rgba(0, 0, 0, 0.2)",
                    backdropFilter: "blur(16px)",
                }}
                className="fixed z-50 flex w-[100%] items-center justify-between max-w-[1160px] h-[102px] md:h-[69px] rounded-none md:rounded-full pl-[32px] pr-[16px] mx-4"
            >
                {/* Logo */}
                <Link
                    title="Home"
                    href="/"
                    className="flex flex-row items-center"
                >
                    <Image
                        className="w-[32px] sm:w-[36px] md:w-[42px] lg:w-[48px] h-auto pointer-events-none sm:pointer-events-auto"
                        src="/logo.png"
                        alt="ClimateForge Logo"
                        title="ClimateForge Logo"
                        width={55}
                        height={55}
                        priority
                    />
                    <p className="pointer-events-none sm:pointer-events-auto text-lg sm:text-lg md:text-xl lg:text-2xl pl-1">
                        ClimateForge
                    </p>
                </Link>

                {/* Hamburger Button */}
                <button
                    className="block md:hidden p-2"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Toggle Menu"
                >
                    <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex md:gap-4 lg:gap-6">
                    <Link title="About" href="/" className="">
                        <p className="font-semibold text-sm lg:text-base text-nowrap">Product</p>
                    </Link>
                    <Link title="Careers" href="/about">
                        <p className="font-semibold text-sm lg:text-base">Why Join</p>
                    </Link>
                    <Link title="About" href="/#pricing" className="">
                        <p className="font-semibold text-sm lg:text-base text-nowrap">Pricing</p>
                    </Link>
                    <Link title="About" href="/careers" className="">
                        <p className="font-semibold text-sm lg:text-base text-nowrap">Company</p>
                    </Link>
                </div>

                <div className="hidden md:flex md:gap-4 lg:gap-6">
                    <ButtonCustom
                        variant="outline"
                        onClick={() =>
                            window.open(
                                "https://climateforge.vercel.app/",
                                "_blank",
                                "noopener,noreferrer"
                            )
                        }
                    >
                        Sign In
                    </ButtonCustom>
                    <ButtonCustom
                        onClick={() =>
                            window.open(
                                "https://calendly.com/giovanni-climateforge-qttf",
                                "_blank",
                                "noopener,noreferrer"
                            )
                        }
                    >
                        Book a Demo
                    </ButtonCustom>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="absolute top-[69px] left-0 w-full bg-white shadow-lg p-4 rounded-b-lg md:hidden">
                        <div className="flex flex-col gap-4">
                            <Link title="About" href="/about" onClick={() => setMenuOpen(false)}>
                                <p className="font-semibold text-sm text-nowrap">Product</p>
                            </Link>
                            <Link title="Careers" href="/careers" onClick={() => setMenuOpen(false)}>
                                <p className="font-semibold text-sm">Why Join</p>
                            </Link>
                            <Link title="About" href="/about" onClick={() => setMenuOpen(false)}>
                                <p className="font-semibold text-sm text-nowrap">Pricing</p>
                            </Link>
                            <Link title="About" href="/about" onClick={() => setMenuOpen(false)}>
                                <p className="font-semibold text-sm text-nowrap">Company</p>
                            </Link>
                            <ButtonCustom
                                variant="outline"
                                onClick={() => {
                                    setMenuOpen(false);
                                    window.open(
                                        "https://climateforge.vercel.app/",
                                        "_blank",
                                        "noopener,noreferrer"
                                    );
                                }}
                            >
                                Sign In
                            </ButtonCustom>
                            <ButtonCustom
                                onClick={() => {
                                    setMenuOpen(false);
                                    window.open(
                                        "https://calendly.com/giovanni-climateforge-qttf",
                                        "_blank",
                                        "noopener,noreferrer"
                                    );
                                }}
                            >
                                Book a Demo
                            </ButtonCustom>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
