let textarea_resize = document.querySelector('textarea');
textarea_resize.addEventListener('keyup', function (e) {
    textarea_resize.style.height = '53px'
    let text_area_height = e.target.scrollHeight;
    textarea_resize.style.height = text_area_height + "p";
});