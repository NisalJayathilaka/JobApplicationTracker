import Link from "next/link";
import { Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/auth";
import UserDropdown from "@/components/user-dropdown";

export default async function Navbar() {

  const session = await getSession();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-foreground transition-colors hover:opacity-90"
        >
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
            <Briefcase className="size-5" />
          </div>
          <span>Job Tracker</span>
        </Link>

        {/* Navigation / Action Links */}
        <div className="flex items-center gap-3 sm:gap-4">
        
          {session?.user ? (
            <>
              <Link href="/dashboard">
                <Button size="sm" variant="ghost" className="font-medium">
                  Dashboard
                </Button>
              </Link>
              <UserDropdown user={session.user} />
            </>
          ) : (
            <>
              <Link href="/sign-in">
                <Button variant="ghost" size="sm" className="font-medium">
                  Sign In
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button size="sm" className="font-medium shadow-sm">
                  Get Started
                </Button>
              </Link>
            </>
          )}

          
        </div>
      </div>
    </header>
  );
}