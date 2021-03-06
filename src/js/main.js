import modals from './modules/modals'
import sliders from './modules/sliders'
import forms from './modules/forms'
import mask from './modules/mask'
import checkTextInputs from './modules/checkTextInputs'
import showMoreStyles from './modules/showMoreStyles'
import calc from './modules/calc'
import filter from './modules/filter'
import changePicture from './modules/changePicture'
import accordion from './modules/accordion'
import burger from './modules/burger'
import drop from './modules/drop'
import scrolling from './modules/scrolling'

window.addEventListener('DOMContentLoaded', () => {
	'use strict'

	modals()
	sliders('.main-slider-item', 'vertical')
	sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn')
	forms()
	mask('[name="phone"]')
	checkTextInputs('[name="name"]')
	checkTextInputs('[name="message"]')
	showMoreStyles('.button-styles', '#styles .row')
	calc('#size', '#material', '#options', '.promocode', '.calc-price')
	filter()
	changePicture('.sizes-block')
	accordion('.accordion-heading', '.accordion-block')
	burger('.burger-menu', '.burger')
	drop()
	scrolling('.pageup')
})