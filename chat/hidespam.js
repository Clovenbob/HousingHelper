register('chat', (event) => {
    let message = ChatLib.getChatMessage(event);
    if (message.includes('change your group because you own this house!')||message.includes('Your group has been set to')||message.includes('Tired of all the group change messages?')||message.includes('Download Chattriggers and type')||message.includes('/ct import HousingHelper, then /ct reload')||message.includes('/disabletips to stop seeing this message.)')) {
      cancel(event)
    }
  })