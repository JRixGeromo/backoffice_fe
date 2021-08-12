<template>
    <div class="per-title-main">
		<div class="per-title-inner">
			<div class="per-title-left">
				<h2>Performance</h2>
			</div>
			<div class="per-title-right">
				<a href="javascript:void(0)" class="per-popup-btn">
					<svg width="28" height="6" viewBox="0 0 28 6" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g opacity="0.5">
					<circle cx="25" cy="3" r="3" fill="#868686"/>
					<circle cx="14" cy="3" r="3" fill="#868686"/>
					<circle cx="3" cy="3" r="3" fill="#868686"/>
					</g>
					</svg>
				</a>
			</div>
			</div>
		</div>
			<div class="per-block-main">
            <div class="per-block-row">
            <div class="per-block-item-main">
			<div class="per-block-item-inner">
			<div class="per-block-item-con">
			<div class="per-block-item-con-left">
                <h3>Total Sales</h3>   
                <h2>${{ totalSales }}</h2>
			</div>
            <div class="per-block-item-con-right">
                <div class="per-block-item-con-right-inner">
                <span>-83%</span>
                </div>
            </div>
			</div>
			</div>
            </div>
				<div class="per-block-item-main green-item">
				<div class="per-block-item-inner">
					<div class="per-block-item-con">
					<div class="per-block-item-con-left">
						<h3>Net Sales</h3>
						<h2>${{ netSales }}</h2>
					</div>
					<div class="per-block-item-con-right">
						<div class="per-block-item-con-right-inner">
						<span>-83%</span>
						</div>
					</div>
					</div>
				</div>
				</div>
				<div class="per-block-item-main blue-item">
				<div class="per-block-item-inner">
					<div class="per-block-item-con">
					<div class="per-block-item-con-left">
						<h3>Orders</h3>
						<h2>{{ orders }}</h2>
					</div>
					<div class="per-block-item-con-right">
						<div class="per-block-item-con-right-inner">
						<span>-85%</span>
						</div>
					</div>
					</div>
				</div>
				</div>
				<div class="per-block-item-main red-item">
				<div class="per-block-item-inner">
					<div class="per-block-item-con">
					<div class="per-block-item-con-left">
						<h3>Items Sold</h3>
						<h2>{{ itemsSold }}</h2>
					</div>
					<div class="per-block-item-con-right">
						<div class="per-block-item-con-right-inner">
						<span>-85%</span>
						</div>
					</div>
					</div>
				</div>
				</div>
				<div class="per-block-item-main black-item">
				<div class="per-block-item-inner">
					<div class="per-block-item-con">
					<div class="per-block-item-con-left">
						<h3>Items Sold</h3>
						<h2>0</h2>
					</div>
					<div class="per-block-item-con-right">
						<div class="per-block-item-con-right-inner">
						<span>0%</span>
						</div>
					</div>
					</div>
				</div>
				</div>
		</div>
	</div>
</template>

<script>
import {onMounted, ref} from 'vue';
import axios from 'axios';

export default {
  name: "Performance",
  components: {},
  setup() {
    const totalSales = ref();   
    const orders = ref();
    const netSales = ref();
    const itemsSold = ref();


    const load = async () => {
    const {data} = await axios.get('analytics/overview');
    
    const resultItemsSold = data.sales.map(data => data.items_sold);
    const resultNetSales = data.sales.map(data => data.net_sales);

    const sumData = function(resultItems){
        return resultItems.reduce((itemsSales1, itemsSales2) => parseFloat(itemsSales1) + parseFloat(itemsSales2), 0);
    }

    const sumItemsSold = sumData(resultItemsSold);
    const sumNetSales = sumData(resultNetSales);

	itemsSold.value = sumItemsSold.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    netSales.value = sumNetSales.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    orders.value = data.sales.length.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    totalSales.value = (sumItemsSold * sumNetSales).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    
    console.log(itemsSold)
    console.log(netSales)
    console.log(orders)
    console.log(totalSales)
    };

    onMounted(load);

    return {
      totalSales,
      netSales,
      orders,
      itemsSold,
      load
    }
  },
    mounted() {
		//Perfomance popup js code start 
        window.$(".dash-performance-inner-area .per-title-right .per-popup-btn").click(function() {
		window.$('.dash-performance-main-area .per-pop-menu-inner-area').toggleClass('open-popup-per');
			});

		},
}

</script>

