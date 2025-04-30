"use client";
import type React from "react";
import { Package, ShoppingBag, Home, User, BarChart3 } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}
export const navItems: NavItem[] = [
  {
    label: "Inventario",
    href: "/inventory",
    icon: <Package className="h-5 w-5" />,
  },
  {
    label: "Ventas",
    href: "/sales",
    icon: <ShoppingBag className="h-5 w-5" />,
  },
  {
    label: "Inicio",
    href: "/dashboard",
    icon: <Home className="h-5 w-5" />,
  },
  {
    label: "Gestión",
    href: "/management",
    icon: <User className="h-5 w-5" />,
  },
  {
    label: "Reportes",
    href: "/reports",
    icon: <BarChart3 className="h-5 w-5" />,
  },
];
