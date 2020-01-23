import React from 'react';
import {Link} from 'react-router-dom'

const Dashboard = () => {
  return (
      <div style={{ textAlign: 'center' }}>
          <h1>
              Dashboard!
          </h1>
          <div className="fixed-action-btn">
              <Link className="waves-effect btn-floating btn-large red" to="/surveys/new">
                  <i className="material-icons">add</i>
              </Link>
          </div>
      </div>
  );
};

export default Dashboard;
