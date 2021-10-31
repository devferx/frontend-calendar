import { Calendar } from "./components/Calendar";
import { getDayString } from "./utils/getDayString";
import { getMothString } from "./utils/getMonthString";

const App = () => {
  const now = new Date();

  return (
    <main className="main-container">
      <section className="container">
        <div className="container__left">
          <p className="container__left__title">{now.getDate()}</p>
          <p className="container__left__desc">
            {getDayString(now.getDay())} · {getMothString(now.getMonth())} ·{" "}
            {now.getFullYear()}
          </p>
        </div>

        <Calendar />
      </section>
    </main>
  );
};

export default App;
