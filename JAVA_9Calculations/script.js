//VAT exercise 1: VAT calculation

const VatAmountCalc = function (basePrice) {
    const VatAmount = (basePrice * 0.21);
    return VatAmount;
};

//console.log(VatAmountCalc(100));
//console.log(VatAmountCalc(250));
//console.log(VatAmountCalc(100));


//VAT exercise 1: Price incl VAT calculation

const PriceInclVat = function (basePrice) {
    const TotalPrice = (VatAmountCalc(basePrice) + basePrice);
    return TotalPrice;
};

console.log(PriceInclVat(100));
console.log(PriceInclVat(250));
console.log(PriceInclVat(0.75));

//VAT exercise 2: NettPrice Calculation

const BasePriceCalc = function (BrutoPrice) {
    const NettPrice = (BrutoPrice / 1.21);
    return NettPrice;
};
//console.log(BasePriceCalc(150));
//console.log(BasePriceCalc(90));
//console.log(BasePriceCalc(0.90));

//VAT exercise 2: NettPRice and VAT Amount Calculation

const SeperatePrice = function (BrutoPrice) {
    const VatAmount = BrutoPrice - BasePriceCalc(BrutoPrice);
    const roundedVat = Math.round(VatAmount * 100.0) / 100.0;
    const NettoPrice = BasePriceCalc(BrutoPrice)
    const roundedNettPrice = Math.round(NettoPrice * 100.0) / 100.0;
    return ("NettoPrijs = " + roundedNettPrice + " en BTW Bedrag = " + roundedVat);
}
console.log(SeperatePrice(150));
console.log(SeperatePrice(90));
console.log(SeperatePrice(0.90));

