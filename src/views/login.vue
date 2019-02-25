<template>
    <div>
        <div role="main" class="main">
            <section class="page-header parallax page-header-text-light page-header-crumbs-light-2 overlay overlay-color-dark overlay-show overlay-op-8 py-0" style="background-image: url(images/slide-1.jpg); background-size: cover;">
                <div class="container py-5">
                    <div class="row text-left mb-3 pt-5 mt-5">
                        <div class="col-lg-7">
                        </div>
                    </div>
                </div>
            </section> 
            <Login/>
        </div>
    </div>
</template>
<script>
import Login from '@/components/login.vue';
export default {
    name: "LoginPage",
    components:{
        Login
    }
}
</script>
