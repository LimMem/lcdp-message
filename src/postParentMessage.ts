const postParentMessage = (data, origin = '*') => {
  window.parent.postMessage({
      u__$Type: 'editor',
      u__$Data: data,
      u__$Typeof: typeof data
  }, origin);
};
export default postParentMessage;
