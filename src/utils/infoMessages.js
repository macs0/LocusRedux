const { MessageEmbed } = require('discord.js');

class InfoMessages {
  /**
   * Ready-made rich embed for error messages
   * @param {String} messageText text to display as an error message
   * @returns Pre-formatted MessageEmbed object with the error message
   */
  static createErrorMessage(messageText) {
    const errorMessage = new MessageEmbed()
      .setColor('#D0021B')
      .setDescription(`:octagonal_sign: | ${messageText}`)
      .setTimestamp();

    return errorMessage;
  }

  /**
   * Ready-made rich embed for success messages
   * @param {String} messageText text to display as a success message
   * @returns Pre-formatted MessageEmbed object with the success message
   */
  static createSuccessMessage(messageText) {
    const successMessage = new MessageEmbed()
      .setColor('#7ED321')
      .setDescription(`:white_check_mark: | ${messageText}`)
      .setTimestamp();

    return successMessage;
  }

  /**
   * Ready-made rich embed for info messages
   * @param {String} messageText text to display as an information message
   * @returns Pre-formatted MessageEmbed object with the information message
   */
  static createInfoMessage(messageText) {
    const infoMessage = new MessageEmbed()
      .setColor('#F1DF37')
      .setDescription(`:warning: | ${messageText}`)
      .setTimestamp();

    return infoMessage;
  }
}

module.exports = InfoMessages;
