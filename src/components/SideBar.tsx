'use client'

import { Button } from "@/components/ui/button"
import { Home, Users, FileText, Settings, LogOut, PlusCircleIcon,User, Lock, ChevronDown, UserCircle  } from 'lucide-react'
import Link from "next/link"
import { useState } from "react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { cn } from "@/lib/utils"; // Utility for handling Tailwind classes

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export default function Sidebar() {

  return (
   <>
            <nav className="space-y-2">
              <Link href="/">

                <Button variant="ghost" className="w-full justify-start">
                  <Home className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
              <Link href="/FORM-enhanced-vendor-list-view">
                <Button variant="ghost" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Vendors
                </Button>
              </Link>
              <Link href="/LIST-vendor-list-view">
                <Button variant="ghost" className="w-full justify-start">
                  <PlusCircleIcon className="mr-2 h-4 w-4" />
                  Add Vendors
                </Button>
              </Link>
              <Button variant="ghost" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                Reports
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="mr-2 h-4 w-4" />
                Settings
              </Button>
            </nav>
            {/* <div className="absolute bottom-4">
              <Button variant="ghost" className="w-full justify-start text-red-600 dark:text-red-400">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div> */}
             <div className="relative inline-block top-40 text-left" >
             
              {/* <div className="relative bottom-0"> */}
      {/* Profile Button */}
      <Menu>
        {({ open }) => (
          <>
            <MenuButton
              as={Button}
              variant="ghost"
              className="flex items-center gap-2 px-4 py-2 w-full"
            >
              <UserCircle className="h-8 w-8 rounded-full"/>
              
              <span className="text-base font-bold">John Doe</span>
              <ChevronDown className="h-4 w-4 transition-transform duration-200" />
            </MenuButton>

            {/* Dropdown List */}
            <MenuItems
              className="absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-lg bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
            >
              <div className="p-2">
                {/* Profile */}
                <MenuItem>
                  {({ active }) => (
                    <button
                      className={cn(
                        "flex w-full items-center gap-2 rounded-md px-4 py-2 text-sm",
                        active ? "bg-gray-100" : ""
                      )}
                    >
                      <User className="h-4 w-4" />
                      Profile
                    </button>
                  )}
                </MenuItem>

                {/* Change Password */}
                <MenuItem>
                  {({ active }) => (
                    <button
                      className={cn(
                        "flex w-full items-center gap-2 rounded-md px-4 py-2 text-sm",
                        active ? "bg-gray-100" : ""
                      )}
                    >
                      <Lock className="h-4 w-4" />
                      Change Password
                    </button>
                  )}
                </MenuItem>
              </div>

              {/* Logout */}
              <div className="p-2">
                <MenuItem>
                  {({ active }) => (
                    <button
                      className={cn(
                        "flex w-full items-center gap-2 rounded-md px-4 py-2 text-sm text-red-600",
                        active ? "bg-gray-100" : ""
                      )}
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  )}
                </MenuItem>
              </div>
            </MenuItems>
          </>
        )}
      </Menu>
    </div>
            </>
  )
}
