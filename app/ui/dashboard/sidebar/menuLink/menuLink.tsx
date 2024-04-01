"use client";

import Link from 'next/link'
import styles from './menuLink.module.css'
import { usePathname } from 'next/navigation';

interface MenuLinkProps {
  item: {
    path: string;
    icon: React.ReactNode;
    title: string;
  };
}

const MenuLink = ({ item }: MenuLinkProps) => {

  const pathname = usePathname();

  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
      {item.icon}
      {item.title}
    </Link>
  )
}

export default MenuLink