
function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById("nested").querySelector(".target");
}

function increaseRankBy(n){

  const lis = document.getElementById("app").querySelectorAll("ul.ranked-list li");

  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt( lis[i].innerHTML ) + n;
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }

  return node;
}
