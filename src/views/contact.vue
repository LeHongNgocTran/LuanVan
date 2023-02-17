<script>
import HeaderPublic from "../components/PublicHeader.vue";
import PublicFooters from "../components/PublicFooters.vue";

export default {
    components: {
        HeaderPublic,
        PublicFooters,
    },
};
</script>
<template>
<HeaderPublic />
<main class="container-fluid">
    <!--  ABOUT US -->
    <div class="container">
        <div class="row py-5">
            <div class="col-6 title">CONTACT</div>
            <div class="col-6">
                <img src="../assets/images/cat-about.webp " class="img-fluid w-100" alt="" />
            </div>
        </div>
    </div>
    <div></div>
    <hr />

    <div class="p-2">
        <div class="row p-4">
            <div class="col-6 contact-content ">
                <h5 class="py-2 text-light">LIÊN HỆ CHÚNG TÔI</h5>
                <div class="text-light">
                    Chúng tôi tự hào có cơ hội làm việc cùng với những khách hàng tuyệt
                    vời của chúng tôi (và chủ sở hữu của họ!) để tiếp tục hỗ trợ cuộc
                    sống lâu dài, năng động và khỏe mạnh!
                </div>
            </div>
            <!-- form contact -->
            <div class="col-6 px-3">
                <div class="">
                    <form class=" p-5 border border-dark frame-contact">
                        <div class="mb-3">
                            <input type="email" class="form-control  bg-light" id="exampleInputEmail1" aria-describedby="" placeholder="NAME*" />
                        </div>
                        <div class="mb-3">
                            <input type="email" class="form-control  bg-light" id="exampleInputEmail1" aria-describedby="" placeholder="EMAIL*" />
                        </div>
                        <div class="mb-3">
                            <input type="phone" class="form-controlbg-light" id="exampleInputEmail1" aria-describedby="" placeholder="PHONE*" />
                        </div>

                        <div class="mb-3">
                            <textarea rows="4" cols="50" name="comment" form="usrform" placeholder="MESSAGE...">
</textarea>
                        </div>
                        <div class="d-flex justify-content-center">
                            <button type="submit" class="btn text-light button-submit  px-4">Submit</button>

                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
    <hr>

    <div class="py-2">
        <h3 class="text-center"><b>Chi nhánh</b></h3>
        <div class="row ml-4 mr-4 pb-4">
            <div class="col-4 text-right branch-position">Cần Thơ</div>
            <div class="col-4 text-center branch-position">Hồ Chí Minh</div>
            <div class="col-4 text-left branch-position">Vĩnh Long</div>
        </div>
        <hr />
    </div>
</main>

<PublicFooters />
</template>

<style>
.bg-ss1 {
    background-color: white;
    border: solid 1px gray;
}

.title-page {
    color: rgb(5, 5, 77) !important;
}

.card-text {
    font-size: 1.2rem;
}

.sick-title {
    font-weight: 700;
    font-size: 1.4rem;
    margin: auto;
    color: black;
}

.sick-content,
.branch-position {
    font-size: 1.1rem;
}

.title {
    font-weight: 700;
    margin-top: 10%;
    color: white;
    text-shadow: 4px 4px 3px #000000;
}

.title-relate {
    font-size: 2rem;
    font-weight: 500;
    margin-top: 45px;
}

.aboutus {
    text-decoration: underline rgb(189, 5, 5);
}

.button-style {
    padding: 10px 20px;
    font-weight: 500;
    border-radius: 25px;
}



li {
    padding-top: 20px;
    font-size: 400;
}

main {
    font-size: 1rem;
}

.detail {
    color: white;
    font-size: 1.2rem;
}

.detail:hover {
    color: rgb(173, 7, 7);
    font-weight: 600;
    cursor: pointer;
}

.contact-content {
    background-image: url(../assets/images/cat-contact.jpg);
    opacity: 85%;
    padding: auto;
    padding: 30px;
    font-size: 1.1rem;
    line-height: 28px;
}
input:focus{
   
    outline: none !important;
    border: none !important;
}
.frame-contact{
    background-color: #e5e1d9;
    border: 2px solid white;
}
.button-submit{
    background-color: rgb(182, 7, 7);

     font-size: 1.2rem;
     border-radius: 25px;
}
.button-submit:hover{
    background-color: rgb(131, 7, 7);
}
</style>
 