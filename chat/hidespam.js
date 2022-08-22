register('chat', (event) => {
    let message = ChatLib.getChatMessage(event);
    if (message.includes('change your group because you own this house!')||message.includes('Your group has been set to red')||message.includes('Your group has been set to -')||message.includes('Your group has been set to blue')||message.includes('Tired of all the group change messages?')||message.includes('Download Chattriggers and type')||message.includes('/ct import HousingHelper, then /ct reload')||message.includes('/disabletips to stop seeing this message.)')||message.includes('Game: Download the CT Mod with /downloadmod')) {
      cancel(event)
    }
  })