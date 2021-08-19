const postMessageToContentWindow = (contentWindow, data, origin) => {
  contentWindow.postMessage({
      u__$Type: 'editor',
      u__$Data: data,
      u__$Typeof: typeof data
  }, origin);
};

export default postMessageToContentWindow;
