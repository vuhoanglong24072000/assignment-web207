import React from "react";
import PropTypes from "prop-types";

const Dashboard = ({ products}) => {
const sp = products.length;
  return (
    <div className="row">
        <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Tổng sản phẩm</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">{sp}</div>
                    </div>
                    <div class="col-auto">
                      <i class="fas fa-comments fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;

