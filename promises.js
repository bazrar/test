// let p = new Promise((resolve, reject) => {
//   let a = 2 + 1;
//   if (a == 2) {
//     resolve('success');
//   } else {
//     reject('failure');
//   }
// });

// p.then((message) => {
//   console.log('this is in the then ' + message);
// }).catch((message) => {
//   console.log('this is in the catch ' + message);
// });

const userLeft = false;
const userWatchingCatMeme = false;

function wathcTutorialCallback() {
  return new Promise((res, rej) => {
    if (userLeft) {
      rej({ status: 'user left', message: ': (' });
    } else if (userWatchingCatMeme) {
      rej({ status: "user's live", message: 'me > cat' });
    } else {
      res('like and subscribe');
    }
  });
}

wathcTutorialCallback()
  .then((msg) => console.log(msg))
  .catch((obj) => console.log(obj.status + ' ' + obj.message));
// function watchTutorialCallback(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       name: 'user left',
//       message: ':(',
//     });
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: 'user watching cat meme',
//       message: 'me < cat',
//     });
//   } else {
//     callback('thumbs up and subscribe');
//   }
// }

// watchTutorialCallback(
//   (message) => {
//     console.log('Success' + message);
//   },
//   (error) => {
//     console.log(error.name + '' + error.message);
//   }
// );
