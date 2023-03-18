import { barData, dates, Series } from "shared";

export const options = {
  chart: {
    id: "my-apexchart",
    stacked: true
  },
  xaxis: {
    categories: dates.map((d) => d.toLocaleDateString('ru-RU',  { year: '2-digit', month: 'short' })),
  },
};
