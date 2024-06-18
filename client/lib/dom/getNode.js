// getNode

function getNode(node, context = document) {

  if(context.nodeType !== 9) context = document.querySelector(context);

  return context.querySelector(node);
}

function getNodes(node, context = document) {

  if(context.nodeType !== 9) context = document.querySelector(context);

  return context.querySelectorAll(node);
}