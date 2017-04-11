module.exports = function(bp) {
  bp.middlewares.load();

  bp.hear(/hello/i, (event, next) => { // We use a regex instead of a hardcoded string
    const first_name = event.user.first_name

    bp.messenger.sendText(event.user.id, 'Hello, ' + first_name, { typing: true })
  })

  bp.hear(/hi/i, (event, next) => { // We use a regex instead of a hardcoded string
    const first_name = event.user.first_name

    bp.messenger.sendText(event.user.id, 'Hello, ' + first_name, { typing: true })
  })

  bp.hear(/hey/i, (event, next) => { // We use a regex instead of a hardcoded string
    const first_name = event.user.first_name

    bp.messenger.sendText(event.user.id, 'Hello, ' + first_name, { typing: true })
  })

  bp.hear(/how are you/i, (event, next) => { // We use a regex instead of a hardcoded string
    const first_name = event.user.first_name

    bp.messenger.sendText(event.user.id, 'Hello, ' + first_name + '. I am great. How are you? :)', { typing: true })
  })

  bp.hear(/how are you doing/i, (event, next) => { // We use a regex instead of a hardcoded string
    const first_name = event.user.first_name

    bp.messenger.sendText(event.user.id, 'Hello, ' + first_name + '. I am great. How are you? :)', { typing: true })
  })

  bp.hear(/what can I do here/i, (event, next) => { // We use a regex instead of a hardcoded string
    bp.messenger.sendText(event.user.id, "You can ask me what book is available in my site by typing `what books are available here?`", { typing: true })
  })

  bp.hear(/how does it work/i, (event, next) => { // We use a regex instead of a hardcoded string
    bp.messenger.sendText(event.user.id, "You can ask me what book is available in my site by typing `what books are available here?`", { typing: true })
  })

  bp.hear(/what books are available here/i, (event, next) => { // We use a regex instead of a hardcoded string
    bp.messenger.sendText(event.user.id, "We have FLASH BOYS, THE BIG SHORT,  SAPIENS, A BRIEF HISTORY OF HUMANKIND,  WHAT IF?", { typing: true })
  })

  bp.hear(/how can I purchase books here/i, (event, next) => { // We use a regex instead of a hardcoded string
    bp.messenger.sendText(event.user.id, 'You are not allowed to purchase any book here!!! HAHAHAHAHAHA', { typing: true })
  })

  bp.hear(/why/i, (event, next) => { // We use a regex instead of a hardcoded string
    bp.messenger.sendText(event.user.id, 'Sorry~~ I am kidding :P Of course you can purchase~~ here is how....', { typing: true })
  })
}
