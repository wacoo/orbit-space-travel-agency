import { useSelector } from 'react-redux';
import React from 'react';
import ProfileRocketItem from './ProfileRocketItem';

const ProfileRocketsContainer = () => {
  let status = null;
  const rockets = useSelector((state) => state.Rockets);
  const filteredRocket = rockets.filter((rocket) => rocket.reserved === true);
  if (!filteredRocket.length) {
    status = 'No Rockets reserved';
  }
  return (
    <>
      <h2>My Rockets</h2>
      <div className="profile-rocket-list-container">

        {status && (
          <div className="alert alert-danger">{status}</div>
        )}

        <ul className="list-group">
          {filteredRocket.map((rocket) => (
            <ProfileRocketItem
              key={rocket.id}
              rocket={rocket}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProfileRocketsContainer;
