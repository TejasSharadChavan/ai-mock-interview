"use client";

import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    await fetch("/api/signout", {
      method: "POST",
    });
    router.push("/sign-in"); // redirect to login page
  };

  return (
    <button onClick={handleSignOut} className="max-sm:w-full btn-primary">
      Sign out
    </button>
  );
}
