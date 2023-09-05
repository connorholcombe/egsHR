document.addEventListener('DataPageReady', function (event) {

    let label  = document.querySelector('table[data-cb-name="cbTable"] th:nth-of-type(32)');
    let values  = document.querySelectorAll('table[data-cb-name="cbTable"] td:nth-of-type(32)');

    /* Removing the selected fields */
    if (label) {
        label.parentElement.removeChild(label);
    }
    
    values.forEach(el => {
        el.parentElement.removeChild(el);
    });
});
