import styles from './styles.module.scss'

const Sidebar = () => (
  <aside className={styles.sidebarContainer}>
    <nav className={styles.nav}>
        <ul>
          <li>
            readings
          </li>
          <li>
            sensors
          </li>
          <li>
            environment
          </li>
        </ul>
    </nav>
  
  </aside>
)

export default Sidebar
