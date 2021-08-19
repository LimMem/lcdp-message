const addEventListenerMessage = (onMessage = (e:any) => { }) => {
  window.addEventListener('message', ({ type, data = {} }) => {
      const { u__$Type, u__$Data } = data;
      if (type === 'message' && u__$Type === 'editor')
      {
          onMessage(u__$Data);
      }
  }, false);
};

export default addEventListenerMessage;
