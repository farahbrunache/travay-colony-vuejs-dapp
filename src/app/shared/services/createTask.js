const ecp = require('./ecp');

const example = async colonyClient => {
  // Initialise the Extended Colony Protocol
  console.log('Colony client initialised');
  await ecp.init();
  console.log('ECP initialised');
  // Create a task!
  const specificationHash = await ecp.saveTaskSpecification({
    title: this.task,
    description: this.brief
  });

  // Unique, immutable hash on IPFS
  console.log('Specification hash', specificationHash);

  // Create a task in the root domain
  const {
    eventData: { taskId }
  } = await colonyClient.createTask.send({ specificationHash, domainId: 1 });

  // Let's take a look at the newly created task
  const task = await colonyClient.getTask.call({ taskId });
  console.log('task added', task);

  // Do some cleanup
  await ecp.stop();
};

module.exports = example;
