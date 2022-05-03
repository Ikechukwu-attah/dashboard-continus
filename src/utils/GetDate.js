import { formatDate } from "./FormatDate";

export const getPreviousDate = (day) => {
    const date = new Date();
    date.setDate(date.getDate() - day);
    return formatDate(date)["yyyy-mm-dd"];
};

export const getTodayDate = () => formatDate(new Date())["yyyy-mm-dd"];