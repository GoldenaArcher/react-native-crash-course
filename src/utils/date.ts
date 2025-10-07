import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";

dayjs.extend(advancedFormat);

const MONTH_DAY_YEAR_FORMAT = "MMMM Do, YYYY";

type DateFormat = typeof MONTH_DAY_YEAR_FORMAT;

export const getMonthDayYear = (
  dateString: string,
  format: DateFormat = MONTH_DAY_YEAR_FORMAT
): string => {
  return dayjs(dateString).format(format);
};
