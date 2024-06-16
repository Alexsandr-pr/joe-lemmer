import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

import burgerMenu from "./ui/burger.js";
burgerMenu();

//импорт меню аккордеон
//import  accordion  from "./ui/accordion.js";
//accordion();

//import tabs from "./ui/tabs.js";
//tabs(triggerClass, contentClass);

import DynamicAdapt from "./modules/dynamicadapt.js";
const da = new DynamicAdapt("max");
da.init();







const animItems = document.querySelectorAll("._anim-items");

if(animItems.length > 0) {

    window.addEventListener("scroll" , animOmScroll );
    function animOmScroll() {
        for(let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const offsetHeight = offset(animItem).top;
            const elementHeight = animItem.scrollHeight;
            const animNumber = 4;

            let startAnim = window.innerHeight - elementHeight/animNumber;
            if(window.innerHeight > elementHeight) {
                startAnim = window.innerHeight - elementHeight/animNumber;
            }

            if((scrollY > offsetHeight - startAnim) && scrollY < (offsetHeight + elementHeight)) {
                animItem.classList.add("_start-anim");
            } else {
				if(!animItem.classList.contains("no-repeat-anim")) {
					animItem.classList.remove("_start-anim");
				}
                
            }

        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft};
    }

    setTimeout(()=> {
        animOmScroll();
    }, 300);
}



