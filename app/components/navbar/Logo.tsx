"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <>
      <Image
        alt="logo"
        className="hidden md:block cursor-pointer"
        height={100}
        width={100}
        src={"/images/logo-v2.png"}
        onClick={() => router.push("/")}
      />
      <Image
        alt="logo"
        className="block md:hidden cursor-pointer rounded-full border p-1"
        height={65}
        width={65}
        src={"/images/icon-logo-small.png"}
        onClick={() => router.push("/")}
      />
    </>
  );
};

export default Logo;
