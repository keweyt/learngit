'use strict';
function get_str(num,len){
	return parseInt(num).toString(i);

}
function all_num(m,n){
	return Math.pow(m,n);
}

var mm=all_num(3,6);
console.log(mm);
var allstrs=[];
for(var i=0;i<mm;i++){
	var str=get_str(i,3);
	console.log(str);
	allstrs.push(str);
}
add a line
Git has a mutable index called stage.