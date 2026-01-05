import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";

export function HomeLayout() {
  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden">
      {/* Sidebar - Fixed width or collapsible */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8">
        <div className="max-w-6xl mx-auto">
          <Outlet /> {/* This is where your dashboard pages will render */}
        </div>
      </main>
    </div>
  );
}
