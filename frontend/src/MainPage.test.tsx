import MainPage from "./MainPage"
import { render, screen } from '@testing-library/react';

test("메뉴 컴포넌트 리스트가 있다.", () => {
  render(<MainPage/>)
  const productList = screen.getByTitle("ProductList")
  expect(productList).toBeInTheDocument();
})

// test("수량 컴포넌트가 있다.")

// test("결제하기 버튼이 있다.")

// test("장바구니 컴포넌트가 있다.")