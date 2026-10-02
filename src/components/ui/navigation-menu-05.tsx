import type { ComponentType } from "react";
import { Compass, Home, Image as ImageIcon, Rss, ShieldAlert, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export interface NavigationItem {
  title: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
}

export const navigationItems: NavigationItem[] = [
  { title: "Beranda", href: "#beranda", icon: Home },
  { title: "Tentang", href: "#tentang", icon: Users },
  { title: "Filosofi", href: "#filosofi", icon: Compass },
  { title: "Kegiatan", href: "#kegiatan", icon: Rss },
  { title: "Galeri", href: "#galeri", icon: ImageIcon },
  { title: "Kepengurusan", href: "#kepengurusan", icon: ShieldAlert },
];

interface NavigationMenuProps {
  activeSection?: string;
  onItemClick?: (href: string) => void;
}

export default function NavigationMenuWithActiveItem({
  activeSection = "beranda",
  onItemClick,
}: NavigationMenuProps) {
  const handleClick = (href: string) => {
    onItemClick?.(href);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <NavigationMenu className="max-w-none">
      <NavigationMenuList className="gap-7">
        {navigationItems.map((item) => {
          const isActive = activeSection === item.href.slice(1);
          return (
            <NavigationMenuItem key={item.title}>
              <NavigationMenuLink
                active={isActive}
                asChild
                className={cn(
                  "group relative inline-flex h-9 w-max items-center gap-2.5 rounded-none px-0.5 py-2 text-sm font-medium",
                  "text-white/70 transition-colors",
                  "before:absolute before:inset-x-0 before:bottom-0 before:h-0.5 before:scale-x-0 before:bg-brand-primary before:transition-transform",
                  "hover:bg-transparent hover:text-white hover:before:scale-x-100",
                  "focus:bg-transparent focus:text-white focus:outline-hidden focus:before:scale-x-100",
                  "active:bg-transparent",
                  "data-[state=open]:before:scale-x-100",
                  isActive && "text-white before:scale-x-100"
                )}
              >
                <a className="flex items-center gap-2.5" href={item.href} onClick={() => handleClick(item.href)}>
                  <item.icon className="h-5 w-5 shrink-0" />
                  {item.title}
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function MobileNavigationMenu({
  activeSection = "beranda",
  onItemClick,
}: NavigationMenuProps) {
  const handleClick = (href: string) => {
    onItemClick?.(href);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ul className="space-y-1">
      {navigationItems.map((item) => {
        const isActive = activeSection === item.href.slice(1);
        return (
          <li key={item.title}>
            <a
              href={item.href}
              onClick={() => handleClick(item.href)}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                "flex items-center gap-3 rounded-btn px-4 py-3 text-sm font-medium transition-colors",
                isActive
                  ? "bg-pastel-greenBg text-pastel-greenInk"
                  : "text-brand-textSecondary hover:bg-surface"
              )}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              {item.title}
            </a>
          </li>
        );
      })}
    </ul>
  );
}