module.exports = function(bp) {
  bp.middlewares.load();

  bp.hear(/hello/i, (event, next) => { // We use a regex instead of a hardcoded string
    const first_name = event.user.first_name
    console.log('before sending the message');
    bp.messenger.sendText(event.user.id, 'Hi ' + first_name + '!', { typing: true })
    console.log('after sending the message');
  })

  bp.hear(/hi/i, (event, next) => { // We use a regex instead of a hardcoded string
    const first_name = event.user.first_name
    console.log('before sending the message');

    bp.messenger.sendText(event.user.id, 'Hi ' + first_name + '!', { typing: true })   
    console.log('after sending the message');

  })

  bp.hear(/hey/i, (event, next) => { // We use a regex instead of a hardcoded string
    const first_name = event.user.first_name
    console.log('before sending the message');

    bp.messenger.sendText(event.user.id, 'Hi ' + first_name + '!', { typing: true })
    console.log('after sending the message');
  })

  bp.hear(/how are you/i, (event, next) => { // We use a regex instead of a hardcoded string
    const first_name = event.user.first_name

    console.log('before sending the message');
    bp.messenger.sendText(event.user.id, "I'm great. " + first_name + ", How can I help you today? :)", { typing: true })
    console.log('after sending the message');
  })

  bp.hear(/how are you doing/i, (event, next) => { // We use a regex instead of a hardcoded string
    const first_name = event.user.first_name
    console.log('before sending the message');

    bp.messenger.sendText(event.user.id, 'Hello, ' + first_name + ". I'm great. How can I help you today? :)", { typing: true })
    console.log('after sending the message');
  })

  bp.hear(/what can I do here/i, (event, next) => { // We use a regex instead of a hardcoded string
    console.log('before sending the message');
    bp.messenger.sendText(event.user.id, 'I can help you find the right gift for a friend or family member! You can ask me by typing, "Help me find a gift".', { typing: true })
    console.log('after sending the message');
  })

  bp.hear(/how does it work/i, (event, next) => { // We use a regex instead of a hardcoded string
    console.log('before sending the message');
    bp.messenger.sendText(event.user.id, 'You can narrow down by telling me, "I want a gift for my parent, sibling, child, friend, or relative"', { typing: true })
    console.log('after sending the message');
  })

  bp.hear(/Help me find a gift/i, (event, next) => { // We use a regex instead of a hardcoded string
    console.log('before sending the message');
    bp.messenger.sendText(event.user.id, 'You can narrow down by telling me, "I want a gift for my parent, sibling, child, friend, or relative"', { typing: true })
    console.log('after sending the message');
  })

  bp.hear(/what gifts are available here/i, (event, next) => { // We use a regex instead of a hardcoded string
    console.log('before sending the message');
    bp.messenger.sendText(event.user.id, 'We have the latest trends in clothing, accessories, shoes and even sports fan gear!', { typing: true })
    console.log('after sending the message');
  })

  bp.hear(/how can I purchase gifts here/i, (event, next) => { // We use a regex instead of a hardcoded string
    console.log('before sending the message');
    bp.messenger.sendText(event.user.id, 'You can buy gifts through me just like any shopping website!', { typing: true })
    console.log('after sending the message');
  })

  bp.hear(/ok I want a gift for my mom/i, (event, next) => { // We use a regex instead of a hardcoded string
    console.log('before sending the message');
    bp.messenger.sendText(event.user.id, "Ok let's get started. What kind of gift do you want for your mom?", { typing: true })
    console.log('after sending the message');
  })
}
