register('chat', (event) => {
    let message = ChatLib.getChatMessage(event);
    if (message.includes('* Your KDR:')) {
      message = message.replace(/[^\d//]/g, '');
      position = message.search("/");
      number1 = message.substr(0, position);
      number2 = message.substr(position + 1);
      result = (number1)/(number2);
      rounded = Math.round(result * 100) / 100
      ChatLib.chat("§7* §fYour KDR: " + rounded);
      cancel(event)
    }
    if (message.includes('* Your WLR:')) {
      message = message.replace(/[^\d//]/g, '');
      position = message.search("/");
      number1 = message.substr(0, position);
      number2 = message.substr(position + 1);
      result = (number1)/(number2);
      rounded = Math.round(result * 100) / 100
      ChatLib.chat("§7* §fYour WLR: " + rounded);
      cancel(event)
    }
  })
