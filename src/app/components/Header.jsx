import Link from "next/link";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { LuUser } from "react-icons/lu";
import { HiOutlineMenu } from "react-icons/hi";
import Image from "next/image";

const Header = () => {
  return (
    <nav className=" bg-white shadow-sm max-h-[90px] sticky top-0 z-50 w-full">
      <div className="container  mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
        {/* Mobile Menu */}
        <div className=" lg:hidden flex items-center">
          <button className="p-2">
            <HiOutlineMenu size={24} className="text-gray-700" />
          </button>
        </div>
        <div>
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-800">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        {/* Centered Logo */}
        <div className="flex-1 flex justify-center lg:justify-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/logo.png"
              alt="JF Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Desktop Menu and Icons */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Icons */}
          <div className="flex items-center gap-4">
            <Link href="/login" className="flex items-center gap-1 text-sm">
              <LuUser size={20} />
              <span>Login</span>
            </Link>

            <button>
              <CiSearch size={22} />
            </button>

            <button className="relative">
              <CiShoppingCart size={24} />
              <span className="absolute -top-1 -right-2 bg-green-500 text-white text-xs rounded-full px-1">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
