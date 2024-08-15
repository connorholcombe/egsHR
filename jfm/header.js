const header = document.getElementById('header');
const initialOffsetTop = header.offsetTop;
window.addEventListener('scroll', () => {
    if (window.scrollY > initialOffsetTop) {
        header.style.position = 'absolute';
        header.style.top = '0';
        header.style.left = `-${window.scrollX}px`;
    } else {
        header.style.position = 'fixed';
        header.style.top = `${initialOffsetTop}px`;
        header.style.left = '0';
    }
});