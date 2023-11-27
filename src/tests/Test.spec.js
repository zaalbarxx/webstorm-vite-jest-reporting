import { render } from "@testing-library/vue";
import { h } from "vue";

describe('test', () => {
    it('should render proper error message', () => {
      const wrapper = render({
          render() {
              return h('div', {'data-testid': 'test'}, 'test');
          }
      })

        expect(wrapper.getByTestId('test')).toHaveAttribute('non-existent-attribute');
    })
})