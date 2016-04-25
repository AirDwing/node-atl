var atl = require('../dist');

suite('ATL', function() {
  bench('> (true)', function(){
    atl('1.6.7','1.4.4');
  });
  bench('= (true)', function(){
    atl('1.4.4','1.4.4');
  });
  bench('< (false)', function(){
    atl('1.1.6','1.4.4');
  });
});
