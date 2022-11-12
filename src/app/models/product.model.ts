export interface Category {
  categoryId: string;
  category: string;
  active: boolean;
}
export interface Product {
  productId: string;
  name: string;
  categoryId: string;
  price: number;
  stock: number;
  active: boolean;
  category: Category;
}

export interface CreateProductDTO
  extends Omit<Product, 'productId' | 'category'> {
  //categoryId: number;
}
export interface UpdateProductDTO extends Partial<CreateProductDTO> {}
