import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type {
  User,
  SignInWithPasswordCredentials,
} from "@supabase/supabase-js";

interface UserContextType {
  user: User | null;
  isLoading: boolean;
  login: (credentials: SignInWithPasswordCredentials) => Promise<void>;
  logout: () => Promise<void>;
  //Added method signup
  signUp: (email: string, pass: string, fullName: string) => Promise<void>;
  signInWithSocial: (provider: "google" | "twitter") => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setIsLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (credentials: SignInWithPasswordCredentials) => {
    const { error } = await supabase.auth.signInWithPassword(credentials);
    if (error) throw error;
  };

  const signUp = async (email: string, pass: string, fullName: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password: pass,
      options: {
        data: {
          full_name: fullName,
          role: "student",
        },
      },
    });
    if (error) throw error;
  };

  const signInWithSocial = async (provider: "google" | "twitter") => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: window.location.origin + "/dashboard",
      },
    });
    if (error) throw error;
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    // 3. ADDED TO PROVIDER VALUE: Pass it down to components
    <UserContext.Provider
      value={{ user, isLoading, login, logout, signUp, signInWithSocial }}
    >
      {children}
    </UserContext.Provider>
  );
}

// 4. RENAMED TO LOWERCASE: Matches standard React hook naming
export const UseUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser must be used within a UserProvider");
  return context;
};
