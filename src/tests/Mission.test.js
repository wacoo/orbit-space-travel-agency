import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { fireEvent, render, screen } from '@testing-library/react';
import Missions from '../components/Missions';

const mockStore = configureStore([thunk]);
let res = '';

const handleClick = () => {
  res = 'Clicked!';
};
