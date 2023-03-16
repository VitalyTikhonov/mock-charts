export type RealEstateQuantity = {
  date: Date;
  sqKmMillions: number;
};

type Series = {
  label: string;
  data: RealEstateQuantity[];
};

export const data: Series[] = [
  {
    label: "Всего",
    data: [
      {
        date: new Date(2020, 1, 1),
        sqKmMillions: 107,
      },
      {
        date: new Date(2020, 2, 1),
        sqKmMillions: 103,
      },
      {
        date: new Date(2020, 3, 1),
        sqKmMillions: 101,
      },
      {
        date: new Date(2020, 4, 1),
        sqKmMillions: 100,
      },
      {
        date: new Date(2020, 5, 1),
        sqKmMillions: 100,
      },
      {
        date: new Date(2020, 6, 1),
        sqKmMillions: 99,
      },
      {
        date: new Date(2020, 7, 1),
        sqKmMillions: 99,
      },
      {
        date: new Date(2020, 8, 1),
        sqKmMillions: 99,
      },
      {
        date: new Date(2020, 9, 1),
        sqKmMillions: 99,
      },
      {
        date: new Date(2020, 10, 1),
        sqKmMillions: 99,
      },
      {
        date: new Date(2020, 11, 1),
        sqKmMillions: 99,
      },
      {
        date: new Date(2020, 12, 1),
        sqKmMillions: 98,
      },
      {
        date: new Date(2021, 1, 1),
        sqKmMillions: 94,
      },
      {
        date: new Date(2021, 2, 1),
        sqKmMillions: 92,
      },
      {
        date: new Date(2021, 3, 1),
        sqKmMillions: 92,
      },
      {
        date: new Date(2021, 4, 1),
        sqKmMillions: 92,
      },
      {
        date: new Date(2021, 5, 1),
        sqKmMillions: 94,
      },
      {
        date: new Date(2021, 6, 1),
        sqKmMillions: 96,
      },
      {
        date: new Date(2021, 7, 1),
        sqKmMillions: 98,
      },
      {
        date: new Date(2021, 8, 1),
        sqKmMillions: 99,
      },
      {
        date: new Date(2021, 9, 1),
        sqKmMillions: 99,
      },
      {
        date: new Date(2021, 10, 1),
        sqKmMillions: 99,
      },
      {
        date: new Date(2021, 11, 1),
        sqKmMillions: 99,
      },
      {
        date: new Date(2021, 12, 1),
        sqKmMillions: 99,
      },
      {
        date: new Date(2022, 1, 1),
        sqKmMillions: 96,
      },
      {
        date: new Date(2022, 2, 1),
        sqKmMillions: 94,
      },
      {
        date: new Date(2022, 3, 1),
        sqKmMillions: 95,
      },
      {
        date: new Date(2022, 4, 1),
        sqKmMillions: 96,
      },
      {
        date: new Date(2022, 5, 1),
        sqKmMillions: 95,
      },
      {
        date: new Date(2022, 6, 1),
        sqKmMillions: 96,
      },
      {
        date: new Date(2022, 7, 1),
        sqKmMillions: 98,
      },
      {
        date: new Date(2022, 8, 1),
        sqKmMillions: 99,
      },
      {
        date: new Date(2022, 9, 1),
        sqKmMillions: 100,
      },
      {
        date: new Date(2022, 10, 1),
        sqKmMillions: 101,
      },
      {
        date: new Date(2022, 11, 1),
        sqKmMillions: 101,
      },
      {
        date: new Date(2022, 12, 1),
        sqKmMillions: 101,
      },
      {
        date: new Date(2023, 1, 1),
        sqKmMillions: 99,
      },
      {
        date: new Date(2023, 2, 1),
        sqKmMillions: 97,
      },
    ],
  },
];
