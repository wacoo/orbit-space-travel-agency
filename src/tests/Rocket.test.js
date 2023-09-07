import React from 'react';
import renderer from 'react-test-renderer';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../components/Header';
import Rockets from '../components/Rockets';
import Profile from '../components/Profile';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}));
let res = '';
const handleClick = () => {
  res = 'Clicked!';
};

const stateArray = [
  {
    id: '1234',
    rocket_name: 'Falcon 1',
    description: 'The first to Mars',
    flickr_images: '',
  },
  {
    id: '5667',
    rocket_name: 'Star Ship',
    description: 'The first to Mars',
    flickr_images: '',
  },
  {
    id: '2345',
    rocket_name: 'Falcon Heavy',
    description: 'The first to the moon',
    flickr_images: '',
    reserved: true,
  },
  {
    id: '2345',
    rocket_name: 'Falcon Light',
    description: 'The first to the moon',
    flickr_images: '',
    reserved: true,
  },
];

describe('Test rockets component', () => {
  it('Tests Header', () => {
    const headerComponent = renderer.create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    expect(headerComponent).toMatchSnapshot();
  });

  it('Tests Rockets', () => {
    useDispatch();
    useSelector.mockReturnValue(stateArray);
    const component = renderer.create(
      <BrowserRouter>
        <Rockets />
      </BrowserRouter>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Tests Profile', () => {
    useSelector.mockReturnValue(stateArray);
    const component = renderer.create(
      <BrowserRouter>
        <Profile />
      </BrowserRouter>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Test user interaction', () => {
  it('Tests Reserve Rocket Button', () => {
    useSelector.mockReturnValue(stateArray);
    render(<BrowserRouter><Rockets /></BrowserRouter>);
    const reserveButton = screen.getAllByText('Reserve Rocket');
    reserveButton[0].onclick = handleClick();
    fireEvent.click(reserveButton[0]);
    expect(res).toBe('Clicked!');
  });

  it('Tests Cancel Reservation Button', () => {
    useSelector.mockReturnValue(stateArray);
    render(<BrowserRouter><Rockets /></BrowserRouter>);
    const reserveButton = screen.getAllByText('Cancel Reservation');
    reserveButton[0].onclick = handleClick();
    fireEvent.click(reserveButton[0]);
    expect(res).toBe('Clicked!');
  });
});
