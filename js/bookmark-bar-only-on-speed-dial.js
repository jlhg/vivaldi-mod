/**
 * Author: Leonardo Domingues
 * Source URL: https://forum.vivaldi.net/topic/27116/bookmark-bar-only-on-speed-dial-like-chrome
 */

setTimeout(function wait() {
  var adr = document.querySelector(".toolbar-addressbar.toolbar");
  if (adr != null) {
    const vivaldi = window.chrome;
    var bar = document.getElementsByClassName('bookmark-bar')[0];

    function change_display() {
      var tab = document.querySelector('.active.webpageview');

      if (tab.classList.contains('internal')) {
        bar.style.display = "flex";
      } else {
        bar.style.display = "none";
      }
    }

    vivaldi.tabs.onCreated.addListener(e => change_display());
    vivaldi.tabs.onUpdated.addListener(e => change_display());
    vivaldi.tabs.onActivated.addListener(e => change_display());
  } else {
    setTimeout(wait, 300);
  }
}, 300);
