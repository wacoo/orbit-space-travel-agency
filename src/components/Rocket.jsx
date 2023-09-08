import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './Rocket.css';
import { cancelRocketReservation, fetchRockets, reserveRocket } from '../redux/rockets/rocketsSlice';

const Rocket = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    if (rockets[0].id === '') {
      dispatch(fetchRockets());
    }
  }, [dispatch, rockets]);

  const handleReserveRocket = (id) => {
    dispatch(reserveRocket(id));
  };

  const cancelReservation = (id) => {
    dispatch(cancelRocketReservation(id));
  };

  return (
    <div className="card-container">
      {
        rockets.map((rocket) => (
          <div className="card" key={rocket.id}>
            <div className="card-image">
              <img src={rocket.flickr_images[1]} alt="" />
            </div>
            <div className="card-text">
              <h2>{rocket.rocket_name}</h2>
              <p className="rocket-desc">
                {rocket.reserved ? <span className="reserved">Reserved</span> : null}
                {rocket.description}
              </p>
              <div>
                {rocket.reserved ? (<button type="button" className="cancel-button" onClick={() => cancelReservation(rocket.id)}>Cancel Reservation</button>)
                  : (<button type="button" className="reserve-button" onClick={() => handleReserveRocket(rocket.id)}>Reserve Rocket</button>)}
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Rocket;
