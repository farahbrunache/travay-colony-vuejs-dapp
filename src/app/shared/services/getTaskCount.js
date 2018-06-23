const ecp = require('./ecp');

const example = async colonyClient => {
  // Initialise the Extended Colony Protocol
  console.log('Colony client initialised');

  await ecp.init();
  console.log('ECP initialised');

  // Set total tasks in Travay Colony
  getTaskCount.call();

  // Unique, immutable hash on IPFS
  console.log('Specification hash', specificationHash);

  // Let's take a look at the newly created task
  const task = await colonyClient.getTask.call({ taskId });
  console.log('task updated', task);

  // Do some cleanup
  await ecp.stop();
};

module.exports = example;
