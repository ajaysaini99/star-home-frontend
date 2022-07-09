<template>
  <div class="home-container">
    <div v-for="(home, index) in homeData" :key="home.key + index">
      <div class="home-data-wrapper" v-if="home.home.length">
        <div class="status-heading">{{ home.display }}</div>

        <div class="villa-wrapper">
          <home-card :homeData="home.home"> </home-card>
        </div>
        <div class="view-all-btn">View All</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getHomes } from "./../services/home";
import HomeCard from "./common/home-card.vue";

export default {
  name: "Home",
  components: {
    HomeCard,
  },
  data() {
    return {
      homeData: [
        {
          key: "done",
          display: "Ready To Shift Villas",
          home: [],
        },
        {
          key: "under_construction",
          display: "Under Construction Villas",
          home: [],
        },
        {
          key: "sold",
          display: "Sold Villas",
          home: [],
        },
      ],
    };
  },
  mounted() {
    this.getHomeData();
  },
  methods: {
    getHomeData() {
      getHomes()
        .then((data) => {
          this.filterHomeData(data);
        })
        .catch(() => {});
    },
    filterHomeData(data) {
      let soldHome = [],
        unsoldHome = [],
        underConstructionHome = [];
      data.forEach((home) => {
        if (home.under_construction) {
          underConstructionHome.push(home);
        } else if (home.sold) {
          soldHome.push(home);
        } else {
          unsoldHome.push(home);
        }
      });
      this.homeData[0].home = unsoldHome && unsoldHome.slice(0, 3);
      this.homeData[1].home =
        underConstructionHome && underConstructionHome.slice(0, 3);
      this.homeData[2].home = soldHome && soldHome.slice(0, 3);
    },
  },
};
</script>

<style scoped>
.home-container {
  padding-top: 68px;
  margin-left: 16px;
  margin-right: 16px;
}
.home-data-wrapper {
  margin-top: 16px;
}
.status-heading {
  color: black;
  margin-bottom: 16px;
  font-size: 22px;
  line-height: 160%;
  color: currentColor;
}
.view-all-btn {
  background: black;
  color: white;
  border-radius: 14px;
  border: 1px solid black;
  padding: 4px 8px;
  font-size: 14px;
  line-height: 160%;
  cursor: pointer;
  width: fit-content;
  margin: auto;
  margin-top: 20px;
}
@media screen and (min-width: 768px) {
  .status-heading {
    font-size: 24px;
  }
  .view-all-btn {
    font-size: 16px;
    padding: 4px 8px;
  }
}
</style>
