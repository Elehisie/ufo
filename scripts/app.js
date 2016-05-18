(function() {
  var controlMenu = function() {
    var toggler = document.getElementsByClassName('toggler');
    var slideMenu = document.getElementById('slideMenu');

    for ( i=0; i<toggler.length; i++) {
      toggler[i].addEventListener('click', function() {
        if (slideMenu.style.display == 'flex') {
          // this.style.display = 'flex';
          slideMenu.style.display= 'none';
        }
        else {
          // this.style.display = 'none';
          slideMenu.style.display = 'flex';
        }
      });
    }
    
  };

  controlMenu();
})();
