import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import ScrollToTop from "./ui/ScrollToTop";
import Logo from "./ui/Logo";

interface FooterProps {
    dict: any;
    lang: string;
}

export default function Footer({ dict, lang }: FooterProps) {
    return (
        <footer className="text-black pt-20 pb-10 border-t border-gray-200">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

                    {/* Column 1: Quick Links */}
                    <div className="md:col-span-3">
                        <h3 className="text-md font-bold uppercase tracking-widest mb-6 text-gray-900">
                            {dict.Footer.quickLinks}
                        </h3>
                        <div className="flex flex-col gap-4 font-pt-sans text-md text-gray-600">
                            <Link href={`/${lang}/about`} className="hover:text-black transition-colors">
                                {dict.Footer.nav.about}
                            </Link>
                            <Link href={`/${lang}/products`} className="hover:text-black transition-colors">
                                {dict.Footer.nav.products}
                            </Link>
                            <Link href={`/${lang}/projects`} className="hover:text-black transition-colors">
                                {dict.Footer.nav.projects}
                            </Link>
                            <Link href={`/${lang}/contacts`} className="hover:text-black transition-colors">
                                {dict.Footer.nav.contacts}
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Site Information (Contact) */}
                    <div className="md:col-span-3">
                        <h3 className="text-md font-bold uppercase tracking-widest mb-6 text-gray-900">
                            {dict.Footer.contactInfo.title}
                        </h3>
                        <div className="flex flex-col gap-4 font-pt-sans text-md text-gray-600">
                            <span>{dict.Footer.contactInfo.address}</span>
                            <a href={`mailto:${dict.Footer.contactInfo.email}`} className="hover:text-black transition-colors">
                                {dict.Footer.contactInfo.email}
                            </a>
                            <a href={`tel:${dict.Footer.contactInfo.phone}`} className="hover:text-black transition-colors">
                                {dict.Footer.contactInfo.phone}
                            </a>
                        </div>
                    </div>

                    {/* Column 3: Spacer / Empty to match wide layout */}
                    <div className="md:col-span-3"></div>

                    {/* Column 4: Social Icons (Right aligned) */}
                    <div className="md:col-span-3 flex justify-start md:justify-end">
                        <div className="grid grid-cols-4 md:grid-cols-2 gap-4 place-content-start">
                            <a href="#" className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-700">
                                <Facebook size={20} strokeWidth={1.5} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-700">
                                <Instagram size={20} strokeWidth={1.5} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-700">
                                <Linkedin size={20} strokeWidth={1.5} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-700">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.665 3.717l-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.785l3.015-14.21c.309-1.239-.473-1.8-1.282-1.451z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Copyright */}
                    <p className="text-xs text-gray-500 font-medium order-1">
                        {dict.Footer.copyright}
                    </p>

                    <Logo className="order-2" lang={lang} />

                    {/* Scroll to Top */}
                    <ScrollToTop className="order-3" />
                </div>
            </div>
        </footer>
    );
}
