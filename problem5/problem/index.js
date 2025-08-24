// Import required module
const readline = require("readline");

const Solution = () => {
  // Write your code here
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Enter the first Number: ",(first) =>{
    rl.question("Enter your Second Number: " ,(second) => {
      const a = Number(first);
      const b = Number(second);
      const maxVal = Math.max(a, b);
      console.log(`The maximum of the two numbers is: ${maxVal}`);

      rl.close();
    })
  })
};

Solution();
module.exports = Solution;
