import React from "react";
import {
  Category,
  ChartComponent,
  Inject,
  SeriesCollectionDirective,
  SeriesDirective,
  CandleSeries,
  HiloSeries,
  Tooltip,
  DateTime,
  Zoom,
  Logarithmic,
  Crosshair,
} from "@syncfusion/ej2-react-charts";
import { Header } from "../../components";
import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
const Financial = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-[#d9f2ff] dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="financial" title="financial data" />
      <ChartComponent
        id="charts"
        primaryXAxis={FinancialPrimaryXAxis}
        primaryYAxis={FinancialPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true, shared: true }}
        crosshair={{ enable: true, lineType: "Vertical", line: { width: 0 } }}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
      >
        <Inject
          services={[
            CandleSeries,
            Category,
            HiloSeries,
            Tooltip,
            DateTime,
            Zoom,
            Logarithmic,
            Crosshair,
          ]}
        />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={financialChartData}
            xName="x"
            yName="low"
            name="Apple Inc"
            type="Hilo"
            low="low"
            high="high"
          />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Financial;
