import React from "react";
import { BarChart } from "@mui/x-charts";

export const SalesTrendChart = () => {
    return (<BarChart
        xAxis={[{ scaleType: 'band', data: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ] }]}
        series={[{ data: [
            6000, 19000, 4500, 28000, 45000, 8500, 23000, 35000, 3000, 31000, 27500,
            2600,
        ] }]}
        width={500}
        height={300}
      />);
};
export default SalesTrendChart;
