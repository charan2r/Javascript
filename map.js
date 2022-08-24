const map = new Map();
map.set('one', 1);
map.set('2', 'two');
if (map.has('two')) {
  console.log('two');
} else {
  console.log(map.get('one'));
}

const set = new Set();

set.add(1).add(2).add(3);

for(let v of set.values())
        console.log(v);