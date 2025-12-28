import { Mail, HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

async function DesktopNavbar() {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <Button variant="ghost" className="flex items-center gap-2" asChild>
        <Link href="/">
          <HomeIcon className="w-4 h-4" />
          <span className="hidden lg:inline">Home</span>
        </Link>
      </Button>

      <>
        <Button
          variant="ghost"
          className="flex items-center gap-2 border-2"
          asChild
        >
          <Link href="/contact">
            <Mail className="w-4 h-4" />
            <span className="hidden lg:inline">Contact Us</span>
          </Link>
        </Button>
      </>
    </div>
  );
}
export default DesktopNavbar;
