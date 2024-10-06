import {
  AlertCircle,
  Archive,
  File,
  MessagesSquare,
  Send,
  ShoppingCart,
  Ticket,
  Shirt,
  Users2,
  LogIn,
  Receipt,
  LucideIcon,
  PanelsTopLeft,
} from "lucide-react";

export interface NavItem {
  title: string;
  label?: string;
  icon: LucideIcon;
  route?: string;
  children?: ChildNavItem[];
}

export interface ChildNavItem {
  title: string;
  label?: string;
  route: string;
}

export interface NavHeader {
  heading: string;
}

export type SidebarItem = NavItem | NavHeader;

const basePath = "/dashboard";

export const sidebarItems: SidebarItem[] = [
  { heading: "Overview" },
  {
    title: "Dashboard",
    icon: PanelsTopLeft,
    route: basePath,
  },
  { heading: "Apps & Pages" },
  {
    title: "Products",
    icon: Shirt,
    route: `${basePath}/products`,
  },
  {
    title: "Orders",
    icon: ShoppingCart,
    route: "/dashboard/orders",
  },
  {
    title: "Invoice",
    icon: Receipt,
    children: [
      { title: "List Preview", route: "/dashboard/about" },
      { title: "Grid Preview", route: "/dashboard/about" },
    ],
  },
  {
    title: "Auth",
    icon: LogIn,
    children: [
      { title: "Unauthorized", route: "/dashboard/unauthorized" },
      { title: "Authorized", route: "/dashboard/Authorized" },
    ],
  },
  {
    title: "Coupons",
    icon: Ticket,
    route: "/dashboard/coupons",
  },
  {
    title: "Employees",
    icon: File,
    route: "/dashboard/employees",
  },
  {
    title: "Contact",
    icon: Send,
    route: "/dashboard/contact",
  },
  {
    title: "Social",
    icon: Users2,
    route: "/dashboard/social",
  },
  {
    title: "Updates",
    icon: AlertCircle,
    route: "/dashboard/updates",
  },
  {
    title: "Enquiry",
    icon: MessagesSquare,
    route: "/dashboard/enquiry",
  },
  {
    title: "Promotions",
    icon: Archive,
    route: "/dashboard/promotions",
  },
  { heading: "Billing" },
  {
    title: "Reports",
    icon: Archive,
    route: "/dashboard/promotions",
  },
];
