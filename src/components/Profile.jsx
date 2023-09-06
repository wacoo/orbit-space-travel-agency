import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  console.log(rockets);
  return (
    <div className="profile-container">
      <div className="profile-wrapper">
        <table className="my-rockets">
          <thead>
            <tr>
              <th>Rockets</th>
              <th>Missions</th>
            </tr>
          </thead>
          <tbody>
            {rockets.map((rocket) => (
              <tr>
                <td>
                  
                </td>
              </tr>
              rocket.reserved ? <p key={rocket.id}>{rocket.rocket_name}</p>
                : null
            ))}
          </tbody>
        </table>
        <div className="my-missions">
        </div>        
      </div>
    </div>
  );
};

export default Profile;
