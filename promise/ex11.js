function all(promise1, promise2){
    return new Promise((resolve,reject) => {
        var counter = 0;
        output = [];
        promise1.then(value => {
            counter += 1
            output[0] = value;
            if (counter === 2) resolve(output);
        });
        promise2.then(value => {
            counter += 1
            output[1] = value;
            if (counter === 2) resolve(output);
        });
    });
}

all(getPromise1(), getPromise2()).then(console.log);
