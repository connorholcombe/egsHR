const topBorder = document.getElementById('top-border');
const initialOffsetTop = topBorder.offsetTop;
window.addEventListener('scroll', () => {
    if (window.scrollY > initialOffsetTop) {
        topBorder.style.position = 'absolute';
        topBorder.style.top = '0';
        topBorder.style.left = `-${window.scrollX}px`;
    } else {
        topBorder.style.position = 'fixed';
        topBorder.style.top = `${initialOffsetTop}px`;
        topBorder.style.left = '0';
    }
});