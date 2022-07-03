<template>
  <transition name="fade">
    <div v-if="show">
      <div
        @click.stop.prevent="$emit('close-modal')"
        class="modal-overlay"
      ></div>
      <div class="contact-container">
        <div
          class="contact-info"
          v-for="(contact, index) in contacts"
          :key="index + contact.number"
        >
          <a class="contact-number" :href="`tel:+${contact.number}`">
            <div class="contact-name">Contact {{ contact.name }}</div>
            <div>{{ contact.number }}</div>
          </a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ContactModal",
  props: {
    show: {
      default: false,
      type: Boolean,
    },
    contacts: {},
  },
  data() {
    return {};
  },
  mounted() {
    document.body.classList.add("disable-scroll");
  },
  destroyed() {
    document.body.classList.remove("disable-scroll");
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.2);
  z-index: 99999999;
}
.contact-container {
  position: fixed;
  z-index: 99999999999;
  height: 170px;
  width: 320px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  color: black;
  border-radius: 16px;
  padding: 16px;
  box-sizing: border-box;
}
.contact-info {
  margin: auto;
  background: darkcyan;
  padding: 4px;
  border-radius: 50px;
  margin-top: 16px;
  text-align: center;
}
.contact-info:first-child {
  margin-top: 0;
}
.contact-number {
  color: white;
  width: fit-content;
}
.contact-name {
  font-size: 16px;
  font-weight: bold;
}
</style>
