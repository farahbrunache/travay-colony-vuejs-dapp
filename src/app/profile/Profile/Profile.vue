<template>
  <div :class="$style.profile">
    
        <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill>
          <h1>Profile</h1>
        </vue-grid-item>
    
    <vue-panel>
<vue-panel-header title="Title" subtitle="subtitle" image="https://avatars2.githubusercontent.com/u/1667598?s=460&v=4" />
<vue-panel-body>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
  labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
  et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
  labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
  et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

  <div 
    v-for="(item, index) in sponsored"
    :key="item.sponsoredId + index">
    <p>{{item.task}}</p>
  </div>
</vue-panel-body>
<vue-panel-footer>
  <vue-button primary>Update Profile</vue-button>
</vue-panel-footer>
</vue-panel>

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
import {
  addNotification,
  INotification
} from '../../shared/components/VueNotificationStack/utils';
import firebase from 'firebase';
import db from '../../firebaseinit';

export default {
  $_veeValidate: {
    validator: 'new'
  },
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
    VueCheckbox
  },
  data(): any {
    return {
      firstname: '',
      lastname: '',
      countryOptions: [
        { label: 'Choose a Country', value: null },
        { label: 'Haiti', value: 'haiti' },
        { label: 'USA', value: 'us' },
        { label: 'Other', value: 'other' }
      ],
      isLoading: false,
      sponsored: false
    };
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
  },
  created() {
    console.log('IN PROFILE');
    this.isLoading = true;
    // TODO Refactor this to get sponsored jobs only for this user
    // Use user's id to find results
    db
      .collection('sponsored')
      .get()
      .then(snapshot => {
        const sponsored = [];
        snapshot.forEach(item => {
          sponsored.push(item.data());
        });

        console.log('sponsored!', sponsored);
        this.sponsored = sponsored;
      })
      .catch(err => {
        console.error('error when fetching sponsored', err);
      })
      .then(() => {
        this.isLoading = false;
      });
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
