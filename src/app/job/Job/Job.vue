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
          task: this.job.task,
          job: this.job
        })"></sponsor-modal>

        <vue-grid-item fill>
          <vue-panel>
            <vue-panel-header title="Details">
             <p v-if="job.role && userId">
                <a v-if="job.role['0'] === userId" @click.prevent.stop="e => {}">
                  <i class="fa edit-icon" :class="isEditing ? 'fa-times' : 'fa-edit'" @click="isEditing = !isEditing" ></i>
                  Icon
                </a>
            </p>

              <router-link :key="`/job/${job.taskId}`">{{ job.task }}</router-link>
              </vue-panel-header>
            <vue-panel-body>

            <ul>
              <li v-if="job.salary">
                Job: {{job.task}}<br>

                <template v-if="isEditing">
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
                    v-model="job.skill" /><br>

                  Full time rate: <br/>
                  <input 
                    id="job-salary-rate"
                    type="text"
                    v-model="job.salary['full-time-rate']"/> <br/>
                    <br>
                    <vue-button primary>
                      Post Changes
                    </vue-button>
                </template>

                <template v-else>
                  Description: {{job.brief}}<br>
                  Domain: {{job.domain}}<br>
                  Top Desired Skill: {{job.skill}}<br>
                  Full time rate: ${{job.salary['full-time-rate']}}<br>
                  Total Sponsored Amount: ${{ job.sponsoredAmount }}
                </template>
                
                <br>
                <template v-if="isEditing"><br>
                Pay frequency: 
                <input id="weekly" true-value="weekly" type="checkbox" name="weekly" v-model="job.salary['pay-frequency'].label" :disabled="!isJobManager"/>
                <label for="weekly">Weekly</label>

                <input id="bi-weekly" type="checkbox" true-value="bi-weekly" name="bi-weekly" v-model="job.salary['pay-frequency'].label" :disabled="!isJobManager"/>
                <label for="bi-weekly">Bi-weekly</label>

                <input id="monthly" true-value="monthly" type="checkbox" name="monthly" v-model="job.salary['pay-frequency'].label" :disabled="!isJobManager"/>
                <label for="monthly">Monthly</label><br>
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

              <vue-grid-row>
                <vue-grid-item>
    <vue-button primary v-userRole.signedIn.manager="{role: job.role}">
                Post Changes
              </vue-button>
                </vue-grid-item>
                <br>
              <br>
                <vue-grid-item>
    <vue-button warn v-userRole.signedIn.manager="{role: job.role}">
                Cancel Job
              </vue-button>
                </vue-grid-item>
              </vue-grid-row>
              
            </vue-panel-footer>
            <br>

          </vue-panel>
        </vue-grid-item>

        <vue-grid-item fill>
          <vue-accordion multiple>
            <vue-accordion-item title="Claim">

      <p v-if="job.role && userId">
          <a v-if="job.role['0'] === userId" @click.prevent.stop="e => {}">
            <i class="fa edit-icon" :class="isEditing ? 'fa-times' : 'fa-edit'" @click="isEditing = !isEditing" ></i>
            Icon
          </a>
        </p>

              <h3>Requirements</h3>

                  <template v-if="isEditing">
                  Requirements: 
                  <input
                  id="deliverable"
                  type="text"
                  v-model="job.deliverable" />
                </template>
                <template v-else>
                    <p>{{ job.deliverable }}</p>
                </template>
              
              <vue-grid-row>
                <vue-grid-item v-if="isJobWorker">
                  <p>Claiming this position is to accpet the requirements and legal requirements.</p>
                  <vue-checkbox
                    name="acceptTerms"
                    id="acceptTerms"
                    v-model="form.acceptTerms"
                    label="I accept the terms"
                    required />
                    </vue-grid-item>
              </vue-grid-row>
              <vue-grid-row>
                    <vue-grid-item v-if="job.role">
                    <vue-button primary
                      v-if="job.role['0'] !== userId"
                      @click.prevent.stop="e => onClaim(job.id)"
                      v-userRole.signedIn.canClaim="{role: job.role}">
                     Claim
                     </vue-button>
                </vue-grid-item>
              </vue-grid-row>

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
                        Browse
                        <input type="file" v-on:change="fileUploaded" accept="image/png, image/jpeg, image/gif" name="input-file-preview" multiple/>
                      </span>
                  <div>
                    <img class="img-responsive" :src="imagePreview" alt="" style="width:500px; height:500px;">
                  </div>

                  <div>
                    <p>{{ loadingText }}</p>
                  </div>

                <vue-button accent
                v-userRole.signedIn.worker="{cb: uploadFile, role: job.role}">
                <a @click.prevent="uploadFile" style="color: white;">
                  Upload file</a>
                  </vue-button>
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
import VueCarousel from '../../shared/components/VueCarousel/VueCarousel.vue';
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
    SponsorModal,
    VueCarousel
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
      fileName: '',
      image: '',
      imagePreview: '',
      loadingText: '',
      isJobManager: false,
      isJobWorker: false,
      sponsoredAmount: 0,
      /*images: [
        {
          alt: 'Slide 1',
          copyright: 'unsplash.com/@hahnbo',
          url:
            'https://images.unsplash.com/photo-1485932465394-d20cc595f08b?ixlib=rb-0.3.5&s=e8798191cfef2e78f4ac91e71c92ea57&auto=format&fit=crop&w=3750&q=80'
        },
        {
          alt: 'Slide 2',
          copyright: 'unsplash.com/@mitr',
          url:
            'https://images.unsplash.com/photo-1486068338746-bc8c63a2d7ea?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=348afc4c4ac324a022630fbce9204348&auto=format&fit=crop&w=3890&q=80'
        },
        {
          alt: 'Slide 3',
          copyright: 'unsplash.com/@peter_oslanec',
          url:
            'https://images.unsplash.com/photo-1517365884913-3c33884b06fa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=05c7363bcb2c0a2c2241e6cdcf0dfb8b&auto=format&fit=crop&w=1234&q=80'
        },
        {
          alt: 'Slide 4',
          copyright: 'unsplash.com/@ihs_photo',
          url:
            'https://images.unsplash.com/photo-1496348323715-c11f0fc6aeed?ixlib=rb-0.3.5&s=52406f147b73f1000c032dcc5e4e0aea&auto=format&fit=crop&w=1388&q=80'
        },
        {
          alt: 'Slide 5',
          copyright: 'unsplash.com/@parkamstutz',
          url:
            'https://images.unsplash.com/photo-1528150395403-992a693e26c8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0651fee03ef0f9dad95014a45adf898a&auto=format&fit=crop&w=1234&q=80'
        },
        {
          alt: 'Slide 6',
          copyright: 'unsplash.com/@mrandybae',
          url:
            'https://images.unsplash.com/photo-1492970471430-bc6bd7eb2b13?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9893bc89e46e2b77a5d8c091fbba04e9&auto=format&fit=crop&w=2710&q=80'
        }
      ]*/
      images: []
    };
  },
  filters: {
    moment: function(date: any) {
      return moment(date).format('MMMM Do YYYY');
    }
  },
  mounted() {
    const taskId = this.$route.params.id;
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
        console.error('Error while trying to get the job', err);
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
    ...mapGetters('signInModal', ['userId']),
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
    ...mapGetters('signInModal', ['userId']),
    ...mapActions('signInModal', ['openLoginModal', 'closeLoginModal']),
    removeImage(i) {
      this.images = this.images.filter((img, index) => index !== i);
    },
    async fileUploaded(e) {
      console.log('file uploaded', e, e.target.files);

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
    sponsorJobClickedHandler(taskId) {
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
      /*db
        .collection('jobs')
        .doc(docId)
        .update({
          'role.2': this.userId
        });*/
      console.log('user ID', this.userId);
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
    editJob() {},
    async uploadFile() {
      console.log('UPLOADING');

      const urls = await Promise.all(
        this.images.map(({ file }, index) => {
          console.log('file', file);
          return new Promise((resolve, reject) => {
            const self = this;
            const storageRef = firebaseStorage
              .ref()
              .child('images/jobs/' + this.job.taskId + '/' + file.name);
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
              function() {
                // Handle successful uploads on complete
                resolve({ url: uploadTask.snapshot.ref.getDownloadURL() });
              }
            );
          });
        })
      );
      console.log('urls', urls);
      console.log('taskId', this.job.taskId);
      const job = { ...this.job, images: urls };
      const result = await db
        .collection('jobs')
        .doc(this.job.taskId)
        .get()
        .add({ images: urls })
        .then(docRef => {
          console.log('updated!', docRef);
        });

      /*
firebase.firestore()
  .collection('proprietary')
  .doc(docID)
  .collection('sharedWith')
  .add({ who: "third@test.com", when: new Date() }) 
        */

      /*.get()
        .then(doc => {
          console.log('doc', doc);
          doc
            .update({
              images: urls
            })
            .then(res => {
              console.log('doc updated!', res);
            });
        });*/

      console.log('result of jobs', result);
    },
    uploadProofOfWork() {
      this.uploadFile().then(imageUrl => {
        console.log('IN UPLOAD PROOF OF WORK', imageUrl);
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
</style>
