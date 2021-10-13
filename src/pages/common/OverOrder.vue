<template>
<div class="leaderboard-popup-main">
	<div class="per-pop-menu-main">
		<div class="per-pop-menu-inner-area">
			<div class="per-pop-menu-heading-area">
				<h2>Orders</h2>
			</div>
			<div class="per-poup-con-main">
				<div class="per-poup-con-inner">
					<div class="per-popup-list-area">
						<ul>
							<li>
								<div class="toggle-container">
									<div class="toggle-switch-main">
										<div class="toggle-btn active">
												<input
													id="ordersDate"
													type="checkbox"
													class="cb-value"
													checked="checked"
													@click="toggle('ordersDate')"
												/>
											<span class="round-btn"></span>
										</div>
									</div>
										<p>Date</p>
								</div>
							</li>
							<li>
								<div class="toggle-container no-border">
									<div class="toggle-switch-main">
										<div class="toggle-btn active">
											<input
													id="ordersNumber"
													type="checkbox"
													class="cb-value"
													checked="checked"
													@click="toggle('ordersNumber')"
												/>
											<span class="round-btn"></span>
										</div>
									</div>
										<p>Order Number</p>
								</div>
							</li>
							<li class="bg-color">
								<div class="toggle-container no-border">
									<div class="toggle-switch-main">
										<div class="toggle-btn active">
											<input
													id="ordersStatus"
													type="checkbox"
													class="cb-value"
													checked="checked"
													@click="toggle('ordersStatus')"
												/>
											<span class="round-btn"></span>
										</div>
									</div>
										<p>Status</p>
								</div>
							</li>
							<li>
								<div class="toggle-container">
									<div class="toggle-switch-main">
										<div class="toggle-btn active">
											<input
													id="ordersCustomer"
													type="checkbox"
													class="cb-value"
													checked="checked"
													@click="toggle('ordersCustomer')"
												/>
											<span class="round-btn"></span>
										</div>
									</div>
									<p>Customer</p>
								</div>
							</li>
							<li>
								<div class="toggle-container">
									<div class="toggle-switch-main">
										<div class="toggle-btn active">
											<input
													id="ordersCustomerType"
													type="checkbox"
													class="cb-value"
													checked="checked"
													@click="toggle('ordersCustomerType')"
												/>
											<span class="round-btn"></span>
										</div>
									</div>
									<p>Customer Type</p>
								</div>
							</li>
							<li>
								<div class="toggle-container">
									<div class="toggle-switch-main">
										<div class="toggle-btn active">
											<input
													id="ordersProducts"
													type="checkbox"
													class="cb-value"
													checked="checked"
													@click="toggle('ordersProducts')"
												/>
											<span class="round-btn"></span>
										</div>
									</div>
									<p>Products</p>
								</div>
							</li>
							<li>
								<div class="toggle-container">
									<div class="toggle-switch-main">
										<div class="toggle-btn active">
											<input
													id="ordersItemSold"
													type="checkbox"
													class="cb-value"
													checked="checked"
													@click="toggle('ordersItemSold')"
												/>
											<span class="round-btn"></span>
										</div>
									</div>
									<p>Item Sold</p>
								</div>
							</li>
							<li>
								<div class="toggle-container">
									<div class="toggle-switch-main">
										<div class="toggle-btn active">
											<input
													id="ordersCoupons"
													type="checkbox"
													class="cb-value"
													checked="checked"
													@click="toggle('ordersCoupons')"
												/>
											<span class="round-btn"></span>
										</div>
									</div>
									<p>Coupons</p>
								</div>
							</li>
							<li>
								<div class="toggle-container">
									<div class="toggle-switch-main">
										<div class="toggle-btn active">
											<input
													id="ordersNetSales"
													type="checkbox"
													class="cb-value"
													checked="checked"
													@click="toggle('ordersNetSales')"
												/>
											<span class="round-btn"></span>
										</div>
									</div>
									<p>Net Sales</p>
								</div>
							</li>
						</ul>
					</div>
					<div class="per-bottom-con-area">
						<div class="per-bottom-con-area-inner">
							<div class="bottom-container">
								<h3>Section Title</h3>
								<p>Orders</p>
							</div>
							<ul>
								<li>
									<a href="javascript:void(0)">
										<div class="icon-area">
											<svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M2.115 -0.000122183L9 6.80446L15.885 -0.000122183L18 2.105L9 10.9999L0 2.105L2.115 -0.000122183Z" fill="#EA3D2F" />
											</svg>
										</div>
										<h6>Move Down</h6>
									</a>
								</li>
								<li>
									<a href="javascript:void(0)">
										<div class="icon-area">
											<svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M16 1.11099H12L10.8571 -0.00012207H5.14286L4 1.11099H0V3.33321H16V1.11099ZM1.14286 17.7777C1.14286 18.367 1.38367 18.9323 1.81233 19.349C2.24098 19.7658 2.82236 19.9999 3.42857 19.9999H12.5714C13.1776 19.9999 13.759 19.7658 14.1877 19.349C14.6163 18.9323 14.8571 18.367 14.8571 17.7777V4.44432H1.14286V17.7777Z" fill="#EA3D2F" />
											</svg>
										</div>
										<h6>Remove section</h6>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>

export default {
  name: 'OverOrder',
  props: {
    toggle: {
      type: Function,
      required: true,
    },
  },  
  methods: {
    // toggle(el) {
    //   toggleSwitch(el)
    // },
  },

}
</script>

<style>

</style>