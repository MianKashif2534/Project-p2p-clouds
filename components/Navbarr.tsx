import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbarr: React.FC = () => {
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Image width={144} height={30} src="/logo.png" alt="logo" />
        <div className="space-x-4 text-gray-900">
          <Link href="#" className="hover:font-semibold">
            Create
          </Link>
          <Link href="#" className="hover:font-semibold">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbarr;
