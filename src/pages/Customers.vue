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
        <h3>Information about customer: <b>B. Dolleschal</b></h3>
      </div>
    </div>
    <div class="dash-customers-content-main">
      <div class="dash-customers-content-inner-area">
        <div class="dash-customers-content-info">
          <div class="dash-customers-content-name">
            <div class="dash-customers-content-name-email">
              <h5>
                {{ customerInfo.first_name }}
                {{ customerInfo.last_name }}[{{ customerInfo.uid }}]
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
                <span>{{ customerInfo.last_name }}</span>
              </h5>
            </div>
            <div class="dash-customers-content-edit-name">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon>
                <line x1="3" y1="22" x2="21" y2="22"></line>
              </svg>
              <a href="javascript:void(0)">Edit</a>
            </div>
          </div>

          <div class="dash-customers-content-info-inner">
            <div class="dash-customers-content-first-info">
              <h5>Social Title</h5>
              <h5>Age</h5>
              <h5>Registrationn Date</h5>
              <h5>Last Visit</h5>
              <h5>Registrations</h5>
              <h5>Latest Update</h5>
              <h5>Status</h5>
            </div>
            <div class="dash-customers-content-second-info">
              <h5>
                {{ customerInfo.name }}
              </h5>
              <h5>
                {{ customerInfo.name }}
              </h5>
              <h5>
                {{ customerInfo.name }}
              </h5>
              <h5 class="dash-customers-content-second-info-registrations">
                <button>x Newsletter</button><button>x Opt In</button>
              </h5>
              <h5>
                {{ customerInfo.name }}
              </h5>
              <h5 class="dash-customers-content-second-info-status">
                <button>Active</button>
              </h5>
            </div>
          </div>
        </div>

        <div class="dash-customers-content-info">
          <div class="dash-customers-content-name">
            <div class="dash-customers-content-info-heading">
              <h5>Add a Private Note</h5>
            </div>
          </div>

          <div class="dash-customers-content-note-inner">
            <div class="dash-customers-content-note-info">
              <div class="dash-customers-content-note-info-message">
                <h5>
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
                  This note will be
                </h5>
              </div>
            </div>
            <div class="dash-customers-content-textbox-info">
              <form>
                <div class="form-group">
                  <label for="noteTextarea"></label>
                  <textarea class="form-control" id="noteTextarea"></textarea>
                </div>
              </form>
            </div>
            <div class="dash-customers-content-note-button">
              <button>
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
              </button>
            </div>
          </div>
        </div>

        <div class="dash-customers-content-order">
          <div class="dash-customers-content-name">
            <div class="dash-customers-content-info-heading">
              <h5>
                <!-- Orders <span>{{ orderInfo.length }}</span> -->
              </h5>
            </div>
          </div>

          <div class="dash-customers-content-note-inner">
            <div class="dash-customers-content-note-info">
              <div class="dash-customers-content-note-info-message">
                <h5>
                  Valid orders
                </h5>
              </div>
            </div>
            <div class="dash-customers-content-textbox-info">
              <form>
                <div class="form-group">
                  <label for="noteTextarea"></label>
                  <textarea class="form-control" id="noteTextarea"></textarea>
                </div>
              </form>
            </div>
            <div class="dash-customers-content-note-button">
              <button>
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'Customer',
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
    }
  },
  mounted() {
    axios.get('analytics/customer').then((response) => {
      const customer = response.data
      this.customerInfo = customer.customer_info[0]
      this.orders = customer.customer_info[0]
      this.viewedProducts = customer.customer_info[0]
      this.message = customer.message
      this.voucher = customer.voucher
      this.lastEmails = customer.last_emails[0]
      this.groups = customer.groups[0]
    })
  },
})
</script>

<style scoped></style>
