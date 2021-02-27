// // 实现 mergePromise 函数，把传进去的数组按顺序先后执行，并且把返回的数据先后放到数组 data 中。
// const timeout = ms => new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve();
//   }, ms);
// });

// const ajax1 = () => timeout(2000).then(() => {
//   console.log('1');
//   return 1;
// });

// const ajax2 = () => timeout(1000).then(() => {
//   console.log('2');
//   return 2;
// });

// const ajax3 = () => timeout(2000).then(() => {
//   console.log('3');
//   return 3;
// });

// const mergePromise = ajaxArray => {
//   // 在这里实现你的代码
//   let data = []
  
//   let sequence = Promise.resolve()
//   ajaxArray.forEach(function(item){
//     sequence = sequence.then(item).then(function(res){
//       data.push(res)
//       console.log('data: ' + res)
//       return data 
//     })
//   })
//   return sequence
// };

// mergePromise([ajax1, ajax2, ajax3]).then(data => {
//   console.log('done');
//   console.log(data); // data 为 [1, 2, 3]
// });

// // 要求分别输出
// // 1
// // 2
// // 3
// // done
// // [1, 2, 3]



//判断输出顺序
// const first = () => (new Promise((resolve, reject) => {
//   console.log(3);
//   let p = new Promise((resolve, reject) => {
//       console.log(7);
//       setTimeout(() => {
//           console.log(5);
//           resolve(6);
//       }, 0)
//       resolve(1);
//   });
//   resolve(2);
//   p.then((arg) => {
//       console.log(arg);
//   });
// }));

// first().then((arg) => {
//   console.log(arg);
// });
// console.log(4);


// 有 8 个图片资源的 url，已经存储在数组 urls 中（即urls = ['http://example.com/1.jpg', ...., 'http://example.com/8.jpg']），而且已经有一个函数 function loadImg，输入一个 url 链接，返回一个 Promise，该 Promise 在图片下载完成的时候 resolve，下载失败则 reject。
// 但是我们要求，任意时刻，同时下载的链接数量不可以超过 3 个。
// 请写一段代码实现这个需求，要求尽可能快速地将所有图片下载完成。
var urls = ['https://www.kkkk1000.com/images/getImgData/getImgDatadata.jpg', 'https://www.kkkk1000.com/images/getImgData/gray.gif', 'https://www.kkkk1000.com/images/getImgData/Particle.gif', 'https://www.kkkk1000.com/images/getImgData/arithmetic.png', 'https://www.kkkk1000.com/images/getImgData/arithmetic2.gif', 'https://www.kkkk1000.com/images/getImgData/getImgDataError.jpg', 'https://www.kkkk1000.com/images/getImgData/arithmetic.gif', 'https://www.kkkk1000.com/images/wxQrCode2.png'];
function loadImg(url) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = function () {
            console.log('一张图片加载完成');
            resolve();
        }
        img.onerror = reject
        img.src = url
    })
};

function limitLoad(urls, handler, limit) {
    // 对数组做一个拷贝
    const sequence = [].concat(urls)
    let promises = [];

    //并发请求到最大数
    promises = sequence.splice(0, limit).map((url, index) => {
        // 这里返回的 index 是任务在 promises 的脚标，用于在 Promise.race 之后找到完成的任务脚标
        return handler(url).then(() => {
            return index
        }); 
    });

    // 利用数组的 reduce 方法来以队列的形式执行
    return sequence.reduce((last, url, currentIndex) => {
        return last.then(() => {
            // 返回最快改变状态的 Promise
            return Promise.race(promises)
        }).catch(err => {
            // 这里的 catch 不仅用来捕获 前面 then 方法抛出的错误
            // 更重要的是防止中断整个链式调用
            console.error(err)
        }).then((res) => {
            // 用新的 Promise 替换掉最快改变状态的 Promise
            promises[res] = handler(sequence[currentIndex]).then(() => { return res });
        })
    }, Promise.resolve()).then(() => {
        return Promise.all(promises)
    })

}
limitLoad(urls, loadImg, 3)

/*
因为 limitLoad 函数也返回一个 Promise，所以当 所有图片加载完成后，可以继续链式调用

limitLoad(urls, loadImg, 3).then(() => {
    console.log('所有图片加载完成');
}).catch(err => {
    console.error(err);
})
*/