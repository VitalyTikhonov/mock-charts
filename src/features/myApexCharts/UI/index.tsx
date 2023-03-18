import Chart from "react-apexcharts";
import { apexBarData } from "shared";
import { options } from "../constants";
import "./index.scss";

export default function MyApexCharts() {
  return (
    <div className="mock_charts-chart_wrapper my_apex_chart">
      <Chart options={options} series={apexBarData} type="bar" /* width={100} */ height={400} />
    </div>
  );
}
