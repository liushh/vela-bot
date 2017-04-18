var initSlackConversations = require('./predefined_conversations/slack_conversations.js');
var initMessengerConversations = require('./predefined_conversations/messenger_conversations.js');

module.exports = function(bp) {
  bp.middlewares.load();

  initSlackConversations(bp);
  // initMessengerConversations(bp);
}
