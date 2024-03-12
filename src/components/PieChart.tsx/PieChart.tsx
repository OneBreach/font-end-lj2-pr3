import { FC } from "react";
import ApexCharts, { Props } from "react-apexcharts";

interface PieChartProps {
  className?: string;
  type?: "pie" | "donut";
  data: {
    label: string | number;
    value: number;
  }[];
}

const PieChart: FC<PieChartProps> = ({ className, type = "pie", data }) => {
  const chartData = data.map((item) => item.value);

  const defaultOptions: Props["options"] = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    legend: {
      position: "left",
    },
    labels: data.map((item) => String(item.label)),
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.75,
        opacityFrom: 0.8,
        opacityTo: 0.4,
      },
    },
  };

  return (
    <div className={className}>
      <ApexCharts type={type} series={chartData} options={defaultOptions} />
    </div>
  );
};

export default PieChart;
