<template>
	<div class="dash-content-area-inner">
		<div class="dash-title-area">
			<div class="dash-title-area-inner">
				<div class="dash-left-title">
					<h2>Order Details</h2>
				</div>
				<div class="dash-right-title">
					<a href="javascript:void(0)">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M21.3333 16H16C16 17.0609 15.5786 18.0783 14.8284 18.8284C14.0783 19.5786 13.0609 20 12 20C10.9391 20 9.92172 19.5786 9.17157 18.8284C8.42143 18.0783 8 17.0609 8 16H2.66667V2.66667H21.3333V16ZM21.3333 0H2.66667C1.18667 0 0 1.2 0 2.66667V21.3333C0 22.0406 0.280951 22.7189 0.781048 23.219C1.28115 23.719 1.95942 24 2.66667 24H21.3333C22.0406 24 22.7189 23.719 23.219 23.219C23.719 22.7189 24 22.0406 24 21.3333V2.66667C24 1.95942 23.719 1.28115 23.219 0.781048C22.7189 0.280951 22.0406 0 21.3333 0Z" fill="#367BF5" />
						</svg>
					</a>
				</div>
			</div>
		</div>
		<div class="dash-order-details-content-main">
			<div class="dash-order-details-content-inner-area">
				<div class="dash-order-details-content-first-area">
					<div class="order-fixed-main">
						<div class="order-inner-main">
							<div class="order-title-main">
								<div class="orderd-left-title order-details-left-title">
									<div class="row">
										<div class="col-md-12">
											<h3 class="title-main">
												<strong> Order #45587 details </strong>
											</h3>
										</div>
										<div class="col-md-12">
											<span class="sub-title"> Payment via PayPal USA, Canada. Paid on 07/09/2021 @ 12:08pm </span>
										</div>
									</div>
								</div>
							</div>
							<div class="order-details-inner">
								<div class="row">
									<div class="col-md-12">
										<div class="order-basic-details">
											<form>
												<div class="row">
													<div class="col-md-6">
														<div class="form-group">
															<label for="inputAddress">Order Date / Time</label>
															<input type="date" class="form-control" id="" placeholder="date">
														</div>
														<div class="form-group">
															<label for="inputAddress2">Order Status</label>
															<select id="orderstatus" class="form-control">
																<option selected>Order Status</option>
																<option>..</option>
																<option>..</option>
																<option>..</option>
																<option>..</option>
															</select>
														</div>
														<div class="form-group">
															<div class="row">
																<div class="col-md-6">
																	<label for="inputState">Customer</label>
																</div>
																<div class="col-md-6 text-right">
																	<a href="#" class="label-c-rec"> Customer Record </a>
																</div>
															</div>
															<select id="orderstatus" class="form-control">
																<option selected>Customer</option>
																<option>..</option>
																<option>..</option>
																<option>..</option>
																<option>..</option>
															</select>
														</div>
													</div>
													<div class="col-md-6">
														<div class="form-row">
															<div class="form-group col-md-6">
																<div class="address-area">
																	<div class="address-title">
																		<div class="title-area">
																			<h5>Billing Address</h5>
																		</div>
																		<div class="description-area"> Waldgasse, 10-16/C2/34 2201 Gerasdorf bei Wien Österreich </div>
																		<div class="address-edit">
																			<a href="#">
																				<i class="fa fa-pencil"></i>
																			</a>
																		</div>
																	</div>
																</div>
															</div>
															<div class="form-group col-md-6">
																<div class="address-area">
																	<div class="address-title">
																		<div class="title-area">
																			<h5>Shipping Address</h5>
																		</div>
																		<div class="description-area"> Waldgasse, 10-16/C2/34 2201 Gerasdorf bei Wien Österreich </div>
																		<div class="address-edit">
																			<a href="#">
																				<i class="fa fa-pencil"></i>
																			</a>
																		</div>
																	</div>
																</div>
															</div>
														</div>
														<div class="form-group mt-3">
															<label for="inputAddress2">Email Address</label>
															<input type="text" class="form-control" id="" placeholder="loremipsum@gmail.com">
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="dash-customers-content-orders dash-customers-content">
						<div class="viewed-product-box-fixed">
							<div class="viewed-product-inner-main">
								<div class="viewed-product-title-main">
									<h3>Ordered Products</h3>
								</div>
								<div class="product-tabel-sec-inner-area-main mt-5">
									<table>
										<thead>
											<tr>
												<th> Product Name </th>
												<th> Quantity </th>
												<th> Single Price </th>
												<th> Total Price </th>
											</tr>
										</thead>
										<tbody>
											<tr class="product-table-spacer-fix"></tr>
											<tr>
												<td>
													<div class="product-table-title-fix">
														<img src="@/assets/images/table-1.png">
														<p>Bolivia 90%</p>
													</div>
												</td>
												<td> 5478 </td>
												<td> 21 </td>
												<td> 5486 </td>
											</tr>
											<tr class="product-table-spacer-fix"></tr>
											<tr>
												<td>
													<div class="product-table-title-fix">
														<img src="@/assets/images/table-2.png">
														<p>Whisky</p>
													</div>
												</td>
												<td> 5478 </td>
												<td> 21 </td>
												<td> 5486 </td>
											</tr>
											<tr class="product-table-spacer-fix"></tr>
											<tr class="product-table-active">
												<td>
													<div class="product-table-title-fix">
														<img src="@/assets/images/table-3.png">
														<p>Nicaragua 50%</p>
													</div>
												</td>
												<td> 3564 </td>
												<td> 65 </td>
												<td> 6942 </td>
											</tr>
											<tr class="product-table-spacer-fix"></tr>
											<tr>
												<td>
													<div class="product-table-title-fix">
														<img src="@/assets/images/table-4.png">
														<p>Butter Caramel</p>
													</div>
												</td>
												<td> 9875 </td>
												<td> 02 </td>
												<td> 3154 </td>
											</tr>
											<tr class="product-table-spacer-fix"></tr>
											<tr>
												<td>
													<div class="product-table-title-fix">
														<img src="@/assets/images/table-5.png">
														<p>Typically Austria</p>
													</div>
												</td>
												<td> 3124 </td>
												<td> 54 </td>
												<td> 1248 </td>
											</tr>
											<tr class="product-table-spacer-fix"></tr>
										</tbody>
									</table>
									<!-- Ordered Products Table -->
									<div class="barbara-form-main ordered-products">
										<form>
											<div class="form-group row table-content-right">
												<label for="" class="col-sm-4 col-form-label">Total Products</label>
												<div class="col-sm-2 bar-form-label-content">
													<label for="" class="col-form-label">54157</label>
												</div>
											</div>
											<div class="form-group row table-content-right">
												<label for="" class="col-sm-4 col-form-label">Shipping Costs</label>
												<div class="col-sm-2 bar-form-label-content">
													<label for="" class="col-form-label">548</label>
												</div>
											</div>
											<div class="form-group row table-content-right">
												<label for="" class="col-sm-4 col-form-label">
													<span class="badge badge-danger mr-2">World Chocolate Day 10% off</span>Discount </label>
												<div class="col-sm-2 bar-form-label-content">
													<label for="" class="col-form-label">15.24</label>
												</div>
											</div>
											<div class="form-group row table-content-right">
												<label for="" class="col-sm-4 col-form-label">Tax</label>
												<div class="col-sm-2 bar-form-label-content">
													<label for="" class="col-form-label">243</label>
												</div>
											</div>
											<div class="form-group row table-content-right">
												<label for="" class="col-sm-4 col-form-label">Order Total</label>
												<div class="col-sm-2 bar-form-label-content">
													<label for="" class="col-form-label">98756</label>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="dash-order-details-content-second-area">
					<div class="dash-customers-content dash-customers-content-note">
						<div class="customer-private-not-fixed">
							<div class="customer-private-not-inner-main">
								<div class="customer-private-not-title-main order-note-sidebar">
									<h3>Order Note</h3>
								</div>
								<div class="notes-listing-area">
									<!-- Item First -->
									<div class="notes-item">
										<div class="notes-item-desc bg-gray"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula, turpis sed luctus dictum, risus tortor fringilla felis... </div>
										<div class="row align-items-center">
											<div class="col-md-6">
												<div class="notes-item-date-time">
													<span class="note-date">07/09/2021</span> at 12:43pm
												</div>
											</div>
											<div class="col-md-6 flex-right">
												<a href="/" class="ic_dlt">
													<img src="@/assets/images/ic_trash.png" class="img-fluid">
												</a>
											</div>
										</div>
									</div>
									<!-- Item Second -->
									<div class="notes-item mt-5">
										<div class="notes-item-desc bg-gray"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula, turpis sed luctus dictum, risus tortor fringilla felis, non lobortis lacus diam in massa. Morbi volutpat iaculis elit quis convallis </div>
										<div class="row align-items-center">
											<div class="col-md-6">
												<div class="notes-item-date-time">
													<span class="note-date">07/09/2021</span> at 12:08 pm
												</div>
											</div>
											<div class="col-md-6 flex-right">
												<a href="#" class="ic_dlt">
													<img src="@/assets/images/ic_trash.png" class="img-fluid">
												</a>
											</div>
										</div>
									</div>
									<!-- Item Third -->
									<div class="notes-item mt-5">
										<div class="notes-item-desc bg-cyan"> Shipped </div>
										<div class="row align-items-center">
											<div class="col-md-6">
												<div class="notes-item-date-time">
													<span class="note-date">06/08/2021</span> at 9:02 pm
												</div>
											</div>
											<div class="col-md-6 flex-right">
												<a href="#" class="ic_dlt">
													<img src="@/assets/images/ic_trash.png" class="img-fluid">
												</a>
											</div>
										</div>
									</div>
									<!-- Item Fourth -->
									<div class="notes-item mt-5">
										<div class="notes-item-desc bg-cyan"> Payment accepted </div>
										<div class="row align-items-center">
											<div class="col-md-6">
												<div class="notes-item-date-time">
													<span class="note-date">06/08/2021</span> at 8:42 pm
												</div>
											</div>
											<div class="col-md-6 flex-right">
												<a href="#" class="ic_dlt">
													<img src="@/assets/images/ic_trash.png" class="img-fluid">
												</a>
											</div>
										</div>
									</div>
									<!-- Item Fifth -->
									<div class="notes-item mt-5">
										<div class="notes-item-desc bg-gray"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula, turpis sed luctus dictum, risus tortor fringilla felis, non lobortis lacus diam in massa. Morbi volutpat iaculis elit quis convallis </div>
										<div class="row align-items-center">
											<div class="col-md-6">
												<div class="notes-item-date-time">
													<span class="note-date">07/09/2021</span> at 4:12 pm
												</div>
											</div>
											<div class="col-md-6 flex-right">
												<a href="#" class="ic_dlt">
													<img src="@/assets/images/ic_trash.png" class="img-fluid">
												</a>
											</div>
										</div>
									</div>
								</div>
								<div class="add-notes-area mt-2">
									<form>
										<div class="form-group">
											<label for="exampleFormControlTextarea1">Add Note</label>
											<textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
										</div>
										<div class="form-group">
											<div class="row">
												<div class="col-md-9">
													<select id="orderstatus" class="form-control">
														<option selected>Private Notes</option>
														<option>..</option>
														<option>..</option>
														<option>..</option>
														<option>..</option>
													</select>
												</div>
												<div class="col-md-3">
													<button type="submit" class="btn btn-primary btn-add mb-2">Add</button>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "OrderDetails",
	components: {},

});
</script>

<style scoped>
</style>
