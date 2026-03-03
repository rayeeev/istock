"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const ASTANA_TIMEZONE = "Asia/Almaty";
const OPEN_HOUR = 8;
const CLOSE_HOUR = 20;
const UPDATE_INTERVAL_MS = 60_000;

const astanaTimeFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: ASTANA_TIMEZONE,
  hour12: false,
  hour: "2-digit",
  minute: "2-digit",
});

interface OfficeStatusProps {
  slug: string;
  dict: {
    open: string;
    willOpenIn: string;
    hour: string;
    hours: string;
  };
  className?: string;
  textClassName?: string;
  openDotClassName?: string;
  closedDotClassName?: string;
}

interface OfficeState {
  isOpen: boolean;
  hoursUntilOpen: number;
}

function getAstanaHourMinute(now: Date) {
  const parts = astanaTimeFormatter.formatToParts(now);
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? "0");
  return { hour, minute };
}

function getOfficeState(now = new Date()): OfficeState {
  const { hour, minute } = getAstanaHourMinute(now);
  const currentMinutes = hour * 60 + minute;
  const openMinutes = OPEN_HOUR * 60;
  const closeMinutes = CLOSE_HOUR * 60;
  const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

  if (isOpen) {
    return { isOpen: true, hoursUntilOpen: 0 };
  }

  const minutesUntilOpen =
    currentMinutes < openMinutes
      ? openMinutes - currentMinutes
      : 24 * 60 - currentMinutes + openMinutes;

  return {
    isOpen: false,
    hoursUntilOpen: Math.max(1, Math.ceil(minutesUntilOpen / 60)),
  };
}

export default function OfficeStatus({
  slug,
  dict,
  className = "",
  textClassName = "",
  openDotClassName = "bg-emerald-400",
  closedDotClassName = "bg-gray-400",
}: OfficeStatusProps) {
  const [officeState, setOfficeState] = useState<OfficeState>(() => getOfficeState());
  const contactsPath = `/${slug}/contacts`;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setOfficeState(getOfficeState());
    }, UPDATE_INTERVAL_MS);

    return () => {
      window.clearInterval(timer);
    };
  }, []);

  const text = officeState.isOpen
    ? dict.open
    : `${dict.willOpenIn} ${officeState.hoursUntilOpen} ${officeState.hoursUntilOpen === 1 ? dict.hour : dict.hours}`;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window === "undefined") return;

    const currentPath = window.location.pathname;
    if (currentPath === contactsPath || currentPath === `${contactsPath}/`) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <Link href={contactsPath} onClick={handleClick} className={`items-center gap-2 ${className}`}>
      <span
        aria-hidden="true"
        className={`h-2.5 w-2.5 rounded-full ${officeState.isOpen ? openDotClassName : closedDotClassName} ${officeState.isOpen ? "animate-pulse" : ""}`}
      />
      <span className={textClassName}>{text}</span>
    </Link>
  );
}
