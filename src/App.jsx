import { Routes,Route } from 'react-router-dom';
import {container} from 'react-bootsrap';
import './App.css';
import Navigation from './pages/Navigation';
import Rockets from './pages/rockets/rocket';
import MyProfileContainer from './pages/Profile';

const App = () => (
  <div>
    <Navigation>
      <container>
        <Routes>
          <Route path="/" exact="true" element={<Rockets />} />
          <Routes path="/myprofile" element={<Myprofilecontainer />} />
        </Routes>
      </container>
    </Navigation>
  </div>
);

export default App;
