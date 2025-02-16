// config.js

// Set your default values
var CONFIG = {
  eventStartMinute: 52,
  eventStartSecond: 25
};

// Check for URL query parameters (e.g., ?minute=30&second=10)
(function() {
  const params = new URLSearchParams(window.location.search);
  if (params.has('minute')) {
    const minute = parseInt(params.get('minute'), 10);
    if (!isNaN(minute)) {
      CONFIG.eventStartMinute = minute;
    }
  }
  if (params.has('second')) {
    const second = parseInt(params.get('second'), 10);
    if (!isNaN(second)) {
      CONFIG.eventStartSecond = second;
    }
  }
})();
