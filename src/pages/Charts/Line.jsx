import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, LineSeries } from '@syncfusion/ej2-react-charts';

const Line = () => {
  const lineChartData = [
    { x: 'Jan', y: 15 },
    // Add more data here
  ];

  return (
    <div className="charts">
      <ChartComponent primaryXAxis={{ valueType: 'Category' }}>
        <Inject services={[LineSeries]} />
        <SeriesCollectionDirective>
          <SeriesDirective dataSource={lineChartData} xName="x" yName="y" type="Line" />
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default Line;
