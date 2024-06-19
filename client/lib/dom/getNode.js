// getNode

function getNode(node, context = document) {

  if(context.nodeType !== 9) context = document.querySelector(context);

  return context.querySelector(node);
}

// getNode('.first') // 문자가 아닐 경우

function getNodes(node, context = document) {

  if(context.nodeType !== 9) context = document.querySelector(context);

  return context.querySelectorAll(node);
}