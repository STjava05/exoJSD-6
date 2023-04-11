// document.querySelector(".paragraph").className = "paragraph blue";
// let p =document.querySelector(".paragraph");
// p.classList.remove("blue");
// p.classList.add("red");
// p.style.fontSize ="20px";
// window.setInterval(function(){
//     p.classList.toggle("blue")
// },1000)


// let l2 = document.createElement("th");
// l2.textContent ="total";
// th.parentNode.appenchild(l2);


//ES.7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// document.getElementById('first').innerHTML = 'NewShop';
//

//ES.8: Scrivi una funzione per cambiare il colore di background della pagina
// document.body.style.backgroundColor = "red";

//ES.9: Scrivi una funzione per cambiare l'indirizzo presente nel footer in un altro, fittizio
// document.getElementById('footer').innerText = 'piazza della republica 150 prato';

//ES.10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// let changeClass = document.querySelectorAll('a');   
// for (let i = 0; i < changeClass.length; i++) {          
//     changeClass[i].classList.add("BlackList");  
// } console.log (changeClass);

//ES.11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// let bipclass = document.querySelectorAll("img");
// for(let i = 0; i <bipclass.length;i++){
//     bipclass[i].classList.toggle("hidden");
   
// }
// console.log(bipclass);



// function toggleImageVisibility() {
//     let images = document.querySelectorAll("table img");
//     for (let i = 0; i < images.length; i++) {
//       images[i].classList.toggle("hidden");
//     }
//   }

//ES.12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

// function changeColor() {
//     let prices = document.querySelectorAll('.price');
//     let colors = ['red', 'blue', 'green', 'yellow', 'purple'];
//     for(let i=0; i< prices.length; i++) {
//      let price= prices[i]
//       let randomColor = colors[Math.floor(Math.random() * colors.length)];
//       price.style.color = randomColor;
//     };
//   }

//   function changeColor() {
//     let prices = document.querySelectorAll('.price');
//     let colors = ['red', 'blue', 'green', 'yellow', 'purple'];
//     prices.forEach(price => {
//       let randomColor = colors[Math.floor(Math.random() * colors.length)];
//       price.style.color = randomColor;
//     });
//   }


// let phrase= document.querySelectorAll('p');
// for(let i=0; i<phrase.length; i++){
//     let ps = phrase[i]
    
//     let rougit = function(){
//         this.classList.toggle('red');
// }
// ps.addEventListener("click", rougit)
    
// }

 