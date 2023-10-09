import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  DateTime,
  Tooltip,
  DataLabel,
  LineSeries,
} from "@syncfusion/ej2-react-charts";
import { Header } from "../../components";
const ColorMapping = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-[#d9f2ff] dark:bg-secondary-dark-bg rounded-3xl">
      <Header title="Color Mapping Data" category="Color Mapping" />
      <ChartComponent>
        <Inject services={[Legend, DataLabel, Tooltip, LineSeries]} />
        <SeriesCollectionDirective>
          <SeriesDirective />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default ColorMapping;
