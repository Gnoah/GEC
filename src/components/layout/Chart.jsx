import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage extends React.Component {
  state = {
    dataLine: {
      labels: ["2013", "2014", "2015", "2016", "2017", "2018", "2019"],     
      datasets: [
        {
          label: "Reforestation",
          fill: true,
          pointHitRadius: 10,
          lineTension: 0.3,
          backgroundColor: "rgba(184, 185, 210, .3)",
          borderColor: "rgb(35, 26, 136)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(35, 26, 136)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: "Deforestation",
          fill: true,
          lineTension: 0.3,
          backgroundColor: "rgba(225, 204,230, .3)",
          borderColor: "rgb(205, 130, 158)",
          borderCapStyle: "butt",
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: "miter",
          pointBorderColor: "rgb(205, 130,1 58)",
          pointBackgroundColor: "rgb(255, 255, 255)",
          pointBorderWidth: 10,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgb(0, 0, 0)",
          pointHoverBorderColor: "rgba(220, 220, 220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          data: [28, 48, 40, 30, 70,40, 80]
        }
      ]
    }
  };
  
  // setGradientColor = (canvas, color) => {
  //   const ctx = canvas.getContext('2d');
  //   const gradient = ctx.createlinearGradient(0,0,600,550);
  //   gradient.addColorStop(0,color);
  //   gradient.addColorStop(0.95,"rgba(220, 220, 220, 1)")
  // }

  // getChartData = canvas => {
  //   const data = this.state.data;
  //   if (data.datasets) {
  //     let colors = ["rgba(184, 185, 210, .3)","rgb(35, 26, 136)"];
  //     data.datasets.forEach((set,i) => {
  //       set.backgroundColor = this.setGradientColor(canvas, color[i]);
  //       set.borderColor =  "white";
  //       set.pointBorderWidth = 2;
  //     });
  //   }
  //   return data;
  // }

  render() {
    return (
      <div className="row" id="chart1">
        <MDBContainer >
          <h3 className="mt-5">Chart of deforestion in the world</h3>
          <Line data={this.state.dataLine} options={{ responsive: true }} />
        </MDBContainer>
        <br/><br/>
      </div>
      
    );
  }
}

export default ChartsPage;