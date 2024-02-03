import { render, screen } from '@testing-library/react';
import ProductList from './ProductList';

test("Product 컴포넌트 여러 개가 있다.", ()=>{
  render(<ProductList/>)
  const product = screen.getAllByTitle("Product")
  for (let i = 0 ; i < product.length ; i++) {
    expect(product[i]).toBeInTheDocument();
  }
  
})