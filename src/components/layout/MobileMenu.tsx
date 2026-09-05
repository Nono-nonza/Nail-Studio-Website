"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NavLink } from "@/data/types";
import { cn } from "@/lib/utils";

export function MobileMenu({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-[1100px]:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-10 w-10 items-center justify-center rounded-full text-brand-brown hover:bg-brand-brown/5"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <div
        className={cn(
          "absolute inset-x-0 top-full z-40 origin-top border-t border-border-subtle bg-surface px-5 py-6 shadow-lg transition-all duration-200",
          open ? "scale-y-100 opacity-100" : "pointer-events-none scale-y-95 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-brand-brown hover:bg-brand-cream"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
