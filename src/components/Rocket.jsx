import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './Rocket.css';
import { fetchRockets } from '../features/rockets/rocketsSlice';

const Rocket = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return rockets.map((rocket) => (
    <div className="card" key={rocket.rocket_name}>
      <div className="card-image">
        <img src={rocket.flickr_images[1]} alt="" />
      </div>
      <div className="card-text">
        <h2 className="rocket-name">{rocket.rocket_name}</h2>
        <p className="rocket-desc">
          {rocket.description}
        </p>
        <div>
          <button type="button">Reserve Rocket</button>
        </div>
      </div>
    </div>
  ));
};

export default Rocket;
