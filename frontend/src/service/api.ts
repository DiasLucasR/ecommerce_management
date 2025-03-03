const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

class Api {
  /**
   * Função genérica para realizar chamadas de API.
   */
  private static async apiFetch(
    endpoint: string,
    method: string = "GET",
    body: any = null,
    headers: Record<string, string> = {}
  ): Promise<any> {
    const url = `${BASE_URL}${endpoint}`;

    const defaultHeaders = {
      "Content-Type": "application/json",
      ...headers,
    };

    const options: RequestInit = {
      method,
      headers: defaultHeaders,
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      throw new Error(
        errorData?.message || `Erro na requisição: ${response.statusText}`
      );
    }

    return response.json();
  }

  /**
   * Requisição GET para buscar dados.
   */
  public static async get(endpoint: string): Promise<any> {
    return this.apiFetch(endpoint, "GET");
  }

  /**
   * Requisição POST para criar um novo recurso.
   */
  public static async post(endpoint: string, body: any): Promise<any> {
    return this.apiFetch(endpoint, "POST", body);
  }

  /**
   * Requisição PUT para atualizar um recurso existente.
   */
  public static async put(endpoint: string, body: any): Promise<any> {
    return this.apiFetch(endpoint, "PUT", body);
  }

  /**
   * Requisição DELETE para remover um recurso.
   */
  public static async delete(endpoint: string): Promise<any> {
    return this.apiFetch(endpoint, "DELETE");
  }

  /**
   * Requisição PATCH para atualizar parcialmente um recurso.
   */
  public static async patch(endpoint: string, body: any): Promise<any> {
    return this.apiFetch(endpoint, "PATCH", body);
  }
}

export default Api;
