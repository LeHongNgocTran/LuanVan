import createApiClient from "./api.service";
class SinhVienService {
  constructor(baseUrl = "/api/sinhvien") {
    this.api = createApiClient(baseUrl);
  }
  

  async getAll() {
    return (await this.api.get("/")).data;
  }
  async getForm() {
    return (await this.api.get("/qlyeucau")).data;
  }

}
export default new SinhVienService();
