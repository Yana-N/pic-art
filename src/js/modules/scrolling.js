const scrolling = (upSelector) => {
	const upElem = document.querySelector(upSelector),
		element = document.documentElement,
		body = document.body

	window.addEventListener('scroll', () => {
		element.scrollTop > element.clientHeight * 2
			? upElem.classList.add('active')
			: upElem.classList.remove('active')
	})

	// Scrolling with raf
	let links = document.querySelectorAll('[href^="#"]'),
		speed = .2

	links.forEach(link => {
		link.addEventListener('click', function (e) {
			e.preventDefault()

			let withTop = element.scrollTop,
				hash = this.hash,
				toBlock = document.querySelector(hash).getBoundingClientRect().top,
				start = null

			requestAnimationFrame(step)

			function step(time) {
				if (start === null) start = time

				let progress = time - start,
					r = (toBlock < 0
						? Math.max(withTop - progress / speed, withTop + toBlock)
						: Math.min(withTop + progress / speed, withTop + toBlock))

				element.scrollTo(0, r)

				r !== withTop + toBlock
					? requestAnimationFrame(step)
					: location.hash = hash
			}
		})
	})

	// Pure js scrolling
	// const calcScroll = () => {
	// 	upElem.addEventListener('click', function (e) {
	// 		let scrollTop = Math.round(body.scrollTop || element.scrollTop)
	//
	// 		if (this.hash !== '') {
	// 			e.preventDefault()
	// 			let hashElem = document.querySelector(this.hash),
	// 				hashElemTop = 0
	//
	// 			while (hashElem.offsetParent) {
	// 				hashElemTop += hashElem.offsetTop
	// 				hashElem = hashElem.offsetParent
	// 			}
	//
	// 			hashElemTop = Math.round(hashElemTop)
	// 			smoothScroll(scrollTop, hashElemTop, this.hash)
	// 		}
	// 	})
	// }
	//
	// const smoothScroll = (from, to, hash) => {
	// 	let timeInterval = 1,
	// 		prevScrollTop,
	// 		speed
	//
	// 	to > from
	// 		? speed = 30
	// 		: speed = -30
	//
	// 	let move = setInterval(function () {
	// 		let scrollTop = Math.round(body.scrollTop || element.scrollTop)
	//
	// 		if (
	// 			prevScrollTop === scrollTop ||
	// 			(to > from && scrollTop >= to) ||
	// 			(to < from && scrollTop <= to)
	// 		) {
	// 			clearInterval(move)
	// 			history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash)
	// 		} else {
	// 			body.scrollTop += speed
	// 			element.scrollTop += speed
	// 			prevScrollTop = scrollTop
	// 		}
	// 	}, timeInterval)
	// }
	//
	// calcScroll()
}

export default scrolling