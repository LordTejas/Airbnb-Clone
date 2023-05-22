"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Logo() {
  const router = useRouter();

  const handleHomeRedirect = () => router.push("/");

  return (
    <Image
      src="/images/logo.png"
      alt="Airbnb logo"
      width="100"
      height="30"
	  className="hidden md:block cursor-pointer"
      onClick={handleHomeRedirect}
    />
  );
}
