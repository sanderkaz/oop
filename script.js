function Telefon(marka, cena, kolor) {
  this.marka = marka;
  this.cena = cena;
  this.kolor = kolor;
}
Telefon.prototype.printInfo = function() {
console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ".");
}
var iPhone6S = new Telefon("Apple", 2250, "srebrny");
var SamsungGalaxyS6 = new Telefon("Samsung", 2000, "biały");
var OnePlusOne = new Telefon("OnePlus One", "1800", "czarny");

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();