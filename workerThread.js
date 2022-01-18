const { isMainThread, parentPort } = require('worker_threads');

if (!isMainThread) {
    console.log('Inside worker thread!');
    setTimeout(() => {
        parentPort.postMessage('Hello World!');
    }, 5000);
    console.log('Exiting worker thread!');
}