import { useCalendar } from "../../hooks/useCalendar";

import { isToday } from "../../utils/isToday";
import { getMothString } from "../../utils/getMonthString";
import { generateArrayByDays } from "../../utils/generateArrayByDays";

import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";
import "./calendar.css";

export const Calendar = () => {
  const { month, year, prevMonth, nextMonth } = useCalendar();
  return (
    <div className="container__right">
      <p className="container__right__title">{year}</p>
      <div className="calendar">
        <div className="calendar__header">
          <button className="calendar__header__button" onClick={prevMonth}>
            <img src={arrowLeft} alt="Arrow Left" />
          </button>
          <span className="calendar__header__month">
            {getMothString(month).toUpperCase()}
          </span>
          <button className="calendar__header__button" onClick={nextMonth}>
            <img src={arrowRight} alt="Arrow Right" />
          </button>
        </div>
        <div className="calendar__grid">
          <span>DOM</span>
          <span>LUN</span>
          <span>MAR</span>
          <span>MIÉ</span>
          <span>JUE</span>
          <span>VIE</span>
          <span>SÁB</span>
          {generateArrayByDays(month, year).map((day, i) => (
            <span
              key={`${i}-${day}`}
              className={
                isToday(day, month, year)
                  ? "calendar__grid__item-active"
                  : undefined
              }
            >
              {day != -1 && day}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
