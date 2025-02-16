// config.js
var CONFIG = {
  eventStartMinute: 52,
  eventStartSecond: 25
};

(function() {
  const params = new URLSearchParams(window.location.search);
  // If query parameters exist, override the defaults
  if (params.has('minute')) {
    CONFIG.eventStartMinute = parseInt(params.get('minute'), 10) || CONFIG.eventStartMinute;
  }
  if (params.has('second')) {
    CONFIG.eventStartSecond = parseInt(params.get('second'), 10) || CONFIG.eventStartSecond;
  }
  // If one of the parameters is missing, update the URL with the default values.
  let updated = false;
  if (!params.has('minute')) {
    params.set('minute', CONFIG.eventStartMinute);
    updated = true;
  }
  if (!params.has('second')) {
    params.set('second', CONFIG.eventStartSecond);
    updated = true;
  }
  if (updated) {
    const newUrl = window.location.pathname + '?' + params.toString();
    window.history.replaceState({}, '', newUrl);
  }
})();
