<template>
  <div class="home-container"></div>
</template>

<script>
import { getHomes } from "./../services/home";

export default {
  name: "Home",

  data() {
    return {
      homeData: [
        {
          key: "done",
          display: "Ready to shift Villas",
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
      this.homeData[0].home = unsoldHome;
      this.homeData[1].home = underConstructionHome;
      this.homeData[2].home = soldHome;
    },
  },
};
</script>

<style scoped>
.home-container {
  margin-top: 84px;
}
</style>
