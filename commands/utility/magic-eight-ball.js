const { SlashCommandBuilder } = require("discord.js");

const MagicEightBallValues = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",

  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",

  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
];

module.exports = {
  cooldown: 3,
  data: new SlashCommandBuilder()
    .setName("magic8ball")
    .setDescription("Ask the Magic 8-Ball a yes or no question!"),
  async execute(interaction) {
    let rdm = Math.floor(Math.random() * MagicEightBallValues.length);
    console.log(MagicEightBallValues.length);
    // var rand = Math.floor(
    //   Math.random() * Object.keys(MagicEightBallValues).length
    // );
    // var randColorValue =
    //   MagicEightBallValues[Object.keys(MagicEightBallValues)[rand]];
    await interaction.reply(MagicEightBallValues[rdm]);
  },
};
