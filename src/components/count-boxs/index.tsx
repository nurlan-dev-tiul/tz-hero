import styles from './style.module.scss';

type Props = {
  count?: number | undefined;
  valute?: number | undefined;
  text: string
}

export const CountBox = (props: Props) => {
  const { count, text, valute } = props;

  return (
    <div className={styles.count_box}>
      <h2 className={styles.count}>
        {valute ? valute + '%' : count + '+'}
      </h2>
      <p className={styles.count_desc}>
        {text}
      </p>
    </div>
  )
}