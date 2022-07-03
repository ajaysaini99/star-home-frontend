<template>
  <div class="card-container">
    <div
      class="card-wrapper"
      v-for="(home, index) in homeData"
      :key="index + home._id"
      @click="clickCard"
    >
      <div class="card-image">
        <image-carousel
          :isCardCarousel="true"
          :homeId="home._id"
          :images="home.medias"
          :imageCount="1"
          :showViewAll="false"
        ></image-carousel>
      </div>
      <div class="home-info-container">
        <div
          class="home-info"
          v-for="(data, dataIndex) in getHomeData(home)"
          :key="dataIndex"
        >
          <span class="info-display text-line-clamp">
            {{ formDataMapping[data.display] }}
          </span>
          <span>&nbsp;:&nbsp;</span>
          <span class="info-value">{{ data.value }}</span>
        </div>
      </div>
      <div class="home-address text-line-clamp">
        <span class="address-heading">Address :</span>
        <span class="address-colony">
          {{ home.location.plot_number }},&nbsp;{{ home.location.colony }}, Near
          {{ home.location.landmark }}
        </span>
      </div>
      <div
        class="contact-info-container"
        @click.stop.prevent="openContactModal = true"
      >
        <div class="contact-btn">Contact Now</div>
      </div>
      <div class="status-chip">
        <span class="status-text">Under Construction</span>
      </div>
      <contact-modal
        v-if="openContactModal"
        :show="openContactModal"
        :contacts="contactNumbers"
        @close-modal="openContactModal = false"
      ></contact-modal>
    </div>
  </div>
</template>

<script>
import { getHomes } from "./../../services/home";
import { FORM_DATA_MAPPING, CONTACT_NUMBERS } from "./../../helper/constants";
import ContactModal from "./contact-modal.vue";
import ImageCarousel from "./image-carousel.vue";

export default {
  name: "HomeCard",
  components: {
    ImageCarousel,
    ContactModal,
  },
  data() {
    return {
      homeData: [],
      formDataMapping: FORM_DATA_MAPPING,
      contactNumbers: CONTACT_NUMBERS,
      openContactModal: false,
    };
  },
  mounted() {
    getHomes()
      .then((data) => {
        this.homeData = [data[2]];
      })
      .catch(() => {
        console.error();
      });
  },
  methods: {
    getHomeData(home) {
      let homeData = [];
      for (let key in home) {
        let dataObj = {};
        if (
          key === "area" ||
          key === "floor" ||
          key === "front" ||
          key === "kitchen"
        ) {
          dataObj.value = home[key];
          dataObj.display = key;
          homeData.push(dataObj);
        }
      }
      return homeData;
    },
    clickCard() {},
  },
};
</script>

<style scoped>
.card-container {
  margin-top: 84px;
  margin-left: 16px;
  margin-right: 16px;
  --gap: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  grid-auto-rows: auto;
  grid-gap: var(--gap);
}
.card-wrapper {
  padding: 8px;
  padding-bottom: 0;
  border: 1px solid darkgrey;
  border-radius: 24px;
  position: relative;
}
.home-info-container {
  flex-wrap: wrap;
  justify-content: space-between;
}
.home-info {
  --line-count: 1;
  margin-top: 4px;
  display: flex;
}
.info-display {
  font-weight: 500;
  color: darkred;
}
.info-value {
  font-weight: normal;
}
.home-address {
  --line-count: 2;
  margin-bottom: 50px;
}
.address-heading {
  color: darkred;
}
.address-colony {
}
.contact-info-container {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  padding: 6px 0;
  background: darkslategrey;
  color: white;
  font-weight: bold;
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
}
.status-chip {
  position: absolute;
  top: 16px;
  right: 0;
  background: orange;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
.status-text {
  padding: 4px;
  color: white;
}
@media screen and (max-width: 375px) {
}
@media screen and (min-width: 375px) and (max-width: 580px) {
  .card-container {
    grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
  }
}
@media screen and (min-width: 580px) and (max-width: 900px) {
  .card-container {
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  }
}
@media screen and (min-width: 900px) {
  .card-container {
    grid-template-columns: repeat(auto-fill, minmax(20%, 1fr));
  }
}
</style>
