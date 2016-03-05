Meteor.startup(function() {
  EthAccounts.init();
});

Template.status.helpers({
  account: function() {
    return EthAccounts.findOne()._id;
  }
});
