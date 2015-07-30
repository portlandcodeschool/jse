
var exchange = {
	unitsPerDollar: {
		dollar: 1,
		euro: 0.91,
		pound: 0.64,
		yen: 123.98,
		yuan: 6.21
	},

	convertTo: function(dollars,unit) {
		return dollars * this.unitsPerDollar[unit];
	},

	convertFrom: function(amount,unit) {
		return amount / this.unitsPerDollar[unit];
	}
}

console.log(exchange.convertTo(1000,'pound'));
console.log(exchange.convertFrom(1000,'yen'));