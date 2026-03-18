'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function HashScroll() {
    const pathname = usePathname();

    useEffect(() => {
        const hash = window.location.hash;
        if (!hash) return;

        const id = hash.slice(1);

        // Try immediately first, then retry after render
        const scrollToElement = () => {
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
                return true;
            }
            return false;
        };

        if (scrollToElement()) return;

        // Retry after a short delay to wait for page content to render
        const timeout = setTimeout(scrollToElement, 150);
        return () => clearTimeout(timeout);
    }, [pathname]);

    return null;
}
