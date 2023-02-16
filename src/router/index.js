import { createWebHistory, createRouter } from "vue-router";

import { userAccStore } from "@/Store/userStore";

import Home from "@/views/home.vue";
import Login from "@/views/login.vue";
import Register from "@/views/register.vue";
import Service from "@/views/service.vue";
import AboutUs from "@/views/aboutus.vue";
import Forms from "@/views/forms.vue";
import PhysicalExamination from "@/views/physicalExamination.vue";
import SpaRoom from "@/views/spaRoom.vue";
import Booking from "@/views/booking.vue";
import FeverInDog from "@/views/feverInDog.vue";
import StressCat from "@/views/stressCat.vue";
import Contact from "@/views/contact.vue"

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
// //dang ky xac nhan
import DangKyXacNhan from "@/views/DangKyXacNhan.vue";
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
    path: "/aboutus",
    name: "AboutUs",
    component: AboutUs,
  },
  {
    path: "/forms",
    name: "Forms",
    component: Forms,
  },

  //dang ky xac nhan
  {
    path: "/DangKyXacNhan",
    name: "DangKyXacNhan",
    component: DangKyXacNhan,
  },
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
