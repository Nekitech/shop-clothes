function slider({
	itemsToView = 4,
	statusQueryStr,
	setTransition = '0.6s',
	bodyQueryStr,
	leftQueryStr,
	rightQueryStr,
	typeOfStatus = 'small'
}){	
	let items = document.querySelector(bodyQueryStr).querySelectorAll('div');
	let bodyWidth = document.querySelector(bodyQueryStr).getBoundingClientRect().width;
	let id = 0;
	let canScroll = true;
	let curPage = 1;
	document.querySelector(bodyQueryStr).style.overflowX = 'hidden'
	items.forEach((item)=>{
		item.style.transition = setTransition;
		item.style.position = 'absolute';
		item.style.left = bodyWidth/(itemsToView)*id + bodyWidth/(itemsToView)/2 - item.getBoundingClientRect().width/2 +'px';
		id+=1;
	})
	document.querySelector(rightQueryStr).addEventListener('click',()=>{
		if ((curPage < Math.ceil(items.length/itemsToView)) && (canScroll))
		{
			canScroll = false;
			items.forEach((item)=>{
				item.style.left = item.offsetLeft - bodyWidth + "px"
			})
			updateStatus(1)
			setTimeout(()=>{
				canScroll=true;
			},1000)
		}
	})
	document.querySelector(leftQueryStr).addEventListener('click',()=>{
		if ((curPage > 1) && (canScroll)){
			canScroll=false
			items.forEach((item)=>{
				item.style.left = item.offsetLeft + bodyWidth + "px"
			})
			updateStatus(-1)
			setTimeout(()=>{
				canScroll=true;
			},1000)
		}

	})

	function updateStatus(n){
		curPage+=n;
		if (!!statusQueryStr)
		document.querySelector(statusQueryStr).innerHTML = curPage + '/' + Math.ceil(items.length/itemsToView);
	}

	updateStatus(0);
}

