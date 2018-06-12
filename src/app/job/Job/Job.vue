<template>
  <div :class="$style.job">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill>
          <h1>Job</h1>
        </vue-grid-item>

        <vue-grid-item fill>
          <vue-panel v-bind:key="job.id">
            <vue-panel-header title="Title" subtitle="subtitle"
                              image="https://avatars2.githubusercontent.com/u/1667598?s=460&v=4" />
            <vue-panel-body>
            <ul>
              <li >
                Job: {{job.task}}<br>
                Description: {{job.brief}}<br>
                Salary: ${{job.salary}}<br>
                Date Posted: {{job.date-posted}}<br>
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
                <li>Test</li>
                <li>Test</li>
              </ul>
              <h3>Definition of Done </h3>
              <ul>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
              </ul>
              <h3>Legal</h3>
              <ul>
                <li>Test</li>
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
                <vue-grid-item>
                  <vue-checkbox
                    name="acceptTerms"
                    id="acceptTerms"
                    v-model="form.acceptTerms"
                    label="I accept the terms"
                    required />
                </vue-grid-item>
                <vue-grid-item>
                  <vue-checkbox
                    name="acceptTerms"
                    id="acceptTerms"
                    v-model="form.acceptTerms"
                    label="I accept the terms"
                    required />
                </vue-grid-item>
              </vue-grid-row>

            </vue-accordion-item>
            <vue-accordion-item title="Up Votes">
              Coming Soon.
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
import VueGrid from "../../shared/components/VueGrid/VueGrid.vue";
import VueGridItem from "../../shared/components/VueGridItem/VueGridItem.vue";
import VueButton from "../../shared/components/VueButton/VueButton.vue";
import VueGridRow from "../../shared/components/VueGridRow/VueGridRow.vue";
import VuePagination from "../../shared/components/VuePagination/VuePagination.vue";
import VuePanel from "../../shared/components/VuePanel/VuePanel.vue";
import VuePanelHeader from "../../shared/components/VuePanel/VuePanelHeader/VuePanelHeader.vue";
import VuePanelBody from "../../shared/components/VuePanel/VuePanelBody/VuePanelBody.vue";
import VuePanelFooter from "../../shared/components/VuePanel/VuePanelFooter/VuePanelFooter.vue";
import VueAccordion from "../../shared/components/VueAccordion/VueAccordion.vue";
import VueAccordionItem from "../../shared/components/VueAccordion/VueAccordionItem/VueAccordionItem.vue";
import VueInput from "../../shared/components/VueInput/VueInput.vue";
import VueSelect from "../../shared/components/VueSelect/VueSelect.vue";
import VueCheckbox from "../../shared/components/VueCheckbox/VueCheckbox.vue";
import axios from "axios";
import {
  addNotification,
  INotification
} from "../../shared/components/VueNotificationStack/utils";

export default {
  metaInfo: {
    title: "Job"
  },
  $_veeValidate: {
    validator: "new"
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
    VueCheckbox
  },
  data(): any {
    return {
      job: [],
      posted: "",
      form: {
        acceptTerms: false,
        newsletter: false
      },
      isLoading: false
    };
  },
  computed: {
    addressDisabled() {
      return (
        this.form.firstname === "" ||
        this.form.lastname === "" ||
        this.form.email === ""
      );
    },
    hasErrors() {
      return this.errors && this.errors.items.length > 0;
    },
    hasEmptyFields() {
      let hasEmptyField: boolean = false;

      Object.keys(this.form).forEach((key: string) => {
        if (
          key !== "newsletter" &&
          (this.form[key] === "" || this.form[key] === false)
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
    onSubmit() {
      this.isLoading = true;
      console.log(JSON.parse(JSON.stringify(this.form)));

      this.$nextTick(() => {
        setTimeout(() => {
          this.isLoading = false;
          addNotification({
            title: "Data has been saved!",
            text: "Have a look at the console!"
          } as INotification);
        }, 500);
      });
    }
  }
};
</script>


<style lang="scss" module>
@import "../../shared/styles";

.job {
  margin-top: $nav-bar-height;
  min-height: 500px;
}
</style>
