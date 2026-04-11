"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const navLink = (path) =>
    `pb-2 relative ${
      pathname === path ? "text-lime-400" : "text-gray-400 hover:text-lime-400"
    }`

  return (
    <header className="w-full bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 md:py-6 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo 3.png"
            alt="Pentos Logo"
            width={40}
            height={40}
          />
          <span className="text-xl md:text-2xl font-semibold">
            Pentos<span className="text-gray-400">.</span>
          </span>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>

        {/* DESKTOP NAVIGATION (unchanged) */}
        <nav className="relative hidden md:flex items-center gap-10">

          <Link href="/" className={navLink("/")}>
            Home
            {pathname === "/" && (
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-lime-400"></span>
            )}
          </Link>

          <Link href="/project" className={navLink("/project")}>
            Project
            {pathname === "/project" && (
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-lime-400"></span>
            )}
          </Link>

          <Link href="/about" className={navLink("/about")}>
            About
            {pathname === "/about" && (
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-lime-400"></span>
            )}
          </Link>

          <Link href="/blog" className={navLink("/blog")}>
            Blog
            {pathname === "/blog" && (
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-lime-400"></span>
            )}
          </Link>

          <div className="relative group">
            <Link
              href="/pages"
              className={`${navLink("/pages")} flex items-center gap-1`}
            >
              All Pages ↓
            </Link>

            <div className="absolute top-full left-0 mt-4 w-56 bg-black border border-gray-700 rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="flex flex-col text-gray-300 py-4">
                <Link href="/" className="px-5 py-2 hover:text-lime-400">Home</Link>
                <Link href="/about" className="px-5 py-2 hover:text-lime-400">About</Link>
                <Link href="/project" className="px-5 py-2 hover:text-lime-400">Project</Link>
                <Link href="/ethical-hacking" className="px-5 py-2 hover:text-lime-400">Project Details</Link>
                <Link href="/blog" className="px-5 py-2 hover:text-lime-400">Blog</Link>
                <Link href="/importance-of-ux-ui-design" className="px-5 py-2 hover:text-lime-400">Blog Details</Link>
                <Link href="/contact" className="px-5 py-2 hover:text-lime-400">Contact</Link>
                <Link href="/service-details" className="px-5 py-2 hover:text-lime-400">Service Details</Link>
                <Link href="/404" className="px-5 py-2 hover:text-lime-400">404</Link>
              </div>
            </div>

          </div>

          <div className="absolute left-0 -bottom-3 w-full h-[1px] bg-gray-700"></div>
        </nav>

        {/* DESKTOP CONTACT BUTTON */}
        <Link href="/contact" className="hidden md:block">
          <button className="bg-lime-400 text-black px-6 py-3 font-semibold flex items-center gap-2 hover:opacity-90 transition">
            CONTACT
            <span>↗</span>
          </button>
        </Link>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black border-t border-gray-800 px-5 py-6 space-y-4">
          <Link href="/" className="block text-gray-300">Home</Link>
          <Link href="/project" className="block text-gray-300">projects</Link>
          <Link href="/about" className="block text-gray-300">About</Link>
          <Link href="/blog" className="block text-gray-300">Blog</Link>
          <Link href="/contact" className="block text-gray-300">Contact</Link>

          <button className="w-full bg-lime-400 text-black py-3 mt-4">
            CONTACT ↗
          </button>
        </div>
      )}
    </header>
  )
}