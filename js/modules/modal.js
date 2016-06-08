'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domDelegate = require('dom-delegate');

var _domOps = require('@pod-point/dom-ops');

var _utilities = require('./../utilities');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instances = [];

var Modal = function () {

    /**
     * Creates a new modal window.
     *
     * @param element
     */

    function Modal(element) {
        _classCallCheck(this, Modal);

        this.openButton = element;
        this.modal = (0, _domOps.selectFirst)('#' + this.openButton.getAttribute('data-modal'));
        this.closeButton = (0, _domOps.selectFirst)('.modal-close', this.modal);
        this.overlay = (0, _domOps.selectFirst)('.modal__overlay', this.modal);

        this.bindEvents();
    }

    /**
     * Binds the event listeners from the elements.
     */


    _createClass(Modal, [{
        key: 'bindEvents',
        value: function bindEvents() {
            var _this = this;

            this.openListener = new _domDelegate.Delegate(this.openButton);

            this.openListener.on('click', function (event) {
                _this.doModal(event);
            });

            this.closeListener = new _domDelegate.Delegate(this.closeButton);

            this.closeListener.on('click', function (event) {
                _this.closeModal();
            });

            this.overlayListener = new _domDelegate.Delegate(this.overlay);

            this.overlayListener.on('click', function (event) {
                _this.closeModal();
            });
        }

        /**
         * Unbinds the event listeners from the elements.
         */

    }, {
        key: 'unbindEvents',
        value: function unbindEvents() {
            this.openListener.destroy();
            this.closeListener.destroy();
            this.overlayListener.destroy();
        }

        /**
         * Handle the modal opening.
         *
         * @param {Event} event
         */

    }, {
        key: 'doModal',
        value: function doModal(event) {
            event.preventDefault();

            if ((0, _utilities.isVisible)(this.modal)) {
                this.closeModal(event);
            } else {
                (0, _utilities.show)(this.modal);
            }
        }

        /**
         * Handle the modal closing.
         */

    }, {
        key: 'closeModal',
        value: function closeModal() {
            (0, _utilities.hide)(this.modal);
        }
    }]);

    return Modal;
}();

exports.default = {
    init: function init(element) {
        instances.push(new Modal(element));
    },

    destroy: function destroy() {
        instances.forEach(function (instance) {
            return instance.unbindEvents();
        });
        instances = [];
    }
};