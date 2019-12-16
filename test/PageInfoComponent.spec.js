import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import PageInfoComponent from '../src/components/PageInfoComponent.vue'

const factory = function (values = {}) {
  return shallowMount(PageInfoComponent, {
    data () {
      return {
        ...values
      }
    }
  })
}

describe('Page Info Component', function () {
	it('should show the date the page was loaded', function () {

		const theFakeNow = new Date('2016-05-03')
	    jasmine.clock().mockDate(theFakeNow) //install the fake Date class and mock the current date
		const wrapper = factory() //make sure this come after Date's class has been overwritten
		expect(wrapper.find('.footer').text()).toContain(new Date().toDateString())
	})

	it('should show the date the page was loaded (Y2K38+)', function () {

		const theFakeNow = new Date('2039-06-05')
	    jasmine.clock().mockDate(theFakeNow) //install the fake Date class and mock the current date
		const wrapper = factory() //make sure this come after Date's class has been overwritten
		expect(wrapper.find('.footer').text()).toContain(new Date().toDateString())
	})
})