var lisaLab = {
    name: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.name = " + this.name);
        console.log("outer func:  self.name = " + self.name);
        (function() {
            console.log("inner func:  this.name = " + this.name);
            console.log("inner func:  self.name = " + self.name);
        }());
    }
};
lisaLab.func();


// no.3 =>  outer func:  this.name =bar
//outer func:  self.name =bar
//inner func:  this.name =undefined
//inner func:  self.name =bar
//this could work if only there was another nested function inside the 
//inner function because the child function cannot access the contents of 
//its parent function.






 // no.4 => in this method "this" is used to acesss the object "bar"
 //in the inner scope from the "parent scope"outer scope that is why when you 
 //console.log("outer func: this.name=" +this.name) you get "bar"
 //but when you use "this" in the "child scope"inner scope you get an "undefined" 
 //because there is no other inner scope but when you use self which 
 //also refers to this =>var self =this you get "bar";referring to 
 //the object,  in both scopes.

