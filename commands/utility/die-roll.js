const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("roll")
    .setDescription("Rolls dice!")
    .addIntegerOption((option) =>
      option
        .setName("quantity")
        .setDescription("Number of dice that will be rolled.")
        .setRequired(true)
        .setMaxValue(100)
        .setMinValue(1)
    )
    .addIntegerOption((option) =>
      option
        .setName("die-type")
        .setDescription("The number of sides on the dice")
        .setRequired(true)
        .setMaxValue(100)
        .setMinValue(1)
    ),
  async execute(interaction) {
    const quantity = interaction.options.getInteger("quantity");
    const dieType = interaction.options.getInteger("die-type");
    let diceBreakdown = "";
    let total = 0;

    for (let i = 0; i < quantity; i++) {
      let rdm = Math.floor(Math.random() * dieType) + 1;
      total += rdm;
      //   i >= quantity
      //     ? (diceBreakdown = diceBreakdown + rdm)
      //     : (diceBreakdown = diceBreakdown + rdm + " + ");
      if (i + 1 >= quantity) {
        diceBreakdown = diceBreakdown + rdm;
      } else {
        diceBreakdown = diceBreakdown + rdm + " + ";
      }
    }
    await interaction.reply(
      `Rolling ${quantity}D${dieType}\n${diceBreakdown} = ${total}`
    );
  },
};
