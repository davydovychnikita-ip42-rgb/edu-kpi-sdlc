import { createSlice } from "@reduxjs/toolkit";
import type { ProductType } from "../../types/types";

interface CatalogState {
  products: ProductType[],
}

// imitiation of a DB
const products: ProductType[] = [
  {
    id: '1',
    ownerId: '1',
    title: 'Product Example',
    description: 'Example prodcut lorem ipsum doloers blablabla',
    price: 200,
    stockQuantity: 22,
    status: 'В наявності',
    createdAt: Date.UTC(2026, 11, 22, 12, 30),
  },
  {
    id: '2',
    ownerId: '1',
    title: 'Product Example 2',
    description: '222 Example prodcut lorem ipsum doloers blablabla',
    price: 4400,
    stockQuantity: 2,
    status: 'В наявності',
    createdAt: Date.UTC(2026, 11, 22, 13, 30),
  },
  {
    id: '3',
    ownerId: '2',
    title: 'Product Example 3',
    description: '333 Example prodcut lorem ipsum doloers blablabla 333 Example prodcut lorem ipsum doloers blablabla333 Example prodcut lorem ipsum doloers blablabla',
    price: 44400,
    stockQuantity: 1,
    status: 'В наявності',
    createdAt: Date.UTC(2026, 11, 22, 13, 30),
  },
  {
    id: '4',
    ownerId: '1',
    title: 'Product',
    description: 'rare Example prodcut lorem ipsum doloers blablabla',
    price: 1000000,
    stockQuantity: 0,
    status: 'Нема в наявності',
    createdAt: Date.UTC(2026, 11, 22, 14, 30),
  },
  {
    id: '5',
    ownerId: '3',
    title: 'Product 5',
    description: 'lorem ipsum doloers blablabla lorem ipsum doloers blablablalorem ipsum doloers blablablalorem ipsum doloers blablablalorem ipsum doloers blablablalorem ipsum doloers blablablalorem ipsum doloers blablablalorem ipsum doloers blablablalorem ipsum doloers blablabla',
    price: 103.50,
    stockQuantity: 333,
    status: 'B наявності',
    createdAt: Date.UTC(2026, 11, 22, 11, 30),
  },
]

const initialState: CatalogState = {
  products: products,
}

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {

  },
});

export default catalogSlice.reducer;