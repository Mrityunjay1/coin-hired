"use client";

import React from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Section */}
          <div className="flex-shrink-0">
            <Image src="/images/logo.png" width={150} height={150} alt="logo" />
          </div>

          {/* Center Section */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              채용
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              해외 개발자 활용 서비스
            </a>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center">
            <Button variant="outline" className="text-blue-600">
              문의하기
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="py-4 flex flex-col space-y-4">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    채용
                  </a>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    해외 개발자 활용 서비스
                  </a>
                  <Button variant="outline" className="text-blue-600">
                    문의하기
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
