<template>
<div class="leaderboard-popup-main">
	<div class="per-pop-menu-main">
		<div class="per-pop-menu-inner-area">
			<div class="per-pop-menu-heading-area">
				<h2>Products</h2>
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
													id="categoryProductTitle"
													type="checkbox"
													class="cb-value"
													checked="checked"
													@click="toogle('categoryProductTitle')"
												/>
											<span class="round-btn"></span>
										</div>
									</div>
										<p>Product Title</p>
								</div>
							</li>
							<li>
								<div class="toggle-container no-border">
									<div class="toggle-switch-main">
										<div class="toggle-btn active">
											<input
													id="categorySKU"
													type="checkbox"
													class="cb-value"
													checked="checked"
													@click="toogle('categorySKU')"
												/>
											<span class="round-btn"></span>
										</div>
									</div>
										<p>SKU</p>
								</div>
							</li>
							<li class="bg-color">
								<div class="toggle-container no-border">
									<div class="toggle-switch-main">
										<div class="toggle-btn active">
											<input
													id="categoryItemsSold"
													type="checkbox"
													class="cb-value"
													checked="checked"
													@click="toogle('categoryItemsSold')"
												/>
											<span class="round-btn"></span>
										</div>
									</div>
										<p>Items Sold</p>
								</div>
							</li>
							<li>
								<div class="toggle-container">
									<div class="toggle-switch-main">
										<div class="toggle-btn active">
											<input
													id="categoryNetSales"
													type="checkbox"
													class="cb-value"
													checked="checked"
													@click="toogle('categoryNetSales')"
												/>
											<span class="round-btn"></span>
										</div>
									</div>
									<p>Net Sales</p>
								</div>
							</li>
							<li>
								<div class="toggle-container">
									<div class="toggle-switch-main">
										<div class="toggle-btn active">
											<input
													id="categoryOrders"
													type="checkbox"
													class="cb-value"
													checked="checked"
													@click="toogle('categoryOrders')"
												/>
											<span class="round-btn"></span>
										</div>
									</div>
									<p>Orders</p>
								</div>
							</li>
							<li>
								<div class="toggle-container">
									<div class="toggle-switch-main">
										<div class="toggle-btn active">
											<input
													id="categoryCategory"
													type="checkbox"
													class="cb-value"
													checked="checked"
													@click="toogle('categoryCategory')"
												/>
											<span class="round-btn"></span>
										</div>
									</div>
									<p>Category</p>
								</div>
							</li>
							<li>
								<div class="toggle-container">
									<div class="toggle-switch-main">
										<div class="toggle-btn active">
											<input
													id="categoryVariations"
													type="checkbox"
													class="cb-value"
													checked="checked"
													@click="toogle('categoryVariations')"
												/>
											<span class="round-btn"></span>
										</div>
									</div>
									<p>Variations</p>
								</div>
							</li>
							<li>
								<div class="toggle-container">
									<div class="toggle-switch-main">
										<div class="toggle-btn active">
											<input
													id="categoryStatus"
													type="checkbox"
													class="cb-value"
													checked="checked"
													@click="toogle('categoryStatus')"
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
													id="categoryStock"
													type="checkbox"
													class="cb-value"
													checked="checked"
													@click="toogle('categoryStock')"
												/>
											<span class="round-btn"></span>
										</div>
									</div>
									<p>Stock</p>
								</div>
							</li>
						</ul>
					</div>
					<div class="per-bottom-con-area">
						<div class="per-bottom-con-area-inner">
							<div class="bottom-container">
								<h3>Section Title</h3>
								<p>Products</p>
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
import { toggleSwitch } from '@/helper/helper'

export default {
  name: 'categoryProduct',

	methods: {
    toogle(el) {
      toggleSwitch(el)
    },
  },

}
</script>

<style>

</style>