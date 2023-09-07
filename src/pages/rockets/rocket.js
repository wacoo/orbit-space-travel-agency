import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRocketDataFromAPI } from '../../redux/rockets/rocketsReducer';
import RocketItem from './RocketItem';

function Rockets() {
  const dispatch = useDispatch();
  const rocket = useSelector((state) => state.Rockets);

  useEffect(() => {
    dispatch(fetchRocketDataFromAPI());
  }, [dispatch]);

  return (
    <ul className="list-group">
      {rocket.map((rocket) => (
        <RocketItem key={rocket.id} rocket={rocket} />
      ))}
    </ul>
  );
}

export default Rockets;
