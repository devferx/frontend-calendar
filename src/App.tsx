import { Calendar } from "./components/Calendar";
import { useCalendar } from "./hooks/useCalendar";
import { generateArrayByDays } from "./utils/generateArrayByDays";
import { getDayString } from "./utils/getDayString";
import { getMothString } from "./utils/getMonthString";

const App = () => {
  const { month, year, nextMonth, prevMonth } = useCalendar();
  const now = new Date();

  return (
    <main className="main-container">
      <section className="container">
        <div className="container__right">
          <p className="container__right__title">{now.getDate()}</p>
          <p className="container__right__desc">
            {getDayString(now.getDay())} · {getMothString(now.getMonth())} ·{" "}
            {now.getFullYear()}
          </p>
        </div>
        <div className="container__left">
          <p className="container__left__title">{year}</p>
          <Calendar
            days={generateArrayByDays(month, year)}
            year={year}
            month={month}
            prevMonth={prevMonth}
            nextMonth={nextMonth}
          />
        </div>
      </section>
    </main>
  );
};

export default App;
