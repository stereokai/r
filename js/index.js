console.log('loaded by amok')

var body    = document.body;
    sidebar = document.getElementById('sidebar'),
    sbOpen 	= document.getElementById('sb-open'),
    sbClose = document.getElementById('sb-close');

var hasPointer = !!(window.PointerEvent || window.navigator.msPointerEnabled);
var hasTouch = !!window.TouchEvent;

var POINTER_DOWN = 'MSPointerDown';
var POINTER_UP = 'MSPointerUp';
var POINTER_MOVE = 'MSPointerMove';

if (window.PointerEvent) {
  POINTER_DOWN = 'pointerdown';
  POINTER_UP = 'pointerup';
  POINTER_MOVE = 'pointermove';
}

function onTap (el, fn) {
	if (hasPointer) {
   el.addEventListener(POINTER_DOWN, tapAnd(fn), false);
 } else {
   el.addEventListener('mousedown', tapAnd(fn), false);

   if (hasTouch) {
     el.addEventListener('touchstart', tapAnd(fn), false);
   }
 }
}

function tapAnd (fn) {
  return function (e) {
    if (typeof e.setPointerCapture == 'function') {
      e.currentTarget.setPointerCapture(e.pointerId);
    }

    // Prevent the cascade
    e.preventDefault();

    // Fire callback
    fn();
  }
}

onTap(sbOpen, function openSidebar () {
  sidebar.classList.add('--open');
  body.classList.add('--sidebar-open');
});

onTap(sbClose, function closeSidebar () {
  sidebar.classList.remove('--open');
  body.classList.remove('--sidebar-open');
});