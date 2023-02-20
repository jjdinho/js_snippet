(function(window_object, html_element, async_class_name, n, max_time_hidden, h) {
  // Adds a class (defaulting to 'async-hide') to the <html> element.
  html_element.className += ' ' + async_class_name;

  // Keeps track of the exact time that the snippet executes.
  h.start = 1*new Date;

  // Creates a function and assigns it to a local variable `i` as well as
  // the `end` property of the Optimize container object. Once Optimize is
  // loaded it will call this function, which will remove the 'async-hide'
  // class from the <html> element, causing the page to become visible again.
  h.end = i = function() {
    html_element.className = html_element.className.replace(RegExp(' ?' + async_class_name), '');
  };

  // Initializes the dataLayer as an empty array if it's not already initialized
  // and assigns the passed Optimize container object to the dataLayer's `hide`
  // property. This makes the function defined above accessible globally at the
  // path `window.dataLayer.hide.end`, so it can be called by Optimize.
  (window_object[n] = window_object[n] || []).hide = h;

  // CUSTOM call function
  // Start launch test
  if (Math.random() >= 0.5) {
    console.log('Send API: running test')

    document.querySelectorAll('#main-text-container h3').forEach((element) => {
      element.innerText = 'Testing another header!'
    })
  } else {
    console.log('Send API: didnt run')
  }

  // Add listeners
  document.querySelectorAll('a').forEach((element) => {
    if (element.tagName === 'FORM') {
      element.addEventListener('submit', (form) => {
        console.log('Send API: form submitted')
      })
    } else {
      element.addEventListener('click', (elem) => {
        console.log('Send API: trigger clicked')
      })
    }
  })
  i();
  h.end = null
  // End launch test

  // Creates a timeout that will call the page-showing function after the
  // timeout amount (defaulting to 4 seconds), in the event that Optimize has
  // not already loaded. This ensures your page will not stay hidden in the
  // event that Optimize takes too long to load.
  setTimeout(function() {
    i();
    h.end = null
  }, max_time_hidden);
  h.timeout = max_time_hidden;
})(
    window, // The initial value for local variable `a`.
    document.documentElement, // The initial value for local variable `s`.
    'async-hide', // The initial value for local variable `y`.
    'dataLayer', // The initial value for local variable `n`.
    4000, // The initial value for local variable `c`.
    {'OPT-XXXXXX': true} // The initial value for local variable `h`.
);
