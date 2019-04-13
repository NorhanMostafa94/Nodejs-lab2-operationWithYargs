const yargs = require('yargs');
const operations = require('./Operations')
// const main = argv.$0;
let supportedOperations = ['add','sub','multi','div','rem']

let args = yargs.array(supportedOperations).argv
let selectedOperations = supportedOperations.filter( operation => args[operation]);

selectedOperations.forEach(operation => {
    let operationFunc = operations[operation];
    console.log(operationFunc(...args[operation]))
});

// if(args.add != undefined){

//     let {add} = yargs.array('add').argv
// }
// if(args.sub != undefined){
//     let {sub} = args;
//     let subFunc = operations.sub;
//     console.log(subFunc(...sub));
// }
debugger
// let {multi} = yargs.array('multi').arg;
// let {div} = yargs.array('div').arg;
// let {rem} = yargs.array('rem').arg;

// let addFunc = operations.add;
// let multiFunc = operations.multi;
// let divFunc = operations.div;
// let remFunc = operations.rem;