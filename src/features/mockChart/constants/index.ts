export type RealEstateQuantity = {
  date: Date;
  sqKmMillions: number;
};

type Series = {
  label: string;
  data: RealEstateQuantity[];
};

const dates = [
  new Date(2020, 1, 1),
  new Date(2020, 2, 1),
  new Date(2020, 3, 1),
  new Date(2020, 4, 1),
  new Date(2020, 5, 1),
  new Date(2020, 6, 1),
  new Date(2020, 7, 1),
  new Date(2020, 8, 1),
  new Date(2020, 9, 1),
  new Date(2020, 10, 1),
  new Date(2020, 11, 1),
  new Date(2020, 12, 1),
  new Date(2021, 1, 1),
  new Date(2021, 2, 1),
  new Date(2021, 3, 1),
  new Date(2021, 4, 1),
  new Date(2021, 5, 1),
  new Date(2021, 6, 1),
  new Date(2021, 7, 1),
  new Date(2021, 8, 1),
  new Date(2021, 9, 1),
  new Date(2021, 10, 1),
  new Date(2021, 11, 1),
  new Date(2021, 12, 1),
  new Date(2022, 1, 1),
  new Date(2022, 2, 1),
  new Date(2022, 3, 1),
  new Date(2022, 4, 1),
  new Date(2022, 5, 1),
  new Date(2022, 6, 1),
  new Date(2022, 7, 1),
  new Date(2022, 8, 1),
  new Date(2022, 9, 1),
  new Date(2022, 10, 1),
  new Date(2022, 11, 1),
  new Date(2022, 12, 1),
  new Date(2023, 1, 1),
  new Date(2023, 2, 1),
];

const total = [
  107, 103, 101, 100, 100, 99, 99, 99, 99, 99, 99, 98, 94, 92, 92, 92, 94, 96, 98, 99, 99, 99, 99, 99, 96, 94, 95, 96,
  95, 96, 98, 99, 100, 101, 101, 101, 99, 97,
];

const sold = [
  42, 41, 41, 42, 39, 43, 43, 43, 44, 45, 45, 45, 41, 40, 40, 41, 41, 43, 43, 43, 42, 42, 41, 40, 38, 36, 37, 38, 39,
  39, 38, 37, 36, 35, 35, 34, 31, 30,
];

const nonSold = [
  38, 36, 35, 34, 31, 33, 33, 32, 32, 31, 30, 30, 29, 28, 28, 28, 28, 29, 30, 31, 32, 33, 34, 35, 35, 35, 36, 35, 35,
  35, 36, 37, 38, 39, 40, 40, 41, 41,
];

const notOnSale = [
  27, 26, 25, 25, 30, 24, 24, 23, 24, 24, 24, 24, 24, 24, 24, 23, 24, 24, 25, 26, 25, 24, 24, 23, 24, 23, 23, 22, 22,
  23, 24, 25, 25, 26, 26, 27, 27, 27,
];

function makeData(numbers: number[]): RealEstateQuantity[] {
  return dates.map((date, index) => ({ date, sqKmMillions: numbers[index] }));
}

export const data: Series[] = [
  {
    label: "Всего",
    data: makeData(total),
  },
  {
    label: "Продано",
    data: makeData(sold),
  },
  {
    label: "Не продано (продажи открыты)",
    data: makeData(nonSold),
  },
  {
    label: "Продажи не открыты",
    data: makeData(notOnSale),
  },
];
