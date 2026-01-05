import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Lock, Bell, ShieldCheck } from "lucide-react";
import { useUser } from "@/context/UserContext";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
  const { user } = useUser();

  return (
    <div className="p-8 space-y-8 bg-slate-50 min-h-screen">
      <div>
        <h1 className="text-3xl font-bold text-green-900 tracking-tight">
          Account Settings
        </h1>
        <p className="text-slate-500 mt-1">
          Manage your profile, security, and notification preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Profile & Security */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Section */}
          <Card className="border-none shadow-sm bg-white">
            <CardHeader className="border-b border-slate-50">
              <CardTitle className="text-lg font-bold text-green-900 flex items-center gap-2">
                <User className="h-5 w-5 text-blue-600" /> Public Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-slate-400">
                    Full Name
                  </label>

                  {/* 3. Display actual name */}
                  <p className="text-sm font-medium p-2 bg-slate-50 rounded border border-slate-100 min-h-[40px]">
                    {user?.name || "No name provided"}
                  </p>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-slate-400">
                    Email Address
                  </label>

                  {/* 4. Display actual email */}
                  <p className="text-sm font-medium p-2 bg-slate-50 rounded border border-slate-100 min-h-[40px]">
                    {user?.email || "No email provided"}
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-slate-50/50 py-3">
              <Button
                variant="outline"
                className="text-blue-600 border-blue-200 hover:bg-blue-50"
              >
                Update Profile Info
              </Button>
            </CardFooter>
          </Card>

          {/* Security Section */}
          <Card className="border-none shadow-sm bg-white">
            <CardHeader className="border-b border-slate-50">
              <CardTitle className="text-lg font-bold text-green-900 flex items-center gap-2">
                <Lock className="h-5 w-5 text-blue-600" /> Password & Security
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-slate-900">Change Password</p>
                  <p className="text-sm text-slate-500">
                    Update your account password regularly for safety.
                  </p>
                </div>
                <Button className="bg-green-600 hover:bg-green-700">
                  Change Password
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column: Quick Settings */}
        <div className="space-y-6">
          <Card className="border-none shadow-sm bg-white">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-green-900 flex items-center gap-2">
                <Bell className="h-5 w-5 text-blue-600" /> Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <Label
                  htmlFor="email-notifications"
                  className="text-sm font-medium text-slate-600"
                >
                  Email Notifications
                </Label>
                <Switch id="email-notifications" />
                <div className="w-10 h-5 bg-blue-600 rounded-full flex items-center px-1 cursor-pointer">
                  <div className="bg-white h-3 w-3 rounded-full ml-auto" />
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <Label
                  htmlFor="course-deadlines"
                  className="text-sm font-medium text-slate-600"
                >
                  Course Deadlines
                </Label>
                <Switch id="course-deadlines" />
                <div className="w-10 h-5 bg-slate-300 rounded-full flex items-center px-1 cursor-pointer">
                  <div className="bg-white h-3 w-3 rounded-full" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Account Status Card */}
          <Card className="bg-blue-600 text-white border-none shadow-lg">
            <CardContent className="p-6 text-center space-y-3">
              <ShieldCheck className="h-12 w-12 mx-auto opacity-50" />
              <h3 className="font-bold text-lg">Account Verified</h3>
              <p className="text-xs text-blue-100">Checked and Honored</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
