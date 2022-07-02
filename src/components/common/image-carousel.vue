<template>
  <div>
    <div
      class="image-container"
      :class="{ 'card-img-container': isCardCarousel }"
      @click.stop.prevent=""
    >
      <gallery :images="images" :index="index" @close="index = null"></gallery>
      <div
        class="image"
        v-for="(image, imageIndex) in images"
        :key="imageIndex + homeId"
        @click.stop.prevent="index = imageIndex"
        :class="{
          'hide-img': imageIndex >= imageCount && showViewMore,
          'card-image': isCardCarousel,
        }"
        :style="{
          backgroundImage: 'url(' + image + ')',
        }"
      ></div>
    </div>
    <div
      v-if="showViewAll && images.length > imageCount"
      class="view-all"
      @click="showViewMore = !showViewMore"
    >
      {{ viewText }}
    </div>
  </div>
</template>

<script>
import VueGallery from "vue-gallery";

export default {
  name: "home-form",
  components: {
    gallery: VueGallery,
  },
  props: {
    images: {
      type: Array,
    },
    imageCount: {
      default: 1,
      type: Number,
    },
    showViewAll: {
      default: true,
      type: Boolean,
    },
    isCardCarousel: {
      default: false,
      type: Boolean,
    },
    homeId: {
      default: "",
      type: String,
    },
  },
  data() {
    return {
      index: null,
      showViewMore: true,
    };
  },
  computed: {
    viewText() {
      return this.showViewMore ? "View All" : "View Less";
    },
  },
};
</script>

<style scoped>
.image-container {
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  --gap: 12px;
}
.image {
  float: left;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #ebebeb;
  margin: 5px;
  height: 200px;
  width: 160px;
}
.hide-img {
  display: none;
}
.view-all {
  background: aliceblue;
  margin: 16px auto;
  padding: 4px;
  width: 100px;
  text-align: center;
  border-radius: 50px;
  color: black;
}
.specific-info,
.general-info {
  padding: 12px;
  background: white;
  display: flex;
  display: flex;
  gap: 36px;
  flex-wrap: wrap;
  justify-content: flex-start;
  border-radius: 16px;
  margin-bottom: 16px;
}
.info-div {
  min-width: 100px;
  background: gainsboro;
  text-align: center;
  border-radius: 16px;
  text-transform: capitalize;
  padding: 4px 10px;
  height: fit-content;
}
.info-key {
  font-weight: bold;
  font-size: 18px;
  color: darkblue;
}
.info-data {
  font-size: 16px;
}
.info-sub-key {
  color: darkcyan;
}
.info-sub-data {
  font-size: 16px;
}
.btn {
  margin-top: 12px;
  display: flex;
  gap: 12px;
  justify-content: space-between;
}
.btn button {
  background: darkslategrey;
  color: white;
  height: 40px;
  border: none;
  box-sizing: border-box;
  width: 100%;
  font-weight: bold;
  font-size: 18px;
  line-height: 160%;
  border-radius: 10px;
}
@media screen and (min-width: 916px) {
  .image {
    width: 200px;
  }
}
.card-img-container {
  width: 100% !important;
  margin-top: 0 !important;
}
.card-image {
  width: 100% !important;
  margin: 0 !important;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}
</style>
