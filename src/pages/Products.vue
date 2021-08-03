<template>
			<div class="dash-content-area-inner">
				<div class="dash-title-area">
					<div class="dash-title-area-inner">
						<div class="dash-left-title">
							<h2>Products</h2>
						</div>
						<div class="dash-right-title">
							<a href="javascript:void(0)">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M21.3333 16H16C16 17.0609 15.5786 18.0783 14.8284 18.8284C14.0783 19.5786 13.0609 20 12 20C10.9391 20 9.92172 19.5786 9.17157 18.8284C8.42143 18.0783 8 17.0609 8 16H2.66667V2.66667H21.3333V16ZM21.3333 0H2.66667C1.18667 0 0 1.2 0 2.66667V21.3333C0 22.0406 0.280951 22.7189 0.781048 23.219C1.28115 23.719 1.95942 24 2.66667 24H21.3333C22.0406 24 22.7189 23.719 23.219 23.219C23.719 22.7189 24 22.0406 24 21.3333V2.66667C24 1.95942 23.719 1.28115 23.219 0.781048C22.7189 0.280951 22.0406 0 21.3333 0Z" fill="#367BF5"/>
								</svg>
							</a>
						</div>
					</div>
				</div>
				<div class="dash-date-main-area">
					<div class="dash-date-inner-area">
						<h3>Date Range</h3>
						<div class="dash-date-con-area">
							<div class="dash-date-con-area-inner">
								<h3>Month to Date (Jun 1 - 29,2021)</h3>
								<p>vs. Previous Year (Jun 1 - 29,2020)</p>
							</div>
						</div>
					</div>
					<div class="dash-date-inner-area">
						<h3>Show:</h3>
						<div class="dash-date-con-area">
							<div class="dash-select-product-area-inner">
								<select class="select-product">
									<option value="All Products">All Products</option>
									<option value="All Products">All Products</option>
									<option value="All Products">All Products</option>
									<option value="All Products">All Products</option>
									<option value="All Products">All Products</option>
								</select>
							</div>
						</div>
					</div>
				</div>
				<div class="product-tab-main-sec-area">
					<div class="product-tab-inner-area">
						<div class="product-tab-main">
							<div class="product-tab-row">
								<a class="product-tab-item-main" href="" rel="product-tab-item-1">
									<div class="product-tab-item-inner">
										<div class="product-tab-item-con">
											<div class="product-tab-item-con-left">
												<h3>Items Sold</h3>
												<h2>${{ itemsSold.itemSold }}</h2>
											</div>
											<div class="product-tab-item-con-right">
												<div class="product-tab-item-con-right-inner">
													<span>-85%</span>
												</div>
											</div>
										</div>
									</div>
								</a>
								<a class="product-tab-item-main product-green-item" href="" rel="product-tab-item-2">
									<div class="product-tab-item-inner">
										<div class="product-tab-item-con">
											<div class="product-tab-item-con-left">
												<h3>Net Sales</h3>
												<h2>${{ netSales.netSale }}</h2>
											</div>
											<div class="product-tab-item-con-right">
												<div class="product-tab-item-con-right-inner">
													<span>-87%</span>
												</div>
											</div>
										</div>
									</div>
								</a>
								<a class="product-tab-item-main product-blue-item" href="" rel="product-tab-item-3">
									<div class="product-tab-item-inner">
										<div class="product-tab-item-con">
											<div class="product-tab-item-con-left">
												<h3>Orders</h3>
												<h2>{{ orders.order }}</h2>
											</div>
											<div class="product-tab-item-con-right">
												<div class="product-tab-item-con-right-inner">
													<span>-85%</span>
												</div>
											</div>
										</div>
									</div>
								</a>
							</div>
								
							<!-- Product Tab Content -->
							<div class="product-tab-content-main-area">
								<div class="product-tab-content-item" id="product-tab-item-1">
									<div class="product-tab-content-header">
										<div class="product-tab-content-title">
											<h3>Items Sold</h3>
										</div>
										<div class="product-tab-content-center">
											<div class="product-tab-header-date">
												<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8 0H1.6C0.72 0 0 0.72 0 1.6V12.8C0 13.68 0.72 14.4 1.6 14.4H12.8C13.68 14.4 14.4 13.68 14.4 12.8V1.6C14.4 0.72 13.68 0 12.8 0ZM5.6 11.2L1.6 7.2L2.72 6.08L5.6 8.96L11.68 2.88L12.8 4L5.6 11.2Z" fill="#F3AA18"></path>
												</svg>
												<p>Month to Date (Jun 1 - 19,2021)</p>
												<span>678</span>
											</div>
											<div class="product-tab-header-date">
												<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8 0H1.6C0.72 0 0 0.72 0 1.6V12.8C0 13.68 0.72 14.4 1.6 14.4H12.8C13.68 14.4 14.4 13.68 14.4 12.8V1.6C14.4 0.72 13.68 0 12.8 0ZM5.6 11.2L1.6 7.2L2.72 6.08L5.6 8.96L11.68 2.88L12.8 4L5.6 11.2Z" fill="#367BF5"></path>
												</svg>
												<p>Previous Year (Jun 1 - 29,2020)</p>
												<span>4,531</span>
											</div>
										</div>
										<div class="product-tab-content-right">
											<ul>
												<li class="first-list-icon">
													<a href="javascript:void(0)">
														By Day
														<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M8.825 8.50953e-07L5 3.7085L1.175 1.82168e-07L-5.28948e-07 1.1417L5 6L10 1.1417L8.825 8.50953e-07Z" fill="white"></path>
														</svg>
													</a>
												</li>
												<li class="second-icon-list blue-list">
													<a href="javascript:void(0)">
														<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M0 10H1.66667V8.33333H0V10ZM2.77778 10H4.44444V6.11111H2.77778V10ZM5.55556 10H7.22222V3.33333H5.55556V10ZM8.33333 10H10V0H8.33333V10Z" fill="#367BF5"></path>
														</svg>
													</a>
												</li>
												<li class="second-icon-list gray-list">
													<a href="javascript:void(0)">
														<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M12 10H0V3.15789L4.3 5.78947L6.81333 4.24561L12 7.39649V10ZM0 1.53684V0L4.3 2.63158L6.81333 1.08772L12 4.2386V5.78947L6.81333 2.63158L4.3 4.15439L0 1.53684Z" fill="#868686"></path>
														</svg>
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div class="product-tab-chart-area">
										<!--<canvas id="myCharttab"></canvas>-->
										<LineChart
											v-if="itemsSold.isLoaded"
											v-bind:chartData="itemsSold.chartData"
											v-bind:chartOptions="itemsSold.chartOptions"
										/>									
									</div>
								</div>
								<div class="product-tab-content-item" id="product-tab-item-2">
									<div class="product-tab-content-header">
										<div class="product-tab-content-title">
											<h3>Net Sales</h3>
										</div>
										<div class="product-tab-content-center">
											<div class="product-tab-header-date">
												<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8 0H1.6C0.72 0 0 0.72 0 1.6V12.8C0 13.68 0.72 14.4 1.6 14.4H12.8C13.68 14.4 14.4 13.68 14.4 12.8V1.6C14.4 0.72 13.68 0 12.8 0ZM5.6 11.2L1.6 7.2L2.72 6.08L5.6 8.96L11.68 2.88L12.8 4L5.6 11.2Z" fill="#F3AA18"></path>
												</svg>
												<p>Month to Date (Jun 1 - 19,2021)</p>
												<span>678</span>
											</div>
											<div class="product-tab-header-date">
												<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8 0H1.6C0.72 0 0 0.72 0 1.6V12.8C0 13.68 0.72 14.4 1.6 14.4H12.8C13.68 14.4 14.4 13.68 14.4 12.8V1.6C14.4 0.72 13.68 0 12.8 0ZM5.6 11.2L1.6 7.2L2.72 6.08L5.6 8.96L11.68 2.88L12.8 4L5.6 11.2Z" fill="#367BF5"></path>
												</svg>
												<p>Previous Year (Jun 1 - 29,2020)</p>
												<span>4,531</span>
											</div>
										</div>
										<div class="product-tab-content-right">
											<ul>
												<li class="first-list-icon">
													<a href="javascript:void(0)">
														By Day
														<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M8.825 8.50953e-07L5 3.7085L1.175 1.82168e-07L-5.28948e-07 1.1417L5 6L10 1.1417L8.825 8.50953e-07Z" fill="white"></path>
														</svg>
													</a>
												</li>
												<li class="second-icon-list blue-list">
													<a href="javascript:void(0)">
														<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M0 10H1.66667V8.33333H0V10ZM2.77778 10H4.44444V6.11111H2.77778V10ZM5.55556 10H7.22222V3.33333H5.55556V10ZM8.33333 10H10V0H8.33333V10Z" fill="#367BF5"></path>
														</svg>
													</a>
												</li>
												<li class="second-icon-list gray-list">
													<a href="javascript:void(0)">
														<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M12 10H0V3.15789L4.3 5.78947L6.81333 4.24561L12 7.39649V10ZM0 1.53684V0L4.3 2.63158L6.81333 1.08772L12 4.2386V5.78947L6.81333 2.63158L4.3 4.15439L0 1.53684Z" fill="#868686"></path>
														</svg>
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div class="product-tab-chart-area">
										<!--<canvas id="myCharttab"></canvas>-->
										<LineChart
											v-if="netSales.isLoaded"
											v-bind:chartData="netSales.chartData"
											v-bind:chartOptions="netSales.chartOptions"
										/>									
									</div>
								</div>
								<div class="product-tab-content-item" id="product-tab-item-3">
									<div class="product-tab-content-header">
										<div class="product-tab-content-title">
											<h3>Orders</h3>
										</div>
										<div class="product-tab-content-center">
											<div class="product-tab-header-date">
												<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8 0H1.6C0.72 0 0 0.72 0 1.6V12.8C0 13.68 0.72 14.4 1.6 14.4H12.8C13.68 14.4 14.4 13.68 14.4 12.8V1.6C14.4 0.72 13.68 0 12.8 0ZM5.6 11.2L1.6 7.2L2.72 6.08L5.6 8.96L11.68 2.88L12.8 4L5.6 11.2Z" fill="#F3AA18"></path>
												</svg>
												<p>Month to Date (Jun 1 - 19,2021)</p>
												<span>678</span>
											</div>
											<div class="product-tab-header-date">
												<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8 0H1.6C0.72 0 0 0.72 0 1.6V12.8C0 13.68 0.72 14.4 1.6 14.4H12.8C13.68 14.4 14.4 13.68 14.4 12.8V1.6C14.4 0.72 13.68 0 12.8 0ZM5.6 11.2L1.6 7.2L2.72 6.08L5.6 8.96L11.68 2.88L12.8 4L5.6 11.2Z" fill="#367BF5"></path>
												</svg>
												<p>Previous Year (Jun 1 - 29,2020)</p>
												<span>4,531</span>
											</div>
										</div>
										<div class="product-tab-content-right">
											<ul>
												<li class="first-list-icon">
													<a href="javascript:void(0)">
														By Day
														<svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M8.825 8.50953e-07L5 3.7085L1.175 1.82168e-07L-5.28948e-07 1.1417L5 6L10 1.1417L8.825 8.50953e-07Z" fill="white"></path>
														</svg>
													</a>
												</li>
												<li class="second-icon-list blue-list">
													<a href="javascript:void(0)">
														<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M0 10H1.66667V8.33333H0V10ZM2.77778 10H4.44444V6.11111H2.77778V10ZM5.55556 10H7.22222V3.33333H5.55556V10ZM8.33333 10H10V0H8.33333V10Z" fill="#367BF5"></path>
														</svg>
													</a>
												</li>
												<li class="second-icon-list gray-list">
													<a href="javascript:void(0)">
														<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M12 10H0V3.15789L4.3 5.78947L6.81333 4.24561L12 7.39649V10ZM0 1.53684V0L4.3 2.63158L6.81333 1.08772L12 4.2386V5.78947L6.81333 2.63158L4.3 4.15439L0 1.53684Z" fill="#868686"></path>
														</svg>
													</a>
												</li>
											</ul>
										</div>
									</div>
									<div class="product-tab-chart-area">
										<!--<canvas id="myCharttab"></canvas>-->
										<LineChart
											v-if="orders.isLoaded"
											v-bind:chartData="orders.chartData"
											v-bind:chartOptions="orders.chartOptions"
										/>									
									</div>
								</div>
							</div>


						</div>
					</div>

					<!-- Product Tabel Section -->
					<div class="product-table-main-area">
						<div class="product-table-inner-area">
							<div class="Product-table-header-area">
								<div class="product-table-header-title">
									<h2>Products</h2>
								</div>
								<div class="product-table-header-second">
									<span><a href="#">Compare</a></span>
									<form>
										<input type="text" name="search" placeholder="Search">
										<a href="#" class="prodct-search-ic">
											<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path opacity="0.5" d="M6.5 0C8.22391 0 9.87721 0.684819 11.0962 1.90381C12.3152 3.12279 13 4.77609 13 6.5C13 8.11 12.41 9.59 11.44 10.73L11.71 11H12.5L17.5 16L16 17.5L11 12.5V11.71L10.73 11.44C9.59 12.41 8.11 13 6.5 13C4.77609 13 3.12279 12.3152 1.90381 11.0962C0.684819 9.87721 0 8.22391 0 6.5C0 4.77609 0.684819 3.12279 1.90381 1.90381C3.12279 0.684819 4.77609 0 6.5 0ZM6.5 2C4 2 2 4 2 6.5C2 9 4 11 6.5 11C9 11 11 9 11 6.5C11 4 9 2 6.5 2Z" fill="#636363"/>
											</svg>
										</a>
									</form>
								</div>
								<div class="product-table-header-third">
									<ul>
										<li class="download-btn">
											<a href="#">
												<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cloud-download-alt" class="svg-inline--fa fa-cloud-download-alt fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
													<path fill="#FFFFFF" d="M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zm-132.9 88.7L299.3 420.7c-6.2 6.2-16.4 6.2-22.6 0L171.3 315.3c-10.1-10.1-2.9-27.3 11.3-27.3H248V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v112h65.4c14.2 0 21.4 17.2 11.3 27.3z"></path>
												</svg>
												Download
											</a>
										</li>
										<li>
											<a href="#">
												<svg width="4" height="19" viewBox="0 0 4 19" fill="#868686" xmlns="http://www.w3.org/2000/svg">
													<g opacity="0.5">
														<circle cx="2" cy="16.6667" r="2" transform="rotate(90 2 16.6667)" fill="#868686"/>
														<circle cx="2" cy="9.33331" r="2" transform="rotate(90 2 9.33331)" fill="#868686"/>
														<circle cx="2" cy="2" r="2" transform="rotate(90 2 2)" fill="#868686"/>
													</g>
												</svg>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div class="product-tabel-sec-area">
								<div class="product-tabel-sec-inner-area">
									<table>
										<thead>
											<tr>
												<th>
													<label class="form-check-label">
														<input class="form-check-input" type="checkbox" value="">
														<span class="form-check-sign">
															<span class="check"></span>
														</span>
													</label>
												</th>
												<th>
													Product Title
												</th>
												<th>
													SKU
												</th>
												<th>
													Items Sold
												</th>
												<th>
													Net Sales
												</th>
												<th>
													Orders
												</th>
												<th>
													Category
												</th>
												<th>
													Variations
												</th>
												<th>
													Status
												</th>
												<th>
													Stock
												</th>
											</tr>
										</thead>
										<tbody>
											<tr class="product-table-spacer"></tr>
											<tr>
												<td>
													<label class="form-check-label">
														<input class="form-check-input" type="checkbox" value="">
														<span class="form-check-sign">
															<span class="check"></span>
														</span>
													</label>
												</td>
												<td>
													<div class="product-table-title">
														<img src="images/table-1.png">
														<p>Bolivia 90%</p>
													</div>
												</td>
												<td>
													2418
												</td>
												<td>
													129
												</td>
												<td>
													$1,134.58
												</td>
												<td>
													4
												</td>
												<td>
													All products
													<span>+2 more</span>
												</td>
												<td>
													0
												</td>
												<td>
													In Stock
												</td>
												<td>
													-1
												</td>
											</tr>
											<tr class="product-table-spacer"></tr>
											<tr>
												<td>
													<label class="form-check-label">
														<input class="form-check-input" type="checkbox" value="">
														<span class="form-check-sign">
															<span class="check"></span>
														</span>
													</label>
												</td>
												<td>
													<div class="product-table-title">
														<img src="images/table-2.png">
														<p>Whisky</p>
													</div>
												</td>
												<td>
													16151
												</td>
												<td>
													23
												</td>
												<td>
													$603.25
												</td>
												<td>
													10
												</td>
												<td>
													All products
													<span>+1 more</span>
												</td>
												<td>
													0
												</td>
												<td>
													In Stock
												</td>
												<td>
													168
												</td>
											</tr>
											<tr class="product-table-spacer"></tr>
											<tr class="product-table-active">
												<td>
													<label class="form-check-label">
														<input class="form-check-input" checked="checked" type="checkbox" value="">
														<span class="form-check-sign">
															<span class="check"></span>
														</span>
													</label>
												</td>
												<td>
													<div class="product-table-title">
														<img src="images/table-3.png">
														<p>Nicaragua 50%</p>
													</div>
												</td>
												<td>
													20477
												</td>
												<td>
													17
												</td>
												<td>
													$280.05
												</td>
												<td>
													3
												</td>
												<td>
													All products
													<span>+1 more</span>
												</td>
												<td>
													0
												</td>
												<td>
													In Stock
												</td>
												<td>
													21
												</td>
											</tr>
											<tr class="product-table-spacer"></tr>
											<tr>
												<td>
													<label class="form-check-label">
														<input class="form-check-input" type="checkbox" value="">
														<span class="form-check-sign">
															<span class="check"></span>
														</span>
													</label>
												</td>
												<td>
													<div class="product-table-title">
														<img src="images/table-4.png">
														<p>Butter Caramel</p>
													</div>
												</td>
												<td>
													16056
												</td>
												<td>
													15
												</td>
												<td>
													$1,031.31
												</td>
												<td>
													11
												</td>
												<td>
													All products
													<span>+1 more</span>
												</td>
												<td>
													0
												</td>
												<td>
													In Stock
												</td>
												<td>
													371
												</td>
											</tr>
											<tr class="product-table-spacer"></tr>
											<tr>
												<td>
													<label class="form-check-label">
														<input class="form-check-input" type="checkbox" value="">
														<span class="form-check-sign">
															<span class="check"></span>
														</span>
													</label>
												</td>
												<td>
													<div class="product-table-title">
														<img src="images/table-5.png">
														<p>Typically Austria</p>
													</div>
												</td>
												<td>
													16319
												</td>
												<td>
													15
												</td>
												<td>
													$857.88
												</td>
												<td>
													10
												</td>
												<td>
													All products
													<span>+1 more</span>
												</td>
												<td>
													0
												</td>
												<td>
													In Stock
												</td>
												<td>
													140
												</td>
											</tr>
											<tr class="product-table-spacer"></tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>


				</div>
				
			</div>




</template>

<script>
import { defineComponent, ref } from 'vue'
import LineChart from './LineChart.vue'
import axios from 'axios'

export default defineComponent({
	name: "Products",
	components: {LineChart,},
	data() {
    return {
      itemsSold: {
        isLoaded: false,
        chartData: null,
		itemSold: 0,
      },
      netSales: {
        isLoaded: false,
        chartData: null,
		netSale: 0,
      },
		orders: {
        isLoaded: false,
        chartData: null,
		order:0,
      },
    }
  },
  mounted() {
    this.itemsSold.isLoaded = false
    this.netSales.isLoaded = false
	this.orders.isLoaded = false


    axios.get('analytics/overview').then((response) => {
      const salesResult = response.data.sales

		
		const resultItemsSold = salesResult.map(data => data.items_sold);
		const resultNetSales = salesResult.map(data => data.net_sales);

		const sumData = function(resultItems){
			return resultItems.reduce((itemsSales1, itemsSales2) => parseFloat(itemsSales1) + parseFloat(itemsSales2), 0);
		}

		const sumItemsSold = sumData(resultItemsSold);
		const sumNetSales = sumData(resultNetSales);

		this.itemsSold.itemSold = sumItemsSold.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		this.netSales.netSale = sumNetSales.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		this.orders.order = salesResult.length.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		
		//Charts
      this.itemsSold.chartData = {
        labels: salesResult.filter(s => s.date.includes('2020')).map(function(data) {
          return data.date
        }),
        datasets: [
          {
            label: 'Items Sold 2021',
            //fill: false,
            borderColor: '#367BF5',
            backgroundColor: [
                'rgba(54, 123, 245, 0.2)',
            ],
            borderWidth: 1,
            data: salesResult.filter(s => s.date.includes('2021')).map(function(data) {
              return data.items_sold
            }),
          },          
          {
            label: 'Items Sold 2020',
            //fill: false,
            borderColor: '#F3AA18',
            backgroundColor: ['rgb(243 170 24 / 20%)'],
            borderWidth: 1,
            data: salesResult.filter(s => s.date.includes('2020')).map(function(data) {
              return data.items_sold
            }),
          }
        ],
      }
      this.itemsSold.isLoaded = true
	
	//NetSales Chart Data//
      this.netSales.chartData = {
        labels: salesResult.filter(s => s.date.includes('2020')).map(function(data) {
          return data.date
        }),
        datasets: [
          {
            label: 'Items Sold 2021',
            //fill: false,
            borderColor: '#367BF5',
            backgroundColor: [
                'rgba(54, 123, 245, 0.2)',
            ],
            borderWidth: 1,
            data: salesResult.filter(s => s.date.includes('2021')).map(function(data) {
              return data.net_sales
            }),
          },          
          {
            label: 'Items Sold 2020',
            //fill: false,
            borderColor: '#069697',
            backgroundColor: ['rgb(6 150 151 / 20%)'],
            borderWidth: 1,
            data: salesResult.filter(s => s.date.includes('2020')).map(function(data) {
              return data.net_sales
            }),
          }
        ],
      }
      this.netSales.isLoaded = true

	//Orders Chart Data//
      this.orders.chartData = {
        labels: salesResult.filter(s => s.date.includes('2020')).map(function(data) {
          return data.date
        }),
        datasets: [
          {
            label: 'Items Sold 2021',
            //fill: false,
            borderColor: '#367BF5',
            backgroundColor: [
                'rgba(54, 123, 245, 0.2)',
            ],
            borderWidth: 1,
            data: salesResult.filter(s => s.date.includes('2021')).map(function(data) {
              return data.net_sales
            }),
          },          
          {
            label: 'Items Sold 2020',
            //fill: false,
            borderColor: '#367BF5',
            backgroundColor: ['rgb(54 123 245 / 20%)'],
            borderWidth: 1,
            data: this.orders.order,
          }
        ],
      }
      this.orders.isLoaded = true


 




    })


 
			window.$(".product-tab-main .product-tab-content-item").hide();
			window.$("#product-tab-item-1").show();
			window.$(".product-tab-item-main:first-child").addClass("product-tab-active");

			window.$(".product-tab-item-main").click(function(event){
			// alert("hello");
			event.preventDefault();
			window.$(".product-tab-item-main").removeClass("product-tab-active");
			window.$(".product-tab-main .product-tab-content-item").hide();
			window.$(this).addClass("product-tab-active");
			window.$("#"+window.$(this).attr("rel")).show();
		});

  },
})
</script>
