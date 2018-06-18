// import Something from '../../../../hackathonStarter/src/lib/colonyNetwork';
import { uuid } from 'vue-uuid';
import firebase from 'firebase';
import db from '../../firebaseinit';

export const colonyMixin = {
  methods: {
    createTask() {
      console.log('create task from mixin initialised');
    },
    anotherFunc() {}
  }
};

export const sponsorSubmitMixin = {
  methods: {
    sponsorSubmitHandler({ amount, taskId, task }) {
      console.log('args', arguments);
      const data = {
        sponsoredId: uuid.v1(),
        userId: 'B05DVUYUHPaYS5wGfPsumFdkIcG2',
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
