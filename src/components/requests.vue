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
					<div class="row" v-if="checkIfLoaded()" v-for="(request, index) in requests[active]" :key="index">
					 <div class="col">
      	      	           
                    <div class="service-list mb-3 w3-border-bottom">
              <div class="row">
                <div class="col-sm-3 col-xs-4">
                  <div class="picture">
                  <img width="100%" :src="'https://homefix.ng/media/services/'+request.service.category.cat_image"></div>
                </div>
                <div class="col-sm-6 col-xs-8 mt-3">
                  <dl class="row">
                    <dt class="col-sm-3">SERVICE</dt>
                    <dd class="col-sm-9 bold text-3 service-name">{{request.service.service_name}}</dd>
                    <dt class="col-sm-3">CATEGORY</dt>
                    <dd class="col-sm-9 service-category">{{request.service.category.cat_name}}</dd>
                    <dt class="col-sm-3">STATUS</dt>
                    <dd class="col-sm-9" v-html="request.status_text"></dd>
                    <dt class="col-sm-3">DATE</dt>
                    <dd class="col-sm-9">Sat 29th December, 2018 06:39pm</dd>
                    <dt class="col-sm-3">CSA</dt>
                    <dd class="col-sm-9">
						Not assigned                    </dd>
                  </dl>
                </div>
                <div class="col-sm-2 col-xs-12">
                  <div class="service-list-right-side text-center mt-3"> 
                  	<a data-request="20181229183923851505" target="_blank" :href="'https://homefix.ng/dashboard/requests-detail/'+request.request_rid" class="btn btn-warning btn-fill btn-block btn-download btn-round w3-round-xxlarge bold"> <i class="fa fa-search" aria-hidden="true"></i> DETAIL </a>
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
	</div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
const REQUEST_TYPES = [
    {
        name: 'NEW REQUEST',
        id: 'new'
    },{
        name: 'ONGOING REQUEST',
        id: 'processing'
    },{
        name: 'COMPLETED REQUEST',
        id: 'completed'
    }
];
export default {
    name: "Requests",
    data:function(){
        return {
            active:'new'
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
        ...mapActions(['getRequests'])
    }
}
</script>
