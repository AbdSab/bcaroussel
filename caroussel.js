function caroussel(config, data){
    this.CLASS = config.CLASS || 'caroussel';
    this.MAX_ELEMENT = config.MAX_ELEMENT || 6;
    this.DELAY_TIME = config.DELAY_TIME || 500;
    this.currentMax = this.MAX_ELEMENT;
    this.dataLength = data.length;
    this.data = data;

    const carousselDiv = document.querySelector("."+this.CLASS);

    carousselDiv.innerHTML += `<div class="caroussel-prev delete-button">&lt;</div><div class='caroussel-elements row'>`;
    for (let i=0; i<this.MAX_ELEMENT; i++){
        let div = "<div class='col-2 caroussel-element'>";
        div += `<a href="${data[i].link}"><img src='${data[i].image}' class="w-100"/></a>`;
        div += "</div>";
        document.querySelector(".caroussel-elements").innerHTML += div;
    }
    carousselDiv.innerHTML += `</div><div class="caroussel-next appear-button">&gt;</div>`;

    const prevButton = document.querySelector(".caroussel-prev");
    const nextButton = document.querySelector(".caroussel-next");

    nextButton.addEventListener("click", (event)=>{
        if(this.currentMax >= this.dataLength){
            return;
        }
        this.currentMax++;
        const elements = document.querySelectorAll(".caroussel-element");
        elements[0].classList.add('delete');
        elements.forEach((elm)=>{
            elm.classList.add("translate-left");
        });
        const timeout = setTimeout(()=>{
            elements[0].remove();
            elements.forEach((elm)=>{
                elm.classList.remove("translate-left");
            });
            let div = "<div class='col-2 caroussel-element'>";
            div += `<a href="#"><img src='${data[this.currentMax-1].image}' class="w-100"/></a>`;
            div += "</div>";
            document.querySelector(".caroussel-elements").innerHTML += div;
            clearTimeout(timeout);
        },this.DELAY_TIME);
        this.checkButtons();
    });

    prevButton.addEventListener("click", (event)=>{
        if(this.currentMax <= this.MAX_ELEMENT){return;}
        this.currentMax--;
        const elements = document.querySelectorAll(".caroussel-element");
        elements[this.MAX_ELEMENT-1].classList.add('delete');
        elements.forEach((elm)=>{
            elm.classList.add("translate-right");
        });
        const timeout = setTimeout(()=>{
            elements[this.MAX_ELEMENT-1].remove();
            elements.forEach((elm)=>{
                elm.classList.remove("translate-right");
            });
            let div = "<div class='col-2 caroussel-element'>";
            div += `<a href="#"><img src='${data[this.currentMax -this.MAX_ELEMENT].image}' class="w-100"/></a>`;
            div += "</div>";
            document.querySelector(".caroussel-elements").innerHTML = div + document.querySelector(".caroussel-elements").innerHTML ;
            clearTimeout(timeout);
        },this.DELAY_TIME);
        this.checkButtons();
    });

    this.checkButtons = function(){
        if(this.currentMax === this.dataLength){
            nextButton.classList.add("delete-button");
            nextButton.classList.remove("appear-button");
        }else{
            nextButton.classList.remove("delete-button");
            nextButton.classList.add("appear-button");
        }
        if(this.currentMax <= this.MAX_ELEMENT){
            prevButton.classList.add("delete-button");
            prevButton.classList.remove("appear-button");
        }else{
            prevButton.classList.remove("delete-button");
            prevButton.classList.add("appear-button");
        }
    }

}