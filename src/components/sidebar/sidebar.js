import React from 'react';
import './sidebar.css';
import search from '../../icons/search.svg';
import database from '../../icons/database.svg';
import video from '../../icons/video.svg';

export default () => {
  return (
    <div className="sidebar col-2">
      <ul>
        <li className="selected"><img src={search} /></li>
        <li><img src={database} /></li>
        <li className="divider">&nbsp;</li>
        <li className="active">
          <img src={video} />
          <div className="progress">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{"width": "10%"}}
              aria-valuenow="25"
              ria-valuemin="0"
              aria-valuemax="100">&nbsp;</div>
          </div>
        </li>
        <li className="active">
          <img src={video} />
          <div className="progress">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{"width": "60%"}}
              aria-valuenow="25"
              ria-valuemin="0"
              aria-valuemax="100">&nbsp;</div>
          </div>
        </li>
        <li className="active">
          <img src={video} />
          <div className="progress">
            <div
              className="progress-bar bg-info"
              role="progressbar"
              style={{"width": "32%"}}
              aria-valuenow="25"
              ria-valuemin="0"
              aria-valuemax="100">&nbsp;</div>
          </div>
        </li>
      </ul>
    </div>
  );
};