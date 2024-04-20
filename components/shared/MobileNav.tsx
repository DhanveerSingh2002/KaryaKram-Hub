import 
{
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
        <Sheet>
        <SheetTrigger className="align-middle">
            <Image src="./menu.svg" width={24} height={24} alt="menu"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-4 bg-gray-900 text-teal-400 md:hidden">
            <SheetHeader>
                <SheetTitle className="text-teal-400">KaryaKram-Hub</SheetTitle>
            </SheetHeader>
            <Separator />
            <NavItems/>
        </SheetContent>
        </Sheet>
    </nav>
  )
}

export default MobileNav
