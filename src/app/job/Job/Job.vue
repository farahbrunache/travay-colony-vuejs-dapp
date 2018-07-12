<template>
  <div :class="$style.job">
    <vue-grid v-if="job">
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

        <p v-if="job.role && userId">
          <a v-if="job.role['0'] === userId" @click.prevent.stop="e => {}">
            <i class="fa edit-icon" :class="isEditing ? 'fa-times' : 'fa-edit'" @click="isEditing = !isEditing" ></i>
            Icon
          </a>
        </p>

        <vue-grid-item fill>
          <vue-panel >
            <vue-panel-header>
              <router-link :key="`/job/${job.taskId}`">{{ job.task }}</router-link>
              </vue-panel-header>
            <vue-panel-body>

            <ul>
              <li v-if="job.salary">
                Job: {{job.task}}><br>
                <template v-if="isEditing">
                  Description:<br/>
                  <input 
                    id="job-description" 
                    type="text" 
                    v-model="job.brief"/> <br/>

                  Full time rate: <br/>
                  <input 
                    id="job-salary-rate"
                    type="text"
                    v-model="job.salary['full-time-rate']"/> <br/>

                </template>
                <template v-else>
                  Description: {{job.brief}}<br>
                  Full time rate: ${{job.salary['full-time-rate']}}
                </template>
                
                <br>
                <template v-if="isEditing">
                  <br>
                Pay frequency: 
                <input id="weekly" true-value="weekly" type="checkbox" name="weekly" v-model="job.salary['pay-frequency'].label" :disabled="!isJobManager"/>
                <label for="weekly">Weekly</label>
                <input id="bi-weekly" type="checkbox" true-value="bi-weekly" name="bi-weekly" v-model="job.salary['pay-frequency'].label" :disabled="!isJobManager"/>
                <label for="bi-weekly">Bi-weekly</label>
                <input id="monthly" true-value="monthly" type="checkbox" name="monthly" v-model="job.salary['pay-frequency'].label" :disabled="!isJobManager"/>
                <label for="monthly">Monthly</label>
                <br>
                </template>
                <template v-else>
                  Pay frequency: {{job.salary['pay-frequency'].label}}
                </template>


                <br>
                <template v-if="isEditing">
                  Term of employment: 
                  <input id="sixmonth" type="checkbox" name="sixmonth" v-model="job['terms-of-employment']" true-value="6" :disabled="!isJobManager"/>
                  <label for="sixmonth">6 month</label>
                  <input id="oneyear" type="checkbox" name="oneyear" v-model="job['terms-of-employment']" true-value="12" :disabled="!isJobManager"/>
                  <label for="oneyear">1 year</label>
                </template>
                <template v-else>
                  Term of employment: {{ job['terms-of-employment'] }}
                </template>
                <br>
                Date Posted: {{ job['date-posted'] | moment }}<br>
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
              <template v-if="isEditing">

              </template>
              <ul>
                <li>Requirement 1</li>
                <li>Requirement 2</li>
              </ul>
              <p>Claiming this position is to accpet the requirements and legal requirements.</p>
              <vue-grid-row>
                <vue-grid-item>
                  <vue-checkbox
                    v-if="isJobWorker"
                    name="acceptTerms"
                    id="acceptTerms"
                    v-model="form.acceptTerms"
                    label="I accept the terms"
                    required />
                    </vue-grid-item>
              </vue-grid-row>
              <vue-grid-row>
                    <vue-grid-item v-if="job.role">
                    <vue-button
                      v-if="job.role['0'] !== userId"
                      @click.prevent.stop="e => onClaim(job.id)"
                     primary>Claim</vue-button>
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

            <vue-accordion-item title="Upload Proof of Work">
                <div class="input-group">
                    <!--<input type="text" class="form-control" placeholder="Upload an Image" v-model="file.name" aria-label="post image" aria-describedby="basic-addon2">-->
                    <div class="input-group-append">
                      <span class="input-group-text btn btn-primary btn-file" id="basic-addon2">
                        Browse
                        <input type="file" v-on:change="fileUploaded" accept="image/png, image/jpeg, image/gif" name="input-file-preview"/>
                      </span>
                    </div>
                </div>
                  <div>
                    <img class="img-responsive" :src="image_preview" alt="" style="width: 200px; height:  200px;">
                  </div>

                  <div>
                    <p>{{loadingText}}</p>
                  </div>

                <vue-button accent><a @click.prevent="uploadFile">Upload file</a></vue-button>
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
const firebaseStorage = firebase.storage();
import moment from 'moment';

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
      showSponsoredModal: false,
      isEditing: false,
      file: '',
      image: '',
      image_preview: '',
      loadingText: ''
    };
  },
  // TODO refactor to a service
  filters: {
    moment: function(date: any) {
      return moment(date).format('MMMM Do YYYY');
    }
  },
  mounted() {
    const taskId = this.$route.params.id;
    console.log('job id', this.userId);
    db
      .collection('jobs')
      .where('taskId', '==', taskId)
      .get()
      .then(snapshot => {
        const jobs = [];
        const jobsId = [];
        snapshot.forEach(job => {
          let jobData = job.data();
          let jobId = job.id;
          jobs.push(jobData);
          jobsId.push(jobId);
        });
        this.job = jobs[0];
        this.job.id = jobsId[0];
        console.log(this.job, 'job');
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
    ...mapGetters('job', []),
    ...mapGetters('signin', ['userId']),
    isJobManager() {
      return this.userId === this.job.role[0];
    },
    isJobWorker() {
      return this.userId === this.job.role[2];
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
    ...mapGetters('signin', ['userId']),
    ...mapActions('job', []),
    fileUploaded(e) {
      console.log('file uploaded', e.target.files[0]);
      this.file = e.target.files[0];
    },
    getJob() {
      axios.get('/jobs.json').then((response: any) => {
        const job = response.data.jobs.filter(
          (job: any) => job.taskId == this.$route.params.taskId
        );
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
    },
    onClaim(docId: any) {
      const taskId = this.$route.params.id;
      db
        .collection('jobs')
        .doc(docId)
        .update({
          'role.2': this.userId
        });
      this.$nextTick(() => {
        setTimeout(() => {
          this.isLoading = false;
          addNotification({
            title: 'Yay!',
            text:
              "Job confirmed successfully! You'll be notify by the manager shortly"
          } as INotification);
        }, 700);
      });
    },
    editJob() {},
    uploadFile() {
      return new Promise((resolve, reject) => {
        const self = this;
        const storageRef = firebaseStorage
          .ref()
          .child('images/' + this.file.name + '');
        let uploadTask = storageRef.put(this.file);
        uploadTask.on(
          'state_changed',
          function(snapshot) {
            var progress =
              snapshot.bytesTransferred / snapshot.totalBytes * 100;
            console.log(progress);
            self.loadingText =
              'Upload is ' + progress + '% done. Processing post.';
          },
          function(error) {
            // Handle unsuccessful uploads
            reject(error);
          },
          function() {
            // Handle successful uploads on complete
            resolve(uploadTask.snapshot.downloadURL);
          }
        );
      });
    },
    uploadProofOfWork() {
      this.uploadFile().then(imageUrl => {
        data.image = imageUrl;
        db
          .collection('jobs')
          .where('taskId', '==', taskId)
          .add(data)
          .then(function(docRef) {
            self.clearForm();
            self.loadingText = 'Post was created successfully.';
          })
          .catch(function(error) {
            console.error('Error adding document: ', error);
          });
      });
    }
  }
};
</script>

<style lang="scss" module>
@import '../../shared/styles';
.edit-icon {
  float: right;
  font-size: 2.1rem;
  color: #eeddfc;
}

.job {
  margin-top: $nav-bar-height;
  min-height: 500px;
}

#remove-hyperlink a,
a:hover,
a:visited,
a:link,
a:active {
  text-decoration: none;
  color: white;
}
</style>
