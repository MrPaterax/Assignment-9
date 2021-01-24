const john = {
  firstName: "john",
  lastName: "williams",
  birthYear: 1996,
  job: "student",
  friends: ["Mike","Jake","Peter"],
  calAge: function(){
    this.age = 2021 - this.birthYear
    return this.age
  },
  getSummary: function(){
    return `${this.firstName} is ${this.calAge()} years old, and he has a drivers license`
  }

};

console.log(`${john.firstName} has ${john.friends.length} friends and his best friends are called ${john.friends}`)
console.log(john.getSummary())


var elements = document.getElementsByClassName("button");

var visibleFunction = function() {
  let d = document.getElementById("openModal");
  d.className += " visible";
};

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', visibleFunction, false);
}

var noSightFunction = function(){
  let d = document.getElementById("openModal");
  d.classList.remove("visible");
}

var closeButton = document.getElementById("closebutton")
closeButton.addEventListener('click', noSightFunction, false)
