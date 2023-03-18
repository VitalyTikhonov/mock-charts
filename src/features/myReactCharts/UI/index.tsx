import { Chart } from "react-charts";
import { lineData, RCBarData } from "../../../shared/constants";
import { primaryAxis, secondaryAxes, primaryAxisBar, secondaryAxesBar } from "../model";

export default function MyReactCharts() {
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
            data: RCBarData,
            primaryAxis: primaryAxisBar,
            secondaryAxes: secondaryAxesBar,
            // onClickDatum: (datum, event) => {
            //   console.log("datum", datum);
            //   // console.log("event", event);
            //   console.log("================================");
            // },
          }}
        />
      </div>
    </div>
  );
}
