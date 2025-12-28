import Link from "next/link";
import DesktopNavbar from "./desktopNavbar";
import MobileNavbar from "./mobileNavbar";
import Image from "next/image";

async function Navbar() {
  return (
    <nav className="sticky top-0 w-full border-b backdrop-blur z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-primary font-mono tracking-wider"
            >
              <Image
                src="/images/akame2.png"
                alt="Logo"
                width={200}
                height={200}
                className="w-auto"
              />
            </Link>
          </div>

          <DesktopNavbar />
          <MobileNavbar />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
