// Must add multi-sig: https://docs.colony.io/colonyjs/docs-multisignature-transactions and https://docs.colony.io/colonyjs/api-contractmethodmultisigsender/ and https://docs.colony.io/colonyjs/api-multisigoperation/

/*
Modification with Multi-sig Operations
Important changes to a task must be approved by multiple people. Task changes requiring two signatures are:

Changing the task Brief (Manager and Worker)
Changing or setting the task Due Date (Manager and Worker)
Changing or setting the Worker's payout (Manager and Worker)
Changing or setting the Evaluator's payout (Manager and Evaluator)
*/

// Set the manager
await colonyClient.setTaskRoleUser.send({
    taskId: 1,
    role: 'MANAGER',
    user: 'wallet address of manager',
  });
  
  // Set the worker
  await colonyClient.setTaskRoleUser.send({
    taskId: 1,
    role: 'WORKER',
    user: 'wallet address of worker',
  });
  
  // Set the task Domain
  await colonyClient.setTaskDomain.send({
    taskId: 1,
    domainId: 2,
  });
  
  // Set the task Skill
  await colonyClient.setTaskSkill.send({
    taskId: 1,
    skillId: 5,
  });
  