import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";
import { signOut, signIn } from "next-auth/react";

const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="flex justify-between items-center p-4 bg-white text-white font-work-sans">
      <div className="text-2xl">
        <Image width={144} height={30} src="/YCDirectory.png" alt="logo" />
      </div>

      <ul className="flex space-x-4">
        {session && session?.user ? (
          <>
            <li className="text-lg">
              <Link href="/startup/create">Create</Link>
            </li>
            <li className="text-lg">
              <form
                action={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <button type="submit">Logout</button>
              </form>
            </li>
            <li>
              <Link href={`/user/${session.id}`} className="text-lg">
                 {session.user.name}
              </Link>
            </li>
          </>
        ) : (
          <form
            className="text-lg"
            action={async () => {
              "use server";
              // For signing in with GitHub:
              await signIn("github");
            }}
          >
            <button type="submit">Sign in</button>
          </form>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
