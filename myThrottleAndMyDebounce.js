// Function.prototype.myThrottle = function(interval) { 
//     let tooSoon = false;
//     let that = this;
//     return function() {
//         if (tooSoon === false) {
//             tooSoon = true;
//             setTimeout(function() {
//                 tooSoon = false;
//             }, interval) 
//             that();
//     }
//   }
// } 

Function.prototype.myThrottle = function(interval) {
    // declare a variable outside of the returned function
    let tooSoon = false;
    return (...args) => {
      // the function only gets invoked if tooSoon is false
      // it sets tooSoon to true, and uses setTimeout to set it back to
      // false after interval ms
      // any invocation within this interval will skip the if 
      // statement and do nothing
      if (!tooSoon) {
        tooSoon = true;
        setTimeout(() => tooSoon = false, interval);
        this(...args);
      }
    }
  }




class Neuron {
    fire() {
        console.log("Firing!");
    }
}

const neuron = new Neuron();

neuron.fire = neuron.fire.myThrottle(500);

setInterval(() => {
    console.log("neuron", neuron);
    neuron.fire();
}, 10);
