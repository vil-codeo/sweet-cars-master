const iconDown = (bottomScrollSection, scrollTopSection) => {
	const bottomScroll = document.querySelector(bottomScrollSection),
		elem = document.querySelector(scrollTopSection);
	bottomScroll.addEventListener('click', (event) => {
		const elemCountHeight = elem.scrollHeight
		event.preventDefault()
		window.scrollBy({top: elemCountHeight, behavior: "smooth"});
	})
}
const select = () => {
	let selectCurrent = document.querySelectorAll('.select__header'),
		selectItem = document.querySelectorAll('.select__item');
	selectCurrent.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.currentTarget.parentElement.classList.toggle('is-open');
		})
	});
	selectItem.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.currentTarget.closest('.select').querySelector('.select__current').innerHTML = e.currentTarget.innerHTML;
			e.currentTarget.closest('.select').classList.remove('is-open');
		})
	});
};
const sliceText = () => {
	const text = document.querySelector('.basket__title'),
		desc = document.querySelector('.basket__desc');
	if (text.clientHeight > 350) {
		desc.classList.add('basket__desc--is-open')
	}
}
const tab = function () {
	let tabNav = document.querySelectorAll('.prices__navigation-item'),
		tabContent = document.querySelectorAll('.prices__content'),
		tabName;
	tabNav.forEach((item) => {
		item.addEventListener('click', selectTabNav)
	});

	function selectTabNav() {
		tabNav.forEach((item) => {
			item.classList.remove('is-active');
		});
		this.classList.add('is-active');
		tabName = this.getAttribute('data-tab-name');
		selectTabContent(tabName);
	}

	function selectTabContent(tab) {
		tabContent.forEach((item) => {
			let classList = item.classList;
			classList.contains(tab) ? classList.add('is-active') : classList.remove('is-active');
		});
	}
};
const accordion = (accordionsSection, contentsSection, activeClass) => {
	const accordions = document.querySelectorAll(accordionsSection),
		contents = document.querySelectorAll(contentsSection);

	const active = (item, index) => {
		accordions.forEach((elem, i) => {
			elem.classList.add(activeClass)
			if(i !== index){
				elem.classList.remove(activeClass)
			}
		})
		contents.forEach((content, i) => {
			if (i !== index) {
				content.classList.remove('active')
				content.style.height = '';
			}
		})
		item.style.height = `${item.scrollHeight}px`;
		item.classList.add('active')
	}
	accordions.forEach((item, i) => {
		item.addEventListener("click", () => active(contents[i], i))

	});
}
const animation = () => {
	AOS.init({
		easing: 'ease-in-out',
		once: true,
		mirror: true,
		offset: 100,
		duration: 700,
	});
}
accordion('.question-answer__accordion-btn', '.question-answer__accordion-content', 'question-answer__accordion-btn--active')
iconDown('.header__bottom-icon', '.s-discount')
select()
sliceText()
tab();
animation()


