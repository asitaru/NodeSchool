var inputs = process.argv.slice(2);
console.log(`[${inputs}] becomes "${inputs.map(x => x[0]).reduce((x,y) => x + y)}"`);
