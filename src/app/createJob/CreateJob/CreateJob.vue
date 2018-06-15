<template>
  <div :class="$style.createJob">

    <div :class="$style.header">
      <vue-grid>
        <vue-grid-row>
          <vue-grid-item class="vueGridItem">
            <h1>{{ $t('App.nav.createJob' /* Create Job */) }}</h1>
            <p>
              Use the form below to create a 6-month or 12-month job.
            </p>
            <p>
              Learn more about our platform at [INSERT LINK TO DOCS PAGE].
            </p>
          </vue-grid-item>
        </vue-grid-row>
      </vue-grid>
    </div>

      <vue-grid>
        <vue-grid-row>
  <form :class="$style.formExample" @submit.prevent="createJob()">

    <vue-grid-row>
      <vue-grid-item>
        <vue-input
          name="jobId"
          id="jobId"
          required
          placeholder="Job ID"
          validation="required"
          v-model="form.jobId"
          :disabled="isJobIdDisabled" />
      </vue-grid-item>
      <vue-grid-item>
        <vue-input
          name="task"
          id="task"
          required
          placeholder="Job Name"
          validation="required"
          v-model="form.task" />
      </vue-grid-item>
    </vue-grid-row>

    <vue-grid-row>
      <vue-grid-item>
        <vue-input
          name="brief"
          id="brief"
          required
          placeholder="Job Description"
          validation="required"
          v-model="form.brief" />
      </vue-grid-item>
      <vue-grid-item>
        <vue-input
          name="deliverable"
          id="deliverable"
          required
          placeholder="Acceptance Criteria"
          validation="required"
          v-model="form.deliverable" />
      </vue-grid-item>
    </vue-grid-row>

    <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <vue-date-picker
            @change="calendarChange"
            :first-day-of-week="1"
            placeholder="Select last date someone can apply for job" />
        </vue-grid-item>
      <vue-grid-item>
        <vue-input
          name="payoutManager"
          id="payoutManager"
          required
          placeholder="Job Owner"
          validation="required"
          v-model="form.payoutManager" />
      </vue-grid-item>
    </vue-grid-row>

    <vue-input
      name="payoutEvaluator"
      id="payoutEvaluator"
      required
      placeholder="Job Reviewer"
      validation="required"
      v-model="form.payoutEvaluator" />

    <vue-grid-row>
      <vue-grid-item>
        <vue-input
          name="domain"
          id="domain"
          required
          placeholder="Job Category"
          v-model="form.domain"
          validation="required" />
      </vue-grid-item>
      <vue-grid-item>
        <vue-input
          name="skills"
          id="skills"
          required
          placeholder="Desired Skills"
          v-model="form.skills"
          validation="required" />
      </vue-grid-item>
    </vue-grid-row>

    <vue-grid-row>
      <vue-grid-item>
        <vue-input
          name="salary"
          id="salary"
          required
          placeholder="Salary"
          v-model="form.salary"
          validation="required" />
      </vue-grid-item>
      <vue-grid-item>
          <vue-select
            name="payFrequency"
            id="payFrequency"
            :options="payFrequency"
            :value="selectedOption"
            @input="selectChange" />
      </vue-grid-item>
    </vue-grid-row>

    <vue-grid-row>
      <vue-grid-item>
          <vue-select
            name="termOfEmployment"
            id="termOfEmployment"
            :options="termOfEmployment"
            :value="selectedOption"
            @input="selectChange" />
      </vue-grid-item>
      <vue-grid-item>
        <vue-select
          name="country"
          id="country"
          v-model="form.country"
          :options="countryOptions"
          validation="required"
          required
          :disabled="addressDisabled" />
      </vue-grid-item>
    </vue-grid-row>

    <vue-grid-row>
      <vue-grid-item>
        <vue-input
          name="cityOfWork"
          id="cityOfWork"
          required
          placeholder="City where work is to be performed"
          v-model="form.cityOfWork"
          validation="required" />
      </vue-grid-item>
      <vue-grid-item>
        <vue-input
          name="datePosted"
          id="datePosted"
          required
          placeholder="Date Job Posted"
          validation="required"
          v-model="form.datePosted"
          :disabled="isDatePostedDisabled" />
      </vue-grid-item>
    </vue-grid-row>

    <vue-grid-row>
      <vue-grid-item>
        <vue-checkbox
          name="acceptTerms"
          id="acceptTerms"
          v-model="form.acceptTerms"
          label="I accept the terms and privacy policy"
          required />
      </vue-grid-item>
    </vue-grid-row>

    <br />
    <vue-button warn
      :loading="isLoading">
      Submit Job Posting
    </vue-button>
  </form>
  </vue-grid-row>
      </vue-grid>
        <br>

  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex';
import { IPreLoad } from '../../../server/isomorphic';
import VueInput from '../../shared/components/VueInput/VueInput.vue';
import VueSelect from '../../shared/components/VueSelect/VueSelect.vue';
import VueCheckbox from '../../shared/components/VueCheckbox/VueCheckbox.vue';
import VueGridRow from '../../shared/components/VueGridRow/VueGridRow.vue';
import VueGridItem from '../../shared/components/VueGridItem/VueGridItem.vue';
import VueButton from '../../shared/components/VueButton/VueButton.vue';
import VueGrid from '../../shared/components/VueGrid/VueGrid.vue';
import VueDatePicker from '../../shared/components/VueDatePicker/VueDatePicker.vue';
import {
  addNotification,
  INotification
} from '../../shared/components/VueNotificationStack/utils';
// import { uuid } from 'vue-uuid.vue';

export default {
  metaInfo: {
    title: 'CreateJob'
  },
  $_veeValidate: {
    validator: 'new'
  },
  components: {
    VueGrid,
    VueGridItem,
    VueButton,
    VueGridRow,
    VueInput,
    VueSelect,
    VueCheckbox,
    VueDatePicker
  },
  data(): any {
    return {
      // uuid: uuid.v1(), // https://github.com/VitorLuizC/vue-uuid
      form: {
        jobId: '',
        task: '',
        brief: '',
        deliverable: '',
        datePosted: '',
        payoutManager: '',
        payoutEvaluator: '',
        firstname: '',
        domain: '',
        skills: [],
        salary: '',
        cityOfWork: '',
        isJobIdDisabled: true,
        isDatePostedDisabled: true,
        acceptTerms: false
      },
      payFrequency: [
        {
          label: 'weekly',
          value: '52'
        },
        {
          label: 'bi-weekly',
          value: '26'
        },
        {
          label: 'monthly',
          value: '12'
        }
      ],
      termOfEmployment: [
        {
          label: '6 months',
          value: '6'
        },
        {
          label: '12 months',
          value: '12'
        }
      ],
      countryOptions: [
        { label: 'Choose a Country', value: null },
        { label: 'Haiti', value: 'haiti' },
        { label: 'USA', value: 'us' }
        // { label: 'Other', value: 'other' }
      ],
      isLoading: false
    };
  },
  methods: {
    ...mapActions('createJob', ['increment', 'decrement']),
    onSubmit() {
      this.isLoading = true;
      console.log(JSON.parse(JSON.stringify(this.form)));

      this.$nextTick(() => {
        setTimeout(() => {
          this.isLoading = false;
          addNotification({
            title: 'Data has been saved!',
            text: 'Have a look at the console!'
          } as INotification);
        }, 500);
      });
    },
    createJob() {}
  },
  computed: {
    ...mapGetters('createJob', [
      'count',
      'incrementPending',
      'decrementPending'
    ]),
    ddressDisabled() {
      return (
        this.form.firstname === '' ||
        this.form.lastname === '' ||
        this.form.email === ''
      );
    },
    hasErrors() {
      return this.errors && this.errors.items.length > 0;
    },
    hasEmptyFields() {
      let hasEmptyField: boolean = false;

      Object.keys(this.form).forEach((key: string) => {
        if (
          key !== 'newsletter' &&
          (this.form[key] === '' || this.form[key] === false)
        ) {
          hasEmptyField = true;
        }
      });

      return hasEmptyField;
    },
    isSubmitDisabled() {
      return this.hasErrors || this.hasEmptyFields;
    }
  },
  prefetch: (options: IPreLoad) => {
    return options.store.dispatch('createJob/increment');
  }
};
</script>


<style lang="scss" module>
@import '../../shared/styles';

.header {
  padding: $nav-bar-height 0 $nav-bar-height * 0.5;
  text-align: center;
  text-shadow: 0 5px 10px rgba(0, 0, 0, 0.33);
  @include background-gradient($brand-dark-primary, $brand-primary, 152deg);
}
</style>
