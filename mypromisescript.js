// Create Promise 1
let myPromise1 = new Promise((resolve, reject) => {
    // Resolve after 6 seconds
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 6000);
});

// Create Promise 2
let myPromise2 = new Promise((resolve, reject) => {
    // Resolve after 3 seconds
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 3000);
});

// Handle Promise 1
myPromise1.then((successMessage) => {
    console.log("From Callback " + successMessage);
    // Chain Promise 2 inside Promise 1 callback
    myPromise2.then((successMessage) => {
        console.log("From Callback " + successMessage);
    });
});
