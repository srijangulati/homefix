<template>
    <section class="section section-content-pull-top pull-top-level-2 pull-top-always pt-0 mb--50">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-6">
                    <div class="bg-primary rounded p-5 text-left">
                     
                        <span class="top-sub-title text-color-light-2">ALREADY A MEMBER?</span>
                        <h2 class="text-color-light font-weight-bold text-4 mb-4">Sign In</h2>

                      <form action="login/" id="frmSignIn" method="post">
                       <input type="hidden" name="ci_csrf_token" value="">                            <div class="form-row">
                                <div class="form-group col mb-2">
                                    <label class="text-color-light-2" for="username">EMAIL / TELEPHONE</label>
                                    <input type="text" value="" minlength="3" class="form-control bg-light rounded border-0 text-1" name="username" id="username" required="" v-model="username">
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group col">
                                    <label class="text-color-light-2" for="password">PASSWORD</label>
                                    <input type="password" value="" class="form-control bg-light rounded border-0 text-1" name="password" id="password" required="" v-model="password">
                                </div>
                            </div>
                            <div class="form-row mb-3">
                                <div class="form-group col">
                                    <div class="form-check checkbox-custom checkbox-custom-transparent checkbox-default">
                                        <input class="form-check-input" type="checkbox" id="frmSignInRemember">
                                        <label class="form-check-label text-color-light-2" for="frmSignInRemember">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                                <div class="form-group col text-right">
                                    
                                    <a href="#" class="forgot-pw text-color-light-2 inline-block">Forgot password?</a>
                                </div>
                            </div>
                            <div class="row align-items-center">
                                <div class="col">
                                    <a href="register/" class="margin-right-15 text-color-light-2 w3-hover-text-orange inline-block">REGISTER</a>
                                </div>
                                <div class="col text-right">
                                     <button @click.prevent="loginClicked" class="btn btn-dark w3-orange w3-hover-red btn-rounded btn-v-3 btn-h-3 font-weight-bold">SIGN IN</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    name: 'Login',
    data: function(){
        return{
            username: '',
            password: ''
        };
    },
    methods:{
        loginClicked(){
            this.getLogin({
                ...this.$data,
                'hf-token': 'token'
            }).then((res)=>{
                this.$router.push({
                    name: 'requests'
                })
            });
        },
        ...mapActions(['getLogin'])
    }
}
</script>


