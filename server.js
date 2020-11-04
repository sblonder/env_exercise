
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    console.log("My name: " + process.env.FULL_NAME);
    await sleep(5000);
  }
}

main();
