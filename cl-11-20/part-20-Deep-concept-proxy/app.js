// const app = Vue.createApp({
//     data() {
//         return {
//             name: ""
//         }
//     },

//     methods: {
//         clear(){
//             this.name = "";
//         }
//     }
// });

// app.mount("#app");



//Vanilla Javascript Raw Code

var data = {
    name: ""
};

var handler = {
    set(target, key, value) {
        console.log(target);
        console.log(key);
        console.log(value);

        if (key === "name") {
            var outputElement = document.querySelector("#outputName");
            // var outputElement = document.getElementById("outputName");
            //console.log(outputElement);
            outputElement.innerHTML = value;            
        }
    }
}
var proxyData = new Proxy(data, handler);

proxyData.name = "Shad";