import { Link } from 'react-router-dom';
import { navs } from "../../data/nav";
import { Logo } from '../logo';
import { Button } from '../button';
import phone from '../../assets/phone.svg';
import menu from '../../assets/menu.svg';
import styles from './style.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.nav}>
        <ul className={styles.nav_list}>
          {navs.map((item, index) => (
            <li className={styles.nav_link} key={index}>
              <Link className={styles.nav_item} to="/">{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.contact}>
        <Button className={styles.menu_btn}>
          <img src={menu} alt="Menu Icon" />
        </Button>
        <img src={phone} alt="phone" />
        <h3>8-345-123-34-45</h3>
      </div>
    </header>
  )
}
