import Image from "next/image"
import MenuLink from "./menuLink/menuLink"
import styles from "./sidebar.module.css"
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout
} from "react-icons/md"

const menuItems = [
  {
    title: "Pages",
    list: [
      { title: "Dashboard", path: "/dashboard", icon: <MdDashboard /> },
      { title: "Users", path: "/dashboard/users", icon: <MdSupervisedUserCircle /> },
      { title: "Products", path: "/dashboard/products", icon: <MdShoppingBag /> },
      { title: "Transactions", path: "/dashboard/transactions", icon: <MdAttachMoney /> },
    ],
  },
  {
    title: "Analytics",
    list: [
      { title: "Revenue", path: "/revenue", icon: <MdWork /> },
      { title: "Reports", path: "/reports", icon: <MdAnalytics /> },
      { title: "Teams", path: "/teams", icon: <MdPeople /> },
    ]
  },
  {
    title: "User",
    list: [
      { title: "Settings", path: "/settings", icon: <MdOutlineSettings /> },
      { title: "Help", path: "/help", icon: <MdHelpCenter /> },
      { title: "Logout", path: "/logout", icon: <MdLogout /> }

    ]
  }

]

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className={styles.userImage} src="/noavatar.png" alt="user" width="50" height="50" />
        <div className={styles.userDetail}>
          <span className={styles.username}>John Doe</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.menuList}>
        {menuItems.map((cat, index) => (
          <li key={index}>
            <span className={styles.category}>{cat.title}</span>
            {cat.list.map((item, index) => (
              <MenuLink key={index} item={item} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar