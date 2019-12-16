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

describe('Page Info Component loading date', function () {
	it('should show the date the page was loaded', function () {

		const theFakeNow = new Date('2015-05-03')
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

	it('should show the date the page was loaded (Leap year)', function () {

		const theFakeNow = new Date('2000-02-29')
	    jasmine.clock().mockDate(theFakeNow) //install the fake Date class and mock the current date
		const wrapper = factory() //make sure this come after Date's class has been overwritten
		expect(wrapper.find('.footer').text()).toContain(new Date().toDateString())
	})
})

describe('Page Info Component page size', function () {
	it('should display the page size rounded to closest integer (2 KiB)', function () {
		const knownSizePageContent = Array(2100).join().split(',').map(function() { return 'a' }).join('')
	    const dummyElement = document.createElement('html'); // fake Element to replace documentElement value
	    const textNode = document.createTextNode(knownSizePageContent); // wrap our content into a node
	    dummyElement.appendChild(textNode); // attach the node to our fake Element

	    // because our component will use querySelector() to get to documentElement, we're stubbing that method
	    // to return our fake Element
	    document.querySelector = jasmine.createSpy('HTML Element').and.returnValue(dummyElement)

		const wrapper = factory()
		expect(wrapper.find('.footer').text()).toContain('Page size is a stellar 2 KiB')
	})
	it('should display the page size rounded to closest integer (1 KiB)', function () {
		const knownSizePageContent = Array(900).join().split(',').map(function() { return 'a' }).join('')
	    const dummyElement = document.createElement('html'); // fake Element to replace documentElement value
	    const textNode = document.createTextNode(knownSizePageContent); // wrap our content into a node
	    dummyElement.appendChild(textNode); // attach the node to our fake Element

	    // because our component will use querySelector() to get to documentElement, we're stubbing that method
	    // to return our fake Element
	    document.querySelector = jasmine.createSpy('HTML Element').and.returnValue(dummyElement)

		const wrapper = factory()
		expect(wrapper.find('.footer').text()).toContain('Page size is a stellar 1 KiB')
	})
})