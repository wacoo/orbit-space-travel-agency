import { useSelector } from 'react-redux';
import './Profile.css';
import Header from './Header';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  return (
    <div className="profile-container">
      <Header />
      <div className="profile-wrapper">
        <table className="my-mission">
          <thead>
            <tr>
              <th>My Missions</th>
            </tr>
          </thead>
          {/* <tbody>
            {missions.map((mission) => (
              mission.reserved ? (
                <tr key={mission.id ? mission.id : null}>
                  <td>
                    <p key={mission.id}>{mission.rocket_name}</p>
                  </td>
                </tr>
              )
                : null
            ))}
          </tbody> */}
        </table>
        <table className="my-rockets">
          <thead>
            <tr>
              <th>My Rockets</th>
            </tr>
          </thead>
          <tbody>
            {rockets.map((rocket) => (
              rocket.reserved ? (
                <tr key={rocket.id ? rocket.id : null}>
                  <td>
                    <p key={rocket.id}>{rocket.rocket_name}</p>
                  </td>
                </tr>
              )
                : null
            ))}
          </tbody>
        </table>
        <div className="my-missions" />
      </div>
    </div>
  );
};

export default Profile;
