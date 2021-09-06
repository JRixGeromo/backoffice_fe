<template>
  <section class="login-main">
    <div class="login-main-sec">
      <div class="container">
        <div class="login-con-main">
          <div class="login-con-inner">
            <div class="login-left-part">
              <div class="login-left-inner-part">
                <div class="logo-area">
                  <a href="JavaScript:void(0)"
                    ><img src="../assets/images/logo.png" alt="Logo"
                  /></a>
                </div>
                <div class="login-heading-area">
                  <h2>Welcome back</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing
                    <span>and typesettn industry.</span>
                  </p>
                </div>
                <div class="form-main-area">
                  <div class="form-con-inner">
                    <form @submit.prevent="submit">
                      <div class="form-field-item">
                        <input
                          v-model="form.email"
                          type="email"
                          class="form-custom"
                          placeholder="Email Address"
                          required
                        />

                        <div class="main-icon">
                          <svg
                            width="24"
                            height="18"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.2 1H20.8C22.01 1 23 1.9 23 3V15C23 16.1 22.01 17 20.8 17H3.2C1.99 17 1 16.1 1 15V3C1 1.9 1.99 1 3.2 1Z"
                              stroke="#121212"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M23 3L12 10L1 3"
                              stroke="#121212"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="form-field-item">
                        <input
                          v-model="form.password"
                          type="password"
                          class="form-custom"
                          placeholder="Password"
                          required
                        />

                        <div class="main-icon">
                          <svg
                            width="24"
                            height="18"
                            viewBox="0 0 24 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 9C1 9 5 1 12 1C19 1 23 9 23 9C23 9 19 17 12 17C5 17 1 9 1 9Z"
                              stroke="#121212"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
                              stroke="#121212"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                      <div class="forgot-pass-area">
                        <div class="forgot-pass-inner">
                          <div class="forgot-left-part">
                            <label>
                              <input type="checkbox" name="" />
                              <p><span>Remember me</span></p>
                            </label>
                          </div>
                          <div class="forgot-right-part">
                            <a href="JavaScript:void(0)">Forget Password?</a>
                          </div>
                        </div>
                      </div>
                      <div class="login-button-area">
                        <button type="submit" class="login-btn">login</button>
                        <!-- <h3>Don’t have an account? <a href="JavaScript:void(0)">Signup</a></h3> -->
                      </div>
                      <!-- <div class="copyright-txt-area">
                                            <p>© 2018-2020 Nelda.com LLC. All Rights Reserved.</p>
                                        </div> -->
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div class="login-right-part">
              <div class="login-right-inner-con">
                <div class="login-slider-main-area">
                  <div class="swiper-container login_slider_main">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <div class="login-slidr-item-main">
                          <h2>Lorem Ipsum</h2>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-pagination"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { reactive } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default {
  name: 'Login',
  setup() {
    const form = reactive({
      email: '',
      password: '',
    })
    const router = useRouter()

    const submit = async () => {
      await axios.post('login', {
        email: form.email,
        password: form.password,
      })

      await router.push('/overview')
    }

    return {
      form,
      submit,
    }
  },
}
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

.form-signin .form-control:focus {
  z-index: 2;
}

.form-signin input[type='email'] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type='password'] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
