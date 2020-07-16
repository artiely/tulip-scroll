<template>
  <div class="home-box">
    <div class="bg-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="100%"
        height="500px"
      >
        <path
          id="shape1"
          fill-rule="evenodd"
          fill="rgb(35, 23, 123)"
          d="M-0.011,9.318 L8.682,6.988 L11.011,15.682 L2.318,18.011 L-0.011,9.318 Z"
        ></path>
        <path
          id="shape8"
          fill-rule="evenodd"
          fill="rgb(35, 23, 123)"
          d="M607.694,164.319 L612.680,161.693 L615.306,166.680 L610.320,169.305 L607.694,164.319 Z"
        ></path>
        <path
          id="shape9"
          fill-rule="evenodd"
          fill="rgb(93, 203, 250)"
          d="M667.343,205.646 L679.152,213.179 L671.620,224.988 L659.810,217.456 L667.343,205.646 Z"
        ></path>
        <path
          id="shape10"
          fill-rule="evenodd"
          fill="rgb(93, 203, 250)"
          d="M915.839,-0.008 L924.997,5.833 L919.156,14.991 L909.998,9.150 L915.839,-0.008 Z"
        ></path>
        <path
          id="cir6"
          fill-rule="evenodd"
          fill="rgb(35, 23, 123)"
          d="M989.000,93.000 C993.418,93.000 997.000,96.582 997.000,101.000 C997.000,105.418 993.418,109.000 989.000,109.000 C984.582,109.000 981.000,105.418 981.000,101.000 C981.000,96.582 984.582,93.000 989.000,93.000 Z"
        ></path>
        <path
          id="cir5"
          fill-rule="evenodd"
          fill="rgb(35, 23, 123)"
          d="M1165.000,8.000 C1167.761,8.000 1170.000,10.238 1170.000,13.000 C1170.000,15.761 1167.761,18.000 1165.000,18.000 C1162.239,18.000 1160.000,15.761 1160.000,13.000 C1160.000,10.238 1162.239,8.000 1165.000,8.000 Z"
        ></path>
        <path
          id="cir4"
          fill-rule="evenodd"
          fill="rgb(93, 203, 250)"
          d="M1303.500,118.000 C1304.881,118.000 1306.000,119.119 1306.000,120.500 C1306.000,121.880 1304.881,123.000 1303.500,123.000 C1302.119,123.000 1301.000,121.880 1301.000,120.500 C1301.000,119.119 1302.119,118.000 1303.500,118.000 Z"
        ></path>
        <path
          id="cir3"
          fill-rule="evenodd"
          fill="rgb(93, 203, 250)"
          d="M61.000,112.000 C62.657,112.000 64.000,113.343 64.000,115.000 C64.000,116.657 62.657,118.000 61.000,118.000 C59.343,118.000 58.000,116.657 58.000,115.000 C58.000,113.343 59.343,112.000 61.000,112.000 Z"
        ></path>
        <path
          id="cir2"
          fill-rule="evenodd"
          fill="rgb(74, 92, 246)"
          d="M265.500,-0.000 C271.299,-0.000 276.000,4.701 276.000,10.500 C276.000,16.299 271.299,21.000 265.500,21.000 C259.701,21.000 255.000,16.299 255.000,10.500 C255.000,4.701 259.701,-0.000 265.500,-0.000 Z"
        ></path>
        <path
          id="cir1"
          fill-rule="evenodd"
          fill="rgb(35, 23, 123)"
          d="M185.500,131.000 C187.985,131.000 190.000,133.015 190.000,135.500 C190.000,137.985 187.985,140.000 185.500,140.000 C183.015,140.000 181.000,137.985 181.000,135.500 C181.000,133.015 183.015,131.000 185.500,131.000 Z"
        ></path>
      </svg>
    </div>
    <!--End----->
    <div class="box">
      <div class="wave one"></div>
      <div class="wave two"></div>
      <div class="wave three"></div>
    </div>
    <!-- mian start -->
    <div class="main-box">
      <div class="cc">
        <div class="gastly">
          <div class="gastly-shadow-container">
            <div class="gastly-shadow -a"></div>
            <div class="gastly-shadow -b"></div>
            <div class="gastly-shadow -c"></div>
            <div class="gastly-shadow -d"></div>
            <div class="gastly-shadow -e"></div>
            <div class="gastly-shadow -f"></div>
            <div class="gastly-shadow -g"></div>
            <div class="gastly-shadow -h"></div>
            <div class="gastly-shadow -i"></div>
            <div class="gastly-shadow -j"></div>
          </div>

        </div>
      </div>
      <div class="main-inner">
        <h1 class="flag">Tulip Scroll</h1>
        <p class="desc">一个基于 Vue 的下拉刷新/上拉加载的滚动组件</p>
        <p class="desc">主流APP案例, 丰富经典, 随心定制, 轻松拓展</p>
        <p class="desc">自由灵活的api, 可让您快速自定义真正属于自己的下拉上拉组件</p>
        <p class="desc">完美支持android, iOS, 各手机浏览器, 兼容PC主流浏览器</p>
        <p></p>
        <a-button
          type="primary"
          size="large"
          @click="$router.push('/category/')"
        >开始探索</a-button>

        <a-popover placement="bottomLeft">
          <template slot="content">
            <img
              src="https://gitee.com/artiely/Figure-bed/raw/master/image/20200416115532.png"
              alt=""
            >
          </template>
          <a-button
            type="primary"
            ghost
            size="large"
            style="margin-left:20px"
          >扫码体验</a-button>
        </a-popover>
        <div>
          <ul class="pic-list">
            <li><img
                :src="require('../public/assets/132@2x.png')"
                alt=""
              ></li>
            <li><img
                :src="require('../public/assets/133@2x.png')"
                alt=""
              ></li>
            <li><img
                :src="require('../public/assets/134@2x.png')"
                alt=""
              ></li>
            <li><img
                :src="require('../public/assets/136@2x.png')"
                alt=""
              ></li>
            <li><img
                :src="require('../public/assets/137@2x.png')"
                alt=""
              ></li>
            <li><img
                :src="require('../public/assets/138@2x.png')"
                alt=""
              ></li>
            <li><img
                :src="require('../public/assets/139@2x.png')"
                alt=""
              ></li>
            <li><img
                :src="require('../public/assets/140@2x.png')"
                alt=""
              ></li>
            <li><img
                :src="require('../public/assets/141@2x.png')"
                alt=""
              ></li>
            <li><img
                :src="require('../public/assets/d.png')"
                alt=""
              ></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/lib/button/style/css';
import Popover from 'ant-design-vue/lib/popover';
import 'ant-design-vue/lib/popover/style/css';
export default {
  components: {
    'a-button': Button,
    'a-popover': Popover,
  }
}
</script>

<style lang="less" scoped>
.pic-list {
  margin-top: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  li {
    display: inline-block;
    margin: 20px;
    // background: #ffffff;
  }
}
.home-box {
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin-left: -6rem;
  margin-right: -6rem;
  .flag {
    font-family: Avenir-Heavy;
    font-size: 68px;
    color: #0d1a26;
    letter-spacing: 0;
    line-height: 76px;
    font-weight: 500;
    margin: 0;
    margin-bottom: 20px;
    margin-top: 40px;
  }
  .desc {
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #314659;
    letter-spacing: 0;
    line-height: 38px;
    margin: 0 auto 0px;
  }
  .main-box {
    position: absolute;
    top: 100px;
    left: 0;
    width: 100%;
    .main-inner {
      width: 1000px;
      margin: 0 auto;
    }
  }
}
.bg-container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.box {
  position: absolute;
  top: 0;
  transform: rotate(80deg);
  left: 20%;
}

.wave {
  position: absolute;
  opacity: 0.4;
  width: 1200px;
  height: 1000px;
  border-radius: 43%;
}

.wave.one {
  animation: rotate 7000ms infinite linear;
  opacity: 0.1;
  background: rgba(149, 84, 255, 0.31);
}

.wave.two {
  animation: rotate 3000ms infinite linear;
  opacity: 0.1;
  background: rgba(149, 84, 255, 0.31);
}

.wave.three {
  animation: rotate 7500ms infinite linear;
  background-color: rgba(149, 84, 255, 0.31);
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(360deg);
  }
}

#shape10,
#shape9,
#shape8,
#shape1 {
  transform-box: fill-box;
  transform-origin: center;
  -webkit-animation: rotate-center 2s cubic-bezier(0.445, 0.05, 0.55, 0.95)
    infinite alternate both;
  animation: rotate-center 2s cubic-bezier(0.445, 0.05, 0.55, 0.95) infinite
    alternate both;
}

#cir1,
#cir2,
#cir3 {
  transform-box: fill-box;
  transform-origin: center;
  -webkit-animation: rotate-scale-down-diag-2 2s linear infinite both;
  animation: rotate-scale-down-diag-2 2s linear infinite both;
}

#cir4,
#cir5,
#cir6 {
  transform-box: fill-box;
  transform-origin: center;
  -webkit-animation: rotate-scale-down-diag-2 1s linear infinite both;
  animation: rotate-scale-down-diag-2 1s linear infinite both;
}

/**
 * ----------------------------------------
 * animation rotate-center
 * ----------------------------------------
 */
@-webkit-keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

/**
 * ----------------------------------------
 * animation rotate-scale-down-diag-2
 * ----------------------------------------
 */
@-webkit-keyframes rotate-scale-down-diag-2 {
  0% {
    -webkit-transform: scale(1) rotate3d(-1, 1, 0, 0deg);
    transform: scale(1) rotate3d(-1, 1, 0, 0deg);
  }
  50% {
    -webkit-transform: scale(0.5) rotate3d(-1, 1, 0, 180deg);
    transform: scale(0.5) rotate3d(-1, 1, 0, 180deg);
  }
  100% {
    -webkit-transform: scale(1) rotate3d(-1, 1, 0, 360deg);
    transform: scale(1) rotate3d(-1, 1, 0, 360deg);
  }
}
@keyframes rotate-scale-down-diag-2 {
  0% {
    -webkit-transform: scale(1) rotate3d(-1, 1, 0, 0deg);
    transform: scale(1) rotate3d(-1, 1, 0, 0deg);
  }
  50% {
    -webkit-transform: scale(0.5) rotate3d(-1, 1, 0, 180deg);
    transform: scale(0.5) rotate3d(-1, 1, 0, 180deg);
  }
  100% {
    -webkit-transform: scale(1) rotate3d(-1, 1, 0, 360deg);
    transform: scale(1) rotate3d(-1, 1, 0, 360deg);
  }
}

#_checkbox {
  display: none;
}

label {
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  background-color: #f72414;
  transform: translateY(-50%);
  border-radius: 50%;
  box-shadow: 0 7px 10px #ffbeb8;
  cursor: pointer;
  transition: 0.2s ease transform, 0.2s ease background-color,
    0.2s ease box-shadow;
  overflow: hidden;
  z-index: 1;
  border: 2px solid rgba(0, 0, 0, 0.44);
}

label:before {
  content: '';
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  width: 70px;
  height: 70px;
  margin: 0 auto;
  background-color: #fff;
  transform: translateY(-50%);
  border-radius: 50%;
  box-shadow: inset 0 7px 10px #ffbeb8;
  transition: 0.2s ease width, 0.2s ease height;
  border: 1px solid black;
}

label:hover:before {
  width: 55px;
  height: 55px;
  box-shadow: inset 0 7px 10px #ff9d96;
}

label:active {
  transform: translateY(-50%) scale(0.9);
}

#tick_mark {
  position: absolute;
  top: -1px;
  right: 0;
  left: 0;
  width: 60px;
  height: 60px;
  margin: 0 auto;
  margin-left: 14px;
  transform: rotateZ(-40deg);
}

#tick_mark:before,
#tick_mark:after {
  content: '';
  position: absolute;
  background-color: #fff;
  border-radius: 2px;
  opacity: 0;
  transition: 0.2s ease transform, 0.2s ease opacity;
}

#tick_mark:before {
  left: 0;
  bottom: 0;
  width: 10px;
  height: 30px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.23);
  transform: translateY(-68px);
}

#tick_mark:after {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 10px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.23);
  transform: translateX(78px);
}

#_checkbox:checked + label {
  background-color: #07d410;
  box-shadow: 0 7px 10px #92ff97;
}

#_checkbox:checked + label:before {
  width: 0;
  height: 0;
}

#_checkbox:checked + label #tick_mark:before,
#_checkbox:checked + label #tick_mark:after {
  transform: translate(0);
  opacity: 1;
}
.cc {
  position: absolute;
  right: 200px;
  height: 200px;
  width: 200px;
  .gastly {
    position: absolute;
    top: 5vmin;
    left: 5vmin;
    animation: gastly 10s ease infinite alternate;
  }

  .gastly-body {
    height: 10rem;
    width: 10rem;
    border-radius: 10rem 10rem 10rem 10rem;
    animation: body 3s ease infinite alternate;
    top: 10rem;
    left: 10rem;
  }

  .gastly-shadow-container {
    // filter: contrast(2400%) hue-rotate(272deg) saturate(50%);
    position: absolute;
    top: -10rem;
    left: -10rem;
    // background-color: #ffffff;
    width: 50rem;
    height: 50rem;
    opacity: 0.2;
    animation: rotate 30s ease infinite alternate;
  }

  .gastly-shadow {
    filter: blur(26px) brightness(90%);
    height: 10rem;
    width: 9.5rem;
    border-radius: 10rem;
    background-color: #f00;
    position: absolute;
    top: 20rem;
    left: 20rem;
  }

  .gastly-eye {
    position: absolute;
    top: 3rem;
    left: 6rem;
    width: 4rem;
    height: 4rem;
    overflow: hidden;
    transform: rotate(-22deg) scale(1.27) scalex(1.12);
  }
  .gastly-eye.-left {
    transform: scalex(-0.8) rotate(-22deg) scale(1.2) scalex(1.12);
    left: -1rem;
    top: 2.95rem;
  }

  .gastly-eye::before {
    content: '';
    display: block;
    position: absolute;
    background-color: #fff;
    width: 4rem;
    height: 4rem;
    border-radius: 4rem;
    top: -1.5rem;
    left: 0;
  }

  .gastly-eye::after {
    content: '';
    display: block;
    background-color: #43374e;
    position: absolute;
    width: 0.5rem;
    height: 0.7rem;
    top: 0.9rem;
    left: 1rem;
    border-radius: 0.5rem;
    transform: rotate(20deg);
  }

  .gastly-mouth {
    overflow: hidden;
    top: 6.7rem;
    left: -0.5rem;
    height: 2rem;
    animation: mouth 10s ease infinite alternate;
  }
  .gastly-mouth::before {
    content: '';
    display: block;
    position: absolute;
    width: 5rem;
    height: 5rem;
    border-radius: 10rem;
    background: #ff8585;
    top: -4rem;
    left: 2.5rem;
  }

  .gastly-teeth {
    position: absolute;
    left: 2.7rem;
    top: -1rem;
    height: 1.5rem;
    width: 1.5rem;
    background: #fff;
    transform: scalex(0.3) rotate(55deg);
  }

  .gastly-teeth.-right {
    left: 5.7rem;
    transform: scalex(0.3) rotate(25deg);
  }

  /* shadow animation */

  .gastly-shadow.-a {
    animation: a 3s ease infinite alternate;
  }
  .gastly-shadow.-b {
    animation: b 4.5s ease infinite alternate;
  }
  .gastly-shadow.-c {
    animation: c 10s linear infinite alternate;
  }
  .gastly-shadow.-d {
    animation: d 6s ease infinite alternate;
  }
  .gastly-shadow.-e {
    animation: e 6.3s ease infinite alternate;
  }
  .gastly-shadow.-f {
    animation: f 4s ease infinite alternate;
  }
  .gastly-shadow.-g {
    animation: g 2.5s ease infinite alternate;
  }
  .gastly-shadow.-h {
    animation: h 3.5s ease infinite alternate;
  }
  .gastly-shadow.-i {
    animation: i 4.5s ease infinite normal;
  }
  .gastly-shadow.-j {
    animation: j 5s ease infinite normal;
  }

  @keyframes gastly {
    0% {
      transform: translateX(0) rotate(-2deg) scale(1);
    }
    50% {
      transform: translateX(2rem) rotate(2deg) scale(1.1);
    }
    100% {
      transform: translateX(0) rotate(-2deg) scale(1);
    }
  }
  @media screen and (max-width: 1024px) {
    @keyframes gastly {
      0% {
        transform: translateX(0) rotate(-2deg) scale(0.5);
      }
      50% {
        transform: translateX(2rem) rotate(2deg) scale(0.55);
      }
      100% {
        transform: translateX(0) rotate(-2deg) scale(0.5);
      }
    }
  }

  @keyframes mouth {
    0% {
      transform: translateX(0) rotate(-10deg) scaley(0.97);
    }
    50% {
      transform: translateX(0) rotate(-11deg) scaley(1);
    }
    100% {
      transform: translateX(0) rotate(-10deg) scaley(0.96);
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg) scale(1.2);
    }
    100% {
      transform: rotate(360deg) scale(1.4);
    }
  }

  @keyframes body {
    0% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1.2);
    }
  }

  @keyframes a {
    0% {
      transform: translate3d(1rem, 0, 0) scale(1.3);
    }
    100% {
      transform: translate3d(-1rem, -2rem, 0) scale(1.2);
    }
  }

  @keyframes b {
    0% {
      transform: translate3d(0, 0, 0) scale(1.5);
    }
    100% {
      transform: translate3d(1rem, 2rem, 0) scale(1.2);
    }
  }

  @keyframes c {
    0% {
      transform: translate3d(2rem, 2rem, 0) scale(1.2);
    }
    25% {
      transform: translate3d(2rem, -2rem, 0) scale(1.3);
    }
    50% {
      transform: translate3d(-2rem, -2rem, 0) scale(1.1);
    }
    75% {
      transform: translate3d(2rem, -2rem, 0) scale(1.3);
    }
    100% {
      transform: translate3d(2rem, 2rem, 0) scale(1.2);
    }
  }

  @keyframes d {
    0% {
      transform: translate3d(0, 0rem, 0) scale(1);
    }
    40% {
      transform: translate3d(5rem, 5rem, 0) scale(0.5);
    }
    100% {
      transform: translate3d(10rem, 10rem, 0) scale(0.3);
    }
  }

  @keyframes e {
    0% {
      transform: translate3d(0, 0rem, 0) scale(1);
    }
    35% {
      transform: translate3d(-5rem, -5rem, 0) scale(0.7);
    }
    100% {
      transform: translate3d(-10rem, -10rem, 0) scale(0);
    }
  }

  @keyframes f {
    0% {
      transform: translate3d(0, 0rem, 0) scale(1);
    }
    40% {
      transform: translate3d(5rem, -5rem, 0) scale(1);
    }
    100% {
      transform: translate3d(10rem, -10rem, 0) scale(0);
    }
  }

  @keyframes g {
    0% {
      transform: translate3d(0, 0rem, 0) scale(1);
    }
    45% {
      transform: translate3d(-3rem, 5rem, 0) scale(1);
    }
    100% {
      transform: translate3d(-6rem, 7rem, 0) scale(0);
    }
  }

  @keyframes h {
    0% {
      transform: translate3d(0, 0rem, 0) scale(1);
    }
    40% {
      transform: translate3d(1rem, 3rem, 0) scale(1);
    }
    100% {
      transform: translate3d(0, 11rem, 0) scale(0.2);
    }
  }

  @keyframes i {
    0% {
      transform: translate3d(0, 0rem, 0) scale(1);
    }
    40% {
      transform: translate3d(-9rem, -1rem, 0) scale(1);
    }
    100% {
      transform: translate3d(-11rem, 0, 0) scale(0);
    }
  }

  @keyframes j {
    0% {
      transform: translate3d(0, 0rem, 0) scale(1);
    }
    30% {
      transform: translate3d(1rem, -5rem, 0) scale(1);
    }
    100% {
      transform: translate3d(-1rem, -11rem, 0) scale(0);
    }
  }
}
</style>