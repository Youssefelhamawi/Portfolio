
let image1="image1.jpg";
let image2="image2.jpg";
let image3="image3.jpg";
let image4="image4.jpg";
let image5="image5.jpg";
let image6="image6.jpg";
let image7="image7.jpg";
let image8="image8.jpg";

const img =[image1, image2, image3,image4,image5,image6,image7,image8]

const { createApp } = Vue

createApp({
    data() {
      return {
        img,
        twins: img[0],
        sun: img[2],
        tree:img[4],
        chicago:img[6],
        message: "Hover over pictures!",
        note: "Musical Notes - Marcel Khalife"
      }
    },
    methods:{
        updateImage(id){
            this.twins=img[id]
        },
        resetImage(){
            this.twins =img[0];
        },
        updateImage1(id){
            this.sun=img[id]
        },
        resetImage1(){
            this.sun =img[2];
        },
        updateImage2(id){
        this.tree=img[id]
        },
        resetImage2(){
        this.tree =img[4];
        },
        updateImage3(id){
            this.chicago=img[id]
            },
        resetImage3(){
            this.chicago =img[6];
            },
        
        greet: function () {
            alert(`${this.message}`);
            console.log('Button clicked');},
            
        getFullName: function() {
                return this.note
            }},
    template:
    `
    <section class="main center">
        <div  id ="app">
          <p> Marcl Khalife is my favorite composer and singer. He is from Lebanon and has been perofrming for over 30 years now. You will find here a few of my fvorite songs for him.</p>
          <button  class ="button" v-on:click="greet">Click for secret message</button>
          <div>
            <h2 class="center">{{note}}</h2> <br>
          </div>
          <div class="column frame center">
            <img :src="twins"   @mouseover="updateImage(1)" @mouseleave="resetImage" />
          </div>

          <div class =" column frame center">
            <img :src="sun" @mouseover="updateImage1(3)" @mouseleave="resetImage1"/>
          </div>

          <div class ="column frame center">
            <img :src="tree" @mouseover="updateImage2(5)" @mouseleave="resetImage2"/>
          </div>
          <div class ="column frame center">
            <img :src="chicago" @mouseover="updateImage3(7)" @mouseleave="resetImage3"/>
          </div>

  
        
  </div>
  </section>`
          
    }

).mount('#app')







 