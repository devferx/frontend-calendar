import { Calendar } from "./components/Calendar";

const App = () => {
  return (
    <main className="main-container">
      <section className="container">
        <div className="container__right">
          <p className="container__right__title">3</p>
          <p className="container__right__desc">Jueves · Junio · 2021</p>
        </div>
        <div className="container__left">
          <p className="container__left__title">2021</p>
          <Calendar />
        </div>
      </section>
    </main>
  );
};

export default App;
