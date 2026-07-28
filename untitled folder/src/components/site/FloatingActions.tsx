import { Link } from "@tanstack/react-router";
import { MessageCircle, CalendarClock } from "lucide-react";
import { site } from "@/lib/site";
import { trackEvent } from "@/lib/analytics";

export function FloatingActions() {
  const waUrl = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hello Octapus — I'd like to talk about a project.")}`;
  return (
    <div className="fixed bottom-4 right-4 z-30 flex flex-col gap-3 print:hidden">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Octapus on WhatsApp"
        onClick={() => trackEvent("whatsapp_click")}
        className="inline-flex size-12 items-center justify-center rounded-full bg-foreground text-background shadow-lg hover:opacity-90 transition"
      >
        <MessageCircle className="size-5" />
      </a>
      <Link
        to="/book"
        aria-label="Book a strategy call"
        onClick={() => trackEvent("strategy_call_click", { source: "floating" })}
        className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-lg hover:opacity-90 transition"
      >
        <CalendarClock className="size-4" />
        <span className="hidden sm:inline">Book a call</span>
      </Link>
    </div>
  );
}
