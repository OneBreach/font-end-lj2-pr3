import { FC } from "react";
// apexcharts library
import ApexCharts, { Props } from "react-apexcharts";

// dit laat zien wat voor data / props die verwacht voor de piechart
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
  // kleur piechart
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
      {/* geen global maar Server Side Rendering anders deed die het niet*/}
      {typeof window !== 'undefined' && (
        <ApexCharts type={type} series={chartData} options={defaultOptions} data-testid="apexchart" />
      )}
    </div>
  );
};

export default PieChart;
