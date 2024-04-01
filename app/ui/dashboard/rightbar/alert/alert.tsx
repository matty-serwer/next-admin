import { MdSupervisedUserCircle, MdReadMore } from "react-icons/md";
import { IconType } from "react-icons";

import styles from "./alert.module.css";

interface AlertProps {
  item: {
    id: number;
    notification: string;
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    buttonText: string;
  }
}

const Alert = ({ item }: AlertProps) => {

  const componentMapping: { [key: string]: IconType } = {
    MdSupervisedUserCircle: MdSupervisedUserCircle,
    MdReadMore: MdReadMore,
  };

  const DynamicComponent = (icon: string) => {
    const Component = componentMapping[item.icon];
    return <Component />;
  };

  return (
    <div className={styles.item}>
      <div className={styles.text}>
        <span className={styles.notification}>{item.notification}</span>
        <h3 className={styles.title}>{item.title}</h3>
        <span className={styles.subtitle}>{item.subtitle}</span>
        <p className={styles.description}>{item.description}</p>
        <div className={styles.buttonContainer}>
          <button className="buttonA">{item.buttonText}</button>
        </div>
      </div>
    </div>
  );
}

export default Alert