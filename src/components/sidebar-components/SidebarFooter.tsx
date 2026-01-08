import { LogOut, User as UserIcon } from "lucide-react"; // Rename icon to avoid conflict
import { getInitials } from "@/lib/utilities/getInitials";
import { UseUser } from "@/context/UserContext";
import { useNavigate } from "react-router-dom";

export default function SidebarFooter() {
  const navigate = useNavigate();
  const { user, logout } = UseUser();

  const handleLogout = async () => {
    await logout(); // Ensure logout finishes before navigating
    navigate("/login");
  };

  return (
    <div className="p-4 border-t border-white space-y-4">
      {/* User Info Section */}
      <div className="flex items-center gap-3 px-2 py-1">
        <div className="h-9 w-9 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold border border-white/20 text-white">
          {/* Use the getInitials utility correctly */}
          {user?.user_metadata?.full_name ? (
            getInitials(user.user_metadata.full_name)
          ) : (
            <UserIcon className="h-4 w-4" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold truncate leading-none">
            {/* FIX: Changed user.name to user.user_metadata.full_name */}
            {user?.user_metadata?.full_name || "User"}
          </p>
          <p className="text-[10px] text-green-100 truncate mt-1">
            {user?.email}
          </p>
        </div>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-red-600 transition-all font-medium hover:bg-red-50/10"
      >
        <LogOut className="h-5 w-5" />
        <span>Logout</span>
      </button>
    </div>
  );
}
