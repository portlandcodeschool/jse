(function (window, document) {

  var layout    = document.getElementById('layout'),
    menu        = document.getElementById('menu'),
    menuLink    = document.getElementById('menuLink'),
    mainContent = document.getElementById('main-content');

  function toggleClass(element, className) {
    var classes = element.className.split(/\s+/),
      length = classes.length,
      i = 0;

    for(; i < length; i++) {
      if (classes[i] === className) {
        classes.splice(i, 1);
        break;
      }
    }
    // The className is not found
    if (length === classes.length) {
      classes.push(className);
    }

    element.className = classes.join(' ');
  }

  menuLink.onclick = function (e) {
    var active = 'active';

    e.preventDefault();
    toggleClass(layout, active);
    toggleClass(menu, active);
    toggleClass(menuLink, active);
    toggleClass(mainContent, active);
  };
  $(window).scroll(function() {    
    console.log('scrolled');
    var scroll = $(window).scrollTop();
    if (scroll <= 100) {
      $("#main-title").removeClass("lighter-smaller-font");
    } else {
      $("#main-title").addClass("lighter-smaller-font");
    }
  });
}(this, this.document));
