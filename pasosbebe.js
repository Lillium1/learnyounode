
var num = process.argv.slice(2);
var sum = num.reduce(function(vAnterior, vActual) {
	return Number(vAnterior)+ Number(vActual);
})
console.log(sum);



