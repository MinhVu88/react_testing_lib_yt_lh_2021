import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('testing Header', () => {
  /**
  * getBy...
  */
  // test(
  //   'header should render title prop passed to it correctly - get by role', 
  //   () => {
  //     render(<Header/>);

  //     const headerEle = screen.getByRole('heading');

  //     expect(headerEle).toBeInTheDocument();
  //   }
  // );

  test(
    'header should render title prop passed to it correctly - get by role', 
    () => {
      render(<Header title='my header'/>);

      const header = screen.getByRole('heading', {name: 'my header'});

      expect(header).toBeInTheDocument();
    }
  );

  test(
    'header should render title prop passed to it correctly - get by text', 
    () => {
      render(<Header title='my header'/>);

      const header = screen.getByText(/my header/i);

      expect(header).toBeInTheDocument();
    }
  );

  test(
    'header should render title prop passed to it correctly - get by title', 
    () => {
      render(<Header title='my header'/>);

      const header = screen.getByTitle('some title');

      expect(header).toBeInTheDocument();
    }
  );

  test(
    'header should render title prop passed to it correctly - get by testid', 
    () => {
      render(<Header title='my header'/>);

      const header = screen.getByTestId('header-1');

      expect(header).toBeInTheDocument();
    }
  );

  /**
  * getAllBy...
  */
  test(
    'header should render title prop passed to it correctly - get all by role', 
    () => {
      render(<Header/>);

      const headers = screen.getAllByRole('heading');

      expect(headers.length).toBe(2);
    }
  );

  /**
  * findBy...
  */
  test(
    'header should render title prop passed to it correctly - find by text', 
    async () => {
      render(<Header title='my header'/>);

      const header = await screen.findByText(/my header/i);

      expect(header).toBeInTheDocument();
    }
  );

  /**
  * queryBy...
  */
  test(
    'header should render title prop passed to it correctly - query by text', 
    () => {
      render(<Header title='my header'/>);

      const header = screen.queryByText(/blah blah blah/i);

      expect(header).not.toBeInTheDocument();
    }
  );
});
