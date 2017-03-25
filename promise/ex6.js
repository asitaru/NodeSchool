var promise = Promise.reject(new Error("REJECTED"));

promise.catch( (err) =>  {
    console.error("ERROR!");
    console.error(err.message);
});
