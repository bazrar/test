const makeRequest = (location) => {
  console.log('making a request');
  return new Promise((res, rej) => {
    if (location === 'google') res('google says hi');
    else rej('we can only talk to google');
  });
};

function processRequest(response) {
  console.log('processing request');
  return new Promise((res, rej) => {
    res(`extra information + ${response}`);
  });
}

// makeRequest('facebook')
//   .then((res) => {
//     console.log('response received');
//     return processRequest(res);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((msg) => console.log(msg));

const makeACall = async (location) => {
  try {
    const res = await makeRequest(location);
    console.log('response received');
    const res1 = await processRequest(res);
    console.log(res1);
  } catch (err) {
    console.log(err);
  }
};
makeACall('google');
