import { Button } from '../button';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Dispatch, MouseEventHandler, SetStateAction } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { ButtonIcon } from '../button/button-icon';
import { SuccessStatus } from '../success-status';
import close from '../../assets/close.png';
import clsx from 'clsx';
import arrowwite from '../../assets/arrowwhite.png';
import styles from './style.module.scss';

type Props = {
  activeBar: boolean;
  setActiveBar: Dispatch<SetStateAction<boolean>>;
  successStatus: boolean;
  setSuccessStatus: Dispatch<SetStateAction<boolean>>
}

type FormValues = {
  name: string;
  phone: string;
  isChecked: boolean;
};

export const Sidebar = (props: Props) => {
  // Для появления Формы
  const { activeBar, setActiveBar, successStatus, setSuccessStatus } = props;

  // Hook для сохранения данных в LocalStorage
  const { setItem } = useLocalStorage('value')

  // Для получения значении, ошибок, и обработка формы
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  
  const onSidebarClick: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation()
  }

  // Функция для отправки данных из формы в localstorage
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setItem(data)
    setSuccessStatus(true)
    reset()
  }

  return (
    <aside className={clsx(styles.sidebar, {
        [styles.active]: activeBar === true
      })}
      onClick={() => setActiveBar(false)}
    >
      <div className={styles.blur} />
      <div 
        className={styles.sidebar_wrapper}
        onClick={onSidebarClick}
      >
        <div className={styles.sidebar_header}>
          <Button 
            className={styles.sidebar_close}
            onClick={() => setActiveBar(false)}
            >
            <img src={close} alt="" />
          </Button>
        </div>
        {successStatus ? (
         <SuccessStatus />
        ) : (
          <div className={styles.sidebar_content}>
            <h2 className={styles.sidebar_content_title}>
              Закажите обратный звонок
            </h2>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <input 
                {...register('name', { required: true })}
                type="text"
                placeholder='Имя'
                className={clsx(styles.sidebar_inp, {
                  [styles.error]: errors.name 
                })}
              />
              <input 
                type="tel"
                {...register('phone', { required: true })}
                placeholder='Телефон'
                className={clsx(styles.sidebar_inp, {
                  [styles.error]: errors.phone
                })}
              />
              <label className={styles.form_check}>
                <input 
                  {...register('isChecked', { required: true })} 
                  className={styles.form_check_inp} 
                  type="checkbox"
                />
                <span 
                  className={clsx(styles.custom_check, {
                    [styles.check_error]: errors.isChecked
                  })} 
                />
                <p>Согласен на сохранение и обработку персональных данных</p>
              </label>
              <div className={styles.form_btn}>
                <Button className={styles.form_button}>
                  Заказать обратный звонок
                </Button>
                <ButtonIcon img={arrowwite} className={styles.arrow_border_white} />
              </div>
            </form>
          </div>
        )}
       </div>
    </aside>
  )
}