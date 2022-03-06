import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TodoFooter from '../TodoFooter';

const MockTodoFooter = ({ unfinishedTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter incompleteTasks={unfinishedTasks}/>
    </BrowserRouter>
  );
};

describe('testing TodoFooter', () => {
  test(
    'TodoFooter should render incompleteTasks prop passed to it correctly', 
    () => {
      render(<MockTodoFooter unfinishedTasks={3}/>);
  
      const paragraph = screen.getByText(/3 tasks left/i);
  
      expect(paragraph).toBeInTheDocument();
    }
  );
  
  test(
    'TodoFooter should render "task" when there is only 1 unfinished task left', 
    () => {
      render(<MockTodoFooter unfinishedTasks={1}/>);
  
      const paragraph = screen.getByText(/1 task left/i);
  
      expect(paragraph).toBeTruthy();
    }
  );
  
  test(
    'the number of unfinished tasks should be visible to users', 
    () => {
      render(<MockTodoFooter unfinishedTasks={1}/>);
  
      const paragraph = screen.getByText(/1 task left/i);
  
      expect(paragraph).toBeVisible();
    }
  );
  
  test(
    'TodoFooter should contain a paragraph element', 
    () => {
      render(<MockTodoFooter unfinishedTasks={1}/>);
  
      const paragraph = screen.getByText(/1 task left/i);
  
      expect(paragraph).toContainHTML('p');
    }
  );
  
  test(
    'TodoFooter should contain "1 task left"', 
    () => {
      render(<MockTodoFooter unfinishedTasks={1}/>);
  
      const paragraph = screen.getByTestId('undone-tasks');
  
      expect(paragraph).toHaveTextContent(/1 task left/i);
    }
  );
  
  test(
    'TodoFooter should contain a paragraph of "1 task left"', 
    () => {
      render(<MockTodoFooter unfinishedTasks={1}/>);
  
      const paragraph = screen.getByTestId('undone-tasks');
  
      expect(paragraph.textContent).toBe('1 task left');
    }
  );
  
  test(
    'TodoFooter should not contain a form element', 
    () => {
      render(<MockTodoFooter unfinishedTasks={1}/>);
  
      const paragraph = screen.getByText(/1 task left/i);
  
      expect(paragraph).not.toContainHTML('form');
    }
  );
});
