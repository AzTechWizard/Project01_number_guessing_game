import inquirer from "inquirer";
const random:number=Math.floor(Math.random()*10 + 1);
const answer = await inquirer.prompt([
    {
        message:"Guess any number (1-10):",
        type:"number",
        name:"guess"
    },
]);
if(answer.guess===random){
    console.log(`Congratulations...You Wonn!!!!`);
}else{
    console.log(`You Loose! Try Again!`);
}
