import { MatDatetimeFormats } from "./datetime-formats";

export const MAT_NATIVE_DATETIME_FORMATS: MatDatetimeFormats = {
  parse: {},
  display: {
    dateInput: {year: "numeric", month: "2-digit", day: "2-digit"},
    monthInput: {month: "long"},
    datetimeInput: {year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit"},
    timeInput: {hour: "2-digit", minute: "2-digit"},
    monthYearLabel: {year: "numeric", month: "short"},
    dateA11yLabel: {year: "numeric", month: "long", day: "numeric"},
    monthYearA11yLabel: {year: "numeric", month: "long"}
  }
};