import { isToday } from "../../utils/isToday";
import { getMothString } from "../../utils/getMonthString";

import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";
import "./calendar.css";

interface CalendarProps {
  days: number[];
  month: number;
  year: number;
  nextMonth: () => void;
  prevMonth: () => void;
}

export const Calendar = ({
  days,
  month,
  year,
  prevMonth,
  nextMonth,
}: CalendarProps) => {
  return (
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
        {days.map((day, i) => (
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
  );
};
