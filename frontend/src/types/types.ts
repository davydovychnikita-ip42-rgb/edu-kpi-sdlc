export type ProductType = {
  id: string,
  ownerId: string,
  title: string,
  description: string,
  price: number,
  stockQuantity: number,
  status: string, // create ProductStatus type
  createdAt: EpochTimeStamp,
}

export type CartItem = {
  product: ProductType,
  quantity: number,
}