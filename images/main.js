
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
            }}
          
    }

).mount('#app')







 