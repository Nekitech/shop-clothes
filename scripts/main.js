function boot() {

	slider({
		itemsToView: 4,
		statusQueryStr: '.others__slider__move-status',
		bodyQueryStr: '.others__slider__content',
		leftQueryStr: '.others__slider__move-left',
		rightQueryStr: '.others__slider__move-right',
		typeOfStatus:'small'
	})

	slider({
			itemsToView: document.body.clientWidth > 1000 ? 4 : window.bodyWidth > 600? 3 : window.bodyWidth > 400 ? 2 : 1,
			bodyQueryStr: '.cooperations__slider__content',
			leftQueryStr: '.cooperations__slider__left-btn',
			rightQueryStr: '.cooperations__slider__right-btn',
	})

}
boot();
window.addEventListener('resize',()=>{
	boot()
})