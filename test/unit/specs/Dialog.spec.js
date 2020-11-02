import BaseDialog from '@/components/BaseDialog';
import {mount} from '@vue/test-utils';

describe('BaseDialog', () => {
    test('should render slot correctly.', () => {
        const wrapper = mount(
            BaseDialog,
            {
                slots: {
                    'footer': '<span class="test-cont">i am footer</span>'
                }
            });
        expect(wrapper.find('.test-cont').text()).toBe('i am footer');
        wrapper.destroy();
    });

});
