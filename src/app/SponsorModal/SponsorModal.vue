<template>
  <div :class="$style.sponsorModal">
    <vue-modal :show="show" @close="$emit('update:show', false)">
      <vue-button warn @click="$emit('update:show', false)">X</vue-button>        <vue-input
          name="sponsorAmount"
          id="sponsorAmount"
          required
          placeholder="Enter Amount"
          validation="required"
          type="number"
          v-model="sponsorAmount" />

        <vue-button primary @click.prevent.stop="$emit('sponsorSubmit', sponsorAmount)">Sponsor</vue-button>
    </vue-modal>
  </div>
</template>

<script lang="ts">
import VueModal from '../shared/components/VueModal/VueModal.vue';
import VueButton from '../shared/components/VueButton/VueButton.vue';
import VueInput from '../shared/components/VueInput/VueInput.vue';

export default {
  name: 'SponsorModal',
  components: {
    VueModal,
    VueButton,
    VueInput
  },
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false
    },
    job: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  data(): any {
    return {
      sponsorAmount: ''
    };
  },
  computed: {},
  methods: {}
};
</script>

<style lang="scss" module>
.sponsorModal {
  display: block;
}
</style>
