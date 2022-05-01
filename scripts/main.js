slider({
	itemsToView: 4,
	statusQueryStr: '.others__slider__move-status',
	bodyQueryStr: '.others__slider__content',
	leftQueryStr: '.others__slider__move-left',
	rightQueryStr: '.others__slider__move-right',
	typeOfStatus:'small'
})

window.addEventListener('resize',()=>{
	slider({
	itemsToView: 4,
	statusQueryStr: '.others__slider__move-status',
	bodyQueryStr: '.others__slider__content',
	leftQueryStr: '.others__slider__move-left',
	rightQueryStr: '.others__slider__move-right',
	typeOfStatus:'small'
})
})