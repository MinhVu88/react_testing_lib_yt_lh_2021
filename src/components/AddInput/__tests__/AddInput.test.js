import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from '../AddInput';

const mockSetTodos = jest.fn();

describe('testing AddInput', () => {
  test(
    'AddInput should render the input form', 
    () => {
      render(<AddInput todos={[]} setTodos={mockSetTodos}/>);

      const inputForm = screen.getByPlaceholderText(/Add a new task here.../i);

      expect(inputForm).toBeInTheDocument();
    }
  )

  test(
    'the input form should be able to receive & show input from users', 
    () => {
      render(<AddInput todos={[]} setTodos={mockSetTodos}/>);

      const inputForm = screen.getByPlaceholderText(/Add a new task here.../i);

      fireEvent.change(inputForm, {target: {value: 'learn react testing library'}});

      expect(inputForm.value).toBe('learn react testing library');
    }
  )

  test(
    'the input form should be empty after the "Add" btn is clicked', 
    () => {
      render(<AddInput todos={[]} setTodos={mockSetTodos}/>);

      const inputForm = screen.getByPlaceholderText(/Add a new task here.../i);
      const addBtn = screen.getByRole('button', {name: /Add/i});

      fireEvent.change(inputForm, {target: {value: 'learn react testing library'}});
      fireEvent.click(addBtn);

      expect(inputForm.value).toBe('');
    }
  )
});