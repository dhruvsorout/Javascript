let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(`Execution number: ${count}`);
  if (count === 5) {
    clearInterval(intervalId);
  }
}, 1000);