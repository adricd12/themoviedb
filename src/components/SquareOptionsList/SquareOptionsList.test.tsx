import '@testing-library/jest-dom';
import SquareOptionsList from '.';
import { render } from '@/test/test-utils';
import { MOCK_SQUARE_OPTIONS } from '@/mocks/squareOptions';
import { fireEvent } from '@testing-library/react';

const MOCK_SELECTED_OPTION = MOCK_SQUARE_OPTIONS[0];
const MOCK_HANDLE_CLICK = jest.fn();

const setup = (selected = '') => {
    const context = render(
        <SquareOptionsList 
            options={MOCK_SQUARE_OPTIONS} 
            selectedOption={selected}
            handleClickOption={MOCK_HANDLE_CLICK}
        />
    );
    return context;
}

describe('SquareOptionsList Component', () => {
  it('should render items', () => {
    const context = setup();
    const container = context.getByTestId('items-container');
    const items = container.querySelectorAll('.item');
    expect(container).toBeInTheDocument();
    expect(items.length).toBe(MOCK_SQUARE_OPTIONS.length);
  });

  it('should not render selected item by default', () => {
    const context = setup();
    const container = context.getByTestId('items-container');
    const selected = container.querySelectorAll('.selected');
    expect(selected.length).toBe(0);
  });

  it('should render selected item if provided', () => {
    const context = setup(MOCK_SELECTED_OPTION.value);
    const container = context.getByTestId('items-container');
    const selected = container.querySelector('.selected');
    expect(selected).toHaveTextContent(MOCK_SELECTED_OPTION.option);
  });

  it('should call handleClickOption function on click', () => {
    const context = setup();
    const item = context.getByTestId('item-1');
    expect(item).toBeInTheDocument();
    fireEvent.click(item);
    expect(MOCK_HANDLE_CLICK).toHaveBeenCalled();
  });
});