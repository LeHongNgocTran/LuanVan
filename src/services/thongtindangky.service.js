import createApiClient from "./api.service";
class ThongTinDangKyService {
  constructor(baseUrl = "/api/thongtindangky") {
    this.api = createApiClient(baseUrl);
  }
  async getAll() {
    return (await this.api.get("/")).data;
  }

  async create(data) {
      return (await this.api.post("/", data)).data;
  }

  async update(id, data) {
      return (await this.api.put(`/${id}`, data)).data;
  }

}
export default new ThongTinDangKyService();
