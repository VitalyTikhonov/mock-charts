import { AxisOptions } from "react-charts";
import { RealEstateQuantity } from "../constants";

export const primaryAxis: AxisOptions<RealEstateQuantity> = {
  getValue: (datum) => datum.date,
};

export const secondaryAxes: AxisOptions<RealEstateQuantity>[] = [
  {
    getValue: (datum) => datum.sqKmMillions,
  },
];
