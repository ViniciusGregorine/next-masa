import {MdSensors} from 'react-icons/md'
import {BsFillFileBarGraphFill} from 'react-icons/bs'
import { FaBox } from 'react-icons/fa'

import styles from './styles.module.scss'

const Sidebar = () => (
  <aside className={styles.sidebarContainer}>
    <nav className={styles.nav}>
        <ul>
          <li className="nav_list">
            <BsFillFileBarGraphFill/>
          </li>
          <li  className="nav_list">
            <MdSensors/>
          </li>
          <li  className="nav_list">
            <FaBox/>
          </li>
        </ul>
    </nav>
  
  </aside>
)

export default Sidebar
