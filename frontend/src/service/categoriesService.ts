import Api from './api';

class CategoriesService {

  public static async getCategoriesAll(): Promise<any> {
    return Api.get('categories');
  }
  public static async getCategoriesById(id: number): Promise<any> {
    return Api.get(`categories/${id}`);
  }
}

export default CategoriesService;