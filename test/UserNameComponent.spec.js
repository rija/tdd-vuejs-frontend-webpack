import { shallowMount } from '@vue/test-utils'
import UserNameComponent from '../src/components/UserNameComponent.vue'

describe('Username component', function () {
	it('should use prompt for label', function () {

		const wrapper = shallowMount(UserNameComponent, {
	      data: function () {
	      	return {
		        prompt: 'foo bar',
		        username: '',
		      }
		  }
	    })
		expect(wrapper.find('.form-label').text()).toContain(wrapper.vm.prompt)
	})

	it('sets an explanatory prompt', function() {
		const wrapper = shallowMount(UserNameComponent, {
	      data: function () {
	      	return {
		        prompt: 'foo bar',
		        username: '',
		        minLength: 4,
		      }
		  }
	    })
		expect(wrapper.vm.fullPrompt).toBe('foo bar ('+wrapper.vm.minLength+' char. min.):')
	})
})
