console.log('document.readyState:', document.readyState);

function listen(label) {
    document.addEventListener('DOMContentLoaded', function (event) {
        console.log(label, 'event: DOMContentLoaded');
        console.log(label, 'document.readyState:', document.readyState);
    });

    window.addEventListener('load', function (event) {
        console.log(label, 'event: load');
        console.log(label, 'document.readyState:', document.readyState);
    });
}

listen('');

setTimeout(function () {
    // will never happen
    listen('inSetTimeout:');
}, 2000);


