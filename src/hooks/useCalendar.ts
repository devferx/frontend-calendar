import { useState } from "react";

const now = new Date();

export const useCalendar = () => {
  const [state, setState] = useState({
    year: now.getFullYear(),
    month: now.getMonth(),
  });

  const nextMonth = () => {
    if (state.month + 1 > 11) {
      return setState({ ...state, month: 0, year: state.year + 1 });
    }
    setState({ ...state, month: state.month + 1 });
  };

  const prevMonth = () => {
    if (state.month - 1 < 0) {
      return setState({ ...state, month: 11, year: state.year - 1 });
    }
    setState({ ...state, month: state.month - 1 });
  };

  return { ...state, nextMonth, prevMonth };
};
