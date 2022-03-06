// INTEGRATION TESTING
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo/>;
    </BrowserRouter>
  );
};

const addTodos = todos => {
  const inputForm = screen.getByPlaceholderText(/Add a new task here.../i);
  const addBtn = screen.getByRole('button', { name: /Add/i });

  todos.forEach(todo => {
    fireEvent.change(inputForm, { target: { value: todo } });
    fireEvent.click(addBtn);
  });
};

describe('testing Todo', () => {
  test(
    'The todo list should render a task that is entered in the input form',
    () => {
      render(<MockTodo/>);

      addTodos(['learn react testing lib']);

      const task = screen.getByText(/learn react testing lib/i);

      expect(task).toBeInTheDocument();
    }
  )

  test(
    'The todo list should render multiple tasks which are individually entered in the input form',
    () => {
      render(<MockTodo/>);

      addTodos(['learn react testing lib', 'learn GraphQL', 'do capstone project']);

      const tasks = screen.getAllByTestId('tasksList');

      expect(tasks.length).toBe(3);
    }
  )

  test(
    'a task in todo list should not have line-through over it when initially rendered',
    () => {
      render(<MockTodo/>);

      addTodos(['do capstone project']);

      const task = screen.getByText(/do capstone project/i);

      expect(task).not.toHaveClass('todo-item-active');
    }
  )

  test(
    'a task in todo list should have line-through over it when clicked',
    () => {
      render(<MockTodo/>);

      addTodos(['do capstone project']);

      const task = screen.getByText(/do capstone project/i);

      fireEvent.click(task);

      expect(task).toHaveClass('todo-item-active');
    }
  )
});