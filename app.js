// user input test 

const readmeDataArgs = process.argv.slice(2, process.argv.length);
console.log(readmeDataArgs);

const printReadmeData = readmeDataArr => {
    for (let i = 0; i < readmeDataArr.length; i++) {
        console.log(readmeDataArr[i]);
    }
};