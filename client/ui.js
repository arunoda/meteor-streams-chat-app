// render all of our messages in the ui
Template.chatBox.helpers({
  "messages": function() {
    return chatCollection.find();
  }
});

// get the value for handlerbar helper user
Template.chatMessage.helpers({
  "user": function() {
    if(this.userId == 'me') {
      return this.userId;
    } else if(this.userId) {
      getUsername(this.userId);
      return Session.get('user-' + this.userId);
    } else {
      return 'anonymous-' + this.subscriptionId;
    }
  }
});

// when Send Chat clicked at the message to the collection
Template.chatBox.events({
  "click #send": function() {
    var message = $('#chat-message').val();
    chatCollection.insert({
      userId: 'me',
      message: message
    });
    $('#chat-message').val('');

    //add the message to the stream
    chatStream.emit('chat', message);
  }
});

chatStream.on('chat', function(message) {
  chatCollection.insert({
    userId: this.userId,
    subscriptionId: this.subscriptionId,
    message: message
  });
});