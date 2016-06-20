'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _domDelegate = require('dom-delegate');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instances = [];

var AjaxForm = function () {
    function AjaxForm(form) {
        _classCallCheck(this, AjaxForm);

        this.form = form;
        this.button = progressButton.create(form.querySelector('button[type="submit"]'));
        this.requestInProgress = false;

        this.bindEvents();
    }

    _createClass(AjaxForm, [{
        key: 'submitForm',
        value: function submitForm() {
            var _this = this;

            this.requestInProgress = true;
            this.button.handleLoading();

            request.post(this.form.action).type('form').send(this.form).end(function (error, response) {
                _this.requestInProgress = false;

                if (response && response.ok) {
                    _this.button.handleComplete(true);
                } else {
                    _this.button.handleComplete(false);
                }
            });
        }
    }, {
        key: 'bindEvents',
        value: function bindEvents() {
            var _this2 = this;

            this.listener = new _domDelegate.Delegate(this.form);

            this.listener.on('submit', function (event) {
                event.preventDefault();

                if (!_this2.requestInProgress) {
                    _this2.submitForm();
                }
            });
        }
    }, {
        key: 'unbindEvents',
        value: function unbindEvents() {
            this.listener.destroy();
        }
    }]);

    return AjaxForm;
}();

exports.default = {
    init: function init(form) {
        instances.push(new AjaxForm(form));
    },

    destroy: function destroy() {
        instances.forEach(function (instance) {
            return instance.unbindEvents();
        });
        instances = [];
    }
};