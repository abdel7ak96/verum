import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody
} from "shards-react";

import Chart from "../../utils/chart";

class ResultPieChart extends React.Component {
  constructor(props) {
    super(props);

    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const chartConfig = {
      type: "pie",
      data: this.props.chartData,
      options: {
        ...{
          legend: {
            position: "bottom",
            labels: {
              padding: 25,
              boxWidth: 20
            }
          },
          cutoutPercentage: 0,
          tooltips: {
            custom: false,
            mode: "index",
            position: "nearest"
          }
        },
        ...this.props.chartOptions
      }
    };

    new Chart(this.canvasRef.current, chartConfig);
  }

  render() {
    const { title } = this.props;
    return (
      <Card small className="h-100">
        <CardHeader className="border-bottom">
          <h6 className="m-0">{title}</h6>
        </CardHeader>
        <CardBody className="d-flex py-0">
          <canvas
            height="220"
            ref={this.canvasRef}
            className="blog-users-by-device m-auto"
          />
        </CardBody>
      </Card>
    );
  }
}

ResultPieChart.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The chart config object.
   */
  chartConfig: PropTypes.object,
  /**
   * The Chart.js options.
   */
  chartOptions: PropTypes.object,
  /**
   * The chart data.
   */
  chartData: PropTypes.object
};

ResultPieChart.defaultProps = {
  title: "Results",
  chartData: {
    datasets: [
      {
        hoverBorderColor: "#ffffff",
        data: [38.3, 24.2, 7.5, 12.0, 17.0],
        backgroundColor: [
          "rgba(0, 184, 216, 0.8)",
          "rgba(23,198,113, 0.8)",
          "rgba(255,180,0, 0.8)",
          "rgba(255,65,105, 0.8)",
          "rgb(0,123,255, 0.8)"
        ]
      }
    ],
    labels: ["Candiate 1", "Candidate 2", "Candidate 3", "Candidate 4", "Candidate 5"]
  }
};

export default ResultPieChart;
