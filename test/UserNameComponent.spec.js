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
		expect(wrapper.find('.form-label').text()).toEqual(wrapper.vm.prompt)
	})
})
