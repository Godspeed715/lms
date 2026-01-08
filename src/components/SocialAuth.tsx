import { Button } from "@/components/ui/button";
import { UseUser } from "@/context/UserContext";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";

export function SocialAuth() {
  const { signInWithSocial } = UseUser();

  const handleSocialLogin = async (provider: "google" | "twitter") => {
    try {
      await signInWithSocial(provider);
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Button
          variant="outline"
          type="button"
          onClick={() => handleSocialLogin("google")}
          className="bg-white hover:bg-slate-50 text-slate-900 border-none flex items-center gap-2 shadow-sm"
        >
          <FcGoogle className="h-10 w-10" />
          <span>Google</span>
        </Button>

        <Button
          variant="outline"
          type="button"
          onClick={() => handleSocialLogin("twitter")}
          className="bg-black hover:bg-zinc-900 text-white border-none flex items-center gap-2 shadow-sm"
        >
          <FaXTwitter className="h-4 w-4" />
          <span>X</span>
        </Button>
      </div>
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-white/20" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-green-500 px-2 text-white font-medium">Or</span>
        </div>
      </div>
    </div>
  );
}
