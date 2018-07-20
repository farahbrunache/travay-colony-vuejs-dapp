import { uuid } from 'vue-uuid';
import db from '../../firebaseinit';
const createColony = require('../services/createColony');
import createTask from '../services/createTask';

// Colony Instance Methods
export const colonyInstanceMixin = {
  methods: {
    createTokenMixin() {},
    getColonyClientByAddressMixin() {},
    getColonyClientMixin() {},
    getColonyAddressMixin() {},
    getMetaColonyClientMixin() {}
  }
};

// No Cost Functions
export const colonyCallersMixin = {
  methods: {
    // https://docs.colony.io/colonyjs/api-colonynetworkclient/
    getColonyMixin() {},
    getMetaColonyAddressMixin() {},
    getColonyCountMixin() {},
    getColonyVersionResolverMixin() {},
    getCurrentColonyVersionMixin() {},
    getParentSkillIdMixin() {},
    getReputationUpdateLogEntryMixin() {},
    getReputationUpdateLogLengthMixin() {},
    getSkillMixin() {},
    getSkillCountMixin() {},
    getStakedBalanceMixin() {},
    // https://docs.colony.io/colonyjs/api-colonyclient/
    getAuthorityMixin() {},
    generateSecretMixin() {},
    getDomainMixin() {},
    getDomainCountMixin() {},
    getGlobalRewardPayoutCountMixin() {},
    getUserRewardPayoutCountMixin() {},
    getTaskCountMixin() {},
    getTaskMixin() {},
    getTaskPayoutMixin() {},
    getTaskRoleMixin() {},
    getTaskWorkRatingsMixin() {},
    getTaskWorkRatingSecretMixin() {},
    getPotBalanceMixin() {},
    getNonRewardPotsTotalMixin() {},
    getRewardPayoutInfoMixin() {},
    getTokentMixin() {},
    getTransactionCountMixin() {},
    // https://docs.colony.io/colonyjs/api-tokenclient/
    getTokenInfoMixin() {},
    getTotalSupplyMixin() {},
    getBalanceOfMixin() {},
    getAllowanceMixin() {}
  }
};

// Costed Functions
export const colonySendersMixin = {
  methods: {
    // https://docs.colony.io/colonyjs/api-colonynetworkclient/
    createColonyMixin() {},
    depositMixin() {},
    startTokenAuctionMixin() {},
    upgradeColonyMixin() {},
    withdrawMixin() {},
    // https://docs.colony.io/colonyjs/api-colonyclient/
    createTaskMixin() {
      createTask() // TODO only use a pre-existing colony
        // Exiting hard here as the providers keep polling otherwise
        .then(() => process.exit())
        .catch(err => console.error(err));
    },
    setTaskDomainMixin() {},
    setTaskRoleUserMixin() {},
    setTaskSkillMixin() {},
    setTaskManagerPayoutMixin() {},
    submitTaskDeliverableMixin() {},
    submitTaskWorkRatingMixin() {},
    revealTaskWorkRatingMixin() {},
    assignWorkRatingMixin() {},
    cancelTaskMixin() {},
    finalizeTaskMixin() {},
    claimPayoutMixin() {},
    addDomainMixin() {},
    addGlobalSkillMixin() {},
    claimColonyFundsMixin() {},
    finalizeRewardPayoutMixin() {},
    moveFundsBetweenPotsMixin() {},
    mintTokensMixin() {},
    mintTokensForColonyNetworkMixin() {},
    startNextRewardPayoutMixin() {},
    waiveRewardPayoutsMixin() {},
    setTaskBriefMixin() {},
    setTaskDueDateMixin() {},
    setTaskEvaluatorPayoutMixin() {},
    setTaskWorkerPayoutMixin() {},
    // https://docs.colony.io/colonyjs/api-tokenclient/
    transferMixin() {},
    transferFromixin() {},
    approveMixin() {},
    mintMixin() {},
    burnMixin() {},
    setOwnerMixin() {},
    setAuthorityMixin() {}
  }
};

export const sponsorSubmitMixin = {
  methods: {
    async sponsorSubmitHandler({ amount, taskId, task, job = {} }) {
      console.log('args', arguments);
      const data = {
        sponsoredId: uuid.v1(),
        userId: this.$store.getters['signInModal/userId'],
        amount,
        taskId: taskId,
        task: task
      };

      try {
        const sponsoredResult = await db.collection('sponsored').add(data);
        const totalAmount = +job.sponsoredAmount + +amount;
        const updateResult = await db
          .collection('jobs')
          .doc(taskId)
          .update({
            sponsoredAmount: totalAmount
          });

        console.log('jobUpdated', updateResult);
        console.log('total', totalAmount);
        this.job.sponsoredAmount = totalAmount;
      } catch (err) {
        console.error('error when trying to save the data', err);
        alert('There was a problem when trying to insert data!');
      } finally {
        this.showSponsoredModal = false;
      }
    }
  }
};

export const travaySlackBotMixin = {
  methods: {
    // async newUserNotification(user, context, callback) {
    //   // short-circuit if the user signed up already
    //   if (context.stats.loginsCount > 1) return callback(null, user, context);
    //   // get your slack's hook url from: https://slack.com/services/10525858050
    //   const SLACK_HOOK = 'TRAVAY_SLACK_HOOK';
    //   const slack = require('slack-notify')(SLACK_HOOK);
    //   const message =
    //     'You have a new User: ' +
    //     (user.name || user.email) +
    //     ' (' +
    //     user.email +
    //     ')';
    //   const channel = '#travay';
    //   slack.success({
    //     text: message,
    //     channel: channel,
    //     color: 'good'
    //   });
    //   // don’t wait for the Slack API call to finish, return right away (the request will continue on the sandbox)
    //   callback(null, user, context);
    // }
  }
};
