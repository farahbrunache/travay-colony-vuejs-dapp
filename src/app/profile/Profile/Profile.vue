<template>
  <div :class="$style.profile">
    
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill>
          <h1>Profile</h1>
        </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row>
    <vue-grid-item>
        <vue-panel>

          <vue-panel-body
          v-for="user in users"
          :key="user.uid">
            <p>{{ user.name || user.displayName }}</p>
            <p>{{ user.email || null }}</p>
            <p>{{ user.phone || null }}</p>
            <p>{{ user.address || null }}</p>
            <p>{{ user.country || null }}</p>
          </vue-panel-body>
        </vue-panel>
    </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row>
    <vue-grid-item>
          <vue-accordion multiple>
            <vue-accordion-item title="Incomplete Jobs">
                 <div 
                v-for="(item, index) in incompleteJobs"
                :key="item.taskId + index">
                <p>{{item.task}}</p>
            </div>
            </vue-accordion-item>

            <vue-accordion-item title="Completed Jobs">
               <div 
                v-for="(item, index) in completedJobs"
                :key="item.taskId + index">
                <p>{{item.task}}</p>
            </div>
            </vue-accordion-item>

            <vue-accordion-item title="Canceled Jobs">
               <div 
                v-for="(item, index) in canceledJobs"
                :key="item.taskId + index">
                <p>{{item.task}}</p>
            </div>
            </vue-accordion-item>

            <vue-accordion-item title="Jobs You're Managing">
              <div 
                v-for="(item, index) in managingJobs"
                :key="item.taskId + index">
                <p>{{item.task}}</p>
            </div>
            </vue-accordion-item>

            <vue-accordion-item
            title="Jobs You're Evaluating">
                <div 
                v-for="(item, index) in evaluatingJobs"
                :key="item.taskId + index">
                <p>{{item.task}}</p>
            </div>       
            <template>

            </template>
            </vue-accordion-item>              

            
            <vue-accordion-item title="Jobs You've Sponsored">
              <div 
                v-for="(item, index) in sponsored"
                :key="item.sponsoredId + index">
                <p>{{item.task}}</p>
            </div>
            </vue-accordion-item>

            </vue-accordion>
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
import VuePanel from '../../shared/components/VuePanel/VuePanel.vue';
import VuePanelHeader from '../../shared/components/VuePanel/VuePanelHeader/VuePanelHeader.vue';
import VuePanelBody from '../../shared/components/VuePanel/VuePanelBody/VuePanelBody.vue';
import VuePanelFooter from '../../shared/components/VuePanel/VuePanelFooter/VuePanelFooter.vue';
import VueInput from '../../shared/components/VueInput/VueInput.vue';
import VueSelect from '../../shared/components/VueSelect/VueSelect.vue';
import VueCheckbox from '../../shared/components/VueCheckbox/VueCheckbox.vue';
import VueAccordion from '../../shared/components/VueAccordion/VueAccordion.vue';
import VueAccordionItem from '../../shared/components/VueAccordion/VueAccordionItem/VueAccordionItem.vue';
import {
  addNotification,
  INotification
} from '../../shared/components/VueNotificationStack/utils';
import firebase from 'firebase';
import db from '../../firebaseinit';
import { userRole } from '../../shared/directives/userRole.js';

let db: any;
let snapshot: any;

export default {
  name: 'Profile',
  components: {
    VueGrid,
    VueGridItem,
    VueButton,
    VueGridRow,
    VuePanel,
    VuePanelHeader,
    VuePanelBody,
    VuePanelFooter,
    VueInput,
    VueSelect,
    VueCheckbox,
    VueAccordion,
    VueAccordionItem
  },
  data(): any {
    return {
      isLoading: false,
      sponsored: false,
      isEditing: false,
      job: {},
      jobs: {},
      users: {},
      incompleteJobs: [],
      completedJobs: [],
      evaluatingJobs: [],
      managingJobs: [],
      canceledJobs: []
    };
  },
  computed: {
    ...mapGetters('profile', []),
    ...mapGetters('signInModal', ['userId'])
  },
  methods: {
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
    getJobs() {
      return db
        .collection('jobs')
        .where('role.0', '==', this.userId)
        .get()
        .then(snapshot => {
          const jobs: Array<Object> = [];
          const incompleteJobs: Array<Object> = [];
          const completedJobs: Array<Object> = [];
          const evaluatingJobs: Array<Object> = [];
          const managingJobs: Array<Object> = [];
          const canceledJobs: Array<Object> = [];
          snapshot.forEach(item => {
            const job = item.data();

            if (job.status.state === 'completed') {
              completedJobs.push(job);
            } else if (job.status.state === 'canceled') {
              canceledJobs.push(job);
            } else {
              incompleteJobs.push(job);
            }

            if (job.role[0] === this.userId) {
              managingJobs.push(job);
            }

            if (job.role[1] === this.userId) {
              evaluatingJobs.push(job);
            }
          });
          this.incompleteJobs = incompleteJobs;
          this.completedJobs = completedJobs;
          this.evaluatingJobs = evaluatingJobs;
          this.managingJobs = managingJobs;
          this.canceledJobs = canceledJobs;
          Promise.resolve(true);
        });
    },
    getUser() {
      return db
        .collection('users')
        .where('uid', '==', this.userId)
        .get()
        .then(snapshot => {
          const users: Array<Object> = [];
          snapshot.forEach(item => {
            users.push(item.data());
          });
          this.users = users;
          Promise.resolve(true);
        });
    },
    getSponsored() {
      return db
        .collection('sponsored')
        .where('userId', '==', this.userId)
        .get()
        .then(snapshot => {
          console.log('Sponsored jobs', snapshot);
          const sponsored: Array<Object> = [];
          snapshot.forEach(item => {
            sponsored.push(item.data());
          });
          this.sponsored = sponsored;
          Promise.resolve(true);
        });
    },
    async prepareData() {
      this.isLoading = true;
      try {
        await Promise.all([
          this.getUser(),
          this.getJobs(),
          this.getSponsored()
        ]);
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
    }
  },
  created() {
    this.prepareData();
  }
};
</script>

<style lang="scss" module>
@import '../../shared/styles';

.profile {
  margin-top: $nav-bar-height;
  min-height: 500px;
  padding-left: 100px;
  padding-right: 100px;
}

.formExample {
  display: block;
}
</style>
