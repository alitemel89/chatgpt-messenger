"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div
      className="bg-[#11A37F] h-screen flex flex-col 
    items-center justify-center text-center"
    >
      <Image
        src="https://links.papareact.com/2i6"
        width={300}
        height={300}
        alt="logo"
      />
      <button onClick={() => signIn("google")} className="bg-emerald-700 text-white font-bold text-3xl animate-pulse px-4 py-2 rounded-md">
        Sign In to use ChatGPT
      </button>
    </div>
  );
}

export default Login;
