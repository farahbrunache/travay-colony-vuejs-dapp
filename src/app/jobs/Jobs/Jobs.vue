<template>
  <div :class="$style.jobs">

    <div :class="$style.header">
      <vue-grid>
        <vue-grid-row>
          <vue-grid-item class="vueGridItem">
            <h1>{{ $t('App.nav.jobs' /* Jobs */) }}</h1>
            <p>
              Here you'll find 6-month and 12-month jobs.
            </p>
          </vue-grid-item>
        </vue-grid-row>
      </vue-grid>
    </div>
<br>

    <vue-grid>
      <vue-grid-row>

        <vue-grid-item>
        <ul class="filter-bar">
          <li class="filter__item">Search:
            <input type="text" name="search" v-model="keyword" />
          </li>
          <li class="filter__item">Filter by:
            <select v-model="filterType">
              <option value="all">All</option>
              <option
                v-for="type in types"
                v-bind:value="type.id"
                v-bind:key="type.id"
              >
                {{ type.title }}
              </option>
            </select>
            <select v-if="isFilteringBySalary" v-model='startRange'>
              <option>Select a Start range</option>
              <option
                v-for="amount in amounts"
                v-bind:value="amount.value"
                v-bind:key="amount.id"
              >
                {{ amount.id }}
              </option>
            </select>
            <select v-if="isFilteringBySalary" v-model='endRange'>
              <option>Select a End range</option>
              <option
                v-for="amount in amounts"
                v-bind:value="amount.value"
                v-bind:key="amount.id"
              >
                {{ amount.id }}
              </option>
            </select>
            <select v-if="isFilteringBySkill" v-model='skill'>
              <option>Select a Skill</option>
              <option
                v-for="skill in skills"
                v-bind:value="skill.value"
                v-bind:key="skill.id"
              >
                {{ skill.id }}
              </option>
            </select>
            <select v-if="isFilteringByDomain" v-model='domain'>
              <option value="">Select a Domain</option>
              <option
                v-for="domain in domains"
                v-bind:value="domain.value"
                v-bind:key="domain.id"
              >
                {{ domain.id }}
              </option>
            </select>
          </li>
        </ul>
      </vue-grid-item>
      </vue-grid-row>
        <br>

        <vue-grid-row>
          <!-- <vue-button accent>
            <router-link :to="'createJob'">Post a Job</router-link>
             </vue-button> -->
            <vue-button
            class="sponsor-btn--container" accent>
              <a style="color: white !important;" @click.prevent.stop="e => createJobClickedHandler()" id="remove-hyperlink">Post a Job</a>
             </vue-button>
        </vue-grid-row>
        <br>
      <sponsor-modal 
        :job="jobToSponsor" 
        :show.sync="showSponsoredModal"
        @sponsorSubmit="amount => sponsorSubmitHandler({
          amount, 
          taskId: this.selectedJobToSponsorId, task: this.jobToSponsor.task
          })"></sponsor-modal>
      <vue-grid-row>
        <vue-grid-item>
        <hr>      
          <vue-panel v-for="job in filteredJobs" v-bind:key="job.taskId">
            <!-- <vue-panel-header title="Title" subtitle="subtitle"
                              image="https://avatars2.githubusercontent.com/u/1667598?s=460&v=4" /> -->
            <vue-panel-body>
            <ul>
              <li >
                Job: {{job.task}}<br>
                Description: {{job.brief}}<br>
                Domain: {{job.domain}}<br>
                Top Desired Skill: {{job.skill}}<br>
                Full time rate: ${{job.salary['full-time-rate']}}
                <br>
                <br>
                Pay frequency: 
                <input id="weekly" true-value="weekly" type="checkbox" name="weekly" v-model="job.salary['pay-frequency'].label" disabled/>
                <label for="weekly">Weekly</label>
                <input id="bi-weekly" type="checkbox" true-value="bi-weekly" name="bi-weekly" v-model="job.salary['pay-frequency'].label" disabled/>
                <label for="bi-weekly">Bi-weekly</label>
                <input id="monthly" true-value="monthly" type="checkbox" name="monthly" v-model="job.salary['pay-frequency'].label" disabled/>
                <label for="monthly">Monthly</label>
                <br>
                <br>
                Term of employment: 
                <input id="sixmonth" type="checkbox" name="sixmonth" v-model="job['terms-of-employment']" true-value="6" disabled/>
                <label for="sixmonth">6 month</label>
                <input id="oneyear" type="checkbox" name="oneyear" v-model="job['terms-of-employment']" true-value="12" disabled/>
                <label for="oneyear">1 year</label>
                <br>
                Date Posted: {{ job['date-posted'] | moment }}<br>
              </li>
            </ul>        
            </vue-panel-body>    
            <vue-panel-footer>
              <vue-button primary>
              <router-link :to="`/job/${job.taskId}`" id="remove-hyperlink" style="color:white;">Learn More</router-link>
              </vue-button>

              <vue-button v-userRole.canSponsor="{
                role: job.role
              }" class="sponsor-btn--container" accent>
                  <a style="color: white !important;" @click.prevent.stop="e => sponsorJobClickedHandler(job.taskId)" id="remove-hyperlink">Sponsor this Job</a>
             </vue-button>

            </vue-panel-footer>
            <br>
          </vue-panel>
          <br>
        </vue-grid-item>
        
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
import { userRole } from '../../shared/directives/userRole.js';

import axios from 'axios';
import firebase from 'firebase';
import db from '../../firebaseinit';
import SponsorModal from '../../SponsorModal/SponsorModal.vue';
import { uuid } from 'vue-uuid';
import moment from 'moment';
import { sponsorSubmitMixin } from '../../shared/mixins/mixins';
import { directive } from 'vee-validate';

export default {
  mixins: [sponsorSubmitMixin],
  metaInfo: {
    title: 'Jobs'
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
    SponsorModal
  },
  data(): any {
    return {
      jobs: [],
      selectedJobToSponsorId: null,
      showSponsoredModal: false,
      posted: '',
      filterType: 'all',
      endRange: '1000000',
      startRange: '1',
      skill: '',
      domain: '',
      keyword: '',
      types: [
        {
          id: 'salary',
          title: 'Salary'
        },
        {
          id: 'skill',
          title: 'Skill'
        },
        {
          id: 'domain',
          title: 'Domain'
        }
      ],
      amounts: [
        {
          id: '$1',
          value: '1'
        },
        {
          id: '$200',
          value: '200'
        },
        {
          id: '$400',
          value: '400'
        },
        {
          id: '$600',
          value: '400'
        },
        {
          id: '$800',
          value: '800'
        },
        {
          id: '$1000',
          value: '1000'
        }
      ],
      skills: [
        {
          id: 'labor',
          value: 'Labor'
        },
        {
          id: 'teaching',
          value: 'Teaching'
        },
        {
          id: 'engineering',
          value: 'Engineering'
        }
      ],
      domains: [
        {
          id: 'enviroment',
          value: 'Enviroment'
        },
        {
          id: 'community',
          value: 'Community'
        },
        {
          id: 'education',
          value: 'Education'
        }
      ]
    };
  },
  watch: {
    filterType(selectedValue, oldValue) {
      console.log('filter type value changed', selectedValue, oldValue);
      this.filterJobs();
    },
    keyword(keyword) {
      this.filterJobs(keyword);
    },
    domain(domain) {
      this.filterJobs();
    }
  },
  filters: {
    moment: function(date: any) {
      return moment(date).format('MMMM Do YYYY');
    }
  },
  methods: {
    ...mapActions('jobs', []),
    ...mapActions('signInModal', ['openLoginModal', 'closeLoginModal']),
    moment: function() {
      return moment();
    },
    createJobClickedHandler() {
      if (!this.userId) {
        this.openLoginModal();
        return;
      }
      this.$router.push('createJob');
    },
    sponsorJobClickedHandler(taskId) {
      if (!this.userId) {
        this.openLoginModal();
        return;
      }
      this.selectedJobToSponsorId = taskId;
      this.showSponsoredModal = true;
    },
    sort(jobs: Array<object>) {
      const result = jobs.sort(function(a: any, b: any): number {
        let date1: any = new Date(a['date-posted']);
        let date2: any = new Date(b['date-posted']);
        return date1 - date2;
      });
      this.jobs = result;
    },
    filterJobs(keyword: string, jobs: any) {
      console.log('filtering in filterJobs', keyword);
      if (!Reflect.has(this.$options, 'originalJobs')) return [];
      const jobs = this.$options.originalJobs.reduce((acc, job) => {
        console.log(
          'Checking the domain',
          this.isFilteringByDomain,
          this.domain
        );
        if (this.isFilteringByDomain && this.domain) {
          console.log('Will filter by domain');
          if (job.domain.toLowerCase() !== this.domain.toLowerCase()) {
            console.log('Job should not be added!');
            return acc;
          }
        }

        let keywordSearchRegEx = RegExp(keyword, 'gi');
        let valid =
          keywordSearchRegEx.test(job.brief) &&
          (parseInt(job['salary']['full-time-rate']) <=
            parseInt(this.endRange) &&
            parseInt(job['salary']['full-time-rate']) >=
              parseInt(this.startRange));
        if (valid) acc.push(job);
        return acc;
      }, []);

      this.jobs = jobs;

      /*if (this.isFilteringByDomain && this.domain) {
        return this.$options.originalJobs.filter(job => {
          console.log('job domain', job.domain, this.domain);
          return job.domain.toLowerCase() === this.domain.toLowerCase();
        });
      }
      this.jobs = this.$options.originalJobs.filter(
        (job: any, index: Number) => {
          let keywordSearchRegEx = RegExp(keyword, 'gi');
          return (
            keywordSearchRegEx.test(job.brief) &&
            (parseInt(job['salary']['full-time-rate']) <=
              parseInt(this.endRange) &&
              parseInt(job['salary']['full-time-rate']) >=
                parseInt(this.startRange))
          );
        }
      );*/
    }
  },
  mounted() {},
  computed: {
    ...mapGetters('signInModal', ['userId']),
    ...mapGetters('jobs', []),
    jobToSponsor() {
      return (
        this.jobs.find(job => job.taskId === this.selectedJobToSponsorId) || {}
      );
    },
    isFilteringBySalary() {
      return this.filterType === 'salary';
    },
    isFilteringBySkill() {
      return this.filterType === 'skill';
    },
    isFilteringByDomain() {
      return this.filterType === 'domain';
    },
    filteredJobs() {
      return this.jobs;
    }
  },
  created() {
    db
      .collection('jobs')
      .get()
      .then(snapshot => {
        const jobs = [];
        snapshot.forEach(job => {
          jobs.push(job.data());
        });
        this.jobs = jobs;
        this.$options.originalJobs = jobs;
      });
  }
};
</script>
<style lang="scss" module>
@import '../../shared/styles';

#remove-hyperlink a,
a:hover,
a:visited,
a:link,
a:active {
  text-decoration: none;
}

.components {
  padding-bottom: $space-unit * 2;

  :global {
    h2 {
      margin-top: 3.6rem;
    }

    .vueGridItem {
      min-width: 46%;
    }
  }
}

.header {
  padding: $nav-bar-height 0 $nav-bar-height * 0.5;
  text-align: center;
  text-shadow: 0 5px 10px rgba(0, 0, 0, 0.33);
  @include background-gradient($brand-dark-primary, $brand-accent, 152deg);
}

.collapseDemo {
  padding: $space-unit * 2;
  background: $panel-bg;
  box-shadow: $panel-shadow;
  color: #fff;
}
input:disabled {
  color: #fff;
  cursor: none;
}
</style>