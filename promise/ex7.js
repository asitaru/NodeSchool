var firstPromise = first();
var secondPromise = firstPromise.then(value => second(value));
secondPromise.then(console.log);
