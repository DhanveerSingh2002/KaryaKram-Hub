import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import NavItems from "./NavItems"
import MobileNav from "./MobileNav"

const Header = () => {
  return (
    <div>
      <header className="w-full bg-emerald-400">
        <div className="flex items-center justify-between  pt-0">
          <Link href={"/"} className="w-36">
            <Image src="/favico.svg"  width={90} height={20} alt="Logo"/>
          </Link>
          <SignedIn>
            <nav className="md:flex-between hidden w-full max-w-xs">
              <NavItems/>
            </nav>
          </SignedIn>
          <div className="flex w-32 justify-end gap-3">
            <SignedIn>
              <div className="mr-3">
                <UserButton afterSignOutUrl="/"/>
              </div>
              <nav className="flex md:hidden mr-3">
                <MobileNav />
              </nav>
            </SignedIn>
            <SignedOut>
              <Button asChild className="bg-gray-900 text-teal-400 hover:bg-teal-300 hover:text-black mr-4 rounded-full px-6">
                <Link href="/sign-in">Login</Link>
              </Button>
            </SignedOut>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
