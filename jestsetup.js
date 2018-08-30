"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var vee_validate_1 = require("vee-validate");
vue_1["default"].use(vee_validate_1["default"]);
var $style = require('identity-obj-proxy');
HTMLCanvasElement.prototype.getContext = function () {
    return;
};
global.CLIENT = true;
global.SERVER = true;
global.TEST = true;
vue_1["default"].config.productionTip = false;
vue_1["default"].mixin({
    created: function () {
        this.$style = $style;
    }
});
