import Link from "next/link";
import ScrollToTop from "./ui/ScrollToTop";
import FooterContactLink from "./ui/FooterContactLink";


interface FooterProps {
    dict: any;
    lang: string;
}

export default function Footer({ dict, lang }: FooterProps) {
    return (
        <footer className="text-black pt-20 pb-10 border-t border-gray-200">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-10 md:gap-10 lg:gap-40">

                    {/* Column 1: Quick Links */}
                    <div className="">
                        <h3 className="text-md font-condensed font-bold uppercase tracking-widest mb-6 text-gray-900">
                            {dict.Footer.quickLinks}
                        </h3>
                        <div className="flex flex-col gap-4 font-usual text-md text-gray-600">
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
                    <div className="">
                        <h3 className="text-md font-condensed font-bold uppercase tracking-widest mb-6 text-gray-900">
                            {dict.Footer.contactInfo.title}
                        </h3>
                        <div className="flex flex-col gap-4 font-usual text-md text-gray-600">
                            <span className="md:whitespace-nowrap">{dict.Footer.contactInfo.address}</span>
                            <a href={`mailto:${dict.Footer.contactInfo.email}`} className="hover:text-black transition-colors">
                                {dict.Footer.contactInfo.email}
                            </a>
                            <a href={`tel:${dict.Footer.contactInfo.phone}`} className="hover:text-black transition-colors">
                                {dict.Footer.contactInfo.phone}
                            </a>
                            <FooterContactLink href={`/${lang}/contacts#contact-form`}>
                                {dict.ContactUs.main.linkText}
                            </FooterContactLink>
                        </div>
                    </div>

                    {/* Column 3: Spacer / Empty to match wide layout */}
                    <div className="flex-grow hidden md:block"></div>

                    {/* Column 4: Social Icons (Right aligned) */}
                    <div className="flex justify-start md:justify-end">
                        <div className="grid grid-cols-2 md:grid-cols-1 gap-4 place-content-start">
                            <a href="https://www.linkedin.com/company/istocksolutions/" className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-700">
                                <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                                </svg>
                            </a>
                            <a href="https://t.me/bimenrayev" className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-700">
                                <svg width="24" height="24" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Copyright */}
                    <div className="md:w-1/2 flex justify-center md:justify-start order-1">
                        <p className="text-md text-gray-500 font-medium">
                            {dict.Footer.copyright}
                        </p>
                    </div>



                    {/* Scroll to Top */}
                    <div className="md:w-1/2 flex justify-center md:justify-end order-3">
                        <ScrollToTop />
                    </div>
                </div>
            </div>
        </footer>
    );
}
