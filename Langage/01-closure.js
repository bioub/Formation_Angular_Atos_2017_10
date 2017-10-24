
const externe = function(msg) {
  
  const interne = function() {
    console.log(msg);
  };

  return interne;
};

const hello = externe('Hello');

hello();

// 3 3 3 sans closure
for (var i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}


// 0 1 2 avec closure
for (var i=0; i<3; i++) {
  setTimeout(externe(i), 1000);
}

/*
function createButton() {
  // Closure
  let objVolumineux = {};
  objVolumineux = null;
  btn.addEventListener('click', function() {
    //
  })
}
*.
