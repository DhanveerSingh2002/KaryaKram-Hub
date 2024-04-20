'use client'
import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavItems = () => {
    const pathname = usePathname();

  return (
    <ul className='w-full flex-col gap-5 items-end md:flex-row flex-between md:flex-between text-lg'>
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        return(
            <li key={link.route} className={isActive ? 'md:text-stone-950 font-bold text-green-600' : ''}>
              <Link href={link.route}>
                {link.label}
              </Link>
            </li>
        )
      })}
    </ul>
  )
}

export default NavItems
