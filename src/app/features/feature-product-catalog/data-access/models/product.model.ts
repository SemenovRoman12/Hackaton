export interface ProductEntity {
  id: number;
  product_id: number;
  name: string;
  description: string;
  price: number;
}

export interface ProductDTO {
  data: ProductEntity[];
}
