class price{
    constructor(Priceperkm=60,Numberofkms){
        this.Priceperkm = Priceperkm;
        this.Numberofkms= Numberofkms;
    }
    getPrice(){
        return this.Priceperkm * this.Numberofkms
        }
}
const uberPrice = new price(60,3);
console.log(uberPrice.getPrice())