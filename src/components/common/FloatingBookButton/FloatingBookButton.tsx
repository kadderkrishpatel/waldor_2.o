import Link from "next/link";
import { FiCalendar } from "react-icons/fi";

const BOOKING_URL = "https://waldorclinic.eu.zenoti.com/webstoreNew/services";

export default function FloatingBookButton() {
  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-5 sm:right-5">
      <span className="absolute inset-0 rounded-full bg-[#C5A375]/60 animate-book-ring" />

      <Link
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book Now"
        className="animate-book-pulse relative flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-[#1F2422]/70 font-hanken text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-[#1F2422] sm:h-auto sm:w-auto sm:gap-2 sm:px-6 sm:py-3"
      >
        <FiCalendar size={18} className="sm:hidden" />
        <span className="hidden sm:inline">Book Now</span>
      </Link>
    </div>
  );
}
