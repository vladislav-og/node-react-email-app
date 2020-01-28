import React from 'react';
import {Link} from 'react-router-dom'
import SurveyList from './surveys/SurveyList'

const Dashboard = () => {
  return (
      <div style={{ textAlign: 'center' }}>
          <SurveyList/>
          <div className="fixed-action-btn">
              <Link className="waves-effect btn-floating btn-large red" to="/surveys/new">
                  <i className="material-icons">add</i>
              </Link>
          </div>
      </div>
  );
};

export default Dashboard;
