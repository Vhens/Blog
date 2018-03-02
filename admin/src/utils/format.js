const fNum = n => (parseInt(n, 10) < 10 ? `0${n}` : n);
export const formatDate = (val, model = 'hh:mm:ss') => {
  const date = Math.ceil(val / 1000);
  const day = parseInt(date / 86400, 10);
  let hour = parseInt((date % 86400) / 3600, 10);
  if (model.indexOf('D') < 0) {
    hour = Math.floor(+(date / 3600) % 100);
  }
  const minute = parseInt((date % 3600) / 60, 10);
  const second = parseInt(date % 60, 10);
  model = model.replace(/DD/, fNum(day));
  model = model.replace(/D/, day);
  model = model.replace(/hh/, fNum(hour));
  model = model.replace(/h/, hour);
  model = model.replace(/mm/, fNum(minute));
  model = model.replace(/m/, minute);
  model = model.replace(/ss/, fNum(second));
  model = model.replace(/s/, second);
  return model;
}

export default {
  formatDate
}