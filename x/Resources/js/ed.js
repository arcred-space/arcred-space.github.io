/* Written by Erik Demaine <edemaine@mit.edu>, 2012.
 * Distributed under the MIT License
 * [http://www.opensource.org/licenses/mit-license.php]
 *
 * Parses page for DIVs with CLASS 'rotate-container'.
 *
 * Call rotate_enable() from onload.
 *
 */

var switch_delay = 5 * 1000;
var fps = 30;
var transition = 0.75 * 1000;

function opacity (div, frac) {
  div.style.opacity = frac;
  div.style.filter = 'alpha(opacity=' + frac*100 * ')';  //old IE
}

function rotate_container (div) {
  var frames = Math.ceil (transition * fps / 1000);
  var timeout = null, timeouts = [];
  var frame = null;
  var current, next;
  var options = [];

  var children = div.getElementsByTagName ('div');
  for (var i = 0; i < children.length; i++) {
    if ((' ' + children[i].className + ' ').indexOf (' rotate-start ') >= 0) {
      current = options.length;
      options.push (children[i]);
    } else if (children[i].className == 'rotate-me') {
      children[i].display = 'none';
      options.push (children[i]);
    }
  }

  var maxWidth = div.offsetWidth, maxHeight = div.offsetHeight;

  function grow (child) {
    maxWidth = Math.max (maxWidth, child.offsetWidth);
    maxHeight = Math.max (maxHeight, child.offsetHeight);
    div.style.width = maxWidth + 'px';
    div.style.height = maxHeight + 'px';
  }

  div.position = 'relative';
  for (var i = 0; i < options.length; i++) {
    children[i].style.position = 'absolute';
    children[i].style.right = '0px';
    children[i].style.bottom = '0px';
    grow (children[i]);
  }

  function stop () {
    if (timeout != null) {
      clearTimeout (timeout);
      timeout = null;
    }
  }

  function start () {
    if (frame != null) return;  // don't rotate while animating
    stop ();
    timeout = setTimeout (rotate, switch_delay);
  }

  function rotate () {
    /*
    options[current].style.display = 'none';
    current = (current + 1) % options.length;
    options[current].style.display = 'block';
    */
    if (frame != null) {  // jump to end of animation before next one
      for (var i = 0; i < timeouts.length; i++)
        clearTimeout (timeouts[i]);
      opacity (options[current], 0);
      options[current].style.display = 'none';
      opacity (options[next], 1);
      current = next;
    }
    next = (current + 1) % options.length;
    frame = 0;
    opacity (options[current], 1);
    opacity (options[next], 0);
    options[current].style.display = 'block';
    options[next].style.display = 'block';
    grow (options[next]);
    function show (f) {
      return function () {
        if (frame == null || frame >= f) return;
        frame = f;
        opacity (options[current], 1 - f / frames);
        opacity (options[next], f / frames);
      };
    }
    timeouts = [];
    for (var i = 1; i < frames; i++) {
      timeouts.push (setTimeout (show (i), i * transition / frames));
    }
    timeouts.push (setTimeout (function () {
      opacity (options[current], 0);
      options[current].style.display = 'none';
      opacity (options[next], 1);
      frame = null;
      current = next;
      start ();
    }, transition));
  }

  div.addEventListener ('click', rotate);
  div.addEventListener ('mouseover', stop);
  div.addEventListener ('mouseout', start);
  start ();
}

function rotate_enable () {
  var divs = document.getElementsByTagName ('div');
  for (var i = 0; i < divs.length; i++) {
    div = divs[i];
    if ((' ' + div.className + ' ').indexOf (' rotate-container ') >= 0) {
      rotate_container (div);
    }
  }
}
