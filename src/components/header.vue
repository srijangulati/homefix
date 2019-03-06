<template>
    <header id="header" class="header-transparent header-transparent-sticky-deactive header-container-bottom-border" data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyStartAt': 1, 'stickySetTop': '0px', 'stickyChangeLogo': true}">
				<div class="header-body">
					<div class="header-container container">
						<div class="header-row">
							<div class="header-column justify-content-start">
								<div class="header-logo">
									<a href="./">
										<img alt="Homefix" width="200" data-change-src="images/hf-logo-light.png" src="images/hf-logo-dark.png">
									</a>
								</div>
							</div>
							<div class="header-column justify-content-end">
								<div class="header-nav">
									<div class="header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1">
										<nav class="collapse">
											<ul class="nav flex-column flex-lg-row" id="mainNav">
												<li class="dropdown dropdown-mega">
													<a class="dropdown-item active" href="#">
														REQUESTS
													</a>
												</li>
                                                <li class="dropdown dropdown-mega dropdown-mega-style-2">
													<a class="dropdown-item" href="#">
														TRANSACTIONS
													</a>
												</li>
                                                <li class="dropdown dropdown-mega dropdown-mega-style-2">
													<a class="dropdown-item" href="#">
														PROFILE
													</a>
												</li>
                                                <li class="dropdown dropdown-mega dropdown-mega-style-2">
													<a class="dropdown-item" @click="logout" href="#">
														LOGOUT
													</a>
												</li>
											</ul>
										</nav>
									</div>
									<button class="header-btn-collapse-nav header-btn-collapse-nav-light on-sticky-dark ml-3" data-toggle="collapse" data-target=".header-nav-main nav">
										<span class="hamburguer">
											<span></span>
											<span></span>
											<span></span>
										</span>
										<span class="close">
											<span></span>
											<span></span>
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
</template>
<script>
export default {
	name:"header",
	methods:{
		logout: function(){
			window.localStorage.setItem('csa_rid','');
			this.$router.push({
				name: 'Login'
			})
		}
	}
}
</script>
