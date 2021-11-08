<template>
	<div class="dash-content-area-inner">
		<div class="dash-title-area">
			<div class="dash-title-area-inner">
				<div class="dash-left-title">
					<h2>Customers</h2>
				</div>
				<div class="dash-right-title">
					<a href="javascript:void(0)">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M21.3333 16H16C16 17.0609 15.5786 18.0783 14.8284 18.8284C14.0783 19.5786 13.0609 20 12 20C10.9391 20 9.92172 19.5786 9.17157 18.8284C8.42143 18.0783 8 17.0609 8 16H2.66667V2.66667H21.3333V16ZM21.3333 0H2.66667C1.18667 0 0 1.2 0 2.66667V21.3333C0 22.0406 0.280951 22.7189 0.781048 23.219C1.28115 23.719 1.95942 24 2.66667 24H21.3333C22.0406 24 22.7189 23.719 23.219 23.219C23.719 22.7189 24 22.0406 24 21.3333V2.66667C24 1.95942 23.719 1.28115 23.219 0.781048C22.7189 0.280951 22.0406 0 21.3333 0Z"
								fill="#367BF5"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
		<div class="dash-date-main-area">
			<div class="dash-date-inner-area">
				<h3>Information about customer: <b>{{ customerInfo.name }}</b></h3>
			</div>
		</div>
		<div class="dash-customers-content-main">
			<div class="dash-customers-content-inner-area">
				<div class="dash-customers-content-first-area">
					<div class="dash-customers-content dash-customers-content-info">
						<div class="dash-customers-content-info-main">
							<div class="dash-customers-content-name-email">
								<p class="dash-customers-info-first-name">
									<b>
										{{ customerInfo.name }}
										[{{ customerInfo.uid }}]
									</b>
								</p>
								<p class="dash-customers-info-email">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="#0d98ba"
										stroke="#FFFFFF"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path
											d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
										></path>
										<polyline points="22,6 12,13 2,6"></polyline>
									</svg>
									<span>{{ customerInfo.email }}</span>
								</p>
							</div>
							<div class="dash-customers-content-edit-name">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#fff"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon>
									<line x1="3" y1="22" x2="21" y2="22"></line>
								</svg>
								<a
									href="javascript:void(0)"
									class="dash-customers-content-edit-name-btn"
									>Edit</a
								>
							</div>
						</div>

						<div class="dash-customers-content-info-inner">
							<div class="dash-customers-content-info-text">
								<h5>Social Title</h5>
								<p v-if="customerInfo.title">{{ customerInfo.title }}</p>
								<p v-else>Unknown</p>
							</div>
							<div class="dash-customers-content-info-text">
								<h5>Age</h5>
								<p v-if="customerInfo.age">{{ customerInfo.age }}</p>
								<p v-else>Unknown</p>
							</div>
							<div class="dash-customers-content-info-text">
								<h5>Registration Date</h5>
								<p v-if="customerInfo.created_at">{{ customerInfo.created_at }}</p>
								<p v-else>Unknown</p>
							</div>
							<div class="dash-customers-content-info-text">
								<h5>Last Visit</h5>
								<p v-if="customerInfo.lastlogin">{{ customerInfo.lastlogin }}</p>
								<p v-else>Unknown</p>
							</div>
							<div class="dash-customers-content-info-text">
								<h5>Registrations</h5>
								<a
									href="javascript:void(0)"
									class="dash-customers-content-info-text-btn"
									>x Newsletter</a
								>
								<a
									href="javascript:void(0)"
									class="dash-customers-content-info-text-btn"
									>x Opt In</a
								>
							</div>
							<div class="dash-customers-content-info-text">
								<h5>Latest Update</h5>
								<p v-if="customerInfo.updated_at">{{ customerInfo.updated_at }}</p>
								<p v-else>Unknown</p>
							</div>
							<div class="dash-customers-content-info-text">
								<h5>Status</h5>
								<a
									href="javascript:void(0)"
									class="
										dash-customers-content-info-text-btn
										dash-customers-content-info-text-btn-active
									"
									>Active</a
								>
							</div>
						</div>
					</div>
					<div class="dash-customers-content-orders dash-customers-content">
						<div
							class="
								dash-customers-content-title-noborder
								dash-customers-content-groups-header
							"
						>
							<div class="dash-customers-content-groups-title">
								<h5>Orders</h5>
								<div class="dash-customers-content-notifications">
									<h5>1</h5>
								</div>
							</div>
						</div>
						<div class="dash-customers-content-orders-table-header">
							<div class="dash-customers-content-orders-table-valid">
								<svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M12.8 0H1.6C0.72 0 0 0.72 0 1.6V12.8C0 13.68 0.72 14.4 1.6 14.4H12.8C13.68 14.4 14.4 13.68 14.4 12.8V1.6C14.4 0.72 13.68 0 12.8 0ZM5.6 11.2L1.6 7.2L2.72 6.08L5.6 8.96L11.68 2.88L12.8 4L5.6 11.2Z"
                                fill="#2FA84F"
                              />
                            </svg>
								<h6>Valid orders</h6>
								<span>0</span>
								<h6>for a total amount of $0.00</h6>
							</div>
							<div class="dash-customers-content-orders-table-invalid">
								<span>
									<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M19 4h-9M14 20H5M14.7 4.7L9.2 19.4"/></svg>
								</span>
								<h6>invalid orders</h6>
								<span>1</span>
							</div>
						</div>
						<div class="leader-table-main">
							<table class="table">
								<thead>
									<tr>
										<th class="trunc">
											<span>ID</span>
										</th>
										<th class="small-w">
											<span>Date</span>
										</th>
										<th class="small-w">
											<span>Payment</span>
										</th>
										<th class="small-w">
											<span>Status</span>
										</th>
										<th class="small-w">
											<span>Products</span>
										</th>
										<th class="small-w">
											<span>Total Spent</span>
										</th>
									</tr>
								</thead>
								<tbody>
									<!-- <tr class="spacer-main"></tr> -->
									<tr v-for="order in orders" :key="order.id">
										<td class="trunc">
											<span>{{ order.id }}</span>
										</td>
										<td class="small-w">
											<span>{{ order.crdate }}</span>
										</td>
										<td class="small-w">
											<span>{{ order.payment }}</span>
										</td>
										<td class="small-w">
											<span>{{ order.order_status }}</span>
										</td>
										<td class="small-w">
											<span>{{ order.products }}</span>
										</td>
										<td class="small-w">
											<span>{{ order.total_net }}</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div class="dash-customers-content-groups dash-customers-content">
						<div
							class="
								dash-customers-content-title-noborder
								dash-customers-content-groups-header
							"
						>
							<div class="dash-customers-content-groups-title">
								<h5>Viewed Products</h5>
								<div class="dash-customers-content-notifications">
									<h5>1</h5>
								</div>
							</div>
						</div>
						<div class="leader-table-main">
							<table class="table">
								<thead>
									<tr>
										<th class="trunc">
											<span>ID</span>
										</th>
										<th class="small-w">
											<span>Name</span>
										</th>
									</tr>
								</thead>
								<tbody>
									<!-- <tr class="spacer-main"></tr> -->
									<!-- <tr v-for="viewedProduct in viewedProducts" :key="viewedProduct.id"> -->
									<tr>
										<td class="trunc">
											<span><!-- {{ viewedProduct.id }} --></span>
										</td>
										<td class="small-w">
											<span><!-- {{ viewedProduct.order_status }} --></span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<div class="dash-customers-content-second-area">
					<div class="dash-customers-content dash-customers-content-note">
						<div class="dash-customers-content-title">
							<h5>Add a Private Note</h5>
						</div>
						<div class="dash-customers-content-note-inner">
							<div class="dash-customers-content-note-info">
								<h6>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="#0d98ba "
										stroke="#ffffff"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<circle cx="12" cy="12" r="10"></circle>
										<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
										<line x1="12" y1="17" x2="12.01" y2="17"></line>
									</svg>
									This note will be displayed to all employees but not to customers.
								</h6>
							</div>
							<div class="dash-customers-content-textbox-info">
								<form>
									<div class="form-group">
										<label for="noteTextarea"></label>
										<textarea
											class="form-control"
											id="noteTextarea"
											rows="3"
										></textarea>
									</div>
								</form>
							</div>
							<div class="dash-customers-content-note-button">
								<a href="javascript:void(0)">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="#FFFFFF"
										stroke="#367bf5"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									>
										<path
											d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
										></path>
										<polyline points="17 21 17 13 7 13 7 21"></polyline>
										<polyline points="7 3 7 8 15 8"></polyline>
									</svg>
									Save
								</a>
							</div>
						</div>
					</div>

					<div class="dash-customers-content-messages dash-customers-content">
						<div class="dash-customers-content-title">
							<h5>Messages</h5>
							<div class="dash-customers-content-notifications">
								<h5>0</h5>
							</div>
						</div>

						<div class="dash-customers-content-messages-inner">
							<div class="dash-customers-content-messages-info">
								<h5>
									<!-- {{ message }} -->
								</h5>
							</div>
						</div>
					</div>

					<div class="dash-customers-content-vouchers dash-customers-content">
						<div class="dash-customers-content-title">
							<h5>Vouchers</h5>
							<div class="dash-customers-content-notifications">
								<h5>0</h5>
							</div>
						</div>

						<div class="dash-customers-content-messages-inner">
							<div class="dash-customers-content-messages-info">
								<h5>
									<!-- {{ voucher }} -->
								</h5>
							</div>
						</div>
					</div>

					<div
						class="dash-customers-content-last-emails dash-customers-content"
					>
						<div class="dash-customers-content-title-noborder">
							<h5>Last Emails</h5>
						</div>
						<div class="leader-table-main">
							<table class="table">
								<thead>
									<tr>
										<th class="trunc">
											<span>Date</span>
										</th>
										<th class="small-w">
											<span>Language</span>
										</th>
										<th class="small-w">
											<span>Subject</span>
										</th>
										<th class="small-w">
											<span>Template</span>
										</th>
									</tr>
								</thead>
								<tbody>
									<!-- <tr class="spacer-main"></tr> -->
									<!-- <tr v-for="lastEmail in lastEmails" :key="lastEmail.id"> -->
									<tr>
										<td class="trunc">
											<span><!-- {{ lastEmail.id }} --></span>
										</td>
										<td class="small-w">
											<span><!-- {{ lastEmail.currency_code }} --></span>
										</td>
										<td class="small-w">
											<span><!-- {{ lastEmail.internal_date }} --></span>
										</td>
										<td class="small-w">
											<span><!-- {{ lastEmail.order_status }} --></span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>

					<div class="dash-customers-content-groups dash-customers-content">
						<div
							class="
								dash-customers-content-title-noborder
								dash-customers-content-groups-header
							"
						>
							<div class="dash-customers-content-groups-title">
								<h5>Groups</h5>
								<div class="dash-customers-content-notifications">
									<h5>{{ groups.length }}</h5>
								</div>
							</div>
							<div class="dash-customers-content-edit-name">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									stroke="#fff"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								>
									<polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon>
									<line x1="3" y1="22" x2="21" y2="22"></line>
								</svg>
								<a
									href="javascript:void(0)"
									class="dash-customers-content-edit-name-btn"
									>Edit</a
								>
							</div>
						</div>
						<div class="leader-table-main">
							<table class="table">
								<thead>
									<tr>
										<th class="trunc">
											<span>ID</span>
										</th>
										<th class="small-w">
											<span>Name</span>
										</th>
									</tr>
								</thead>
								<tbody>
									<!-- <tr class="spacer-main"></tr> -->
									<tr>
										<td class="trunc">
											<span>{{ customerInfo.id}}</span>
										</td>
										<td class="small-w">
											<span v-if="customerInfo.usergroup">{{ customerInfo.customerInfo}}</span>
											<span v-else>Unknown</span>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
	name: "Customer",
	components: {},
	data() {
		return {
			customerInfo: [],
			orders: [],
			viewedProducts: [],
			message: null,
			voucher: null,
			lastEmails: [],
			groups: [],
		};
	},
	mounted() {
		axios.get(`analytics/customer/${null}/${null}/${null}`).then((response) => {
			const customer = response.data;
			this.customerInfo = customer.customer_info[0];
			console.log(customer);
			this.orders = customer.orders;
			this.viewedProducts = customer.viewed_products;
			this.message = customer.message;
			this.voucher = customer.voucher;
			this.lastEmails = customer.last_emails;
			this.groups = customer.groups;

		});
	},
});
</script>

<style scoped></style>
