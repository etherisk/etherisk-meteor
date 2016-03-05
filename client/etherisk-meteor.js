Session.set('contractAddress', '0xB4C4CAfe4f5514825602868cD62dB069bb40Bc5f');

EthAccounts.init();

function account() {
  // Just return the first account we find.
  return EthAccounts.findOne();
}

Template.status.helpers({
  contractAddress: function() {
    return Session.get('contractAddress');
  },
  acct: function() {
    var acct = account();
    console.log(acct);
    var val = acct && acct.address;
    console.log(val);
    return val;
  }
});
