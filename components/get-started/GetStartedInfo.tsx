import {
  BadgeCheck,
  Briefcase,
  ClipboardCheck,
  DollarSign,
  FileCheck,
  Globe,
  Headphones,
  MessageSquare,
  Percent,
  Search,
  ShieldCheck,
  Truck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type InfoSection = {
  title: string;
  icon: LucideIcon;
  items: {
    label: string;
    icon: LucideIcon;
    highlight?: boolean;
  }[];
};

const sections: InfoSection[] = [
  {
    title: "Requirements",
    icon: ClipboardCheck,
    items: [
      { label: "Active MC Authority for 1+ Year", icon: FileCheck },
      { label: "Active DOT Number", icon: Truck },
      { label: "Active Insurance Coverage", icon: ShieldCheck },
      { label: "Operating Across State Lines", icon: Globe },
      { label: "Working With a Factoring Company", icon: Briefcase },
    ],
  },
  {
    title: "How We Help You",
    icon: Users,
    items: [
      { label: "Dispatch under your MC authority", icon: BadgeCheck },
      { label: "Find and book loads", icon: Search },
      { label: "Negotiate rates with brokers", icon: MessageSquare },
      { label: "Manage dispatch coordination", icon: Headphones },
    ],
  },
  {
    title: "Why Work With Us",
    icon: DollarSign,
    items: [
      { label: "Dedicated dispatcher", icon: Users },
      {
        label: "Flat rate of $295 per week",
        icon: DollarSign,
        highlight: true,
      },
      { label: "No percentage-based commissions", icon: Percent },
      { label: "Direct communication and support", icon: MessageSquare },
    ],
  },
];

function PricingHighlight({
  icon: ItemIcon,
}: {
  icon: LucideIcon;
}) {
  return (
    <li className="list-none">
      <div
        className={cn(
          "group/pricing relative overflow-hidden rounded-xl border-2 border-brand-aqua/40",
          "bg-gradient-to-br from-brand-aqua/15 via-brand-aqua/8 to-brand-white",
          "px-5 py-5 shadow-[0_0_0_1px_rgba(0,174,239,0.12),0_8px_32px_rgba(0,174,239,0.18),0_16px_48px_rgba(11,19,43,0.06)]",
          "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "hover:-translate-y-1 hover:border-brand-aqua/60 hover:shadow-[0_0_0_1px_rgba(0,174,239,0.2),0_12px_40px_rgba(0,174,239,0.28),0_20px_56px_rgba(11,19,43,0.08)]"
        )}
      >
        <div
          className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-aqua/20 blur-2xl"
          aria-hidden="true"
        />
        <div className="relative flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-aqua shadow-[0_4px_14px_rgba(0,174,239,0.45)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/pricing:scale-105">
            <ItemIcon className="h-5 w-5 text-white" strokeWidth={2.5} />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-aqua">
              Simple Pricing
            </p>
            <p className="font-display mt-1.5 text-xl font-bold uppercase leading-tight text-brand-slate sm:text-2xl">
              Flat rate of{" "}
              <span className="text-brand-aqua">$295</span> per week
            </p>
            <p className="mt-2 text-sm leading-relaxed text-brand-navy/85">
              No percentage cuts. One predictable weekly fee.
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

function InfoListItem({
  label,
  icon: ItemIcon,
}: {
  label: string;
  icon: LucideIcon;
}) {
  return (
    <li className="list-none">
      <div
        className={cn(
          "group/item flex cursor-default items-start gap-3 rounded-lg border border-transparent px-3 py-3",
          "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
          "hover:-translate-y-0.5 hover:scale-[1.01] hover:border-slate-200/80 hover:bg-brand-mist/80 hover:shadow-[0_6px_20px_rgba(11,19,43,0.07)]"
        )}
      >
        <span
          className={cn(
            "flex h-9 w-9 shrink-0 -skew-x-12 items-center justify-center border border-brand-aqua/30 bg-brand-mist",
            "transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
            "group-hover/item:border-brand-aqua group-hover/item:bg-brand-aqua/15 group-hover/item:shadow-[0_4px_12px_rgba(0,174,239,0.15)]"
          )}
        >
          <ItemIcon
            className="h-4 w-4 skew-x-12 text-brand-aqua transition-transform duration-300 group-hover/item:scale-110"
            strokeWidth={2.5}
          />
        </span>
        <span className="pt-1.5 text-sm leading-relaxed text-brand-navy transition-colors duration-300 group-hover/item:text-brand-slate sm:text-base">
          {label}
        </span>
      </div>
    </li>
  );
}

function InfoCard({ section }: { section: InfoSection }) {
  const SectionIcon = section.icon;

  return (
    <article
      className={cn(
        "overflow-hidden rounded-2xl border border-slate-200/90 bg-brand-white p-6",
        "shadow-[0_2px_8px_rgba(11,19,43,0.04),0_12px_32px_rgba(11,19,43,0.07)]",
        "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:-translate-y-1 hover:border-slate-200 hover:shadow-[0_4px_12px_rgba(11,19,43,0.06),0_20px_48px_rgba(11,19,43,0.1)]",
        "sm:p-8"
      )}
    >
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 -skew-x-12 items-center justify-center bg-brand-aqua/10 transition-colors duration-300">
          <SectionIcon className="h-5 w-5 skew-x-12 text-brand-aqua" strokeWidth={2.5} />
        </span>
        <h2 className="font-display text-xl font-bold uppercase tracking-tight text-brand-slate sm:text-2xl">
          {section.title}
        </h2>
      </div>

      <ul className="space-y-1">
        {section.items.map((item) =>
          item.highlight ? (
            <PricingHighlight key={item.label} icon={item.icon} />
          ) : (
            <InfoListItem key={item.label} label={item.label} icon={item.icon} />
          )
        )}
      </ul>
    </article>
  );
}

export function GetStartedInfo({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-6", className)}>
      {sections.map((section) => (
        <InfoCard key={section.title} section={section} />
      ))}
    </div>
  );
}
