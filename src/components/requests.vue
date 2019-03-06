<template>
    <div role="main" class="main">
				<section class="page-header parallax page-header-text-light page-header-crumbs-light-2 overlay overlay-color-dark overlay-show overlay-op-8 py-0" style="background-image: url(images/questionneire.jpg); background-size: cover;">
				  <div class="container py-5">
					<div class="row mb-3 pt-5 mt-5">
					  <div class="col-md-12">
						<h1 class="font-weight-semibold line-height-2 mb-1"><strong class="font-weight-extra-bold">REQUESTS</strong></h1>
						<ul class="breadcrumb">
						  <li class="cursor_pointer" v-for="type in types" :key="type.id" @click="changeRequestType(type.id)">
                              <a class="text-1" :class="(type.id == active)?'active':''">{{type.name}}</a>
                         </li>
						</ul>
					  </div>
					</div>
				  </div>
				</section>
				<section class="section section-content-pull-top pull-top-level-1 pull-top-always pt-0">
				  <div class="container w3-white border box-shadow p-4" style="min-height: 300px;">
                      <div v-if="requests[active].isEmpty">No Requests</div>
					<div class="row" v-if="checkIfLoaded()" v-for="(request, index) in requests[active].value" :key="index">
					 <div class="col">
      	      	           
                    <div class="service-list mb-3 w3-border-bottom">
              <div class="row">
                <div class="col-sm-3 col-xs-4">
                  <div class="picture">
                  <img width="100%" v-if="getPhoto(request.photos)" :src="'https://homefix.ng/media/requests/photos/'+getPhoto(request.photos)"></div>
                </div>
                <div class="col-sm-6 col-xs-8 mt-3">
                  <dl class="row">
                    <dt class="col-sm-3">SERVICE</dt>
                    <dd class="col-sm-9 bold text-3 service-name left">{{request.service_name}}</dd>
                    <dt class="col-sm-3">CATEGORY</dt>
                    <dd class="col-sm-9 service-category left">{{request.service.category.cat_name}}</dd>
                    <dt class="col-sm-3">STATUS</dt>
                    <dd class="col-sm-9 left" v-html="request.status_text"></dd>
                    <dt class="col-sm-3">DATE</dt>
                    <dd class="col-sm-9 left ">{{getDate(request.request_date)}}</dd>
                    <dt class="col-sm-3">CSA</dt>
                    <dd class="col-sm-9 left">
						{{request.csa_assigned_date?'Assigned':'Not assigned'}}                   </dd>
                  </dl>
                </div>
                <div class="col-sm-2 col-xs-12">
                  <div class="service-list-right-side text-center mt-3"> 
                  	<a data-request="20181229183923851505" @click="selectedRequest = request" class="btn btn-warning btn-fill btn-block btn-download btn-round w3-round-xxlarge bold"> <i class="fa fa-search" aria-hidden="true"></i> DETAIL </a>
                    <div class="review-section mt-2">
                    RATE SERVICE
                      <div class="rating-input cursor mt-1" data-request="request_rid">
                        <span class="rating fa fa-star rate-1 text-4" data-value="1" role="button"></span>
                        <span class="rating fa fa-star rate-2 text-4" data-value="2" role="button"></span>
                        <span class="rating fa fa-star rate-3 text-4" data-value="3" role="button"></span>
                        <span class="rating fa fa-star rate-4 text-4" data-value="4" role="button"></span>
                        <span class="rating fa fa-star rate-5 text-4" data-value="5" role="button"></span>
                          <input type="hidden" name="rating" value="0" class="rating-value">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
			</div>
			</div>
		</section>
        <Modal v-if="selectedRequest" @close="selectedRequest = null" ><Details :request="selectedRequest"/></Modal>
	</div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import moment from 'moment';
import Modal from './modal.vue';
import Details from './details.vue'
const REQUEST_TYPES = [
    {
        name: 'NEW REQUESTS',
        id: 'new'
    },{
        name: 'ONGOING REQUESTS',
        id: 'ongoing'
    },{
        name: 'COMPLETED REQUESTS',
        id: 'completed'
    },{
        name: 'CANCELLED REQUESTS',
        id: 'cancelled'
    }
];
export default {
    name: "Requests",
    data:function(){
        return {
            active:'new',
            selectedRequest: null
        };
    },
    mounted(){
        this.getRequests(this.active);
    },
    watch: {
        'active': function(val){
            this.getRequests(val);
        }
    },
    computed:{
        types: function(){
            return REQUEST_TYPES;
        },
        ...mapState({
            requests : function(state){return state.requests}
        })
    },
    methods:{
        changeRequestType(type){
            this.active = type;
        },
        checkIfLoaded(){
            if(this.requests){
                return true;
            }
            return false;
        },
        getDate(date){
            return moment(date).format('LLLL');
        },
        getPhoto(photos){
            if(photos){
                const p = JSON.parse(photos);
                return p[0];
            }
            return false;
        },
        ...mapActions(['getRequests'])
    },
    components:{
        Modal,
        Details
    }
}
</script>
<style lang="scss">
.left{
    text-align: left;
    padding-left: 10%;
}
img{
    padding-top: 20px;
}
</style>

