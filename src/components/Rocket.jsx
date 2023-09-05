import './Rocket.css';

const Rocket = () => {
  const rockets = [
    {
      title: 'Falcon 1',
      description: 'Falcon 1 is a pioneering rocket crafted by SpaceX, a visionary aerospace company. Designed to revolutionize the space industry, this two-stage, liquid-fueled launch vehicle stands at the forefront of affordable and efficient space transportation.',
    },
    {
      title: 'Falcon 9',
      description: 'Falcon 9 is a pioneering rocket crafted by SpaceX, a visionary aerospace company. Designed to revolutionize the space industry, this two-stage, liquid-fueled launch vehicle stands at the forefront of affordable and efficient space transportation.',
    },
    {
      title: 'Falcon Heavy',
      description: 'Falcon Heavy is a pioneering rocket crafted by SpaceX, a visionary aerospace company. Designed to revolutionize the space industry, this two-stage, liquid-fueled launch vehicle stands at the forefront of affordable and efficient space transportation.',
    },
    {
      title: 'Falcon Light',
      description: 'Falcon Light is a pioneering rocket crafted by SpaceX, a visionary aerospace company. Designed to revolutionize the space industry, this two-stage, liquid-fueled launch vehicle stands at the forefront of affordable and efficient space transportation.',
    },
  ];
  return rockets.map((rocket) => (
    <div className="card" key={rocket.title}>
      <div className="card-image">
        <img src="" alt="" />
      </div>
      <div className="card-text">
        <h2 className="rocket-name">{rocket.title}</h2>
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
