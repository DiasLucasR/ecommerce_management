import Api from './api';

class ChartService {

  public static async getChartsAll(): Promise<any> {
    return Api.get('charts');
  }


  public static async getChartsByEndpoint(endpoint: string): Promise<any> {
    return Api.get(`charts/${endpoint}`);
  }
}

export default ChartService;