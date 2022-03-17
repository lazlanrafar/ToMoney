const defaultSettings = {
  append: "Rp. ",
  prepend: "",
};

const dotsFormatter = (params) => {
  return params.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const setSymbol = (params, settings) => {
  return settings.append + params + settings.prepend;
};

function toMoney(params, settings = {}) {
  let dataFormated = dotsFormatter(params);
  settings = Object.assign(defaultSettings, settings);
  return setSymbol(dataFormated, settings);
}

module.exports = toMoney;
