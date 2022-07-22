const timerPromise = () => 
new Promise((resolve, reject) =>
setTimeout(() => resolve(), 2000)
)

const asyncFn = async () => {
console.log('timer starts')
const startTime = performance.now()
await timerPromise()
const endTime = performance.now()
console.log('finita', endTime - startTime)
}
asyncFn()