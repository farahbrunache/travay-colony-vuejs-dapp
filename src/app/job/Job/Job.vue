<template>
  <div :class="$style.job">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill>
          <h1>Job</h1>
        </vue-grid-item>

        <sponsor-modal 
          :job="job" 
        :show.sync="showSponsoredModal"
        @sponsorSubmit="amount => sponsorSubmitHandler({
          amount,
          taskId: this.job.taskId,
          task: this.job.task
        })"></sponsor-modal>

        <vue-grid-item fill>
          <vue-panel v-if="job">
            <vue-panel-header>
              <router-link :key="`/job/${job.taskId}`">{{ job.task }}</router-link>
              </vue-panel-header>
            <vue-panel-body>
            <ul>
              <li v-if="job.salary">
                Description: {{job.brief}}<br>
                Full time rate: ${{job.salary['full-time-rate']}}
                <br>
                <br>
                Pay frequency: 
                <input id="weekly" type="checkbox" name="weekly" v-model="job.salary['pay-frequency'].weekly" />
                <label for="weekly">Weekly</label>
                <input id="bi-weekly" type="checkbox" name="bi-weekly" v-model="job.salary['pay-frequency']['bi-weekly']" />
                <label for="bi-weekly">Bi-weekly</label>
                <input id="monthly" type="checkbox" name="monthly" v-model="job.salary['pay-frequency'].monthly" />
                <label for="monthly">Monthly</label>
                <br>
                <br>
                Term of employment: 
                <input id="sixmonth" type="checkbox" name="sixmonth" v-model="job.salary['term-of-employment']['six-months']" />
                <label for="sixmonth">6 month</label>
                <input id="oneyear" type="checkbox" name="oneyear" v-model="job.salary['term-of-employment']['one-year']" />
                <label for="oneyear">1 year</label>
                <br>
                Date Posted: {{job['date-posted']}}<br>
              </li>
            </ul>
            </vue-panel-body>
            
            <vue-panel-footer>
              
            </vue-panel-footer>
            <br>

          </vue-panel>
        </vue-grid-item>

        <vue-grid-item fill>
          <vue-accordion multiple>
            <vue-accordion-item
              title="Claim">
              <h3>Requirements</h3>
              <ul>
                <li>Test</li>
                <li>Test</li>
              </ul>
              <h3>Definition of Done </h3>
              <ul>
                <li>Test</li>
                <li>Test</li>
              </ul>
              <h3>Legal</h3>
              <ul>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
              </ul>
              <vue-grid-row>
                <vue-grid-item>
                  <vue-checkbox
                    name="acceptTerms"
                    id="acceptTerms"
                    v-model="form.acceptTerms"
                    label="I accept the terms"
                    required />
                    </vue-grid-item>
              </vue-grid-row>
              <vue-grid-row>
                    <vue-grid-item>
                    <vue-button primary>Claim</vue-button>
                </vue-grid-item>
              </vue-grid-row>

              </vue-accordion-item>
            <vue-accordion-item title="Sponsor this Job">
              <p>Coming Soon.</p>
              <br>
              <vue-button accent>
                  <a @click.prevent.stop="e => showSponsoredModal = true" id="make-hyperlink-white">Sponsor this Job</a>
             </vue-button>
            </vue-accordion-item>

            </vue-accordion-item>
            <vue-accordion-item title="Comments">
              Coming Soon.
            </vue-accordion-item>
          </vue-accordion>
        </vue-grid-item>

    <br>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import { mapActions, mapGetters } from 'vuex';
import { IPreLoad } from '../../../server/isomorphic';
import VueGrid from '../../shared/components/VueGrid/VueGrid.vue';
import VueGridItem from '../../shared/components/VueGridItem/VueGridItem.vue';
import VueButton from '../../shared/components/VueButton/VueButton.vue';
import VueGridRow from '../../shared/components/VueGridRow/VueGridRow.vue';
import VuePagination from '../../shared/components/VuePagination/VuePagination.vue';
import VuePanel from '../../shared/components/VuePanel/VuePanel.vue';
import VuePanelHeader from '../../shared/components/VuePanel/VuePanelHeader/VuePanelHeader.vue';
import VuePanelBody from '../../shared/components/VuePanel/VuePanelBody/VuePanelBody.vue';
import VuePanelFooter from '../../shared/components/VuePanel/VuePanelFooter/VuePanelFooter.vue';
import VueAccordion from '../../shared/components/VueAccordion/VueAccordion.vue';
import VueAccordionItem from '../../shared/components/VueAccordion/VueAccordionItem/VueAccordionItem.vue';
import VueInput from '../../shared/components/VueInput/VueInput.vue';
import VueSelect from '../../shared/components/VueSelect/VueSelect.vue';
import VueCheckbox from '../../shared/components/VueCheckbox/VueCheckbox.vue';
import {
  addNotification,
  INotification
} from '../../shared/components/VueNotificationStack/utils';
import axios from 'axios';
import firebase from 'firebase';
import db from '../../firebaseinit';
import SponsorModal from '../../SponsorModal/SponsorModal.vue';
import { uuid } from 'vue-uuid';
import { sponsorSubmitMixin } from '../../shared/mixins/mixins';

export default {
  mixins: [sponsorSubmitMixin],
  metaInfo: {
    title: 'Job'
  },
  $_veeValidate: {
    validator: 'new'
  },
  components: {
    VueGrid,
    VueGridItem,
    VueButton,
    VueGridRow,
    VuePagination,
    VuePanel,
    VuePanelHeader,
    VuePanelBody,
    VuePanelFooter,
    VueAccordion,
    VueAccordionItem,
    VueInput,
    VueSelect,
    VueCheckbox,
    SponsorModal
  },
  data(): any {
    return {
      job: {},
      posted: '',
      taskId: '',
      form: {
        acceptTerms: false,
        newsletter: false
      },
      isLoading: false,
      showSponsoredModal: false
    };
  },
  created() {
    const taskId = this.$route.params.id;
    console.log('job id', taskId);
    db
      .collection('jobs')
      .where('taskId', '==', taskId)
      .get()
      .then(snapshot => {
        console.log('snapshot!', snapshot);
        const jobs = [];
        snapshot.forEach(job => {
          jobs.push(job.data());
        });
        this.job = jobs[0];
      })
      .catch(err => {
        console.error('Error while trying to get job', err);
      });
    /*
      beforeCreate
      created
      beforeMount
      mounted
      beforeUpdate
      updated
      beforeDestroy
      destroyed
    */
  },
  computed: {
    ...mapGetters('test', ['count', 'incrementPending', 'decrementPending']),
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
  methods: {
    ...mapActions('test', ['increment', 'decrement']),
    getJob() {
      axios.get('/jobs.json').then((response: any) => {
        const job = response.data.jobs.filter(
          (job: any) => job.taskId == this.$route.params.taskId
        );
        console.log(job);
        if (job.length > 0) {
          this.job = job[0];
        }
      });
    },
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
    }
  },
  prefetch: (options: IPreLoad) => {
    return options.store.dispatch('test/increment');
  }
};
</script>


<style lang="scss" module>
@import '../../shared/styles';

.job {
  margin-top: $nav-bar-height;
  min-height: 500px;
}

#remove-hyperlink a:hover,
a:visited,
a:link,
a:active {
  text-decoration: none;
  color: white;
}
</style>
