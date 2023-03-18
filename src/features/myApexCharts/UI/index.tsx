import Chart from "react-apexcharts";
import { apexBarData } from "shared";
import { options } from "../constants";

export default function MyApexCharts() {
  return (
    <div className="mock_charts-chart_wrapper">
      <Chart options={options} series={apexBarData} type="bar" /* width={500} height={320} */ />
    </div>
  );
}
