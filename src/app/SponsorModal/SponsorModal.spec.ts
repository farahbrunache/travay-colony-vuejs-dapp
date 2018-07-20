import { createLocalVue, mount } from '@vue/test-utils';
import SponsorModal                       from './SponsorModal.vue';

const localVue = createLocalVue();

describe('SponsorModal.vue', () => {

  test('renders component', () => {
    const wrapper = mount(SponsorModal,
                          {
                            localVue,
                          },
    );

    expect(wrapper.find('h1').text()).toBe('SponsorModal');
  });

});
