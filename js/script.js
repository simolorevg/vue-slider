let {createApp} = Vue;
createApp({
    data(){
        return {
            showedImg : 0,
            carousel: null,
            time: 1000,
            isActive: true,
            imgSrc:'img/01.webp',
            altSrc:'Marvel\'s Spiderman Miles Morale',
            textContent:'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            titleContent: 'Marvel\'s Spiderman Miles Morale',
            slides : [
                {
                    image: 'img/01.webp',
                        title: 'Marvel\'s Spiderman Miles Morale',
                        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                    }, {
                        image: 'img/02.webp',
                        title: 'Ratchet & Clank: Rift Apart',
                        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                    }, {
                        image: 'img/03.webp',
                        title: 'Fortnite',
                        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                    }, {
                        image: 'img/04.webp',
                        title: 'Stray',
                        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                    }, {
                        image: 'img/05.webp',
                        title: "Marvel's Avengers",
                        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                    }
                ]
        }
    },
    mounthed(){
        this.automatiCarousel();
     },
    methods: {
        nextImg(){
            this.isActive = false;
            console.log('Stai cliccando next');
            if(this.showedImg < this.slides.length - 1){
                this.showedImg++;
            }else{
                this.showedImg = 0;
            }
            this.imgSrc = this.slides[this.showedImg].image;
            this.altSrc = this.slides[this.showedImg].title;
            this.textContent = this.slides[this.showedImg].text;
            this.titleContent = this.slides[this.showedImg].title;
            console.log(this.showedImg)
        },
        prevImg(){
            console.log('Stai cliccando prev');
            if(this.showedImg === 0){
                this.showedImg = this.slides.length - 1;
            }else{
                this.showedImg--;
            }
            this.imgSrc = this.slides[this.showedImg].image;
            this.altSrc = this.slides[this.showedImg].title;
            this.textContent = this.slides[this.showedImg].text;
            this.titleContent = this.slides[this.showedImg].title;
            console.log(this.showedImg)
        },
        automatiCarousel(){
            this.carousel = setInterval(this.nextImg, this.time);
        }
    }
}).mount('#app')