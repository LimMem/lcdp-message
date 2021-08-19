const removeEventListenerMessage = (fun:(...e) => void) => {
  window.removeEventListener('message', fun);
};

export default removeEventListenerMessage;
