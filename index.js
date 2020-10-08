let key = ['M1', 'M2', 'L1', 'L2', 'R1', 'R2']
const trEl = Array.from(document.querySelectorAll('tr'))
let result = {}

key.forEach(function(e, i){
	result[e] = 0
})

trEl.forEach(function(e, i) {
	if (i > 1) {
		key.forEach(function(f, j) {
			if (e.children[3].innerText.startsWith(f)) {
				result[f] += 1
			}
		})
	}
})

let total = 0
for(const prop in result){
	total += result[prop]
}
console.log("Total Voucher: " + total)
console.log(result)
