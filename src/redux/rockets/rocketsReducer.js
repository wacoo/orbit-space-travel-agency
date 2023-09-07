import rocketAPI from './rocketAPI';

const initialState = [];

const GET_ROCKET_DATA = 'spacetravelers/rockets/GET_ROCKET_DATA';
const ROCKET_RESERVATION = 'spacetravelers/rockets/ROCKET_RESERVATION';
const CANCEL_ROCKET_RESERVATION = 'spacetravelers/rockets/CANCEL_ROCKET_RESERVATION';

export function getRocketAPI(rockets) {
  const APIRocketData = rockets.map((rocket) => ({
    id: rocket.id,
    name: rocket.rocket_name,
    type: rocket.rocket_type,
    flickrImages: rocket.flickr_images,
    description: rocket.description,
    reserved: localStorage.getItem(`reservation_${rocket.id}`) === 'true', // Get reservation status from local storage
  }));
  return {
    type: GET_ROCKET_DATA,
    payload: APIRocketData,
  };
}

export const fetchRocketDataFromAPI = () => async (dispatch) => {
  try {
    const response = await rocketAPI.getRocketData();
    dispatch(getRocketAPI(response));
  } catch (error) {
    console.error('Error fetching rocket data:', error);
  }
};

export function rocketReservation(id) {
  localStorage.setItem(`reservation_${id}`, 'true'); // Save reservation status to local storage
  return {
    type: ROCKET_RESERVATION,
    payload: id,
  };
}

export function cancelRocketReservation(id) {
  localStorage.setItem(`reservation_${id}`, 'false');
  return {
    type: CANCEL_ROCKET_RESERVATION,
    payload: id,
  };
}

export default function reducerRockets(state = initialState, action) {
  switch (action.type) {
    case GET_ROCKET_DATA:
      return action.payload;
    case ROCKET_RESERVATION:
      return state.map((rocket) => (
        rocket.id !== action.payload ? rocket : { ...rocket, reserved: true }
      ));
    case CANCEL_ROCKET_RESERVATION:
      return state.map((rocket) => (
        rocket.id !== action.payload ? rocket : { ...rocket, reserved: false }
      ));
    default:
      return state;
  }
}
