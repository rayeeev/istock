'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ArrowButton from '@/components/ui/ArrowButton';
import Link from 'next/link';
import Image from 'next/image';

import p1 from '../../public/cleaning.jpg';
import p2 from '../../public/about.jpg';
import p3 from '../../public/dioxel.jpg';

interface ImagesProps {
    locale: string;
    dict: {
        title1: string;
        subtitle1: string;
        link1: string;
        title2: string;
        subtitle2: string;
        link2: string;
        title3: string;
        subtitle3: string;
        link3: string;
        button: string;
    };
}

export default function Images({ locale, dict }: ImagesProps) {
    const images = [
        { src: p1, title: dict.title1, subtitle: dict.subtitle1, link: dict.link1 },
        { src: p2, title: dict.title2, subtitle: dict.subtitle2, link: dict.link2 },
        { src: p3, title: dict.title3, subtitle: dict.subtitle3, link: dict.link3 },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isShortened, setIsShortened] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Initial hero height animation
    useEffect(() => {
        const timer = setTimeout(() => setIsShortened(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    // Progress timer (NO slide changes here)
    const startTimer = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);

        const duration = 5000;
        const tick = 50;
        const step = (tick / duration) * 100;

        intervalRef.current = setInterval(() => {
            setProgress((prev) => {
                const next = prev + step;
                return next >= 100 ? 100 : next;
            });
        }, tick);
    }, []);

    // Start / stop timer based on animation + progress
    useEffect(() => {
        if (!isAnimating && progress < 100) {
            startTimer();
        } else {
            if (intervalRef.current) clearInterval(intervalRef.current);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isAnimating, progress, startTimer]);

    // Advance slide when progress completes (SINGLE SOURCE OF TRUTH)
    useEffect(() => {
        if (progress >= 100 && !isAnimating) {
            setCurrentIndex((curr) => (curr + 1) % images.length);
        }
    }, [progress, isAnimating, images.length]);

    // Reset state on slide change
    useEffect(() => {
        setProgress(0);
        setIsAnimating(true);
    }, [currentIndex]);

    const handleManualChange = (index: number) => {
        if (index === currentIndex) return;
        setCurrentIndex(index);
    };

    const slideVariants = {
        initial: { opacity: 0, scale: 1.1 },
        animate: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1.5, ease: [0.4, 0, 0.2, 1] as const },
        },
        exit: {
            opacity: 0,
            scale: 1.1,
            transition: { duration: 1.5, ease: [0.4, 0, 0.2, 1] as const },
        },
    };

    const textVariants = {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, duration: 0.6 },
        },
        exit: {
            opacity: 0,
            y: 20,
            transition: { duration: 0.5 },
        },
    };

    return (
        <motion.section
            initial={{ height: '100vh' }}
            animate={{ height: isShortened ? '95vh' : '100vh' }}
            transition={{ type: 'spring', stiffness: 70, damping: 20, mass: 1 }}
            className="relative w-full overflow-hidden bg-black"
        >
            <AnimatePresence>
                <motion.div
                    key={currentIndex}
                    className="absolute inset-0"
                    variants={slideVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    onAnimationComplete={(def) => {
                        if (def === 'animate') setIsAnimating(false);
                    }}
                >
                    {/* Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={images[currentIndex].src}
                            alt={images[currentIndex].title}
                            fill
                            priority
                            className="object-cover brightness-[0.7] contrast-[1.1]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
                        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black/70 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 lg:px-32 z-10">
                        <div className="max-w-5xl">
                            <motion.p
                                variants={textVariants}
                                className="text-white text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4 opacity-90"
                            >
                                {images[currentIndex].subtitle}
                            </motion.p>

                            <motion.h1
                                variants={textVariants}
                                className="text-white text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-10 font-barlow"
                            >
                                {images[currentIndex].title}
                            </motion.h1>

                            <motion.div variants={textVariants}>
                                <Link
                                    href={`/${locale}${images[currentIndex].link}`}
                                    className="flex items-center group cursor-pointer w-fit"
                                >
                                    <span className="text-white text-lg font-medium mr-6 tracking-tight transition-colors duration-300 group-hover:text-white/80">
                                        {dict.button}
                                    </span>
                                    <ArrowButton diameter={60} lang={locale} />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Bottom Navigation */}
            <div className="absolute bottom-16 left-0 w-full px-6 md:px-20 lg:px-32 flex items-end gap-6 md:gap-12 z-20">
                {images.map((item, index) => (
                    <div
                        key={index}
                        className="flex-1 flex flex-col justify-end cursor-pointer group py-4"
                        onClick={() => handleManualChange(index)}
                    >
                        <span
                            className={`text-[10px] md:text-xs font-bold tracking-[0.15em] mb-3 uppercase transition-colors ${index === currentIndex
                                ? 'text-white'
                                : 'text-white/50 group-hover:text-white/80'
                                }`}
                        >
                            {item.subtitle}
                        </span>

                        <div className="h-[4px] rounded-[4px] w-full bg-white/20 relative overflow-hidden">
                            <AnimatePresence>
                                {index === currentIndex && (
                                    <motion.div
                                        key="progress-bar"
                                        className="absolute top-0 left-0 h-full bg-[#00A3E0]"
                                        initial={{ opacity: 0, width: '0%' }}
                                        animate={{ opacity: 1, width: `${progress}%` }}
                                        exit={{ opacity: 0 }}
                                        transition={{
                                            width: { duration: 0.05, ease: 'linear' },
                                            opacity: { duration: 0.3 },
                                        }}
                                    />
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                ))}
            </div>
        </motion.section>
    );
}
