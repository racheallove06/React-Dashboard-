import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  SplineAreaSeries,
} from "@syncfusion/ej2-react-charts";
import { Header } from "../../components";
import {
  areaCustomSeries,
  AreaPrimaryXAxis,
  AreaPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
export default function LineChart() {
  const { currentMode } = useStateContext();
  return (
    <div>
      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        {" "}
        <Header category="Chart" title="Inflation Rate" />
        <ChartComponent
          id="line-chart"
          height="420px "
          primaryXAxis={AreaPrimaryXAxis}
          primaryYAxis={AreaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          tooltip={{ enable: true }}
          background={currentMode === "Dark" ? "#33373e" : "#fff"}
        >
          <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
}
