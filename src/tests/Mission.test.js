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

describe('Test Missions Component', () => {
  test('renders Missions correctly', () => {
    const store = mockStore({
      missions: {
        isLoading: false,
        missions: [
          { id: 1, name: 'Mission 1', description: 'Description 1' },
          { id: 2, name: 'Mission 2', description: 'Description 2' },
        ],
        joinedMissions: [1],
      },
    });

    const { asFragment } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it('Tests Join Mission Button', () => {
    const store = mockStore({
      missions: {
        isLoading: false,
        missions: [
          { id: 1, name: 'Mission 1', description: 'Description 1' },
          { id: 2, name: 'Mission 2', description: 'Description 2' },
        ],
        joinedMissions: [1],
      },
    });
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const reserveButton = screen.getAllByText('Join Mission');
    reserveButton[0].onclick = handleClick();
    fireEvent.click(reserveButton[0]);
    expect(res).toBe('Clicked!');
  });
  it('Tests Leave Mission Button', () => {
    const store = mockStore({
      missions: {
        isLoading: false,
        missions: [
          { id: 1, name: 'Mission 1', description: 'Description 1' },
          { id: 2, name: 'Mission 2', description: 'Description 2' },
          { id: 3, name: 'Mission 3', description: 'Description 3' },
        ],
        joinedMissions: [1],
      },
    });
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const reserveButton = screen.getAllByText('Leave Mission');
    reserveButton[0].onclick = handleClick();
    fireEvent.click(reserveButton[0]);
    expect(res).toBe('Clicked!');
  });
});
