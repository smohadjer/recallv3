(function () {
  'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }

  var Modal = /*#__PURE__*/function () {
    function Modal(options) {
      _classCallCheck(this, Modal);
      this.el = options.element;
      var self = this;
      self.init();
    }
    _createClass(Modal, [{
      key: "init",
      value: function init() {
        console.log(this.el);
      }
    }]);
    return Modal;
  }();

  //Helper classes to HTML for styling of nojs version
  var html = document.querySelector('html');
  html.classList.remove('no-js');
  html.classList.add('js');

  //taken from http://youmightnotneedjquery.com/
  function ready(fn) {

    if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }
  ready(function () {

    console.log('DOM is ready!');
    new Modal({
      element: document.querySelector('.modal')
    });
  });

})();
