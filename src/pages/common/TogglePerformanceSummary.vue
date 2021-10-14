<template>
<div class="per-pop-menu-main">
	<div class="per-pop-menu-inner-area">
		<div class="per-pop-menu-heading-area">
			<h2>Display Status:</h2>
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
											id="performanceTotalSales"
											type="checkbox"
											class="cb-value"
											checked="checked"
											@click="toggle('performanceTotalSales')"
										/>
										<span class="round-btn"></span>
									</div>
								</div>
								<p>Total Sales</p>
							</div>
						</li>
						<li>
							<div class="toggle-container no-border">
								<div class="toggle-switch-main">
									<div class="toggle-btn active">
										<input
											id="performancerNetSales"
											type="checkbox"
											class="cb-value"
											checked="checked"
											@click="toggle('performancerNetSales')"
										/>
										<span class="round-btn"></span>
									</div>
								</div>
								<p>Net Sales</p>
							</div>
						</li>
						<li class="bg-color">
							<div class="toggle-container">
								<div class="toggle-switch-main">
									<div class="toggle-btn active">
										<input
											id="performanceOrders"
											type="checkbox"
											class="cb-value"
											checked="checked"
											@click="toggle('performanceOrders')"
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
									<div class="toggle-btn">
										<input type="checkbox" class="cb-value" />
										<input
											id="performanceAverageOrder"
											type="checkbox"
											class="cb-value"
											@click="toggle('performanceAverageOrder')"
										/>
										<span class="round-btn"></span>
									</div>
								</div>
								<p>Average order value</p>
							</div>
						</li>
						<li>
							<div class="toggle-container">
								<div class="toggle-switch-main">
									<div class="toggle-btn active">
										<input
											id="performanceItemsSold"
											type="checkbox"
											class="cb-value"
											checked="checked"
											@click="toggle('performanceItemsSold')"
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
									<div class="toggle-btn">
										<input
											id="performanceReturns"
											type="checkbox"
											class="cb-value"
											@click="toggle('performanceReturns')"
										/>
										<span class="round-btn"></span>
									</div>
								</div>
								<p>Returns</p>
							</div>
						</li>
						<li>
							<div class="toggle-container">
								<div class="toggle-switch-main">
									<div class="toggle-btn">
										<input
											id="performanceDiscountedAmount"
											type="checkbox"
											class="cb-value"
											@click="toggle('performanceDiscountedAmount')"
										/>
										<span class="round-btn"></span>
									</div>
								</div>
								<p>Discounted amount</p>
							</div>
						</li>
						<li>
							<div class="toggle-container">
								<div class="toggle-switch-main">
									<div class="toggle-btn">
										<input
											id="performanceNetDiscountedAmount"
											type="checkbox"
											class="cb-value"
											@click="toggle('performanceNetDiscountedAmount')"
										/>
										<span class="round-btn"></span>
									</div>
								</div>
								<p>Net discounted amount</p>
							</div>
						</li>
						<li>
							<div class="toggle-container">
								<div class="toggle-switch-main">
									<div class="toggle-btn">
										<input
											id="performanceTotalTax"
											type="checkbox"
											class="cb-value"
											@click="toggle('performanceTotalTax')"
										/>
										<span class="round-btn"></span>
									</div>
								</div>
								<p>Total tax</p>
							</div>
						</li>
						<li>
							<div class="toggle-container">
								<div class="toggle-switch-main">
									<div class="toggle-btn">
										<input
											id="performanceOrderTax"
											type="checkbox"
											class="cb-value"
											@click="toggle('performanceOrderTax')"
										/>
										<span class="round-btn"></span>
									</div>
								</div>
								<p>Order tax</p>
							</div>
						</li>
						<li>
							<div class="toggle-container">
								<div class="toggle-switch-main">
									<div class="toggle-btn">
										<input
											id="performanceShippingTax"
											type="checkbox"
											class="cb-value"
											@click="toggle('performanceShippingTax')"
										/>
										<span class="round-btn"></span>
									</div>
								</div>
								<p>Shipping tax</p>
							</div>
						</li>
						<li>
							<div class="toggle-container">
								<div class="toggle-switch-main">
									<div class="toggle-btn">
										<input
											id="performanceShipping"
											type="checkbox"
											class="cb-value"
											@click="toggle('performanceShipping')"
										/>
										<span class="round-btn"></span>
									</div>
								</div>
								<p>Shipping</p>
							</div>
						</li>
						<li>
							<div class="toggle-container">
								<div class="toggle-switch-main">
									<div class="toggle-btn">
										<input
											id="performanceDownloads"
											type="checkbox"
											class="cb-value"
											@click="toggle('performanceDownloads')"
										/>
										<span class="round-btn"></span>
									</div>
								</div>
								<p>Downloads</p>
							</div>
						</li>
						<li>
							<div class="toggle-container">
								<div class="toggle-switch-main">
									<div class="toggle-btn">
										<input
											id="performanceGrossSales"
											type="checkbox"
											class="cb-value"
											@click="toggle('performanceGrossSales')"
										/>
										<span class="round-btn"></span>
									</div>
								</div>
								<p>Gross Sales</p>
							</div>
						</li>
						<li>
							<div class="toggle-container">
								<div class="toggle-switch-main">
									<div class="toggle-btn active">
										<input
											id="performanceItemSold"
											type="checkbox"
											class="cb-value"
											checked="checked"
											@click="toggle('performanceItemSold')"
										/>
										<span class="round-btn"></span>
									</div>
								</div>
								<p>Item Sold</p>
							</div>
						</li>
					</ul>
				</div>
				<div class="per-bottom-con-area">
					<div class="per-bottom-con-area-inner">
						<div class="bottom-container">
							<h3>Section Title</h3>
							<p>Performance</p>
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
</template>

<script>
import { toggleSwitch } from '@/helper/helper'

export default {
  name: 'OverPerformance',
  props: {
    toggle: {
      type: Function,
      required: true,
    },
  },
	methods: {
//     toggle(el) {
//       toggleSwitch(el)
//     },
    },
}
</script>

<style>

</style>