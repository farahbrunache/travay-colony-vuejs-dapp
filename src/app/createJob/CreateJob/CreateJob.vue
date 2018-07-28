<template>
  <div :class="$style.createJob">

    <div :class="$style.header">
      <vue-grid>
        <vue-grid-row>
          <vue-grid-item class="vueGridItem">
            <h1>{{ $t('App.nav.createJob' /* Create Job */) }}</h1>
            <p>
              {{ $t('App.createJob.pageDescription' /* Use the form below to create a 6-month or 12-month job. */) }}
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
          name="task"
          id="task"
          required
          placeholder="Job Title"
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
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-item>
        <i>{{ $t('App.createJob.requirementInstructions' /* Please add your requirements in order for the job to be considered as complete. Add one requirement, then click Add Requirement, to add additional requirements. */) }}</i>
      </vue-grid-item>

      <vue-grid-item>
        <vue-input
          name="deliverable"
          id="deliverable"
          placeholder="Requirement for Job to be Complete"
          validation="required"
          v-model="requirement"
          required />
          <button accent @click="addRequirement">Add Requirement</button><br>
      </vue-grid-item>
      <br>
      <br>
      <vue-grid-item>
      <p v-for="(req, i) in form.deliverable" :key="i">
        <vue-badge accent>{{req}} -</vue-badge>
        <span @click="removeRequirement(i)">
          X
        </span>
        <br>
        <br>
      </p>
      </vue-grid-item>
    </vue-grid-row>


    <vue-grid-row>
        <vue-grid-item class="vueGridItem">
          <vue-date-picker
            @change="calendarChange"
            :first-day-of-week="1"
            ref="closingDatepicker"
            :selectedDateValue="form.closingDate"
            validation="required"
            placeholder="Job Closing Date" />
        </vue-grid-item>
    </vue-grid-row>

      <vue-grid-row>
      <vue-grid-item>
    <vue-input
      name="payoutEvaluator"
      id="payoutEvaluator"
      required
      placeholder="Job Reviewer"
      validation="required"
      v-model="form.payoutEvaluator" />
        </vue-grid-item>
    </vue-grid-row>

    <vue-grid-row>
      <vue-grid-item>
          <vue-select
            name="termOfEmployment"
            id="termOfEmployment"
            :options="termOfEmployment"
            :value="form.selectedTermOfEmployment"
            @input="val => selectChange(val, 'selectedTermOfEmployment')"
            validation="required" />
      </vue-grid-item>
      <vue-grid-item>
          <vue-select
            name="payFrequency"
            id="payFrequency"
            :options="payFrequency"
            :value="form.selectedPayFrequency"
            @input="val => selectChange(val, 'selectedPayFrequency')"
            validation="required" />
      </vue-grid-item>
    </vue-grid-row>

    <vue-grid-row>
      <vue-grid-item>
        <vue-input
          name="salary"
          id="salary"
          type="number"
          required
          placeholder="Total Funding (aka Salary) for Job in USD"
          v-model="form.salary"
          validation="required" />
          <div>{{ $t('App.createJob.salaryPayoutDisclaimer' /* Remember: (1) The salary you list above will be deducted and paided to the worker evenly based on the pay frequency (aka pay period) you've selected. (2) We collect 2% of the total salary amount. Based on the salary you have entered above the worker in total will receive approximately: */) }} <strong>${{ estimatedWorkerPayout }}</strong>.</div>
      </vue-grid-item>
      </vue-grid-row>
<br>
<br>
    <vue-grid-row>
      <vue-grid-item>
        <vue-select
          name="domain"
          id="domain"
          required
          placeholder="Job Category"
          v-model="form.domain"
          :options="domainOptions"
          validation="required" />
      </vue-grid-item>
      <vue-grid-item>
        <vue-select
          name="skill"
          id="skill"
          required
          placeholder="Top Desired Skill"
          v-model="form.skill"
          :options="skillOptions"
          validation="required" />
      </vue-grid-item>
    </vue-grid-row>

    <vue-grid-row>
      <vue-grid-item>
        <vue-select
          name="country"
          id="country"
          v-model="form.country"
          :options="countryOptions"
          validation="required"
          required
          :disabled="form.addressDisabled" />
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
      :loading="isLoading"
      @click.prevent.stop="submitHandler">
      Submit Job Posting
    </vue-button>
      </form>

        </vue-grid-row>
      </vue-grid>
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
import VueBadge from '../../shared/components/VueBadge/VueBadge.vue';
import VueDatePicker from '../../shared/components/VueDatePicker/VueDatePicker.vue';
import {
  addNotification,
  INotification
} from '../../shared/components/VueNotificationStack/utils';
import {
  colonyCallersMixin,
  colonySendersMixin
} from '../../shared/mixins/mixins';
import { uuid } from 'vue-uuid';
import firebase from 'firebase';
import db from '../../firebaseinit';
import { AssertionError } from 'assert';
import { any } from 'bluebird';

export default {
  mixins: [colonyCallersMixin, colonySendersMixin],
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
    VueDatePicker,
    VueBadge
  },
  data(): any {
    return {
      form: {
        taskId: '',
        task: 'Weekly Trash Pickup',
        brief: 'Pickup and deposit trash for ten homes.',
        deliverable: [],
        datePosted: '',
        payoutEvaluator: 'Dexter Morgan',
        salary: '650',
        cityOfWork: 'Port-au-Prince',
        isTaskIdDisabled: true,
        closingDate: '',
        isDatePostedDisabled: true,
        acceptTerms: true,
        selectedPayFrequency: '',
        selectedTermOfEmployment: ''
      },
      payFrequency: [
        {
          label: 'Select Pay Frequency',
          value: 'none'
        },
        {
          label: 'Weekly',
          value: '52'
        },
        {
          label: 'Bi-weekly',
          value: '26'
        },
        {
          label: 'Monthly',
          value: '12'
        }
      ],
      termOfEmployment: [
        {
          label: 'Select Terms of Employment',
          value: 'none'
        },
        {
          label: '6-months',
          value: '6'
        },
        {
          label: '12-months',
          value: '12'
        }
      ],
      countryOptions: [
        { label: 'Choose a Country', value: null },
        { label: 'Haiti', value: 'haiti' },
        { label: 'USA', value: 'us' }
      ],
      skillOptions: [
        { label: 'Choose Top Desired Skill', value: null },
        { label: 'Labor', value: 'labor' },
        { label: 'Teaching', value: 'teaching' },
        { label: 'Engineering', value: 'engineering' }
      ],
      domainOptions: [
        { label: 'Choose a Job Category', value: null },
        { label: 'Enviroment', value: 'enviroment' },
        { label: 'Community', value: 'community' },
        { label: 'Education', value: 'education' }
      ],
      isLoading: false,
      requirement: ''
    };
  },
  methods: {
    ...mapActions('createJob', []),
    calendarChange(value: any) {
      console.log('value from datepicker', value);
      this.form.closingDate = value;
    },
    selectChange(value: any, field: any) {
      this.$set(this.form, field, value);
    },
    getPayFrequencyLabel(selectedValue: any) {
      const selected = this.payFrequency.find(
        item => item.value === selectedValue
      );
      return selected ? Reflect.get(selected, 'label') : '';
    },
    addRequirement() {
      if (this.requirement) this.form.deliverable.push(this.requirement);
      console.log(
        'adding requirement',
        this.requirement,
        this.form.deliverable
      );
      this.requirement = '';
    },
    removeRequirement(i) {
      this.form.deliverable.splice(i, 1);
    },
    submitHandler() {
      const form = this.form;
      const self = this;
      if (this.hasEmptyFields) {
        addNotification({
          title: 'Oops',
          text: 'Please fill in all the fields.'
        } as INotification);
        return false;
      }
      this.isLoading = true;
      const jobId = uuid.v1();
      let jobData = {
        salary: {
          'full-time-rate': form.salary,
          'pay-frequency': {
            label: this.getPayFrequencyLabel(form.selectedPayFrequency),
            duration: form.selectedPayFrequency
          }
        },
        brief: form.brief,
        'date-posted': new Date(),
        deliverable: form.deliverable,
        skill: form.skill,
        domain: form.domain,
        payouts: {
          evaluator: 0,
          manager: 0,
          worker: 0
        },
        role: {
          '0': this.userId,
          '1': [],
          '2': '',
          '3': []
        },
        sponsoredAmount: 0,
        task: form.task,
        taskId: jobId,
        country: form.country,
        'terms-of-employment': form.selectedTermOfEmployment,
        status: {
          status: 'incomplete'
        }
      };
      db
        .collection('jobs')
        .doc(jobId)
        .set(jobData)
        .then(function(docref: any) {
          // self.createTask(); // ColonyJS + IPFS
          self.clearForm();
        })
        .catch(function(error: any) {
          console.error('Error adding new job: ', error);
        });
      this.$nextTick(() => {
        setTimeout(() => {
          this.isLoading = false;
          addNotification({
            title: 'Yay!',
            text: `Your job is now posted! Click here to see the job.`,
            link: `/job/${jobId}`
          } as INotification);
        }, 500);
      });
    },
    clearForm() {
      Object.keys(this.form).forEach(key => {
        this.form[key] = '';
      });
    }
  },
  computed: {
    ...mapGetters('createJob', []),
    ...mapGetters('signInModal', ['userId']),
    estimatedWorkerPayout: function() {
      return this.form.salary - this.form.salary * 0.02;
    },
    addressDisabled() {
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
          (key !== 'taskId' &&
            key !== 'datePosted' &&
            (this.form[key] === '' || this.form[key] === false)) ||
          (Array.isArray(this.form[key]) && this.form[key].length === 0)
        ) {
          hasEmptyField = true;
        }
      });
      return hasEmptyField;
    },
    isSubmitDisabled() {
      x;
      return this.hasErrors || this.hasEmptyFields;
    }
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
