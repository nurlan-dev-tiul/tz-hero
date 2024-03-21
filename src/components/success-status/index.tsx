import { Logo } from '../logo';
import styles from './style.module.scss';

export const SuccessStatus = () => {
  return (
    <div className={styles.successStatus}>
      <h2 className={styles.successStatus_title}>Спасибо за заявку</h2>
      <h3 className={styles.successStatus_desc}>Я обязательно свяжусь с вамив ближайшее время.</h3>
      <Logo className={styles.logo} />
  </div>
  )
}