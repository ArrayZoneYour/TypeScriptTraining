const waitFor = (ms) => new Promise(r => setTimeout(r, ms));

// [2000, 1000, 3000].forEach(async (num) => {
//     await waitFor(num);
//     console.log(num);
// });

console.log('Done');

async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index ++) {
        await callback(array[index], index, array);
    }
}

const start = async () => {
    await asyncForEach([2000, 1000, 3000], async (num) => {
        await waitFor(num);
        console.log(num);
        // console.log(Date.now())
    });

    console.log('Done');
};

start();
