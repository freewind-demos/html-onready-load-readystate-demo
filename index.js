console.log('initial document.readyState:', document.readyState);

function listen(label) {
  document.addEventListener('readystatechange', function (value) {
    console.log(label, 'event: readystatechange, readyState -> ', value.target.readyState);
  });

  document.addEventListener('DOMContentLoaded', function (event) {
    console.log(label, 'event: DOMContentLoaded, readyState: ', document.readyState);
  });

  window.addEventListener('load', function (event) {
    console.log(label, 'event: load, readyState: ', document.readyState);
  });
}

listen('');

setTimeout(function () {
  document.getElementById('main').innerText = 'Hello! (changed)';
}, 1000);

setTimeout(function () {
  // will never happen
  listen('inSetTimeout:');
}, 2000);




