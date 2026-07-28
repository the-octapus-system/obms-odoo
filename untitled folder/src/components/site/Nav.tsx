import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Wordmark } from "./Wordmark";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";


const nav = [
  { to: "/products", label: "Products" },
  { to: "/services", label: "Services" },
  { to: "/ois", label: "OIS" },
  { to: "/industries", label: "Industries" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b hairline bg-background/80 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Wordmark />
        <nav aria-label="Primary" className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" className="rounded-full px-5">
            <Link to="/book">Book a Strategy Call</Link>
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex size-11 items-center justify-center rounded-md text-foreground"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      <div className={cn("md:hidden border-t hairline", open ? "block" : "hidden")}>
        <nav aria-label="Mobile" className="container-page py-4 flex flex-col gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="py-3 text-base text-foreground"
            >
              {n.label}
            </Link>
          ))}
          <div className="mt-3 flex items-center gap-2">
            <ThemeToggle />
            <Button asChild className="flex-1 rounded-full">
              <Link to="/book" onClick={() => setOpen(false)}>Book a Strategy Call</Link>
            </Button>
          </div>

        </nav>
      </div>
    </header>
  );
}
