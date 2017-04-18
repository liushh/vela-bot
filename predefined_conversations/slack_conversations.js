module.exports = function(bp) {
  const greetingMessage = 'This is a Wizeline Confidential Demo Bot. Please do not share outside of Wizeline. All activity on this Bot is logged. Because this is work in progress, this Bot may intermittently be down for maintenance. If that happens please reach out to #bots-eng to report'

  bp.hear({ platform: 'slack', type: 'message', text: 'hello' }, (event, next) => {
    bp.slack.sendText(event.channel.id, 'Hello! ' + greetingMessage)
  });

  bp.hear({ platform: 'slack', type: 'message', text: 'Hello' }, (event, next) => {
    bp.slack.sendText(event.channel.id, 'Hello! ' + greetingMessage)
  });

  bp.hear({ platform: 'slack', type: 'message', text: 'Hi' }, (event, next) => {
    bp.slack.sendText(event.channel.id, 'Hi! ')
  });

  bp.hear({ platform: 'slack', type: 'message', text: 'hi' }, (event, next) => {
    bp.slack.sendText(event.channel.id, 'hi! ')
  });

  bp.hear({ platform: 'slack', type: 'message', text: 'how are you?' }, (event, next) => {
    bp.slack.sendText(event.channel.id, 'I am great! How about you?')
  });

  bp.hear({ platform: 'slack', type: 'message', text: 'How are you?' }, (event, next) => {
    bp.slack.sendText(event.channel.id, 'I am great! How about you?')
  });

  bp.hear({ platform: 'slack', type: 'message', text: 'help' }, (event, next) => {
    bp.slack.sendText(event.channel.id, "Sorry~~ I cannot help you~~ I just can't")
  });
};
