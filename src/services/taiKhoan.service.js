import createApiClient from "./api.service";
class TaiKhoanService {
    constructor(baseUrl = "/api/taikhoan") {
        this.api = createApiClient(baseUrl);
    } 
    async getAll() {
        return (await this.api.get("/")).data;
    } 
    async login(data) {
        return (await this.api.post("/", data)).data;
    } 

} 
export default new TaiKhoanService();