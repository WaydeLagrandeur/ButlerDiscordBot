const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  cooldown: 2,
  data: new SlashCommandBuilder()
    .setName("coinflip")
    .setDescription("Flips a coin!"),
  async execute(interaction) {
    let rdm = Math.floor(Math.random() * 2);
    console.log(rdm);
    let result = rdm === 0 ? "Heads" : "Tails";
    await interaction.reply(result);
  },
};
