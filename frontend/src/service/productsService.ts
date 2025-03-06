import Api from './api';

class ProductsService {

  public static async getProductsAll(): Promise<any> {
    return Api.get('products');
  }
  public static async getProductById(id: number): Promise<any> {
    return Api.get(`products/${id}`);
  }
}

export default ProductsService;