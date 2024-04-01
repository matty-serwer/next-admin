import React from 'react';
import styles from './transaction.module.css';
import Image from 'next/image';

interface transactionProps {
  // Define the properties of transactionProps here
  item: {
    name: string;
    status: 'Completed' | 'Pending' | 'Cancelled';
    date: string;
    amount: string;
    image: string;
  }
}

const Transaction = ({ item }: transactionProps) => {

  const userImage = item.image ? item.image : '/noavatar.png';
  const currentStatusStyle = item.status === 'Completed' ? styles.completed : item.status === 'Pending' ? styles.pending : styles.cancelled;

  return (
    <tr>
      <td className={styles.tableElement}>
        <div className={styles.user}>
          <Image
            src={userImage}
            alt={item.name}
            width={40}
            height={40}
            className={styles.userImage}
          />
          <span> {item.name} </span>
        </div>
      </td>
      <td className={styles.tableElement}>
        <span className={`${styles.status} ${currentStatusStyle}`}>
          {item.status}
        </span>
      </td>
      <td className={styles.tableElement}>{item.date}</td>
      <td className={styles.tableElement}>{item.amount}</td>
    </tr>
  )
}

export default Transaction