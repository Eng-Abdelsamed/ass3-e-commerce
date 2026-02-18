"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faTachometerAlt,
  faBoxOpen,
  faHeart,
  faMapMarkerAlt,
  faCreditCard,
  faCog,
  faSignOutAlt,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { User } from "@/features/auth/store/auth.slice";
import { usePathname } from "next/navigation";
import useLogOut from "@/hooks/useLogOut";

const navItems = [
  { label: "Dashboard", icon: faTachometerAlt, href: "/" },
  { label: "Orders", icon: faBoxOpen, href: "/orders" },
  { label: "Wishlist", icon: faHeart, href: "/wishlist" },
  { label: "Addresses", icon: faMapMarkerAlt, href: "/addresses" },
  { label: "Payment Methods", icon: faCreditCard, href: "/payment" },
  { label: "Account Details", icon: faCog, href: "/account" },
  { label: "Reset Password", icon: faKey, href: "/reset-password" },
];

export default function Sidebar({ user }: { user: User }) {
  const pathname = usePathname();
  const { logOut } = useLogOut();

  return (
    <aside className="w-full lg:w-72 shrink-0">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
        <div className="p-6 border-b border-gray-100 bg-gray-50/50">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary-600 flex items-center justify-center text-white text-lg font-bold shadow-sm">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-gray-900 text-sm truncate">
                {user.name}
              </h3>
              <p className="text-xs text-gray-500 mt-0.5 truncate">
                {user.email}
              </p>
            </div>
          </div>
        </div>
        <nav className="p-3">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-primary-50 text-primary-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <FontAwesomeIcon
                      icon={item.icon}
                      className={`w-4 h-4 ${
                        isActive ? "text-primary-600" : "text-gray-400"
                      }`}
                    />
                    {item.label}
                    {isActive && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary-600" />
                    )}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2 mt-2 border-t border-gray-100">
              <button
                onClick={logOut}
                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-all duration-200"
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="w-4 h-4" />
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}
