const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let answerParagraph = [];

rl.question('What do you think of Node.js? ', (answer) => {
  answerParagraph.push(answer);
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.question('What\'s your name? Nicknames are also acceptable :) ', (answerTwo) => {
    answerParagraph.push(answerTwo);
    console.log(`Thank you for your valuable feedback: ${answerTwo}`);

    rl.question('What\'s an activity you like doing? ', (answerThree) => {
      answerParagraph.push(answerThree);
      console.log(`Thank you for your valuable feedback: ${answerThree}`);

      rl.question('What do you listen to while doing that? ', (answerFour) => {
        answerParagraph.push(answerFour);
        console.log(`Thank you for your valuable feedback: ${answerFour}`);

        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answerFive) => {
          answerParagraph.push(answerFive);
          console.log(`Thank you for your valuable feedback: ${answerFive}`);

          rl.question('What\'s your favourite thing to eat for that meal? ', (answerSix) => {
            answerParagraph.push(answerSix);
            console.log(`Thank you for your valuable feedback: ${answerSix}`);

            rl.question('Which sport is your absolute favourite? ', (answerSeven) => {
              answerParagraph.push(answerSeven);
              console.log(`Thank you for your valuable feedback: ${answerSeven}`);

              rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answerEight) => {
                answerParagraph.push(answerEight);
                console.log(`Thank you for your valuable feedback: ${answerEight}`);
                rl.close();
                console.log(answerParagraph);
                process.stdout.write(` I think Node.js is ${answerParagraph[0]}. My name is ${answerParagraph[1]}. I like to ${answerParagraph[2]}.\n I listen to ${answerParagraph[3]}. My favourite meakl is ${answerParagraph[4]}. Where I like to eat ${answerParagraph[5]}. My favourite sport is ${answerParagraph[6]}.\n My superpower is ${answerParagraph[7]}.\r\n`);
              });
            });
          });
        });
      });
    });
  });
});
/*
What's your name? Nicknames are also acceptable :)
What's an activity you like doing?
What do you listen to while doing that?
Which meal is your favourite (eg: dinner, brunch, etc.)
What's your favourite thing to eat for that meal?
Which sport is your absolute favourite?
What is your superpower? In a few words, tell us what you are amazing at!
*/