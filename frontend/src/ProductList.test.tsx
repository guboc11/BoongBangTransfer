import { render, screen } from '@testing-library/react';
import ProductList from './ProductList';

test("Product 컴포넌트가 있다.", ()=>{
  render(<ProductList/>)
  const product = screen.getByTitle("Product")
  expect(product).toBeInTheDocument();
  
})