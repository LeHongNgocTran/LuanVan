<script>
import HeaderAdmin from "../components/HeaderAdmin.vue";
// import SinhVienService from "../services/sinhVien.service";
import SidebarAdmin from "../components/SidebarAdmin.vue";
export default {
    data() {
        return {
            listSinhVien: []
        }
    },
    methods: {

        async retrieveContacts() {
            try {
                this.listSinhVien = await SinhVienService.getAll();
            } catch (error) {
                console.log(error);
            }
        },

    },
    mounted() {
        this.retrieveContacts();
    },
    components: {
        SidebarAdmin,
        HeaderAdmin,
    },
};
</script>

<template>

    <main class="container-fluid">
        <div class="row">
            <SidebarAdmin class="col-3" />
            <div class="col-9">
                <HeaderAdmin />
                <div class="container-fluid">
                    <!-- <div class="row p-0  "> -->
                        <div class="">
                            <div class=" row  mt-4 p-0">
                            </div>
                            <div class="text-center">
                                <h3 class="fw-bold text-dark text-center ">DANH SÁCH TẤT CẢ NHÂN VIÊN, BÁC SĨ
                                </h3>
                            </div>
                            <div class="mt-2 mb-2 action">
                                <button type="button"
                                    class="text-light bg-primary btn btn-addform border border-dark ml-2"
                                    @click="goToAddForm">
                                    <i class="fa-solid fa-plus"></i>
                                    Nhân viên
                                </button>
                                <!-- <button type="button"
                                    class="btn btn-addform border border-dark ml-2 text-light bg-danger">
                                    Xuất file <i class="fa-solid fa-file-pdf"></i>
                                </button>
                                <button type="button"
                                    class="btn btn-addform  border border-dark ml-2 text-light bg-success">
                                    Xuất file <i class="fa-sharp fa-solid fa-file-excel"></i>
                                </button> -->
                            </div>

                            <div class="row  mt-4">

                                <table class="table table-hover text-center table-bordered table table-bordered">
                                    <thead class="">
                                        <tr class="text-danger ">
                                            <th scope="col ">STT</th>
                                            <th scope="col">MÃ</th>
                                            <th scope="col">HỌ VÀ TÊN</th>
                                            <th scope="col">CHỨC VỤ</th>
                                            <TH scope="col">TRẠNG THÁI</TH>
                                        </tr>
                                    </thead>
                                    <tbody class="text-left">
                                        <tr v-for="(sinhVien, index) in this.listSinhVien">
                                            <th scope="row ">{{ index + 1 }}</th>
                                            <td>{{ sinhVien.MSSV }}</td>
                                            <td>{{ sinhVien.HoTen }}</td>
                                            <td>{{ sinhVien.Email }}</td>
                                            <td class="text-primary">{{ sinhVien.TrangThaiSinhVien }}</td>
                                        </tr>

                                    </tbody>
                                </table>

                            </div>

                        </div>
                    <!-- </div> -->
                    <!-- </div> -->
                    <!-- </div> -->
                </div>


            </div>
        </div>
    </main>>

</template>


<style>
body {
    font-family: 'Poppings', sans-serif !important;
}
</style>

