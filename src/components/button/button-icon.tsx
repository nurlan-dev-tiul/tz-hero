import clsx from 'clsx';
import styles from './style.module.scss';

type Props = {
  img: string
  className?: string
  onClick?: () => void;
}

export const ButtonIcon = (props: Props) => {
  const { img, className, onClick } = props;

  return (
    <div className={clsx(styles.button_arrow, className)} onClick={onClick}>
      <img className={styles.button_arrow_img} src={img} alt="" />
    </div>
  )
}