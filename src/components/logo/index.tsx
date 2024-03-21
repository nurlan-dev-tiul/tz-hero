import { Link } from 'react-router-dom'
import styles from "./style.module.scss";
import clsx from 'clsx';

type Props = {
  className?: string
}

export const Logo = ({className}: Props) => {
  return (
    <Link to='/' className={clsx(styles.logo, className)}>
      Alex. Shevtsov
    </Link>
  )
}