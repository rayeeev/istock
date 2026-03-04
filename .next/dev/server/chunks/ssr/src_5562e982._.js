module.exports = [
"[project]/src/components/SecondLevel/Map.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Map
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const ASTANA_TIMEZONE = "Asia/Almaty";
const OPEN_HOUR = 8;
const CLOSE_HOUR = 20;
const astanaTimeFormatter = new Intl.DateTimeFormat("en-GB", {
    timeZone: ASTANA_TIMEZONE,
    hour12: false,
    hour: "2-digit",
    minute: "2-digit"
});
function getOfficeState() {
    const now = new Date();
    const parts = astanaTimeFormatter.formatToParts(now);
    const hour = Number(parts.find((part)=>part.type === "hour")?.value ?? "0");
    const minute = Number(parts.find((part)=>part.type === "minute")?.value ?? "0");
    const currentMinutes = hour * 60 + minute;
    const openMinutes = OPEN_HOUR * 60;
    const closeMinutes = CLOSE_HOUR * 60;
    const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;
    let hoursUntilOpen = 0;
    if (!isOpen) {
        const minutesUntilOpen = currentMinutes < openMinutes ? openMinutes - currentMinutes : 24 * 60 - currentMinutes + openMinutes;
        hoursUntilOpen = Math.max(1, Math.ceil(minutesUntilOpen / 60));
    }
    return {
        isOpen,
        hoursUntilOpen
    };
}
function Map({ dict }) {
    const [isActive, setIsActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [officeState, setOfficeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>getOfficeState());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setOfficeState(getOfficeState());
        const timer = setInterval(()=>{
            setOfficeState(getOfficeState());
        }, 60000);
        return ()=>clearInterval(timer);
    }, []);
    const { isOpen, hoursUntilOpen } = officeState;
    const scrollToContactForm = ()=>{
        const element = document.getElementById('contact-form');
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };
    let pluralKey = "";
    if (hoursUntilOpen === 1) {
        pluralKey = dict.office.hour;
    } else if (hoursUntilOpen >= 2 && hoursUntilOpen <= 4) {
        pluralKey = dict.office.hours;
    } else {
        pluralKey = dict.office.hoursMany;
    }
    // Build the status text
    const statusText = isOpen ? dict.office.statusOpen : `${dict.office.willOpenIn} ${hoursUntilOpen} ${pluralKey}`.trim();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mx-auto px-2 max-w-full xl:max-w-[95vw] mt-10 mb-20 relative group",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative rounded-[4rem] overflow-hidden h-[80vh] xl:h-[90vh] w-full min-h-[600px]",
            onMouseLeave: ()=>setIsActive(false),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2503.4682367736636!2d71.48866237692603!3d51.13689457173117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424583d06148674d%3A0x62919d850407de2b!2z0YPQuy4g0JrRg9C50YjQuCDQlNC40L3RiyAxNywg0JDRgdGC0LDQvdCwIDAxMDAwMA!5e0!3m2!1sen!2skz!4v1709900000000!5m2!1sen!2skz",
                        width: "100%",
                        height: "100%",
                        style: {
                            border: 0,
                            pointerEvents: isActive ? 'auto' : 'none'
                        },
                        allowFullScreen: true,
                        loading: "lazy",
                        referrerPolicy: "no-referrer-when-downgrade",
                        className: `transition-all duration-700 ${isActive ? 'grayscale-0' : 'grayscale'}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/SecondLevel/Map.tsx",
                        lineNumber: 103,
                        columnNumber: 21
                    }, this),
                    !isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/60 transition-all duration-500 pt-[140px] pb-10 px-5 sm:pt-[160px] sm:px-10 md:pt-[180px] md:px-16 lg:p-24 flex flex-col lg:flex-row justify-start items-start lg:items-center gap-6 sm:gap-8 lg:gap-26 xl:gap-50 overflow-y-auto w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full lg:w-auto lg:max-w-4xl animate-in fade-in slide-in-from-left-8 duration-1000 order-1 flex-shrink-0 lg:shrink",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block text-[10px] sm:text-xs md:text-sm font-condensed uppercase tracking-[0.25em] text-white/70 mb-2 sm:mb-3 md:mb-4 font-medium",
                                        children: dict.subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SecondLevel/Map.tsx",
                                        lineNumber: 120,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-usual text-white leading-tight mb-3 md:mb-4",
                                        children: dict.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SecondLevel/Map.tsx",
                                        lineNumber: 123,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `tel:${dict.number.replace(/\s+/g, '')}`,
                                        className: "block text-lg sm:text-xl md:text-2xl font-condensed uppercase tracking-[0.25em] text-white mb-2 sm:mb-3 md:mb-4 font-semibold hover:text-white/70 transition-colors w-fit",
                                        children: dict.number
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SecondLevel/Map.tsx",
                                        lineNumber: 126,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `mailto:${dict.email}`,
                                        className: "block text-lg sm:text-xl md:text-2xl font-condensed uppercase tracking-[0.25em] text-white mb-5 sm:mb-6 md:mb-8 font-semibold hover:text-white/70 transition-colors w-fit",
                                        children: dict.email
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/SecondLevel/Map.tsx",
                                        lineNumber: 132,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsActive(true),
                                        className: "inline-flex items-center gap-2 sm:gap-3 md:gap-4 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 md:px-8 md:py-4 rounded-full text-white font-condensed uppercase tracking-[0.2em] text-[10px] sm:text-xs md:text-sm hover:bg-white/20 transition-all duration-300",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-1.5 h-1.5 rounded-full bg-white animate-ping"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/SecondLevel/Map.tsx",
                                                lineNumber: 143,
                                                columnNumber: 37
                                            }, this),
                                            dict.mapHint
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/SecondLevel/Map.tsx",
                                        lineNumber: 139,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/SecondLevel/Map.tsx",
                                lineNumber: 119,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-start mb-0 lg:my-0 order-2 w-full lg:w-auto flex-shrink-0 lg:shrink",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full lg:w-[400px] xl:w-[448px] max-w-full lg:max-w-md bg-white/10 backdrop-blur-md border border-white/20 p-5 sm:p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] text-white animate-in fade-in slide-in-from-top-4 duration-700",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-condensed font-bold text-[14px] sm:text-base md:text-xl uppercase mb-2 md:mb-3 tracking-wider flex items-center gap-2 md:gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-1.5 h-1.5 md:w-2 md:h-2 rounded-full animate-pulse flex-shrink-0 ${isOpen ? "bg-emerald-400" : "bg-orange-400"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SecondLevel/Map.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 41
                                                }, this),
                                                dict.office.title,
                                                " ",
                                                statusText
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SecondLevel/Map.tsx",
                                            lineNumber: 151,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-usual text-[13px] sm:text-sm md:text-lg text-white/90 leading-relaxed mb-1 md:mb-2",
                                            children: dict.office.address
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SecondLevel/Map.tsx",
                                            lineNumber: 155,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-usual text-[11px] sm:text-xs md:text-sm text-white/60 mb-3 sm:mb-4",
                                            children: dict.office.workingHours
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SecondLevel/Map.tsx",
                                            lineNumber: 158,
                                            columnNumber: 37
                                        }, this),
                                        !isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-t border-white/10 pt-4 sm:pt-6 mt-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: scrollToContactForm,
                                                className: "w-full bg-white text-black hover:bg-white/90 active:scale-[0.98] transition-all duration-300 font-condensed font-bold uppercase tracking-widest py-3 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl shadow-xl flex items-center justify-center gap-2 sm:gap-3 group text-xs sm:text-sm",
                                                children: [
                                                    dict.office.leaveRequestBtn,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        viewBox: "0 0 24 24",
                                                        width: "18",
                                                        height: "18",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        strokeWidth: "2.5",
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        className: "translate-x-0 sm:w-5 sm:h-5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M12 5v14m-7-7l7 7 7-7"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/SecondLevel/Map.tsx",
                                                            lineNumber: 179,
                                                            columnNumber: 53
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/SecondLevel/Map.tsx",
                                                        lineNumber: 168,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/SecondLevel/Map.tsx",
                                                lineNumber: 163,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SecondLevel/Map.tsx",
                                            lineNumber: 162,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SecondLevel/Map.tsx",
                                    lineNumber: 150,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SecondLevel/Map.tsx",
                                lineNumber: 149,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SecondLevel/Map.tsx",
                        lineNumber: 116,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SecondLevel/Map.tsx",
                lineNumber: 102,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/SecondLevel/Map.tsx",
            lineNumber: 98,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SecondLevel/Map.tsx",
        lineNumber: 97,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/actions/data:bcb972 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendTelegramMessage",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"40d9748dbf2c115eda91d2becc6fab120feeb29722":"sendTelegramMessage"},"src/app/actions/sendTelegramMessage.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40d9748dbf2c115eda91d2becc6fab120feeb29722", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "sendTelegramMessage");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VuZFRlbGVncmFtTWVzc2FnZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDb250YWN0Rm9ybURhdGEge1xuICAgIGlucXVpcnlUeXBlOiBzdHJpbmc7XG4gICAgd2Vic2l0ZTogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBtZXNzYWdlOiBzdHJpbmc7XG4gICAgbG9jYWxlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZW5kVGVsZWdyYW1NZXNzYWdlKGRhdGE6IENvbnRhY3RGb3JtRGF0YSkge1xuICAgIGNvbnN0IGJvdFRva2VuID0gcHJvY2Vzcy5lbnYuVEVMRUdSQU1fQk9UX1RPS0VOO1xuICAgIGNvbnN0IGNoYXRJZCA9IHByb2Nlc3MuZW52LlRFTEVHUkFNX0NIQVRfSUQ7XG5cbiAgICBpZiAoIWJvdFRva2VuIHx8ICFjaGF0SWQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1pc3NpbmcgVGVsZWdyYW0gYm90IGVudmlyb25tZW50IHZhcmlhYmxlcy5cIik7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJTZXJ2ZXIgY29uZmlndXJhdGlvbiBlcnJvci5cIiB9O1xuICAgIH1cblxuICAgIGNvbnN0IHsgaW5xdWlyeVR5cGUsIHdlYnNpdGUsIG5hbWUsIG1lc3NhZ2UsIGxvY2FsZSB9ID0gZGF0YTtcblxuICAgIGNvbnN0IHRleHQgPSBgXG7wn5OpIDxiPk5ldyBDb250YWN0IEZvcm0gU3VibWlzc2lvbjwvYj5cbiAgICBcbjxiPlR5cGU6PC9iPiAke2lucXVpcnlUeXBlfVxuPGI+TmFtZTo8L2I+ICR7bmFtZX1cbjxiPldlYnNpdGU6PC9iPiAke3dlYnNpdGUgPyB3ZWJzaXRlIDogJ04vQSd9XG48Yj5Mb2NhbGU6PC9iPiAke2xvY2FsZX1cblxuPGI+TWVzc2FnZTo8L2I+XG4ke21lc3NhZ2V9XG4gICAgYDtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLnRlbGVncmFtLm9yZy9ib3Qke2JvdFRva2VufS9zZW5kTWVzc2FnZWAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGNoYXRfaWQ6IGNoYXRJZCxcbiAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgICAgICAgICAgIHBhcnNlX21vZGU6ICdIVE1MJyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vayB8fCAhcmVzdWx0Lm9rKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVGVsZWdyYW0gQVBJIEVycm9yOlwiLCByZXN1bHQpO1xuICAgICAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiByZXN1bHQuZGVzY3JpcHRpb24gfHwgXCJGYWlsZWQgdG8gc2VuZCBtZXNzYWdlLlwiIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH07XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHNlbmRpbmcgVGVsZWdyYW0gbWVzc2FnZTpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IFwiRmFpbGVkIHRvIHNlbmQgbWVzc2FnZS5cIiB9O1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOFNBVXNCLGdNQUFBIn0=
}),
"[project]/src/components/SecondLevel/ContactForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-ssr] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$bcb972__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/actions/data:bcb972 [app-ssr] (ecmascript) <text/javascript>");
"use client";
;
;
;
;
;
;
function ContactForm({ dict }) {
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headerInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(headerRef, {
        once: true,
        amount: 0.1
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact-form",
        className: "relative w-full py-32 bg-[var(--blue)] overflow-hidden text-white",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 right-0 w-[1000px] h-[1000px] bg-white/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"
            }, void 0, false, {
                fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 md:px-8 relative z-10 max-w-4xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        ref: headerRef,
                        initial: {
                            opacity: 0
                        },
                        animate: headerInView ? {
                            opacity: 1
                        } : {
                            opacity: 0
                        },
                        transition: {
                            duration: 0.5
                        },
                        className: "text-center mb-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-5xl md:text-6xl lg:text-7xl font-black font-condensed uppercase tracking-tight text-white mb-6",
                                children: dict?.form?.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                                lineNumber: 27,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl md:text-2xl text-white/80 font-light font-sans max-w-2xl mx-auto",
                                children: dict?.form?.subtitle
                            }, void 0, false, {
                                fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                                lineNumber: 30,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                        lineNumber: 20,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-96 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-full border-4 border-white border-t-transparent animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                                lineNumber: 35,
                                columnNumber: 92
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                            lineNumber: 35,
                            columnNumber: 37
                        }, void 0),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(FormContent, {
                            dict: dict
                        }, void 0, false, {
                            fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                            lineNumber: 36,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                        lineNumber: 35,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
}
function FormContent({ dict }) {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const initialInquiry = searchParams.get('inquiry');
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        inquiryType: '',
        website: '',
        name: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [submitStatus, setSubmitStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (initialInquiry && dict?.form?.inquiryType?.options?.[initialInquiry]) {
            setFormData((prev)=>({
                    ...prev,
                    inquiryType: initialInquiry
                }));
        }
    }, [
        initialInquiry,
        dict
    ]);
    // Handle locale detection (rudimentary fallback)
    const getLocale = ()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return 'en';
    };
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
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
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2f$data$3a$bcb972__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["sendTelegramMessage"])(payload);
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
        } finally{
            setIsSubmitting(false);
            // clear success status after 5 seconds
            if (submitStatus !== 'error') {
                setTimeout(()=>setSubmitStatus('idle'), 5000);
            }
        }
    };
    const formRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const formInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useInView"])(formRef, {
        once: true,
        amount: 0.1
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: formRef,
        initial: {
            opacity: 0
        },
        animate: formInView ? {
            opacity: 1
        } : {
            opacity: 0
        },
        transition: {
            duration: 0.5
        },
        className: "w-full max-w-3xl mx-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "relative w-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-10 mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-bold uppercase tracking-[0.2em] text-white/70 ml-2",
                                    children: dict?.form?.inquiryType?.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                                    lineNumber: 137,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            name: "inquiryType",
                                            value: formData.inquiryType,
                                            onChange: handleChange,
                                            required: true,
                                            className: "w-full appearance-none bg-transparent border-b-2 border-white/20 text-white px-2 py-3 rounded-none outline-none focus:border-white transition-all duration-300 font-medium text-lg md:text-xl pr-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    disabled: true,
                                                    className: "text-black",
                                                    children: dict?.form?.inquiryType?.placeholder
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 33
                                                }, this),
                                                dict?.form?.inquiryType?.options && Object.entries(dict.form.inquiryType.options).map(([key, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: key,
                                                        className: "text-black",
                                                        children: value
                                                    }, key, false, {
                                                        fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                                                        lineNumber: 150,
                                                        columnNumber: 37
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                                            lineNumber: 141,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: "absolute right-2 top-1/2 -translate-y-1/2 text-white/50 group-hover:text-white transition-colors pointer-events-none w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                                            lineNumber: 153,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                                    lineNumber: 140,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                            lineNumber: 136,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "text-xs font-bold uppercase tracking-[0.2em] text-white/70 ml-2",
                                    children: dict?.form?.name?.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                                    lineNumber: 159,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    name: "name",
                                    value: formData.name,
                                    onChange: handleChange,
                                    required: true,
                                    placeholder: dict?.form?.name?.placeholder,
                                    className: "w-full bg-transparent border-b-2 border-white/20 text-white px-2 py-3 rounded-none outline-none focus:border-white transition-all duration-300 font-medium text-lg md:text-xl placeholder:text-white/30"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                                    lineNumber: 162,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                            lineNumber: 158,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                    lineNumber: 134,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3 mb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "text-xs font-bold uppercase tracking-[0.2em] text-white/70 ml-2",
                            children: [
                                dict?.form?.website?.label,
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white/40 normal-case opacity-70 tracking-normal text-sm ml-2",
                                    children: "(Optional)"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                                    lineNumber: 177,
                                    columnNumber: 54
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                            lineNumber: 176,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "url",
                            name: "website",
                            value: formData.website,
                            onChange: handleChange,
                            placeholder: dict?.form?.website?.placeholder,
                            className: "w-full bg-transparent border-b-2 border-white/20 text-white px-2 py-3 rounded-none outline-none focus:border-white transition-all duration-300 font-medium text-lg md:text-xl placeholder:text-white/30"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                            lineNumber: 179,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                    lineNumber: 175,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3 mb-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "text-xs font-bold uppercase tracking-[0.2em] text-white/70 ml-2",
                            children: dict?.form?.message?.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                            lineNumber: 191,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                            name: "message",
                            value: formData.message,
                            onChange: handleChange,
                            required: true,
                            placeholder: dict?.form?.message?.placeholder,
                            rows: 3,
                            className: "w-full bg-transparent border-b-2 border-white/20 text-white px-2 py-3 rounded-none outline-none focus:border-white transition-all duration-300 font-medium text-lg md:text-xl placeholder:text-white/30 resize-y min-h-[100px]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                            lineNumber: 194,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                    lineNumber: 190,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    children: [
                        submitStatus === 'error' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: -10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -10
                            },
                            className: "mb-8 p-5 bg-red-500/20 border border-red-500/50 text-red-100 rounded-xl text-center font-medium backdrop-blur-sm",
                            children: errorMessage
                        }, void 0, false, {
                            fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                            lineNumber: 208,
                            columnNumber: 25
                        }, this),
                        submitStatus === 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: -10
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -10
                            },
                            className: "mb-8 p-5 bg-emerald-500/20 border border-emerald-500/50 text-emerald-100 rounded-xl flex items-center justify-center gap-3 font-medium backdrop-blur-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    className: "w-6 h-6"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                                    lineNumber: 225,
                                    columnNumber: 29
                                }, this),
                                dict?.form?.success
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                            lineNumber: 219,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                    lineNumber: 206,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center mt-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: isSubmitting || submitStatus === 'success',
                        className: "group relative inline-flex items-center justify-center gap-3 px-12 py-5 bg-white border-3 border-[var(--blue)]/20 text-[var(--blue)] text-lg sm:text-xl font-bold font-condensed uppercase tracking-wider rounded-full overflow-hidden transition-all duration-500 shadow-[0_8px_32px_-8px_rgba(0,163,224,0.5)] hover:shadow-[0_10px_40px_-10px_rgba(0,163,224,0.5)] hover:scale-105 active:scale-95 disabled:opacity-70 disabled:pointer-events-none min-w-[300px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative z-10 flex items-center gap-2",
                                children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-5 h-5 border-2 border-[var(--blue)]/30 border-t-[var(--blue)] rounded-full animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                                            lineNumber: 241,
                                            columnNumber: 37
                                        }, this),
                                        dict?.form?.submitting
                                    ]
                                }, void 0, true) : submitStatus === 'success' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                            className: "w-6 h-6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                                            lineNumber: 246,
                                            columnNumber: 37
                                        }, this),
                                        dict?.form?.success
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: dict?.form?.submit
                                }, void 0, false)
                            }, void 0, false, {
                                fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                                lineNumber: 238,
                                columnNumber: 25
                            }, this),
                            !isSubmitting && submitStatus !== 'success' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                className: "w-6 h-6 relative z-10 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1",
                                strokeWidth: 2.5
                            }, void 0, false, {
                                fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                                lineNumber: 257,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
                            }, void 0, false, {
                                fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                                lineNumber: 264,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                        lineNumber: 233,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
                    lineNumber: 232,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
            lineNumber: 133,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/SecondLevel/ContactForm.tsx",
        lineNumber: 126,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=src_5562e982._.js.map