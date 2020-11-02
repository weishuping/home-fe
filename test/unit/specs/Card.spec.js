import Card from '@/components/BaseCard';
import {destroyVM, createTest} from './utils'; // element-ui的写法
import {mount, createLocalVue} from '@vue/test-utils';
const localVue = createLocalVue();
localVue.use(Card);

describe('Card', () => {
    let vm;
    afterEach(() => {
        destroyVM(vm);
    });
    
    it('should show showName correctly', () => {
        vm = createTest(Card, {
            showName: '测试'
        });
        expect(vm.$el.querySelector('.card-name').textContent).toBe('测试');
    });
    test('should render props correctly', () => {
        let wrapper = mount(Card, 
            {
                localVue,
                propsData: {
                    showName: '1'
                }
            });
        expect(wrapper.vm.$options.props.showName.type).toBe(String);
        wrapper.destroy();
    });
});
