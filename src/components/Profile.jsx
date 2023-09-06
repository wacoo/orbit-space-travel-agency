import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const dataFetched = useSelector((state) => state.rockets.fetchedData);
  console.log(rockets);
  return (
    <div className="profile-wrapper">
      <div className="my-missions">
        {/*  */}
      </div>
      <div className="my-rockets">
        {rockets.map((rocket) => (
          dataFetched ? <p key={rocket.id}>{rocket.rocket_name}</p> : <p>Loading...</p>
        ))}
      </div>
    </div>
  );
};

export default Profile;
