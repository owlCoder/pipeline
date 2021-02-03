import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const DownloadItem = ({
  id,
  removeMedia,
  title,
  downloadedOn,
  quality,
}) => (
  <li className="list-group-item">
    {title}
    <br />
    <small>Датум преузимања: {downloadedOn}</small>
    <br />
    <small>Квалитет: {quality}p</small>
    <hr />
    <div className="d-flex justify-content-between">
      <NavLink
        className="btn btn-primary"
        to={`/offline/${id}`}
      >Преглед видеа</NavLink>
      <button
        type="button"
        className="btn btn-danger"
        onClick={removeMedia}
      >Брисање видеа</button>
    </div>
  </li>
);

DownloadItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  removeMedia: PropTypes.func.isRequired,
};

export default DownloadItem;
