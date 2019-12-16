import { shallowMount } from '@vue/test-utils'
import UserNameComponent from '../src/components/UserNameComponent.vue'

const factory = function (values = {}) {
  return shallowMount(UserNameComponent, {
    data () {
      return {
        ...values
      }
    }
  })
}

describe('Username component', function () {
	it('should use prompt for label', function () {

		const wrapper = factory({
		        prompt: 'foo bar',
		        username: '',
			})

		expect(wrapper.find('.form-label').text()).toContain(wrapper.vm.prompt)
	})

	it('sets an explanatory prompt', function() {
		const wrapper = factory({
		        prompt: 'foo bar',
		        username: '',
		        minLength: 4,
	    	})

		expect(wrapper.vm.fullPrompt).toBe('foo bar ('+wrapper.vm.minLength+' char. min.):')
	})
})
