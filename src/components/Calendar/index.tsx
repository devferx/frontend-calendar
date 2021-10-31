import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";
import "./calendar.css";

export const Calendar = () => {
  return (
    <div className="calendar">
      <div className="calendar__header">
        <button className="calendar__header__button">
          <img src={arrowLeft} alt="Arrow Left" />
        </button>
        <span className="calendar__header__month">JUNIO</span>
        <button className="calendar__header__button">
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
        <span></span>
        <span></span>
        <span>1</span>
        <span>2</span>
        <span className="calendar__grid__item-active">3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>10</span>
        <span>11</span>
        <span>12</span>
        <span>13</span>
        <span>14</span>
        <span>15</span>
        <span>16</span>
        <span>17</span>
        <span>18</span>
        <span>19</span>
        <span>20</span>
        <span>21</span>
        <span>22</span>
        <span>23</span>
        <span>24</span>
        <span>25</span>
        <span>26</span>
        <span>27</span>
        <span>28</span>
        <span>29</span>
        <span>30</span>
        <span>31</span>
      </div>
    </div>
  );
};
