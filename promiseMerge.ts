const timeout = ms => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, ms);
});

const ajax1 = () => timeout(2000).then(() => {
    console.log('1');
    return 1;
});

const ajax2 = () => timeout(1000).then(() => {
    console.log('2');
    return 2;
});

const ajax3 = () => timeout(2000).then(() => {
    console.log('3');
    return 3;
});

let data = [];
let ajaxArray = [ajax1, ajax2, ajax3];

ajax1().then(num => {
    data.push(num);
    ajax2().then(num => {
        data.push(num);
        ajax3().then(num => {
            data.push(num);
        }).then(num => {
            console.log(data);
        });
    })
});

const _mergePromise = async (array) => {
    let results = [];
    for (let i = 0; i < array.length; i++) {
        let r = await array[i]();
        results.push(r);
    }
    return results;    // will be resolved value of promise
};

const mergePromise = ajaxArray => {
    let data = [];
    const processOne = (ajax) => {
        return ajax().then((num) => {
            data.push(num);
        });
    };
    ajaxArray.map(ajax => processOne(ajax));

    // return data;
    console.log(data);
};


mergePromise([ajax1, ajax2, ajax3]);
// mergePromise([ajax1, ajax2, ajax3]).then(data => {
//     console.log('done');
//     console.log(data); // data 为 [1, 2, 3]
// });