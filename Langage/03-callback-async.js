setTimeout(function(hello) {
  console.log('1000ms');
}, 1000, 'hello');

setTimeout(function() {
  console.log('500ms');
}, 500);

setTimeout(function() {
  setTimeout(function() {

  }, 2000);
}, 2000);

Array.prototype.forEachAsync = function(cb) {
  for (var i=0; i<this.length; i++) {
    setTimeout(cb, 10 * i, this[i], i, this);
  }
};

[1, 2, 3].forEachAsync(function (nb) {
  console.log(nb);
});

console.log('End');
