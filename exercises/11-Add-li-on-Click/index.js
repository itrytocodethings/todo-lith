let button = document.querySelector("#superDuperButton");
let ul = document.querySelector('#myList');
let count = 0;
button.addEventListener("click", function() {
	let suffixList = ['st', 'nd', 'rd', 'th'];
	let suffix;
	let countArr = count.toString().split('');
	let last = count.toString().split('').length - 1;
	if (count == 11 || count == 12 || count == 13) suffix = suffixList[3];
	else if (countArr[last] == 0 && countArr.length == 1) suffix = '';
	else if(countArr[last] == 1) suffix = suffixList[0];
	else if(countArr[last] == 2) suffix = suffixList[1];
	else if(countArr[last] == 3) suffix = suffixList[2];
	else suffix = suffixList[3];
	ul.innerHTML += `<li>${count}${suffix} element</li>`
	count++;
});
