import React from "react";

import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  PyramidSeries,
  AccumulationDataLabel,
  AccumulationTooltip,
  AccumulationLegend,
  AccumulationSelection,
} from "@syncfusion/ej2-react-charts";
import { useStateContext } from "../../contexts/ContextProvider";
import { PyramidData } from "../../data/dummy";
import { Header } from "../../components";
const Pyramid = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-[#d9f2ff] dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Pyramid" title="Pyramid Data" />
      <AccumulationChartComponent
        id="pyramid-chart"
        legendSettings={{ background: "white" }}
        tooltip={{ enable: true }}
        background={currentMode === "Dark" ? "#33373E" : "#fff"}
      >
        <Inject
          services={[
            PyramidSeries,
            AccumulationDataLabel,
            AccumulationTooltip,
            PyramidSeries,
            AccumulationLegend,
            AccumulationSelection,
          ]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            name="Food"
            dataSource={PyramidData}
            xName="x"
            yName="y"
            type="Pyramid"
            width="45%"
            height="80%"
            neckWidth="15%"
            gapRatio={0.03}
            explode
            emptyPointSettings={{ mode: "Drop", fill: "red" }}
            dataLabel={{
              visible: true,
              position: "Inside",
              name: "text",
            }}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default Pyramid;
