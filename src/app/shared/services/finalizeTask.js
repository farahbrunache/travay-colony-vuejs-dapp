await colonyClient.finalizeTask.send({
    taskId: 1,
  });
  
  await colonyClient.claimPayout.send({
    taskId: 1,
    role: 'WORKER',
    token: 'token contract address',
  });
  