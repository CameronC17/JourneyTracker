window.addEventListener('mousemove', function(e) { Key.onKeyUp(e); }, false);
window.addEventListener('mousedown', function(e) { Key.onKeyDown(e); }, false);
window.addEventListener('mouseup', function(e) { Key.onKeyDown(e); }, false);

let Mouse = {
    mouseposition: {
        x: -1,
        y: -1
    },
    
}
