import React from "react";
import {
  BarSeries,
  Category,
  ChartComponent,
  Inject,
  SeriesCollectionDirective,
  SeriesDirective,
} from "@syncfusion/ej2-react-charts";
import { Header } from "../../components";
import { barChartData } from "../../data/dummy";
import { barCustomSeries } from "../../data/dummy";
import { barPrimaryXAxis, barPrimaryYAxis } from "../../data/dummy";

const Bar = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-[#d9f2ff] dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Bar" title="Bar Data" />
      <ChartComponent
        dataSource={barChartData}
        id="charts"
        primaryXAxis={barPrimaryXAxis}
        primaryYAxis={barPrimaryYAxis}
      >
        <SeriesCollectionDirective>
          {barCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
        <Inject services={[Category, BarSeries]} />
      </ChartComponent>
    </div>
  );
};

export default Bar;
