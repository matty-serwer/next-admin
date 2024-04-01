import Image from "next/image";
import styles from "./rightbar.module.css";
import Alert from "./alert/alert";

const notifications = [
  {
    id: 1,
    notification: "🔥 New Release",
    title: "Version 2.0 is out now",
    subtitle: "Check out the new features we've added",
    description: "We've added a bunch of new features to make your experience even better. Check out the new features we've added",
    icon: "MdSupervisedUserCircle",
    buttonText: "Watch"
  },
  {
    id: 2,
    notification: "🎉 New Feature",
    title: "Dark Mode is here",
    subtitle: "Check out the new features we've added",
    description: "We've added a bunch of new features to make your experience even better. Check out the new features we've added",
    icon: "MdReadMore",
    buttonText: "Learn"
  },
]


const Rightbar = () => {

  return (
    <div className={styles.container}>
      {notifications.map((item) => (
        <Alert key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Rightbar