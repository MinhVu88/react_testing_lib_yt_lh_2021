import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from '../FollowersList';

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList/>
    </BrowserRouter>
  );
};

describe('testing FollowersList', () => {
  beforeEach(() => {
    console.log('[ running before each test ]');
  })

  beforeAll(() => {
    console.log('[ running once before all tests ]');
  })

  afterEach(() => {
    console.log('[ running after each test ]');
  })

  afterAll(() => {
    console.log('[ running once after all tests ]');
  })

  test(
    'FollowersList should render a follower properly',
    async () => {
      render(<MockFollowersList/>);
      
      const follower = await screen.findByTestId('follower-item-0');

      screen.debug();

      expect(follower).toBeInTheDocument();
    }
  )

  // test(
  //   'FollowersList should render all followers properly',
  //   async () => {
  //     render(<MockFollowersList/>);
      
  //     const followers = await screen.findAllByTestId(/follower-item/i);

  //     expect(followers.length).toBe(5);
  //   }
  // )
});