<template>
  <div class="preview-container">
    <div class="image-container">
      <gallery :images="images" :index="index" @close="index = null"></gallery>
      <div
        class="image"
        v-for="(image, imageIndex) in images"
        :key="imageIndex"
        @click="index = imageIndex"
        :class="{ 'hide-img': imageIndex > 3 && showViewMore }"
        :style="{
          backgroundImage: 'url(' + image + ')',
        }"
      ></div>
    </div>
    <div
      v-if="images.length > 3"
      class="view-all"
      @click="showViewMore = !showViewMore"
    >
      {{ viewText }}
    </div>
    <div class="specific-info">
      <div class="info-div" v-for="(data, key) in specificFormData" :key="key">
        <template v-if="typeof data === 'object'">
          <div class="info-key">{{ key }}</div>
          <div v-for="(subData, subKey) in data" :key="subKey">
            <div class="info-key info-sub-key">{{ subKey }}</div>
            <div class="info-data info-sub-data">{{ subData }}</div>
          </div>
        </template>
        <template v-else>
          <div class="info-key">{{ key }}</div>
          <div class="info-data">{{ data }}</div>
        </template>
      </div>
    </div>
    <div class="general-info">
      <div v-for="(data, key) in generalFormData" :key="key">
        <div class="info-div" v-if="key !== 'medias'">
          <template v-if="typeof data === 'object'">
            <div class="info-key">{{ key }}</div>
            <div v-for="(subData, subKey) in data" :key="subKey">
              <div class="info-key info-sub-key">{{ subKey }}</div>
              <div class="info-data info-sub-data">{{ subData }}</div>
            </div>
          </template>
          <template v-else>
            <div class="info-key">{{ key }}</div>
            <div class="info-data">{{ data }}</div>
          </template>
        </div>
      </div>
    </div>
    <div class="btn">
      <button @click.stop.prevent="goBack">Go Back</button>
      <button @click.stop.prevent="submitForm">Submit</button>
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
    specificFormData: {
      default: {},
    },
    generalFormData: {
      default: {},
    },
  },
  data() {
    return {
      index: null,
      showViewMore: true,
      formData: {},
    };
  },
  computed: {
    images() {
      return this.generalFormData.medias;
    },
    viewText() {
      return this.showViewMore ? "View All" : "View Less";
    },
  },
  methods: {
    goBack() {
      this.$emit("go-back", "preview");
    },
    submitForm() {
      const isFormDataValid = this.checkFormValidity();
      if (isFormDataValid) {
        //make request
      }
    },
    checkFormValidity() {
      this.formData = { ...this.generalFormData, ...this.specificFormData };

      for (let key in this.formData) {
        if (this.formData[key] === undefined || this.formData[key] === null) {
          return false;
        }
      }
      return true;
    },
  },
  mounted() {},
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
</style>
