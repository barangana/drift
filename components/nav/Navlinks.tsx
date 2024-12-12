import Link from 'next/link'
import React, { ReactNode } from 'react'

interface NavlinksProps {
  children: ReactNode
  href: URL | string
}

const Navlinks: React.FC<NavlinksProps> = ({ children, href }) => {
  return <Link href={href}>{children}</Link>
}

export default Navlinks
