import { Chart } from "react-charts";
import { lineData, barData } from "../constants";
import { primaryAxis, secondaryAxes, primaryAxisBar, secondaryAxesBar } from "../model";
import "./index.scss";

export default function MockCharts() {
  return (
    <div className="mock_charts">
      <div className="mock_charts-chart_wrapper">
        <Chart
          options={{
            data: lineData,
            primaryAxis,
            secondaryAxes,
          }}
        />
      </div>

      <div className="mock_charts-chart_wrapper">
        <Chart
          options={{
            data: barData,
            primaryAxis: primaryAxisBar,
            secondaryAxes: secondaryAxesBar,
          }}
        />
      </div>
    </div>
  );
}
