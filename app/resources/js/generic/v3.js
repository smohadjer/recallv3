// Namespace for scripts
if (!ril) {
    //var ril = {};
}

ril.toggleSelectOptions = function(selects, newValue, oldValue) {
    var self = this;

    selects.forEach(function(select) {
        var options = select.querySelectorAll('option');
        options.forEach(function(option) {
            if (oldValue && option.getAttribute('value') === oldValue) {
                option.removeAttribute('hidden');
            }

            if (select.value !== newValue) { // we don't want to hide the option in select that user just interacted with
                if (newValue.length > 0 && option.getAttribute('value') === newValue) {
                    option.setAttribute('hidden', 'hidden');
                }
            }
        });
    });
};

// adds support for using forEach on nodeLists in IE11
// taken from: https://stackoverflow.com/questions/47534102/js-foreach-loops-in-ie11
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelectorAll('html')[0].classList.add('html--js');

    // Bug fix for Chrome and other browsers which have no support for CSS :target
    var addClassToHashTarget = function() {
        var hash = window.location.hash.substring(1); // Remove first character from hash
        if (hash) {
            var hashTarget = document.getElementById(hash);
            if (hashTarget) {
                hashTarget.classList.add('target');
            }
        }
    };

    // adds dropdown functionality to navbar
    var enhanceNavbar = function() {
        var dropdownToggle = document.querySelectorAll('.navbar-primary .dropdown-toggle');

        dropdownToggle.forEach((element) => {
            element.addEventListener('click', function (event) {
                event.preventDefault();
                event.stopPropagation();

                const nodes = this.closest('.navbar-nav').children;

                for (let i = 0; i < nodes.length; i++) {
                    nodes[i].classList.remove('open');
                }
    
                this.parentElement.classList.toggle('open');
            });
        });

        document.querySelector('body').addEventListener('click', function(event) {
            // clicking outside nav should close dropdown that is open
            const clickedOusideNavbar = event.target.closest('.dropdown') === null;
            const openDropdown = document.querySelector('.navbar-primary .dropdown.open');

            if (clickedOusideNavbar && openDropdown) {
                openDropdown.classList.remove('open');
            }
        });

        // for mobile 
        document.querySelector('.navbar-toggle').addEventListener('click', function(event) {
            document.querySelector('.navbar-collapse').classList.toggle('in');
        });
    };

    // use setTimeout to reduce risk of conflicts with Yii scripts
    setTimeout(function() {
        enhanceNavbar();
        addClassToHashTarget();
    }, 0);
});
