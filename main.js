const { Worker, isMainThread } = require('worker_threads');
const path = require('path');
const workerPath = path.join(__dirname, './workerThread.js');

if (isMainThread) {
    console.log('Inside main thread!');
    const worker = new Worker(workerPath);
    worker.on('message', (msg) => {
        console.log('Got message from worker');
        console.log(msg);
    });
    console.log('Exiting main thread!');
}