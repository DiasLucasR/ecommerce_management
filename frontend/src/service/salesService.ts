import Api from './api';

class SaleService {

  public static async getSalesAll(): Promise<any> {
    return Api.get('sales');
  }
  public static async getSaleById(id: number): Promise<any> {
    return Api.get(`sales/${id}`);
  }
}

export default SaleService;