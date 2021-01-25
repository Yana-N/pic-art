const modals = () => {
	let btnPressed

	function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
		const trigger = document.querySelectorAll(triggerSelector),
			modal = document.querySelector(modalSelector),
			close = document.querySelector(closeSelector),
			windows = document.querySelectorAll('[data-modal]'),
			scroll = calcScroll()

		function closeModal() {
			windows.forEach(item => item.style.display = 'none')

			modal.style.display = 'none'
			document.body.style.overflowY = 'initial'
			document.body.style.marginRight = '0px'
		}

		function openModal() {
			modal.style.display = 'block'
			document.body.style.overflowY = 'hidden'
			document.body.style.marginRight = `${scroll}px`
		}

		trigger.forEach(el => {
			el.addEventListener('click', (e) => {
				btnPressed = true

				if (e.target) e.preventDefault()

				if (destroy) el.remove()

				windows.forEach(item => {
					item.style.display = 'none'
					item.classList.add('animated', 'fadeIn')
				})

				openModal()
			})
		})

		close.addEventListener('click', () => closeModal())
		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				closeModal()
			}
		})
	}

	function showModalByTime(selector, time) {
		setTimeout(() => {
			let display

			document.querySelectorAll('[data-modal]').forEach(item => {
				if (getComputedStyle(item).display !== 'none') {
					display = 'block'
				}
			})

			if (!display) {
				let scroll = calcScroll()

				document.querySelector(selector).style.display = 'block'
				document.body.style.overflow = 'hidden'
				document.body.style.marginRight = `${scroll}px`
			}
		}, time)
	}

	function calcScroll() {
		let div = document.createElement('div')

		div.style.cssText = 'width: 50px; height: 50px; overflow-Y: scroll; visibility: hidden;'
		document.body.appendChild(div)

		let scrollWidth = div.offsetWidth - div.clientWidth
		div.remove()

		return scrollWidth
	}

	function openByScroll(selector) {
		// let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)

		window.addEventListener('scroll', () => {
			if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= document.body.scrollHeight)) {
				document.querySelector(selector).click()
			}
		})
	}

	bindModal('.button-design', '.popup-design', '.popup-design .popup-close')
	bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close')
	bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true)
	// showModalByTime('.popup-consultation', 6000)
	openByScroll('.fixed-gift')
}

export default modals