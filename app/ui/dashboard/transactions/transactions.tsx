import Transaction from "./transaction/transaction";
import styles from "./transactions.module.css";


interface TransactionData {
  name: string;
  status: 'Completed' | 'Pending' | 'Cancelled';
  date: string;
  amount: string;
  image: string;
}

const transactionData: TransactionData[] = [
  {
    name: "John Doe",
    image: "",
    status: "Completed",
    date: "12/12/2023",
    amount: "$1000"
  },
  {
    name: "Alice Smith",
    image: "",
    status: "Pending",
    date: "1/30/2023",
    amount: "$300"
  },
  {
    name: "Bob Johnson",
    image: "",
    status: "Completed",
    date: "2/12/2023",
    amount: "$500"
  },
  {
    name: "Jane Allen",
    image: "",
    status: "Cancelled",
    date: "3/12/2023",
    amount: "$200"
  },
  {
    name: "Peter McGee",
    image: "",
    status: "Completed",
    date: "12/12/2023",
    amount: "$1000"
  },
]

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactionData.map((transaction, index) => (
            <Transaction key={index} item={transaction} />
          ))}
        </tbody>
      </table>
    </div>)
}

export default Transactions