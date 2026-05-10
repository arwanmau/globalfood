import { Link, useRouterState } from "@tanstack/react-router";
import { Leaf, LayoutGrid, QrCode, ShieldCheck } from "lucide-react";
import { RoleSwitcher } from "./RoleSwitcher";

export function AppHeader() {
  const path = useRouterState({ select: (r) => r.location.pathname });

  const NavLink = ({ to, label, Icon }: { to: string; label: string; Icon: typeof Leaf }) => {
    const active = path === to;
    return (
      <Link
        to={to}
        className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
          active
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground hover:text-foreground hover:bg-accent"
        }`}
      >
        <Icon className="h-4 w-4" />
        <span className="hidden sm:inline">{label}</span>
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary shadow-glow transition-transform group-hover:scale-105">
            <Leaf className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold tracking-tight">Global Food Ledger</div>
            <div className="hidden text-[10px] font-medium uppercase tracking-wider text-muted-foreground sm:block">
              <ShieldCheck className="mr-1 inline h-2.5 w-2.5 text-chain" />
              Secured by Polygon
            </div>
          </div>
        </Link>

        <nav className="flex items-center gap-1">
          <NavLink to="/" label="Dashboard" Icon={LayoutGrid} />
          <NavLink to="/scan" label="Consumer Scan" Icon={QrCode} />
        </nav>

        <div className="flex items-center">
          <RoleSwitcher />
        </div>
      </div>
    </header>
  );
}
