if(Meteor.isClient) {
  chatCollection = new Meteor.Collection(null);
}

chatStream = new Meteor.Stream('chat-stream');