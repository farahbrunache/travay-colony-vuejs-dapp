<template>
  <div :class="$style.userGuide">
    <vue-grid>

      <vue-grid-row>
        <vue-grid-item fill>
          <h1>User Guide</h1>
        </vue-grid-item>
      </vue-grid-row>

      <vue-grid-row>
        <vue-grid-item fill>
          <vue-accordion >
            <vue-accordion-item title="What is Travay?" :initOpen="true">
              Travay is a long-term jobs marketplace for Haitians.
            </vue-accordion-item>
            <vue-accordion-item title="Who is Travay for?">
              Travay is for unbanked citizens of developing nations. Jobs in Travay can be posted by the community or people who support the community. Residents complete jobs to improve their community space, earning economic rewards to build a resume.
            </vue-accordion-item>
            <vue-accordion-item title="What do I need to access Travay?">
              Travay doesn’t need more than a web browser to run, so if you have a laptop or mobile device, you will have all you need to run the Travay app.
            </vue-accordion-item>
            <vue-accordion-item title="How do I get started?">
              Simply visit the Travay website and "sign in" from the menu. Once signed in we will store your name, email address city and country.
            </vue-accordion-item>
            <vue-accordion-item title="How do I pick a job?">
              Once you’re in the Travay community, you can browse through a list of available 6-month or 12-month jobs on the website. You can filter through the jobs to match your preferences. When you find a job that interests you, you can claim it and start working.
            </vue-accordion-item>
            <vue-accordion-item title="What types of jobs does Travay have?">
              Travay has a wide range of opportunites. Some jobs pertain to Travay itself, like being an Evaluator, others are every day jobs out in the community. While the jobs are always going to change depending on what the community needs, we would expect to find jobs like reading to young children, water and sanitation initiatives and more to be typical of the types of work you might find on Travay
            </vue-accordion-item>
            <vue-accordion-item title="How do I say that my work is done?">
              When you have you’ve finished your job for the pay period, follow the instructions in the job description to send your proof back to the Travay system.
            </vue-accordion-item>
            <vue-accordion-item title="How do I get paid?">
              When you’ve uploaded evidence of your work and declared it as finished, the Travay system will alert the assigned Evaluator within a few hours. The evaluator will check that your evidence matches the requirements stated in the job description. If they are happy, then your job will be marked as complete for the time period. The Travay system will automatically transfer the payment to your wallet. If the evaluator doesn’t agree that your work is done, then there will be a review process in which Travay will revaluate your work and work on a resolution.
            </vue-accordion-item>
            <vue-accordion-item title="How do I create a job for other workers?">
              When you have funds in your wallet, you can post a job for other people to claim and work on! Your job is only posted if your wallet has sufficient funds to pay for the entire duration of the job. The money you pay stays in "escrow" until the job is completed as set forth by the agreement - only when the job is completed is the money sent to the worker. Note that the Travay does not allow debt of any kind.
            </vue-accordion-item>
            <vue-accordion-item title="How can I support Travay?">
              You can help Travay by posting jobs or claiming jobs and working on them yourself. You can also sponsor existing jobs, by adding a “tip” or bonus to the payout. Note that if you post a job, you are accountable for that job being done! In this way, Travay incentivizes the cultural shift away from donations and creates actionable ways for funding and accountability - by providing the opportunity for work and economic mobility. Travay's goal is to a foster self-sustaining community.
            </vue-accordion-item>
            <vue-accordion-item title="Is there a cost to use Travay?">
              Yes. Travay collects 2% of all jobs posted. This covers the operational cost of running Travay. In addition, Travay is a decentralized blockchain application on the Ethereum network, which means there are transaction fees to every action that is not "reading" data. To learn more about the Ethereum network fees see here: [https://media.consensys.net/ethereum-gas-fuel-and-fees-3333e17fe1dc](https://media.consensys.net/ethereum-gas-fuel-and-fees-3333e17fe1dc). To make things easy, we notify you and keep record of your transaction and their fees in your "Wallet."
            </vue-accordion-item>
            </vue-accordion>
        </vue-grid-item>

        <vue-grid-item>
          <h1>Glossary</h1>
          <p>
            <strong>Job</strong><br>
            A paid position of regular employment. In the context of Travay most jobs are posted to better the community and all are for long-term employment only (6 or 12-month terms). 
          </p><br>
          <p>
            <strong>Roles</strong><br>
            Roles are defined based on the different actions an individual can take within Travay.<br><br>

            Manager: anyone who creates a job.<br><br>

            Evaluator: an individual assigned by Manager to review the completeness of a job.<br><br>

            Worker: a person who claims a job.<br><br>

            Sponsor: a person who donates to the funding of a job.<br><br>
          </p>
          <p>
            <strong>Wallet</strong><br>
            The virtual wallet stores the stable coin earned from completing jobs in Travay.
          </p>
        </vue-grid-item>
      </vue-grid-row>
<br>
<br>
      <vue-grid-row>
            <vue-grid-item>
            <p><i>Feedback? Questions? Email info@electricfeel.co.</i></p>
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
import VueAccordion from '../../shared/components/VueAccordion/VueAccordion.vue';
import VueAccordionItem from '../../shared/components/VueAccordion/VueAccordionItem/VueAccordionItem.vue';

export default {
  metaInfo: {
    title: 'UserGuide'
  },
  components: {
    VueGrid,
    VueGridItem,
    VueButton,
    VueGridRow,
    VueAccordion,
    VueAccordionItem
  },
  methods: {
    ...mapActions('userGuide', [])
  },
  computed: {
    ...mapGetters('userGuide', [])
  },
  prefetch: (options: IPreLoad) => {}
};
</script>


<style lang="scss" module>
@import '../../shared/styles';

.userGuide {
  margin-top: $nav-bar-height;
  min-height: 500px;
}
</style>
