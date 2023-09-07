import PropTypes from 'prop-types';

const ProfileRocketItem = ({ rocket }) => {
  const { id, name } = rocket;

  return (
    <li key={id} className="list-group-item">
      <p>{name}</p>
    </li>
  );
};

export default ProfileRocketItem;

ProfileRocketItem.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
