//collapse menu
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        } 
      });
    }

    //Change + and -
    document.addEventListener("DOMContentLoaded", function() {
    const collapsibleButtons = document.querySelectorAll('.collapsible');

    collapsibleButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const icon = this.querySelector('.plus-or-minus');
            const iconSrc = icon.getAttribute('src');
            
            // Toggle between icon-plus.svg and icon-minus.svg
            if (iconSrc === '/assets/images/icon-plus.svg') {
                icon.setAttribute('src', '/assets/images/icon-minus.svg');
            } else {
                icon.setAttribute('src', '/assets/images/icon-plus.svg');
            }
        });
    });
});