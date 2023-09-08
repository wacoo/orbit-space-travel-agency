import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {
  const { missions = [], joinedMissions = [] } = useSelector((store) => store.missions);
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedMissions = missions.filter((mission) => joinedMissions.includes(mission.id));
  return (
    <div className="profile-container">
      <div className="profile-wrapper">
        <table className="my-rockets">
          <thead>
            <tr>
              <th>My Missions</th>
            </tr>
          </thead>
          <tbody>
            {reservedMissions.map((mission) => (
              mission.reserved ? (
                <tr key={mission.id ? mission.id : null}>
                  <td>
                    <p key={mission.id}>{mission.name}</p>
                  </td>
                </tr>
              )
                : null
            ))}
          </tbody>
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
      </div>
    </div>
  );
};

export default Profile;
