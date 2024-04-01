import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

interface CardProps {
  item: {
    title: string;
    number: number;
    change: number;
  }

}

const Card = ({ item }: CardProps) => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.textGroup}>
        <span className={styles.title}>{item.title}</span>
        <span className={styles.number}>{item.number}</span>
        <span className={styles.detail}>
          <span className={item.change > 0 ? styles.positive : styles.negative}>
            {item.change}%{" "}
          </span>
          {item.change > 0 ? "More" : "Less"} than previous week
        </span>
      </div>
    </div>
  )
}

export default Card