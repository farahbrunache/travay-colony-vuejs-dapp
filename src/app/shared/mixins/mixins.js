import { uuid } from 'vue-uuid';
import db from '../../firebaseinit';
const createColony = require('../services/createColony');
import createTask from '../services/createTask';

console.log('createTask!', createTask);
console.log('createColony', createColony);

export const colonyMixin = {
  methods: {
    createTask() {
      createColony()
        .then(createTask)
        // We're exiting hard here as the providers keep polling otherwise
        .then(() => process.exit())
        .catch(err => console.error(err));
    }
  }
};

export const sponsorSubmitMixin = {
  methods: {
    sponsorSubmitHandler({ amount, taskId, task }) {
      console.log('args', arguments);
      const data = {
        sponsoredId: uuid.v1(),
        userId: userId,
        amount,
        taskId: taskId,
        task: task
      };
      db.collection('sponsored')
        .add(data)
        .then(docRef => {
          console.log('data saved', docRef);
          alert('You are now sponsoring this job!');
        })
        .catch(err => {
          console.error('error when trying to save the data', err);
          alert('There was a problem when trying to insert data!');
        })
        .then(() => {
          this.showSponsoredModal = false;
        });
    }
  }
};
