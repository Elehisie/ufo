(function() {
  var controlMenu = function() {
    var toggler = document.getElementsByClassName('toggler');
    toggler.addEventListenener('click', function() {
      if (this.style.display == 'none') { this.style.display = 'flex'; }
      else { this.style.display = 'none'; }
    });
  };

  controlMenu();
})();
