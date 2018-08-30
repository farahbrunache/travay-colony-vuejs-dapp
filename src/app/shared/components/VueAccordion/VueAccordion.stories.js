"use strict";
exports.__esModule = true;
var vue_1 = require("@storybook/vue");
var storybook_addon_vue_info_1 = require("storybook-addon-vue-info");
var VueAccordion_vue_1 = require("./VueAccordion.vue");
var VueAccordionItem_vue_1 = require("./VueAccordionItem/VueAccordionItem.vue");
var story = vue_1.storiesOf('VueAccordion', module);
story.addDecorator(storybook_addon_vue_info_1["default"]);
var storySchema = [
    {
        label: 'Default'
    },
    {
        label: 'Multiple',
        props: ['multiple']
    },
];
var _loop_1 = function (item) {
    story.add(item.label, function () { return ({
        components: {
            VueAccordion: VueAccordion_vue_1["default"],
            VueAccordionItem: VueAccordionItem_vue_1["default"]
        },
        template: "<vue-accordion " + (item.props ? item.props.join(' ') : '') + ">\n  <vue-accordion-item title=\"Item 1\" :initOpen=\"true\">\n    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores\n    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores\n    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n  </vue-accordion-item>\n  <vue-accordion-item title=\"Item 2\">\n    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut\n    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores\n    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\n  </vue-accordion-item>\n</vue-accordion>"
    }); });
};
for (var _i = 0, storySchema_1 = storySchema; _i < storySchema_1.length; _i++) {
    var item = storySchema_1[_i];
    _loop_1(item);
}
