<template>
  <div class="form-wrapper" id="formWrapper">
    <div v-show="activeWindow === 0" class="info-container">
      <div class="heading general-info-heading">Home General Information</div>
      <home-form
        :formData="generalData"
        :btnText="'Proceed'"
        @btn-click="btnClicked"
      ></home-form>
    </div>
    <div v-show="activeWindow === 1" class="specific-info">
      <div id="formHeading2" class="heading">Home Specific Information</div>
      <home-form
        :formData="specificData"
        :btnText="'Preview'"
        @btn-click="btnClicked"
        @go-back="goBack"
      ></home-form>
    </div>
    <div v-if="activeWindow === 2">
      <div class="heading">Preview</div>
      <preview
        :generalFormData="generalFormData"
        :specificFormData="specificFormData"
        @go-back="goBack"
      ></preview>
    </div>
  </div>
</template>

<script>
import HomeForm from "./home-form.vue";
import Preview from "./preview.vue";

export default {
  name: "HomeUpdate",
  components: {
    HomeForm,
    Preview,
  },
  data() {
    return {
      generalData: [
        {
          value: "",
          label: "Photo URLs",
          name: "medias",
          onInput: this.onInputData,
          type: "text",
          required: true,
        },
        {
          value: null,
          label: "Built up area (Sqft)",
          name: "area",
          onInput: this.onInputData.bind(this),
          type: "number",
          required: true,
        },
        {
          value: null,
          label: "Front (Ft.)",
          name: "front",
          onInput: this.onInputData.bind(this),
          type: "number",
          required: true,
        },
        {
          value: null,
          label: "Status",
          name: "sold",
          onInput: this.onInputData,
          required: true,
          options: [
            { label: "Sold", name: "sold", value: true, type: "radio" },
            { label: "Unsold", name: "unsold", value: false, type: "radio" },
          ],
        },
        {
          label: "Address",
          name: "location",
          fields: [
            {
              value: "",
              label: "Plot Number",
              name: "plot_number",
              onInput: this.onInputSubData.bind(this),
              type: "text",
              required: true,
            },
            {
              value: "",
              label: "Colony",
              name: "colony",
              onInput: this.onInputSubData.bind(this),
              type: "text",
              required: true,
            },
            {
              value: "",
              label: "Pincode",
              name: "pincode",
              onInput: this.onInputSubData.bind(this),
              type: "text",
              required: true,
            },
            {
              value: "",
              label: "Landmark",
              name: "landmark",
              onInput: this.onInputSubData.bind(this),
              type: "text",
              required: true,
            },
          ],
        },
      ],
      specificData: [
        {
          value: null,
          label: "Total Floors",
          name: "floor",
          onInput: this.onInputData,
          type: "number",
          required: true,
        },
        {
          value: null,
          label: "Total Rooms",
          name: "room",
          onInput: this.onInputData,
          type: "number",
          required: true,
        },
        {
          value: null,
          label: "Total Halls",
          name: "hall",
          onInput: this.onInputData,
          type: "number",
          required: true,
        },
        {
          value: null,
          label: "Total Parkings",
          name: "parking",
          onInput: this.onInputData,
          type: "number",
          required: true,
        },
        {
          value: null,
          label: "Parking Type",
          name: "covered_parking",
          onInput: this.onInputData,
          required: true,
          options: [
            {
              label: "Covered",
              name: "covered",
              value: true,
              type: "radio",
            },
            {
              label: "Non Covered",
              name: "noncovered",
              value: false,
              type: "radio",
            },
          ],
        },
        {
          value: null,
          label: "Staircase Type",
          name: "outer_staircase",
          onInput: this.onInputData,
          required: true,
          options: [
            { label: "Outer", name: "outer", value: true, type: "radio" },
            { label: "Inner", name: "inner", value: false, type: "radio" },
          ],
        },
        {
          label: "Bathrooms",
          name: "bathroom",
          fields: [
            {
              value: null,
              label: "Attached Bathrooms",
              name: "attached_bathroom",
              onInput: this.onInputSubData.bind(this),
              type: "number",
              required: true,
            },
            {
              value: null,
              label: "Common Btahrooms",
              name: "common_bathroom",
              onInput: this.onInputSubData.bind(this),
              type: "number",
              required: true,
            },
          ],
        },
        {
          value: "",
          label: "Other Specifications",
          name: "other_specification",
          onInput: this.onInputData,
          type: "text",
          required: true,
        },
      ],
      activeWindow: 0,
      generalFormData: {},
      specificFormData: {},
    };
  },
  methods: {
    onInputData(event, field, index) {
      if (field.name === "sold" || field.name === "unsold") {
        this.generalData[index].value = field.value;
      }
      if (field.name === "outer" || field.name === "inner") {
        this.specificData[index].value = field.value;
      }
      if (field.name === "covered" || field.name === "noncovered") {
        this.specificData[index].value = field.value;
      }
    },
    onInputSubData(event, field) {
      return field;
    },
    btnClicked(event) {
      if (event === "general") {
        this.activeWindow = 1;
        this.generalFormData = this.storeData(event);
      } else {
        this.activeWindow = 2;
        this.specificFormData = this.storeData(event);
      }
      const elem = document.getElementById("formWrapper");
      if (elem) {
        elem.scrollIntoView();
      }
    },
    storeData(event) {
      let dataObj = {};
      let dataArray =
        event === "general" ? this.generalData : this.specificData;
      dataArray &&
        dataArray.forEach((field) => {
          const name = field.name;
          if (field.fields) {
            dataObj[name] = {};
            field.fields.forEach((subField) => {
              dataObj[name][subField.name] = subField.value;
            });
          } else {
            if (name === "medias") {
              dataObj[name] =
                field && field.value.split(", ").map((url) => url.trim());
            } else {
              dataObj[name] = field && field.value;
            }
          }
        });
      return dataObj;
    },
    goBack(event) {
      if (event === "general") {
        this.activeWindow = 0;
      } else {
        this.activeWindow = 1;
      }
      const elem = document.getElementById("formWrapper");
      if (elem) {
        elem.scrollIntoView();
      }
    },
  },
  mounted() {},
};
</script>

<style scoped>
.form-wrapper {
  background: gainsboro;
  padding: 0 16px;
  padding-bottom: 16px;
  position: relative;
  scroll-behavior: smooth;
  margin-top: 84px;
}
.info-container {
  margin-top: 24px;
}
.heading {
  font-size: 22px;
  line-height: 160%;
  width: 100%;
  border-radius: 10px;
  color: darkgreen;
  font-weight: bold;
  background: white;
  height: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
  background: white;
  border-top-left-radius: unset;
  border-top-right-radius: inherit;
}
@media screen and (min-width: 768px) {
  .form-wrapper {
    max-width: 1200px;
    margin: auto;
    margin-top: 84px;
    padding: 0 16px 24px 16px;
    box-sizing: border-box;
  }
}
</style>
