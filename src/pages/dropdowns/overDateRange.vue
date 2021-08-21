<template>
	<div class="date-range-popup-main">
		<div class="date-range-pop-menu-main">
			<div class="date-range-pop-menu-inner-area">
				<div class="date-range-pop-menu-heading-area">
					<h2>SELECT DATE RANGE</h2>
				</div>
				<div class="date-range-con-inner">
					<div class="date-range-list-area">
							<ul>
								<li>
									<div>
										<p>Today</p>
									</div>
									<div>
										<p>Yesterday</p>
									</div>
								</li>
								<li>
									<div>
										<p>Week to Date</p>
									</div>
									<div>
										<p>Last Week</p>
									</div>
								</li>
								<li>
									<div>
										<p class="date-range-active1">Month to Date</p>
									</div>
									<div>
										<p>Last Month</p>
									</div>
								</li>
								<li>
									<div>
										<p>Quarter to Date</p>
									</div>
									<div>
										<p>Last Quarter</p>
									</div>
								</li>
								<li>
									<div>
										<p>Year to Date</p>
									</div>
									<div>
										<p>Last Year</p>
									</div>
								</li>
							</ul>
					</div>
				</div>
				<div class="date-range-pop-menu-heading-area">
					<h2>COMPARE TO</h2>
				</div>
				<div class="date-range-con-inner">
					<div class="date-range-list-area">
							<ul>
								<li>
									<div> 
										<p class="date-range-active1">Previous Period</p>
									</div>
									<div>
										<p>Previous Year</p>
									</div>
								</li>
								<li>
									<div>
										<p class="date-range-active2">Products</p>
									</div>
								</li>
							</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'overDateRange',
}
</script>

<style scoped>

</style>