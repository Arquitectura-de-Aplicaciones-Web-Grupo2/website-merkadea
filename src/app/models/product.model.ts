export interface category {
  categoryId: string;
  name: string;
  description: string;
}

export interface Product {
  productId: string;
  name: string;
  categoryId: number;
  price: number;
  stock: number;
  active: boolean;
  image: any;
  category: category;
}

export interface CreateProductDTO
  extends Omit<Product, 'productId' | 'category'> {}

export interface UpdateProductDTO extends Partial<CreateProductDTO> {}
