import { useState, useEffect } from "react";
import { Button } from "../button";
import { CountBox } from "../count-boxs";
import { Sidebar } from "../sidebar";
import { ButtonIcon } from "../button/button-icon";
import { useWindowResize } from "../../hooks/useWindowResize";
import { sumOfDate } from "../../utils/dateSum";
import mentor from "../../assets/mentor.png";
import arrow from '../../assets/arrow.png';
import arrowwite from '../../assets/arrowwhite.png';
import styles from './style.module.scss';
import clsx from "clsx";

export const Hero = () => {
  const [valute, setValute] = useState<number>()
  // Состояние для открытия и закрытия сайдбара
  const [activeBar, setActiveBar] = useState(false)
  // Состояние для статуса, после отправки данных из формы
  const [successStatus, setSuccessStatus] = useState(false)
  // Тут мы получаем ширину страницу
  const { width } = useWindowResize();
  
  const textCount1 = width <= 990 ? "Техники" : "техник для достижения целей"
  const textCount2 = width <= 990 ? "Продуктивности" : "Увеличение личной продуктивности"
  const description = width <= 672 
    ? "Ваш успех зависит от ваших действий" 
    : `Когда ваше время и энергия лучше сфокусированы, 
    стремление к новым возможностям становится реальностью,  
    ваш успех зависит от ваших действий`

  // Функция для открытия сайдбара и смены статуса
  // Статус это после отправки формы сообщение в сайдбаре Спасибо за заявку
  const onActive = () => {
    setActiveBar(true)
    setSuccessStatus(false)
  }

  // Получаем валюту
  useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setValute(Math.round(data.Valute.GBP.Value))
    })
  }, []);

  // Число равное дате
  const today = new Date();
  const sum = sumOfDate(today); // src/utils/dateSum.ts
  
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.hero_text_box}>
          <h1 className={styles.hero_title}>
            Создаю условия для вашего успеха
          </h1>
          <p className={styles.hero_desc}>
              {description}
          </p>
          <div className={styles.hero_btns}>
            <div className={styles.hero_btn}>
              <Button className={clsx(styles.hero_button, styles.hero_button_white)} onClick={onActive}>
                {width <= 592 ? "Записаться" : "Записаться на консультацию"}
              </Button>
              <ButtonIcon img={arrow} className={styles.arrow_border} onClick={onActive} />
            </div>
            <div className={styles.hero_btn}>
              <Button className={styles.hero_button} onClick={onActive}>
                {width <= 592 ? "Заказать звонок" : "Бесплатная консультация"}
              </Button>
              <ButtonIcon img={arrowwite} className={styles.arrow_border_white} onClick={onActive} />
            </div>
          </div>
          <div className={styles.count}>
            <CountBox
              count={sum}
              text={textCount1}
            />
            <CountBox
              valute={valute}
              text={textCount2}
            />
          </div>
        </div>
        <img className={styles.hero_img} src={mentor} alt="Mentor IMG" />
      </section>
      <Sidebar 
        activeBar={activeBar} 
        setActiveBar={setActiveBar} 
        successStatus={successStatus}
        setSuccessStatus={setSuccessStatus}
      />
    </>
  )
}
