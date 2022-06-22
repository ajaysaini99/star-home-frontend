<template>
  <div class="form-container">
    <div class="form-field" v-for="item in homeData" :key="item.name">
      <label class="field-label" v-if="!item.options" :for="item.name">
        {{ item.label }}
      </label>
      <input
        class="input-field"
        v-if="item.type"
        :type="item.type"
        :required="item.required"
        :id="item.name"
      />
      <!-- For radio type input -->
      <template v-if="item.options">
        <div class="radio-label">{{ item.label }}</div>
        <div
          class="option-wrapper"
          v-for="option in item.options"
          :key="option.label"
        >
          <input :type="option.type" :id="option.name" :name="item.name" />
          <label :for="option.name"> {{ option.label }} </label>
        </div>
      </template>
      <!-- For sub-field input -->
      <template v-if="item.fields">
        <div
          class="sub-input-field"
          v-for="field in item.fields"
          :key="field.name"
        >
          <label class="field-label" :for="field.name">
            {{ field.label }}
          </label>
          <input
            class="input-field"
            :type="field.type"
            :required="field.required"
            :id="field.name"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "form",
  data() {
    return {
      homeData: [
        {
          value: [],
          label: "Photos",
          name: "medias",
          // onInput: this.onInputMedias.bind(this),
          type: "file",
          required: true,
        },
        {
          value: null,
          label: "Status",
          name: "medias",
          // onInput: this.onInputStatus.bind(this),

          required: true,
          options: [
            { label: "Sold", name: "sold", value: true, type: "radio" },
            { label: "Unsold", name: "un_sold", value: false, type: "radio" },
          ],
        },
        {
          value: null,
          label: "Built up area (Sqft)",
          name: "built_up_area",
          // onInput: this.onInputArea.bind(this),
          type: "number",
          required: true,
        },
        {
          value: null,
          label: "Front (Ft.)",
          name: "front",
          // // onInput: this.onInputFront.bind(this),
          type: "number",
          required: true,
        },
        {
          label: "Address",
          name: "location",
          fields: [
            {
              value: "",
              label: "Plot Number",
              name: "plot_number",
              // // onInput: this.onInputPlotNumber.bind(this),
              type: "text",
              required: true,
            },
            {
              value: "",
              label: "Colony",
              name: "colony",
              // // onInput: this.onInputColony.bind(this),
              type: "text",
              required: true,
            },
            {
              value: "",
              label: "Pincode",
              name: "pincode",
              // // onInput: this.onInputPincode.bind(this),
              type: "text",
              required: true,
            },
            {
              value: "",
              label: "Landmark",
              name: "landmark",
              // // onInput: this.onInputLandmark.bind(this),
              type: "text",
              required: true,
            },
          ],
        },
      ],
    };
  },
  methods: {},
  mounted() {
    console.log("Dtaa", this.homeData);
  },
};
</script>

<style scoped>
.form-container {
  margin: 16px;
}
.form-field {
  margin-top: 12px;
}
.field-label {
  display: block;
}
.input-field {
  display: block;
  margin-top: 8px;
  width: 240px;
  height: 28px;
}
</style>
