import { Chart } from "react-charts";
import { data } from "../constants";
import { primaryAxis, secondaryAxes } from "../model";
import "./index.scss";

export default function MockChart() {
  return (
    <div className="mock_chart">
      <Chart
        options={{
          data,
          primaryAxis,
          secondaryAxes,
          initialHeight: 500,
        }}
      />
    </div>
  );
}
