chatStream.permissions.read(function(eventName) {
  return eventName == 'chat';
});

chatStream.permissions.write(function(eventName) {
  return eventName == 'chat';
});