//What will the code below output to the console and why?


var myObject = {
    name: "Lovelace",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name)
        (function() {//iife
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};
myObject.func();

/* The out put wil be
outer func:  this.name = Lovelace - the JavaScript this keyword refers to the object it belongs to and when in a function it refers to the global object
outer func:  self.name = Lovelace -whatever value this gives is stored in self
inner func:  this.name = undefined
inner func:  self.name = Lovelace  -- this is due to closure where the innner function does not forget the variables of the outter functions 
even when the outer function is done executing


*/
