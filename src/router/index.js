import { createWebHistory, createRouter } from "vue-router";

import { userAccStore } from "@/Store/userStore";

import Home from "../views/Home/home.vue";
import Login from "@/views/Login/Login.vue";
import Register from "@/views/Login/Register.vue";
import Service from "@/views/Service/Service.vue";
import About from "@/views/About/About.vue";
import PhysicalExamination from "@/views/Service/PhysicalExamination/PhysicalExamination.vue";
import SpaRoom from "@/views/Service/SpaRoom/SpaRoom.vue";
import HotelRoom from "@/views/Service/HotelRoom/HotelRoom.vue";
import Booking from "@/views/Booking/Booking.vue";
import FeverInDog from "@/views/About/FeverInDog.vue";
import StressCat from "@/views/About/StressCat.vue";
import Contact from "@/views/Contact/Contact.vue"

// ADMIN
import HRM from "@/manager/HRM.vue";
//admin
import ADMIN from "@/manager/admin.vue";
//quan ly yeu cau
import QuanLyYeuCau from "@/manager/quanLyYeuCau.vue";
// //quan ly trang thai
import QuanLyTrangThai from "@/manager/quanLyTrangThai.vue";
// //quan ly bieu mau
import QuanLyBieuMau from "@/manager/quanLyBieuMau.vue";
// //thong ke
import ThongKe from "@/manager/thongKe.vue";

//edit form
import FormEdit from "@/manager/FormEdit.vue";
//add form
import FormAdd from "@/manager/FormAdd.vue";

const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },

  {
    path: "/home",
    name: "Home",
    component:
       Home,
    
  },

  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/service",
    name: "Service",
    component: Service,
  },
  //kham benh
  {
    path: "/physicalExamination",
    name: "PhysicalExamination",
    component: PhysicalExamination,
  },
  //spa
  {
    path: "/spaRoom",
    name: "SpaRoom",
    component: SpaRoom,
  },
  //Hotel Room
  {
    path: "/HotelRoom",
    name: "HotelRoom",
    component: HotelRoom,
  },
  //booking
  {
    path: "/booking",
    name: "Booking",
    component: Booking,
  },
  //contact
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  // fever in dog
  {
    path: "/feverInDog",
    name: "FeverInDog",
    component: FeverInDog,
  },
  // stress cat
  {
    path: "/stressCat ",
    name: "StressCat",
    component: StressCat,
  },

  // Quản lý nhân sự ( admin)
  {
    path: "/HRM",
    name: "HRM",
    component: HRM,
  },

  {
    path: "/about",
    name: "About",
    component: About,
  },
 
  //dang ky xac nhan
  // {
  //   path: "/DangKyXacNhan",
  //   name: "DangKyXacNhan",
  //   component: DangKyXacNhan,
  // },
  // admin
  {
    path: "/admin",
    name: "ADMIN",
    components: {
      default: ADMIN,
    },
  },
  // quan ly yeu cau
  {
    path: "/quanLyYeuCau",
    name: "QuanLyYeuCau",
    component: QuanLyYeuCau,
  },
  //quan ly trang thai
  {
    path: "/quanLyTrangThai",
    name: "QuanLyTrangThai",
    component: QuanLyTrangThai,
  },
  //quan ly bieu mau
  {
    path: "/quanLyBieuMau",
    name: "QuanLyBieuMau",
    component: QuanLyBieuMau,
  },

  //thong ke
  {
    path: "/thongke",
    name: "ThongKe",
    component: ThongKe,
  },
  {
    path: "/formAdd",
    name: "bieumau.add",
    component: FormAdd,
  },
  //edit bieu mau
  {
    path: "/formEdit/:id",
    name: "bieumau.edit",
    component: FormEdit,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const userStore = userAccStore();
//   if (!userStore.user.TenTaiKhoan && to.name != "Login") {
//     next({
//       path: "/",
//       replace: true,
//     });
//   }
//   next();
// }
// );

export default router;
