// 이벤트 추가/제거 하는 함수 만들기 (클로저)
function bindEvent(node, type, handler) {

  if(isString(node)) node = getNode(node);
  
  node.addEventListener(type, handler);

  return () => node.removeEventListener(type, handler);

}