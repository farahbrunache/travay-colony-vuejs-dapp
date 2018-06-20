const IPFS = require('ipfs');
const ipfs = new IPFS();

const example = async colonyClient => {
  // Create a task in the root domain
  const {
    eventData: { taskId }
  } = await colonyClient.createTask.send({ specificationHash, domainId: 1 });

  // Let's take a look at the newly created task
  const task = await colonyClient.getTask.call({ taskId });
  console.log(task);
};

module.exports = example;
