"use strict";
exports.__esModule = true;
var test_utils_1 = require("@vue/test-utils");
var VueAccordion_vue_1 = require("./VueAccordion.vue");
var VueAccordionItem_vue_1 = require("./VueAccordionItem/VueAccordionItem.vue");
var localVue = test_utils_1.createLocalVue();
describe('VueAccordion.vue', function () {
    test('renders component with an accordion item', function () {
        var accordionItemWrapper = test_utils_1.mount(VueAccordionItem_vue_1["default"], {
            localVue: localVue,
            propsData: {
                title: 'foo',
                initOpen: false
            }
        });
        var wrapper = test_utils_1.mount(VueAccordion_vue_1["default"], {
            localVue: localVue,
            slots: {
                "default": [accordionItemWrapper.vm]
            }
        });
        expect(wrapper.vm.items).toHaveLength(0);
        accordionItemWrapper.vm.$parent = wrapper.vm;
        accordionItemWrapper.vm.$options.created['2'].call(accordionItemWrapper.vm);
        expect(wrapper.vm.items).toHaveLength(1);
        wrapper.destroy();
    });
    test('renders component with an open accordion item', function () {
        var accordionItemWrapper = test_utils_1.mount(VueAccordionItem_vue_1["default"], {
            localVue: localVue,
            propsData: {
                title: 'foo',
                initOpen: true
            }
        });
        var wrapper = test_utils_1.mount(VueAccordion_vue_1["default"], {
            localVue: localVue,
            slots: {
                "default": [accordionItemWrapper.vm]
            }
        });
        expect(wrapper.vm.items).toHaveLength(0);
        accordionItemWrapper.vm.$parent = wrapper.vm;
        accordionItemWrapper.vm.$options.created['2'].call(accordionItemWrapper.vm);
        expect(wrapper.vm.items).toHaveLength(1);
        wrapper.destroy();
    });
    test('should handle single accordion', function () {
        var wrapper = test_utils_1.mount(VueAccordion_vue_1["default"], {
            localVue: localVue,
            propsData: {
                multiple: false
            }
        });
        expect(wrapper.vm.openItems).toEqual([]);
        wrapper.vm.openItem(0);
        expect(wrapper.vm.openItems).toEqual([0]);
        wrapper.vm.openItem(1);
        expect(wrapper.vm.openItems).toEqual([1]);
        wrapper.vm.openItem(1);
        expect(wrapper.vm.openItems).toEqual([]);
    });
    test('should handle multiple accordion', function () {
        var wrapper = test_utils_1.mount(VueAccordion_vue_1["default"], {
            localVue: localVue,
            propsData: {
                multiple: true
            }
        });
        expect(wrapper.vm.openItems).toEqual([]);
        wrapper.vm.openItem(0);
        expect(wrapper.vm.openItems).toEqual([0]);
        wrapper.vm.openItem(1);
        expect(wrapper.vm.openItems).toEqual([0, 1]);
        wrapper.vm.openItem(1);
        expect(wrapper.vm.openItems).toEqual([0]);
        wrapper.vm.openItem(0);
        expect(wrapper.vm.openItems).toEqual([]);
    });
});
