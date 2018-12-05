function copyArray(arr, addEle) {
	var tempArray = [];
	for(var i in arr) tempArray[i] = arr[i];
	
	for (var a=1; a < arguments.length; a++) {
		tempArray[tempArray.length] = arguments[a];
	}
	document.writeln(arguments);
	console.log(arguments);
	console.log(arguments.length);
	return tempArray;
	//arguments 는 파라미터로 받은 값이 갯수에 상관없이 그대로 배열로 받아지며 
	//그 받아진 값을 이용해서 처리가 가능하다.
	//그래서 여기서는 arr이 0번째로 하나의 배열로 받아지고 그 뒤에 써진 값들은 
	//차례대로 arguments에 배열로 자동으로 들어가게 된다 그래서 addEle 를 쓰든말든 상관없음
}

var testArray = [1,2,3];
var a = copyArray(testArray);
var b = copyArray(testArray, 4, 5, 6);

document.writeln("<p>testArray의 값은 " + testArray.toString() + "입니다.</p>");
document.writeln("<p>copyArray(testArray)의 값은 " + a.toString() + "입니다.</p>");
document.writeln("<p>copyArray(testArray, 4, 5, 6)의 값은 " + b.toString() + "입니다.</p>");


function max() {
	var max = Number.NEGATIVE_INFINITY;
	for (i=0; i < arguments.length; i++) {
		if (arguments[i] > max) max = arguments[i];
	}
	return max;
}

var maxNumber = max(23,11,42,52,34,75,33);
document.writeln(maxNumber);