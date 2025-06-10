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
    <button onClick={handleSignOut} className="!bg-primary-200 !text-dark-100 hover:!bg-primary-200/80 !rounded-full !font-bold px-5 cursor-pointer min-h-10">
      Sign out
    </button>
  );
}
