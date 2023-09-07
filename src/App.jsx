import { Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Rocket from './components/Rocket';
import Missions from './components/Missions';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="missions" element={<Missions />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </>
  );
}
export default App;
