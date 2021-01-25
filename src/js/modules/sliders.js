const sliders = (slides, dir, prev, next) => {
	let slideIndex = 0,
		paused = false
	const items = document.querySelectorAll(slides)

	function showSlides(n) {
		if (n > items.length - 1) {
			slideIndex = 0
		}

		if (n < 0) {
			slideIndex = items.length - 1
		}

		items.forEach(item => {
			item.classList.add('animated')
			item.style.display = 'none'
		})

		items[slideIndex].style.display = 'block'
	}

	showSlides(slideIndex)

	function moveSlides(n) {
		showSlides(slideIndex += n)
	}

	try {
		const prevBtn = document.querySelector(prev),
			nextBtn = document.querySelector(next)

		prevBtn.addEventListener('click', () => {
			moveSlides(-1)
			items[slideIndex].classList.remove('slideInLeft')
			items[slideIndex].classList.add('slideInRight')
		})

		nextBtn.addEventListener('click', () => {
			moveSlides(1)
			items[slideIndex].classList.remove('slideInRight')
			items[slideIndex].classList.add('slideInLeft')
		})

	} catch (e) {
	}

	function activatedAnim() {
		if (dir === 'vertical') {
			paused = setInterval(function () {
				moveSlides(1)
				items[slideIndex].classList.add('slideInDown')
			}, 3000)
		} else {
			paused = setInterval(function () {
				moveSlides(1)
				items[slideIndex].classList.remove('slideInLeft')
				items[slideIndex].classList.add('slideInRight')
			}, 3000)
		}
	}

	activatedAnim()

	items[0].parentNode.addEventListener('mouseenter', () => {
		clearInterval(paused)
	})
	items[0].parentNode.addEventListener('mouseleave', () => {
		activatedAnim()
	})

}

export default sliders