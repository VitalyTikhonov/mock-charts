import { AxisOptions } from "react-charts";
import { RealEstateQuantity } from "../../../shared/constants";

export const primaryAxis: AxisOptions<RealEstateQuantity> = {
  getValue: (datum) => datum.date,
};

export const secondaryAxes: AxisOptions<RealEstateQuantity>[] = [
  {
    getValue: (datum) => datum.sqKmMillions,
  },
];

export const primaryAxisBar: AxisOptions<RealEstateQuantity> = {
  getValue: (datum) => datum.date,
};

export const secondaryAxesBar: AxisOptions<RealEstateQuantity>[] = [
  {
    getValue: (datum) => datum.sqKmMillions,
    stacked: true,
    elementType: "bar"
  },
];
