<template>
  <div :class="$style.jobs">
    <vue-grid>
      <vue-grid-row>
        <vue-grid-item fill>
          <h1>Jobs</h1>
        </vue-grid-item>

        <vue-grid-item>
        <ul class="filter-bar">
          <li class="filter__item">Search:
            <input type="text" name="search" v-model="keyword" />
          </li>
          <li class="filter__item">Filter by:
            <select>
              <option value="all">All</option>
              <option
                v-for="type in types"
                v-bind:value="type.id"
                v-bind:key="type.id"
              >
                {{ type.title }}
              </option>
            </select>
            <select v-model='startRange'>
              <option>Select a Start range</option>
              <option
                v-for="amount in amounts"
                v-bind:value="amount.value"
                v-bind:key="amount.id"
              >
                {{ amount.id }}
              </option>
            </select>
            <select v-model='endRange'>
              <option>Select a End range</option>
              <option
                v-for="amount in amounts"
                v-bind:value="amount.value"
                v-bind:key="amount.id"
              >
                {{ amount.id }}
              </option>
            </select>
          </li>
        </ul>
        <br>
        <hr>        
          <vue-panel v-for="job in jobs" v-if="filterJob(job)" v-bind:key="job.id">
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
              <vue-button primary>
              <router-link :to="`/job/${job.id}`" id="remove-hyperlink">Learn More</router-link>
              </vue-button>
            </vue-panel-footer>
            <br>
          </vue-panel>

          <br>
          <div>
        </div>

        </vue-grid-item>

        
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
import axios from "axios";

export default {
  metaInfo: {
    title: "Jobs"
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
    VuePanelFooter
  },
  data(): any {
    return {
      jobs: [],
      posted: "",
      endRange: "300",
      startRange: "100",
      keyword: "",
      types: [
        {
          id: "salary",
          title: "Salary"
        }
      ],
      amounts: [
        {
          id: "$100",
          value: "100"
        },
        {
          id: "$200",
          value: "200"
        },
        {
          id: "$300",
          value: "300"
        }
      ]
    };
  },
  methods: {
    getJobs() {
      axios.get("/mock-data.json").then((response: any) => {
        this.sort(response.data.jobs);
      });
    },
    sort(jobs: Array<object>) {
      const result = jobs.sort(function(a: any, b: any): number {
        let date1: any = new Date(a["date-posted"]);
        let date2: any = new Date(b["date-posted"]);
        return date1 - date2;
      });
      this.jobs = result;
    },
    filterJob(job: any) {
      let keywordSearchRegEx = RegExp(this.keyword, "gi");
      return (
        keywordSearchRegEx.test(job.brief) &&
        (parseInt(job["salary"]) <= parseInt(this.endRange) &&
          parseInt(job["salary"]) >= parseInt(this.startRange))
      );
    }
  },
  mounted() {
    this.getJobs();
  }
};
</script>


<style lang="scss" module>
@import "../../shared/styles";
.jobs {
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