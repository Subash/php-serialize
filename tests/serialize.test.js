import test from 'ava';
import serialize from '../src/serialize.js';

test('Test serialize()', async (t) => {
  const o1 = serialize(['Kevin', 'van', 'Zonneveld']);
  t.is(o1, 'a:3:{i:0;s:5:"Kevin";i:1;s:3:"van";i:2;s:9:"Zonneveld";}');

  const o2 = serialize({ 'ü': 'ü', '四': '四', '𠜎': '𠜎' });
  t.is(o2, 'a:3:{s:2:"ü";s:2:"ü";s:3:"四";s:3:"四";s:4:"𠜎";s:4:"𠜎";}');

  t.pass();
});
