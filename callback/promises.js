const check = false;

const promise = new Promise((resolve, reject) => {
    if (check) {
        resolve('done');
    } else {
        reject('undone');
    }
});

promise
    .then((res) => {
        console.log(res);
    })
    .catch(error => {
        console.log(error);
    });