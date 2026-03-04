"use client";

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { CheckCircle2, ChevronDown, Send } from 'lucide-react';
import { sendTelegramMessage } from '@/app/actions/sendTelegramMessage';

// Keep the dictionary interface simple
export default function ContactForm({ dict }: { dict: any }) {
    const headerRef = useRef(null);
    const headerInView = useInView(headerRef, { once: true, amount: 0.1 });

    return (
        <section id="contact-form" className="relative w-full py-32 bg-[var(--blue)] overflow-hidden text-white">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-white/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-4xl">
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0 }}
                    animate={headerInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black font-condensed uppercase tracking-tight text-white mb-6">
                        {dict?.form?.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-white/80 font-light font-sans max-w-2xl mx-auto">
                        {dict?.form?.subtitle}
                    </p>
                </motion.div>

                <Suspense fallback={<div className="h-96 flex items-center justify-center"><div className="w-8 h-8 rounded-full border-4 border-white border-t-transparent animate-spin"></div></div>}>
                    <FormContent dict={dict} />
                </Suspense>
            </div>
        </section>
    );
}

function FormContent({ dict }: { dict: any }) {
    const searchParams = useSearchParams();
    const initialInquiry = searchParams.get('inquiry');

    const [formData, setFormData] = useState({
        inquiryType: '',
        website: '',
        name: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (initialInquiry && dict?.form?.inquiryType?.options?.[initialInquiry]) {
            setFormData(prev => ({ ...prev, inquiryType: initialInquiry }));
        }
    }, [initialInquiry, dict]);

    // Handle locale detection (rudimentary fallback)
    const getLocale = () => {
        if (typeof window !== 'undefined') {
            const path = window.location.pathname;
            const match = path.match(/^\/([a-z]{2})\//);
            return match ? match[1] : 'en';
        }
        return 'en';
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        try {
            const payload = {
                ...formData,
                locale: getLocale()
            };

            // If the inquiryType dropdown value is equal to the key (e.g. 'general'), map it to the localized string for Telegram
            const displayType = dict?.form?.inquiryType?.options?.[payload.inquiryType] || payload.inquiryType;
            payload.inquiryType = displayType;

            const res = await sendTelegramMessage(payload);

            if (res.success) {
                setSubmitStatus('success');
                setFormData({
                    inquiryType: '',
                    website: '',
                    name: '',
                    message: ''
                });
            } else {
                setSubmitStatus('error');
                setErrorMessage(res.error || dict?.form?.error);
            }
        } catch (error) {
            setSubmitStatus('error');
            setErrorMessage(dict?.form?.error);
        } finally {
            setIsSubmitting(false);

            // clear success status after 5 seconds
            if (submitStatus !== 'error') {
                setTimeout(() => setSubmitStatus('idle'), 5000);
            }
        }
    };

    const formRef = useRef(null);
    const formInView = useInView(formRef, { once: true, amount: 0.1 });

    return (
        <motion.div
            ref={formRef}
            initial={{ opacity: 0 }}
            animate={formInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-3xl mx-auto"
        >
            <form onSubmit={handleSubmit} className="relative w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                    {/* Inquiry Type */}
                    <div className="flex flex-col gap-3 relative">
                        <label className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 ml-2">
                            {dict?.form?.inquiryType?.label}
                        </label>
                        <div className="relative group">
                            <select
                                name="inquiryType"
                                value={formData.inquiryType}
                                onChange={handleChange}
                                required
                                className="w-full appearance-none bg-transparent border-b-2 border-white/20 text-white px-2 py-3 rounded-none outline-none focus:border-white transition-all duration-300 font-medium text-lg md:text-xl pr-12"
                            >
                                <option value="" disabled className="text-black">{dict?.form?.inquiryType?.placeholder}</option>
                                {dict?.form?.inquiryType?.options && Object.entries(dict.form.inquiryType.options).map(([key, value]) => (
                                    <option key={key} value={key} className="text-black">{value as string}</option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-white/50 group-hover:text-white transition-colors pointer-events-none w-5 h-5" />
                        </div>
                    </div>

                    {/* Name */}
                    <div className="flex flex-col gap-3">
                        <label className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 ml-2">
                            {dict?.form?.name?.label}
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder={dict?.form?.name?.placeholder}
                            className="w-full bg-transparent border-b-2 border-white/20 text-white px-2 py-3 rounded-none outline-none focus:border-white transition-all duration-300 font-medium text-lg md:text-xl placeholder:text-white/30"
                        />
                    </div>
                </div>

                {/* Organization Website */}
                <div className="flex flex-col gap-3 mb-10">
                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 ml-2">
                        {dict?.form?.website?.label} <span className="text-white/40 normal-case opacity-70 tracking-normal text-sm ml-2">(Optional)</span>
                    </label>
                    <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder={dict?.form?.website?.placeholder}
                        className="w-full bg-transparent border-b-2 border-white/20 text-white px-2 py-3 rounded-none outline-none focus:border-white transition-all duration-300 font-medium text-lg md:text-xl placeholder:text-white/30"
                    />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-3 mb-14">
                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 ml-2">
                        {dict?.form?.message?.label}
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder={dict?.form?.message?.placeholder}
                        rows={3}
                        className="w-full bg-transparent border-b-2 border-white/20 text-white px-2 py-3 rounded-none outline-none focus:border-white transition-all duration-300 font-medium text-lg md:text-xl placeholder:text-white/30 resize-y min-h-[100px]"
                    />
                </div>

                {/* Submit Feedback */}
                <AnimatePresence mode="wait">
                    {submitStatus === 'error' && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="mb-8 p-5 bg-red-500/20 border border-red-500/50 text-red-100 rounded-xl text-center font-medium backdrop-blur-sm"
                        >
                            {errorMessage}
                        </motion.div>
                    )}

                    {submitStatus === 'success' && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="mb-8 p-5 bg-emerald-500/20 border border-emerald-500/50 text-emerald-100 rounded-xl flex items-center justify-center gap-3 font-medium backdrop-blur-sm"
                        >
                            <CheckCircle2 className="w-6 h-6" />
                            {dict?.form?.success}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Submit Button */}
                <div className="flex justify-center mt-2">
                    <button
                        type="submit"
                        disabled={isSubmitting || submitStatus === 'success'}
                        className="group relative inline-flex items-center justify-center gap-3 px-12 py-5 bg-white border-3 border-[var(--blue)]/20 text-[var(--blue)] text-lg sm:text-xl font-bold font-condensed uppercase tracking-wider rounded-full overflow-hidden transition-all duration-500 shadow-[0_8px_32px_-8px_rgba(0,163,224,0.5)] hover:shadow-[0_10px_40px_-10px_rgba(0,163,224,0.5)] hover:scale-105 active:scale-95 disabled:opacity-70 disabled:pointer-events-none min-w-[300px]"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-[var(--blue)]/30 border-t-[var(--blue)] rounded-full animate-spin" />
                                    {dict?.form?.submitting}
                                </>
                            ) : submitStatus === 'success' ? (
                                <>
                                    <CheckCircle2 className="w-6 h-6" />
                                    {dict?.form?.success}
                                </>
                            ) : (
                                <>
                                    {dict?.form?.submit}
                                </>
                            )}
                        </span>

                        {!isSubmitting && submitStatus !== 'success' && (
                            <Send
                                className="w-6 h-6 relative z-10 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                                strokeWidth={2.5}
                            />
                        )}

                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                    </button>
                </div>
            </form>
        </motion.div>
    );
}
