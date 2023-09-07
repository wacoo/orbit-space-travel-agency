import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { rocketReservation, cancelRocketReservation } from '../../redux/rockets/rocketsReducer';

function RocketItem(props) {
  const dispatch = useDispatch();
  const { rocket } = props;
  const {
    id, name, flickrImages, description, reserved,
  } = rocket;

  const rocketBooking = () => {
    dispatch(rocketReservation(id));
  };

  const cancelRocketBooking = () => {
    dispatch(cancelRocketReservation(id));
  };

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-md-4">
          <img src={flickrImages[0]} alt={name} className="img-fluid" />
        </div>
        <div className="col-md-8">
          <h3 className="mb-3">{name}</h3>
          <p>
            {' '}
            {reserved ? <span className="badge bg-primary">Reserved</span> : null}

            {description}

          </p>
          {reserved ? (
            <button type="button" onClick={cancelRocketBooking} className="btn btn-danger">
              Cancel Reservation
            </button>
          ) : (
            <button type="button" onClick={rocketBooking} className="btn btn-primary">
              Reserve Rocket
            </button>
          )}
        </div>
      </div>
    </li>
  );
}

RocketItem.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    flickrImages: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default RocketItem;
