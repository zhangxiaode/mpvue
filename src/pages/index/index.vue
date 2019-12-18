<template>
  <div class="app">
    <canvas class="firstCanvas" style="width: 300px; height: 200px;" canvas-id="firstCanvas"></canvas>
    <div class="userinfo" @click="bindViewTap">
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>
    <div>{{num}}</div>
    <div @click="handlePlus()">加号+</div>
    <div @click="goCount()">去counter页</div>
    <rich-text :nodes="nodes"></rich-text>
  </div>
</template>

<script>
import card from "@/components/card";

export default {
  data() {
    return {
      num: 1,
      motto: "Hello miniprograme",
      userInfo: {
        nickName: "mpvue",
        avatarUrl: "http://mpvue.com/assets/logo.png"
      },
      nodes:
        "<p><span style='color:#f00'>哈哈哈哈我是红色</span><span style='color:#00f'>嘿嘿嘿嘿我是蓝色</span></p>"
    };
  },
  components: {
    card
  },
  onReady: function(e) {},
  methods: {
    handlePlus() {
      this.num++;
    },
    goCount() {
      const url = "../counter/main";
      mpvue.navigateTo({ url });
    },
    bindViewTap() {
      const url = "../logs/main";
      if (mpvuePlatform === "wx") {
        mpvue.switchTab({ url });
      } else {
        mpvue.navigateTo({ url });
      }
    },
    clickHandle(ev) {
      console.log("clickHandle:", ev);
      // throw {message: 'custom test'}
    }
  },
  canvasOptions: {
    canvasId: "firstCanvas"
  },
  renderCanvas(h) {
    return h("view", [
      h("image", {
        props: {
          src:
            "https://pic.u51.com/sfs-gateway/api/v1/download/5f7dac8228354008ae6f69f67c1c0fa410d6"
        },
        style: {
          left: 10,
          top: 10,
          width: 100,
          height: 100,
          fill: "#000",
          fontSize: 18
        }
      }),
      h(
        "text",
        {
          style: {
            left: 120,
            top: 100,
            fill: "#f00",
            fontSize: 18,
            width: 150,
            ellipse: true
          }
        },
        "hello mpvue!"
      )
    ]);
  },
  created(e) {
    // let app = getApp()
  }
};
</script>

<style scoped>
.firstCanvas {
  background: #fee;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all {
  width: 7.5rem;
  height: 1rem;
  background-color: blue;
}
.all:after {
  display: block;
  content: "";
  clear: both;
}
.left {
  float: left;
  width: 3rem;
  height: 1rem;
  background-color: red;
}

.right {
  float: left;
  width: 4.5rem;
  height: 1rem;
  background-color: green;
}
</style>
