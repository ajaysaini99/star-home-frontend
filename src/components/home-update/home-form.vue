<template>
  <div class="form-container">
    <div class="form-field" v-for="(item, index) in formData" :key="item.name">
      <label class="field-label" v-if="!item.options" :for="item.name">
        {{ item.label }}
      </label>
      <input
        class="input-field"
        v-if="item.type"
        v-model="item.value"
        :type="item.type"
        :required="item.required"
        :id="item.name"
        @input="item.onInput($event, item)"
      />
      <!-- For radio type input -->
      <template v-if="item.options">
        <div class="radio-label">{{ item.label }}</div>
        <div
          class="option-wrapper"
          v-for="option in item.options"
          :key="option.label"
        >
          <input
            :type="option.type"
            :id="option.name"
            :name="item.name"
            @change="item.onInput($event, option, index)"
          />
          <label :for="option.name"> {{ option.label }} </label>
        </div>
      </template>
      <!-- For sub-field input -->
      <div v-if="item.fields" class="sub-input-container">
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
            v-model="field.value"
            :type="field.type"
            :required="field.required"
            :id="field.name"
            @input="field.onInput($event, field)"
          />
        </div>
      </div>
    </div>
    <div class="btn">
      <button v-if="btnText === 'Preview'" @click="goBack">Go Back</button>
      <button @click.stop.prevent="clickBtn">{{ btnText }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-form",
  props: {
    formData: {
      default: [],
    },
    btnText: {
      default: "",
    },
  },
  methods: {
    clickBtn() {
      const evt = this.btnText === "Proceed" ? "general" : "specifc";
      this.$emit("btn-click", evt);
    },
    goBack() {
      this.$emit("go-back", "general");
    },
  },
};
</script>

<style scoped>
/* .form-container {
  margin: 16px;
} */
.form-field {
  margin-top: 12px;
}
.field-label {
  display: block;
  font-weight: bold;
  font-size: 18px;
}
.radio-label {
  font-weight: bold;
}
.input-field {
  display: block;
  margin-top: 8px;
  width: 100%;
  height: 40px;
  padding: 8px 12px;
  border: 1px solid gainsboro;
  border-radius: 10px;
  font-size: 18px;
  line-height: 160%;
  box-sizing: border-box;
}
.sub-input-field {
  margin-top: 12px;
}
.option-wrapper {
  display: flex;
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
@media screen and (min-width: 768px) {
  /* .form-container {
    max-width: 1200px;
    margin: auto;
    padding: 0 16px;
    box-sizing: border-box;
  } */
  .field-label {
    font-size: 18px;
  }
  .input-field {
    width: calc((100% - 48px) / 2);
    height: 48px;
  }
  .sub-input-container {
    display: flex;
    flex-wrap: wrap;
    gap: 48px;
  }
  .sub-input-field {
    width: calc((100% - 48px) / 2);
  }
  .sub-input-field .input-field {
    width: 100%;
  }
  .btn {
    margin-top: 16px;
    gap: 48px;
  }
}

@media screen and (min-width: 1200px) {
}
</style>
