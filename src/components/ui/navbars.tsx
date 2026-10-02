"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Home, Menu, Users, Compass, Flag, Image as ImageIcon, ShieldAlert } from "lucide-react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactNode;
}

const navItems: NavItem[] = [
  { id: 'beranda', label: 'Beranda', href: '#beranda', icon: <Home className="h-4 w-4" /> },
  { id: 'tentang', label: 'Tentang', href: '#tentang', icon: <Users className="h-4 w-4" /> },
  { id: 'filosofi', label: 'Filosofi', href: '#filosofi', icon: <Compass className="h-4 w-4" /> },
  { id: 'kegiatan', label: 'Kegiatan', href: '#kegiatan', icon: <Flag className="h-4 w-4" /> },
  { id: 'galeri', label: 'Galeri', href: '#galeri', icon: <ImageIcon className="h-4 w-4" /> },
  { id: 'kepengurusan', label: 'Kepengurusan', href: '#kepengurusan', icon: <ShieldAlert className="h-4 w-4" /> },
];

interface NavbarProps {
  activeSection?: string;
  onSelectSection?: (id: string) => void;
  children?: React.ReactNode;
}

export default function Navbardemo({ activeSection = 'beranda', onSelectSection, children }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const handleNavClick = (href: string, id: string) => {
    setOpen(false);
    if (onSelectSection) onSelectSection(id);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex h-screen">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="fixed left-4 top-4 z-50 lg:hidden bg-[#0A3D2A]/90 text-white border-white/20 hover:bg-[#0A3D2A] backdrop-blur-md"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] p-0">
          <VerticalNav activeSection={activeSection} onItemClick={handleNavClick} />
        </SheetContent>
      </Sheet>
      <ResizablePanelGroup
        direction="horizontal"
        className="hidden lg:flex min-h-screen w-full"
      >
        <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
          <div className="flex h-full">
            <VerticalNav activeSection={activeSection} onItemClick={handleNavClick} />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={80}>
          <div className="flex h-full w-full">
            {children}
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

function VerticalNav({ activeSection, onItemClick }: { activeSection?: string; onItemClick: (href: string, id: string) => void }) {
  return (
    <ScrollArea className="h-full w-full bg-[#0A3D2A] py-6">
      <div className="px-3 py-2">
        <div className="flex items-center gap-3 mb-6 px-4">
          <div className="w-10 h-10 rounded-full bg-[#1ED760] flex items-center justify-center text-[#0A3D2A] font-bold">
            AK
          </div>
          <div>
            <h2 className="text-sm font-bold text-white leading-tight">Ambalan</h2>
            <p className="text-xs text-[#1ED760]">Kameswara Sekartaji</p>
          </div>
        </div>
        <div className="space-y-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Button
                key={item.id}
                variant="ghost"
                className={`w-full justify-start ${
                  isActive
                    ? "bg-[#1ED760] text-[#0A3D2A] hover:bg-[#1ED760]/90"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
                onClick={() => onItemClick(item.href, item.id)}
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </ScrollArea>
  );
}
