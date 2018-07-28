<template>
  <div :class="$style.job">
    <vue-grid v-if="job">
      <vue-grid-row>
        <vue-grid-item fill>
          <h1>{{ $t('App.job.jobTitle' /* Job */) }}</h1>
        </vue-grid-item>

        <sponsor-modal 
          :job="job" 
        :show.sync="showSponsoredModal"
        @sponsorSubmit="amount => sponsorSubmitHandler({
          amount,
          taskId: this.job.taskId,
          task: this.job.task,
          job: this.job
        })"></sponsor-modal>

        <vue-grid-item fill>
          <vue-panel>
            <vue-panel-header title="Details">


              <router-link :key="`/job/${job.taskId}`">{{ job.task }}</router-link>
              </vue-panel-header>

            <vue-panel-body>
              <p v-if="'status' in job && job.status.state === 'cancelled'">This job has been cancelled</p>
              <p v-if="job.role && userId && ('status' in job && job.status.state !== 'cancelled')">
                <a v-if="job.role['0'] === userId" @click.prevent.stop="e => {}">
                  <i class="fa edit-icon" :class="isEditingJobDetails ? 'fa-times' : 'fa-edit'" @click="isEditingJobDetails = !isEditingJobDetails" ></i>
                  Edit
                </a>
              </p>

            <ul>
              <li v-if="job.salary">
                Job: {{job.task}}<br>

                <template v-if="isEditingJobDetails">

                  Description:<br/>
                  <input 
                    id="job-description" 
                    type="text" 
                    v-model="job.brief"/> <br/>

                    Domain:<br/>
                    <input
                    id="domain"
                    type="text"
                    v-model="job.domain" /><br>

                    Top Desired Skill:<br/>
                    <input
                    id="skill"
                    type="text"
                    v-model="job.skill" /> <br/>

                    {{ $t('App.job.salaryIsEditing' /* Salary cannot be changed after job is posted.  */) }}<br>

                    {{ $t('App.job.payFrequencyIsEditing' /* Pay frequency cannot be changed after job is posted.  */) }}<br>

                    {{ $t('App.job.termOfEmploymentIsEditing' /* Term of Employment cannot be changed after job is posted. */) }}<br>

                    <!-- Pay frequency: 
                        <input id="weekly" true-value="weekly" type="checkbox" name="weekly" v-model="job.salary['pay-frequency'].label" :disabled="!isJobManager"/>
                        <label for="weekly">Weekly</label>

                        <input id="bi-weekly" type="checkbox" true-value="bi-weekly" name="bi-weekly" v-model="job.salary['pay-frequency'].label" :disabled="!isJobManager"/>
                        <label for="bi-weekly">Bi-weekly</label>

                        <input id="monthly" true-value="monthly" type="checkbox" name="monthly" v-model="job.salary['pay-frequency'].label" :disabled="!isJobManager"/>
                        <label for="monthly">Monthly</label><br> -->

                    <!-- Term of employment: 
                    <input id="sixmonth" type="checkbox" name="sixmonth" v-model="job['terms-of-employment']" true-value="6" :disabled="!isJobManager"/>
                    <label for="sixmonth">6 month</label>
                    <input id="oneyear" type="checkbox" name="oneyear" v-model="job['terms-of-employment']" true-value="12" :disabled="!isJobManager"/>
                    <label for="oneyear">1 year</label> -->

                    Requirements: (Please place a "comma" after each requirement) <br/>
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
                      <p v-for="(req, i) in job.deliverable" :key="i">
                        <vue-badge accent>{{req}} -</vue-badge>
                        <span @click="removeRequirement(i)">
                          X
                        </span>
                        <br>
                        <br>
                      </p>
                      </vue-grid-item>
                </template>

                <template v-else>
                  Description: {{job.brief}}<br>
                  Domain: {{job.domain}}<br>
                  Top Desired Skill: {{job.skill}}<br>
                  Full time rate: ${{job.salary['full-time-rate']}}<br>
                  Total Sponsored Amount: ${{ job.sponsoredAmount }}<br>
                  Pay frequency: {{job.salary['pay-frequency'].label}}<br>
                  Term of Employment: {{ job['terms-of-employment'] }}<br><br>
                  Requirements:<br>
                      <p v-for="(item, index) in job.deliverable" :key="index">
                        + {{item}}
                      </p>
                </template>

                <template v-if="isEditingJobDetails">
                  <vue-grid-row>
                        <vue-grid-item>
                          <vue-button primary
                          @click.prevent.stop="e => postEditedJob(job.id)">
                            Post Changes
                          </vue-button>
                        </vue-grid-item>

                        <br>
                        <br>
                        <br>

                        <vue-grid-item>
                        <vue-button warn
                        @click="cancelJobHandler">
                            Cancel Job
                        </vue-button>
                        </vue-grid-item>

                      </vue-grid-row>
                </template>
                <br>
                Date Posted: {{ job['date-posted'] | moment }}<br>
              </li>
            </ul>
            </vue-panel-body>

          </vue-panel>
        </vue-grid-item>

        <vue-grid-item fill>
          <vue-accordion multiple>
            <vue-accordion-item title="Claim">

              <vue-grid-row>
                <vue-grid-item>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </vue-grid-item>
              </vue-grid-row>
              
              <template v-if="!claimed">
              <vue-grid-row v-userRole.signedIn.canClaim="{role: job.role}">
                <vue-grid-item>
                  <p>Claiming this position is to accpet the requirements and legal requirements.</p>
                  <vue-checkbox
                    name="acceptTerms"
                    id="acceptTerms"
                    v-model="form.acceptTerms"
                    label="I accept the terms"
                    validation="required" />
                  </vue-grid-item>
              </vue-grid-row>

              <vue-grid-row>
              <vue-grid-item>
                    <vue-button primary
                      @click.prevent.stop="e => onClaim(job.id)"
                      v-userRole.signedIn.canClaim="{role: job.role}">
                     Claim
                     </vue-button>
                     
                </vue-grid-item>
              </vue-grid-row>
            </template>
              </vue-accordion-item>

            <vue-accordion-item title="Sponsor this Job">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <br>
              <vue-button v-userRole.canSponsor="{
                role: job.role
              }" class="sponsor-btn--container" accent>
                  <a style="color: white !important;" @click.prevent.stop="e => sponsorJobClickedHandler(job.taskId)" id="remove-hyperlink">Sponsor this Job</a>
             </vue-button>
            </vue-accordion-item>

            <vue-accordion-item title="Proof of Work">

               <vue-grid-item>
                <div
                  v-for="(image, index) in images"
                  :key="index"
                >
                  <a @click.prevent="removeImage(index)">X</a>
                  <img :src="image.src" />
                </div>
              </vue-grid-item>

              <vue-grid-row>
                    <vue-grid-item>
                      <h5>Upload Proof of Work</h5>
                      <span class="input-group-text btn btn-primary btn-file" id="basic-addon2">
                        <input type="file" v-on:change="fileUploaded" accept="image/png, image/jpeg, image/gif" name="input-file-preview" multiple/>
                      </span>
                  <div>
                  </div>

                  <div>
                    <p>{{ loadingText }}</p>
                  </div>

                  <vue-button accent
                  v-userRole.signedIn.worker="{cb: uploadFile, role: job.role}">
                <a @click.prevent="uploadImages" style="color: white;">
                  Upload file</a>
                  </vue-button>
              </vue-grid-item>
              <br/>
              <vue-grid-item>
              <br>
              <div class="job-images">
                <div 
                  v-for="(img, index) in this.job.images"
                  :key="index"
                  class="job-image-blocxk">
                  <img :src="img.url" :alt="img.name" />
                </div>
              </div>
              </vue-grid-item>
              </vue-grid-row>
            </vue-accordion-item>

            <vue-accordion-item title="Approve Work">
          
              <vue-grid-row>
                <vue-grid-item>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                  </vue-grid-item>
              </vue-grid-row>

              <vue-grid-row>
                    <vue-grid-item v-if="job.role">
                    <vue-button
                      v-if="job.role['0'] == userId"
                      @click.prevent.stop="e => onPayout(job.id)"
                     primary>Payout Job</vue-button>
                </vue-grid-item>
              </vue-grid-row>
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
import VuePanel from '../../shared/components/VuePanel/VuePanel.vue';
import VuePanelHeader from '../../shared/components/VuePanel/VuePanelHeader/VuePanelHeader.vue';
import VuePanelBody from '../../shared/components/VuePanel/VuePanelBody/VuePanelBody.vue';
import VuePanelFooter from '../../shared/components/VuePanel/VuePanelFooter/VuePanelFooter.vue';
import VueAccordion from '../../shared/components/VueAccordion/VueAccordion.vue';
import VueAccordionItem from '../../shared/components/VueAccordion/VueAccordionItem/VueAccordionItem.vue';
import VueInput from '../../shared/components/VueInput/VueInput.vue';
import VueSelect from '../../shared/components/VueSelect/VueSelect.vue';
import VueCheckbox from '../../shared/components/VueCheckbox/VueCheckbox.vue';
import VueBadge from '../../shared/components/VueBadge/VueBadge.vue';
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
import { userRole } from '../../shared/directives/userRole.js';
const firebaseStorage = firebase.storage();
import moment from 'moment';
import { filter } from 'compression';
import { Promise } from 'bluebird';
import { AssertionError } from 'assert';
import { any } from 'bluebird';

export default {
  mixins: [sponsorSubmitMixin],
  metaInfo: {
    title: 'Job',
    meta: [
      {
        name: 'Job',
        content: 'Details of jobs in Travay.'
      }
    ]
  },
  $_veeValidate: {
    validator: 'new'
  },
  components: {
    VueGrid,
    VueGridItem,
    VueButton,
    VueGridRow,
    VuePanel,
    VuePanelHeader,
    VuePanelBody,
    VuePanelFooter,
    VueAccordion,
    VueAccordionItem,
    VueInput,
    VueSelect,
    VueCheckbox,
    SponsorModal,
    VueBadge
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
      isEditingJobDetails: false,
      file: '',
      fileName: '',
      image: '',
      imagePreview: '',
      loadingText: '',
      sponsoredAmount: 0,
      images: [],
      requirement: '',
      requirements: [],
      claimed: false
    };
  },
  created() {
    const taskId = this.$route.params.id;
    db
      .collection('jobs')
      .where('taskId', '==', taskId)
      .get()
      .then(snapshot => {
        const jobs: any = [];
        const jobsId: any = [];
        snapshot.forEach(job => {
          let jobData = job.data();
          let jobId = job.id;
          jobs.push(jobData);
          jobsId.push(jobId);
        });
        this.job = jobs[0];
        this.job.id = jobsId[0];
      })
      .catch(error => {
        console.error('Error while trying to get the job', error);
      });
  },
  filters: {
    moment: function(date: any) {
      return moment(date).format('MMMM Do YYYY');
    }
  },
  mounted() {
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
    ...mapGetters('signInModal', ['userId']),
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
    ...mapGetters('signInModal', ['userId']),
    ...mapActions('signInModal', ['openLoginModal', 'closeLoginModal']),
    removeImage(i: any) {
      this.images = this.images.filter((img: any, index: any) => index !== i);
    },
    addRequirement() {
      if (this.requirement) {
        if (Reflect.has(this.job, 'deliverable')) {
          this.job.deliverable.push(this.requirement);
        } else {
          this.job.deliverable = [this.requirement];
        }
      }
      console.log('adding requirement', this.requirement, this.job.deliverable);
      this.requirement = '';
    },
    removeRequirement(i) {
      console.log('removing requirement', i);
      this.job.deliverable.splice(i, 1);
    },
    async cancelJobHandler() {
      const jobId = this.job.taskId;

      try {
        const job = await db.collection('jobs').doc(jobId);
        const update = await job.update({
          status: {
            status: 'cancelled'
          }
        });
        console.log('job found', job);
        console.log('update status', update);
        this.job.status = 'cancelled';
        this.isEditingJobDetails = false;
        addNotification({
          title: 'Success',
          text: 'This job has been cancelled!'
        } as INotification);
      } catch (error) {}
    },
    async fileUploaded(e: any) {
      const images = await Promise.all(
        Array.from(e.target.files).map(file => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = e => {
              resolve({ src: e.target.result, file, progress: null });
            };

            reader.readAsDataURL(file);
          });
        })
      );
      console.log('Images', images);
      this.images = images;
    },
    sponsorJobClickedHandler(taskId: string) {
      if (!this.userId) {
        this.openLoginModal();
        return;
      }
      this.selectedJobToSponsorId = taskId;
      this.showSponsoredModal = true;
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
    async onClaim(docId: any) {
      const taskId = this.$route.params.id;
      if (this.hasEmptyFields) {
        addNotification({
          title: 'Oops',
          text: 'To claim this job, you must agree to the terms.'
        } as INotification);
        return false;
      }
      await db
        .collection('jobs')
        .doc(docId)
        .update({
          'role.2': this.userId
        });
      const result = db
        .collection('users')
        .where('uid', '==', this.userId)
        .get()
        .then(snapshots => {
          const doc = snapshots.docs[0];
          const userData = doc.data();
          const obj = { doc, user: userData, claimedJobs: [] };
          if (Reflect.has(userData, 'claimedJobs')) {
            obj.claimedJobs = userData.claimedJobs;
          }
          return obj;
        })
        .then(({ doc, user, claimedJobs }) => {
          doc.ref.update({
            claimedJobs: [...claimedJobs, this.job.taskId]
          });
        });
      this.claimed = true;
      this.$nextTick(() => {
        setTimeout(() => {
          this.isLoading = false;
          addNotification({
            title: 'Yay!',
            text: this.$t(
              'App.job.jobClaimed'
            ) /* Job confirmed successfully! You can start work immediately. */
          } as INotification);
        }, 700);
      });
    },
    onPayout(docId: any) {
      const taskId = this.$route.params.id;
      db
        .collection('jobs')
        .doc(docId)
        .update({});
      this.$nextTick(() => {
        setTimeout(() => {
          this.isLoading = false;

          addNotification({
            title: 'Your Worker Thanks You!',
            text: this.$t(
              'App.job.jobPayout' /* Payout Complete. Your account is being debited. */
            )
          } as INotification);
        }, 700);
      });
    },
    async postEditedJob() {
      const jobData = {
        brief: this.job.brief,
        deliverable: this.job.deliverable,
        skill: this.job.skill,
        domain: this.job.domain
      };
      var jobRef = await db
        .collection('jobs')
        .doc(this.job.taskId)
        .get();
      console.log('JOb reference', jobRef, this.job.taskId, jobRef.ref);
      console.log('data', jobData);
      jobRef.ref
        .update({
          ...jobData
        })
        .then(function() {
          console.log('Document successfully updated!');
        })
        .catch(function(error: any) {
          console.error('Error updating document: ', error);
        });
      this.$nextTick(() => {
        setTimeout(() => {
          this.isLoading = false;
          addNotification({
            title: 'Yay!',
            text: this.$t(
              'App.job.jobClaimed'
            ) /* Job confirmed successfully! You can start work immediately. */
          } as INotification);
        }, 700);
      });

      this.isEditingJobDetails = false;
    },
    async uploadImages() {
      console.log('UPLOADING', this.images);
      const self = this;
      const results = this.images.map(async ({ file }) => {
        const imageUrl = await this.uploadFile(file, self.job.taskId);
        return { name: file.name, url: imageUrl };
      });
      Promise.all(results).then(async imageUrls => {
        console.log(imageUrls, this.job);
        /*const images = imageUrls.map((image: any) => {
          imageData[image.name] = image;
        });
        console.log(imageData);*/
        if (!Reflect.has(this.job, 'images')) this.job.images = [];
        const images = [...this.job.images, ...imageUrls];
        const result = await db
          .collection('jobs')
          .doc(this.job.taskId)
          .set({ images }, { merge: true })
          .then(docRef => {
            console.log('updated!', docRef);
          });
      });
    },
    uploadProofOfWork() {
      this.uploadFile().then(imageUrl => {
        console.log('IN UPLOAD PROOF OF WORK', imageUrl);
        data.image = imageUrl;
        db
          .collection('jobs')
          .where('taskId', '==', taskId)
          .add(this.data)
          .then(function(docRef: any) {
            this.self.clearForm();
            this.self.loadingText = 'Post was created successfully.';
          })
          .catch(function(error: any) {
            console.error('Error adding document: ', error);
          });
      });
    },
    uploadFile(file: any, jobId: string) {
      return new Promise((resolve, reject) => {
        const self = this;
        const storageRef = firebaseStorage
          .ref()
          .child('jobs/' + jobId + '/' + file.name + '-' + uuid.v1());
        let uploadTask = storageRef.put(file);
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
          async function() {
            // Handle successful uploads on complete
            const downloadUrl = await uploadTask.snapshot.ref.getDownloadURL();
            resolve(downloadUrl);
          }
        );
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
</style>
