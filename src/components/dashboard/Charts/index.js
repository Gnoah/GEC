import React from 'react';
import PerformanceChart from './PerformanceChart';
import Nasdaq from './Nasdaq';
import PublicPreference from './PublicPreference';
import UserBehavior from './UserBehavior';

const Charts = () => (
  <div className="content">
    <div class="row">
        <div class="col-xl-8 mb-5 mb-xl-0">

          <div class="card bg-gradient-default shadow">
            <div class="card-header bg-transparent">
              <div class="row align-items-center">
                <div class="col">
                  <h6 class="text-uppercase text-light ls-1 mb-1">Overview</h6>
                  <h2 class="text-white mb-0">Sales value</h2>
                </div>
                <div class="col">
                  <ul class="nav nav-pills justify-content-end">
                    <li class="nav-item mr-2 mr-md-0" data-toggle="chart" data-target="#chart-sales" data-update='{"data":{"datasets":[{"data":[0, 20, 10, 30, 15, 40, 20, 60, 60]}]}}' data-prefix="$" data-suffix="k">
                      <a href="#" class="nav-link py-2 px-3 active" data-toggle="tab">
                        <span class="d-none d-md-block">Month</span>
                        <span class="d-md-none">M</span>
                      </a>
                    </li>
                    <li class="nav-item" data-toggle="chart" data-target="#chart-sales" data-update='{"data":{"datasets":[{"data":[0, 20, 5, 25, 10, 30, 15, 40, 40]}]}}' data-prefix="$" data-suffix="k">
                      <a href="#" class="nav-link py-2 px-3" data-toggle="tab">
                        <span class="d-none d-md-block">Week</span>
                        <span class="d-md-none">W</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="card-body">
              {/* <!-- Chart --> */}
              <div class="chart">
                {/* <!-- Chart wrapper --> */}
                <canvas id="chart-sales" class="chart-canvas"></canvas>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4">
          <div class="card shadow">
            <div class="card-header bg-transparent">
              <div class="row align-items-center">
                <div class="col">
                  <h6 class="text-uppercase text-muted ls-1 mb-1">Performance</h6>
                  <h2 class="mb-0">Total orders</h2>  
                 </div>
              </div>
            </div>
            <div class="card-body">
              {/* <!-- Chart --> */}
              <div class="chart">
                <canvas id="chart-orders" class="chart-canvas"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>

    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <PerformanceChart />
        </div>
        <div className="col-md-6">
          <Nasdaq />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <PublicPreference />
        </div>
        <div className="col-md-6">
          <UserBehavior />
        </div>
      </div>
    </div>
  </div>
);

export default Charts;