"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { FAQGroup } from "@/data/faq";
import { cn } from "@/lib/utils";

export function FAQList({ groups }: { groups: FAQGroup[] }) {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div className="mx-auto max-w-3xl space-y-12">
      {groups.map((group) => (
        <div key={group.title}>
          <h2 className="font-display text-xl font-semibold text-brand-brown sm:text-2xl">
            {group.title}
          </h2>

          <div className="mt-5 divide-y divide-border-subtle overflow-hidden rounded-2xl bg-surface shadow-sm shadow-brand-brown/5">
            {group.items.map((item) => {
              const key = `${group.title}::${item.question}`;
              const isOpen = openKey === key;

              return (
                <div key={key}>
                  <button
                    type="button"
                    onClick={() => setOpenKey(isOpen ? null : key)}
                    aria-expanded={isOpen}
                    aria-controls={key}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-sm font-medium text-brand-brown sm:text-base">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 shrink-0 text-brand-sage transition-transform duration-200",
                        isOpen && "rotate-180"
                      )}
                      aria-hidden
                    />
                  </button>

                  <div
                    id={key}
                    className={cn(
                      "grid transition-all duration-200 ease-in-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {item.answer}
                        {item.link ? (
                          <Link
                            href={item.link.href}
                            className="mt-2 block font-medium text-terracotta-ink hover:underline"
                          >
                            {item.link.label} &rarr;
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
