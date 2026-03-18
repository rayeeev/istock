'use client';

import { useEffect } from 'react';

export default function HashScroll() {
    useEffect(() => {
        let pendingHash = '';
        let cleanupTimer: ReturnType<typeof setTimeout>;

        const scrollToHash = () => {
            if (!pendingHash) return;
            const el = document.getElementById(pendingHash);
            if (!el) return;

            document.documentElement.style.scrollBehavior = '';
            el.scrollIntoView({ behavior: 'smooth' });
            pendingHash = '';
            clearTimeout(cleanupTimer);
        };

        const handleClick = (e: MouseEvent) => {
            const link = (e.target as Element).closest('a');
            if (!link) return;

            const href = link.getAttribute('href');
            if (!href || !href.includes('#')) return;

            const hash = href.split('#')[1];
            if (!hash) return;

            pendingHash = hash;

            // Make Next.js scroll-to-top instant (not smooth) so it
            // doesn't fight our subsequent smooth scroll to the hash
            document.documentElement.style.scrollBehavior = 'auto';

            // Same-page: element already exists, scroll next frame
            requestAnimationFrame(scrollToHash);

            // Safety: restore smooth behavior if element never appears
            clearTimeout(cleanupTimer);
            cleanupTimer = setTimeout(() => {
                document.documentElement.style.scrollBehavior = '';
                pendingHash = '';
            }, 5000);
        };

        // Cross-page: MutationObserver fires when new page DOM renders
        const observer = new MutationObserver(scrollToHash);
        observer.observe(document.body, { childList: true, subtree: true });

        // Capture phase so we run before Next.js handles the click
        document.addEventListener('click', handleClick, true);

        // Direct URL visit with hash
        if (window.location.hash) {
            pendingHash = window.location.hash.slice(1);
            requestAnimationFrame(scrollToHash);
        }

        return () => {
            observer.disconnect();
            document.removeEventListener('click', handleClick, true);
            clearTimeout(cleanupTimer);
        };
    }, []);

    return null;
}
