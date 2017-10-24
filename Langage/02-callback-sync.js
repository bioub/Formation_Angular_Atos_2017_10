'use strict';

const nbs = [5, 4, 2, 9];

// ES5
nbs.forEach(function forEachCb(nb, i) {
  console.log(nb);
});

// ES5
nbs.map(nb => nb * 2)
  .filter(nb => nb >= 10)
  .forEach((nb, i) => {
    console.log('nb', nb);
    console.log('i', i);
  });

const setTimeoutSync = function(cb, delay) {
  const debut = Date.now();

  while (debut + delay > Date.now()) {}

  cb();
};

setTimeoutSync(function() {
  console.log('1000ms');
}, 1000);

setTimeoutSync(function() {
  console.log('500ms');
}, 500);

console.log('End');
