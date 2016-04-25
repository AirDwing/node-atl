var atl = require('../dist');
var atls = function (input, need) {
  var regx = /^v?V?(\d+).(\d+).(\d+)-?/;
  var inputVersion = input.match(regx);
  var requireVersion = need.match(regx);
  if (inputVersion === null || requireVersion === null) {
    throw new Error('Invalid Version');
  }
  const inputVersionCode = (inputVersion[1] << 16) + (inputVersion[2] << 8) + (inputVersion[3] << 0);
  const requireVersionCode = (requireVersion[1] << 16) + (requireVersion[2] << 8) + (requireVersion[3] << 0);
  return inputVersionCode >= requireVersionCode;
};

suite('ATL', function() {
  bench('if > (true)', function(){
    atl('1.6.7','1.4.4');
  });
  bench('if = (true)', function(){
    atl('1.4.4','1.4.4');
  });
  bench('if < (false)', function(){
    atl('1.1.6','1.4.4');
  });
});

suite('Left Shift', function(){
  bench('<< > (true)', function(){
    atls('1.6.7','1.4.4');
  });
  bench('<< = (true)', function(){
    atls('1.4.4','1.4.4');
  });
  bench('<< < (false)', function(){
    atls('1.1.6','1.4.4');
  });
});
