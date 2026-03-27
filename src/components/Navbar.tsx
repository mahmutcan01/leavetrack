"use client";

import { useState } from "react";
import { CalendarDays, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="inline-flex items-center gap-2 text-zinc-900">
          <CalendarDays className="size-4" />
          <span className="text-base font-semibold">LeaveTrack</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm">
            Giriş Yap
          </Button>
          <Button size="sm">Ücretsiz Dene</Button>
        </div>

        <Button
          variant="ghost"
          size="icon-sm"
          className="md:hidden"
          aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-black/10 bg-white transition-all duration-200 md:hidden",
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="space-y-1 px-4 py-3 sm:px-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-2 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            <Button variant="ghost" onClick={() => setIsOpen(false)}>
              Giriş Yap
            </Button>
            <Button onClick={() => setIsOpen(false)}>Ücretsiz Dene</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
