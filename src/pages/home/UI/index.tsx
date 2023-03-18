import MyReactCharts from "features/myReactCharts";
import MyApexCharts from "features/myApexCharts";
import "./index.scss";

export default function Home() {
  return (
    <main className="main_layout">
      <h1>Реализация квартир в строящихся домах в Российской Федерации</h1>
      <h2>Объем строящегося жилья в Российской Федерации</h2>
      <MyApexCharts />
      <MyReactCharts />
    </main>
  );
}
