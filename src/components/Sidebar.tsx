import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Settings,
  LogOut,
  Folder,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { name: "Your Courses", icon: Folder, path: "/dashboard/courses" },
  { name: "Account Settings", icon: Settings, path: "/dashboard/settings" },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 bg-green-500 border-r border-white flex flex-col h-full text-white">
      <div className="p-6">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <Layers className="text-blue-600" />
          <span>LMS Name</span>
        </h1>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group",
                isActive
                  ? "bg-blue-600 text-white shadow-lg"
                  : "hover:bg-green-800 text-green-100"
              )}
            >
              <item.icon
                className={cn(
                  "h-5 w-5",
                  isActive
                    ? "text-white"
                    : "text-green-300 group-hover:text-blue-400"
                )}
              />
              <span className="font-medium text-white">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-green-white">
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-red-500 hover:bg-red-950/30 transition-colors">
          <LogOut className="h-5 w-5" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}
