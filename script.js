let text_resize = document.querySelector('textarea');
text_resize.addEventListener('keyup', function (e) {
    text_resize.style.height = '53px'
    let text_area_height = e.target.scrollHeight;
    text_resize.style.height = text_area_height + "px";
});