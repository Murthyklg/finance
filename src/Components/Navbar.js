import { Link } from "react-router-dom"

// styles
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <Link to='/' className={styles.title}>MyMoney</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </ul>
    </nav>
  )
}