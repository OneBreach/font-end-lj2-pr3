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
      // Update fill to create a gradient
      type: "gradient",
      gradient: {
        // Set shade to 'dark' for darker colors
        shade: "dark",
        type: "horizontal", // Optional, controls gradient direction
        // Adjust these values to customize the gradient darkness
        shadeIntensity: 0.75, // Higher value creates darker shades
        opacityFrom: 0.8, // Adjust starting opacity (0-1)
        opacityTo: 0.4, // Adjust ending opacity (0-1)
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
