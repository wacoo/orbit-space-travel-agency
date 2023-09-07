const rocketAPI = 'https://api.spacexdata.com/v3/rockets';

const getRocketData = async () => {
  try {
    const response = await fetch(rocketAPI, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch rocket data');
    }

    const rocketData = await response.json();
    return rocketData;
  } catch (error) {
    console.error('Error fetching rocket data:', error.message);
    throw error;
  }
};

export default { getRocketData };
