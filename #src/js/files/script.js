"use strict"

// document.querySelector('.burger').addEventListener('click', function() {
// 	this.classList.toggle('_active');
// })

// vars



// functions




// listeners



// ____________________________
// case block

const briefCase = document.getElementById("case")
function toggleColor(arg) {
    const currentColor = arg.getAttribute("fill")
    const newColor = currentColor === "#D7D7D7" ? "#D35D05" : "#D7D7D7"
    arg.setAttribute("fill", newColor)
}
if (briefCase) {
    const briefcaseBlock = document.querySelector(".case")
    const caseBtn = document.querySelector(".header__left-items svg path")
    briefCase.addEventListener("click", function (e) {
        e.preventDefault()
        briefcaseBlock.style.height = briefcaseBlock.offsetHeight == "0" ? "270px" : "0"
        toggleColor(caseBtn)

    })
}






// _________________________________

const buyBtn = document.querySelector(".buy")
const modal = document.querySelector(".modal")
const close = document.querySelector(".modal .closeModal")
const body = document.getElementById("body")
const buyModal = document.getElementById("buyModal")





const toggleModal = (id) => {
    const allModals = document.getElementsByClassName("modal")
    for (let i = 0; i < allModals.length; i++) {
        allModals[i].style.display = allModals[i].getAttribute('id') === id ? "block" : "none"

    }

}




// ___________________________

// info open +
const toggleInfo = (id) => {
    const allInfoBlocks = document.getElementsByClassName("info__item-hidden")
    const minus = document.getElementById(id).lastElementChild

    for (let i of allInfoBlocks) {
        if (i.classList.contains(id)) {
            i.classList.toggle("opened")
            minus.style.display = minus.style.display !== "none" ? "none" : "block"

        }
    }

}


// _________________________________
// 
const chooseMarket = document.getElementById("choosemarket")

if (chooseMarket) {

    const chooseBlock = document.getElementById("chooseblock")
    chooseMarket.addEventListener("click", function () {
        chooseBlock.classList.toggle("choose-market")
    })
}


// ___________________

// header tel number change to ` button  scroll


const header = document.getElementById("header")
const messageBtn = document.getElementById("message")


window.addEventListener("scroll", function () {
    const burger = document.getElementById("burger")
    const leftItems = document.getElementById("leftitems")
    if (this.scrollY > 300) {
        messageBtn.style.cssText = window.innerWidth <= 960 ?  "height:50px;" : "height:60px;"
        if(this.window.innerWidth <= 960) {
            leftItems.style.display = "none"
        }
    } else {
        messageBtn.style.cssText = "height:0;"
        leftItems.style.display = "flex"
    } 
        
})
const burger = document.getElementById("burger")
if(burger) {
    window.addEventListener("scroll" , function() {
       if(this.scrollY > 300 && window.innerWidth <= 960 ) {
         burger.style.display = "flex"
       } else {
        burger.style.display = "none"
       }
    })
}


// ____________________________

var swiper = new Swiper(".products .swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    navigation: {
        nextEl: ".products .slidenext",
        prevEl: ".products .slideprev",
    },
});
var swiper = new Swiper(".comments .swiper", {
    slidesPerView: "auto",
    navigation: {
        nextEl: ".comments .slidenext",
        prevEl: ".comments .slideprev",
    },
});

var swiper = new Swiper(".singleproduct .swiper", {
    slidesPerView: "auto",
    navigation: {
        nextEl: ".singleproduct .slidenext",
        prevEl: ".singleproduct .slideprev",
    },
});




var swiper = new Swiper(".for-whom .swiper", {
    slidesPerView: "auto",
    navigation: {
        nextEl: ".for-whom .slidenext",
        prevEl: ".for-whom .slideprev",
    },
});






var swiper = new Swiper(".card-singleproduct .swiper", {
    slidesPerView: "auto",
    navigation: {
        nextEl: ".card-singleproduct .slidenext",
        prevEl: ".card-singleproduct .slideprev",
    },
});


// ______________________________
// burger

const headerMobile = document.getElementById("header-mobile")
const toggleHeaderMobile = () => {
    if (headerMobile.children[0].offsetWidth < 10) {
        headerMobile.style.display = "flex"
        headerMobile.children[0].style.width = "100%"
        return
    } else {
        headerMobile.style.display = "none"
        headerMobile.children[0].style.width = "0"
        return
    }
}
const headerBurger = document.getElementById("burger")
if (headerBurger) {
    const mobileMenu = document.getElementById("mobilemenu")
    headerBurger.addEventListener("click", function (e) {
        toggleHeaderMobile()
        e.stopPropagation()
    })
    window.addEventListener("click", function () {
        if (!headerMobile.children[0].offsetWidth < 10) {
            headerMobile.style.display = "none"
            headerMobile.children[0].style.width = "0"
            return
        }
    })
    mobileMenu.addEventListener("click" , function(e) {
        e.stopPropagation()
    })

}


// _______________________________
// language select

const lang = document.getElementById("lang")
if (lang) {
    lang.addEventListener("click", function () {
        const langMenu = document.getElementById("langmenu")
        const caret = document.getElementById("changeColorVector")
        const options = langMenu.children
        const selectedLang = document.getElementById("selected")
        toggleColor(caret)
        langMenu.style.display = langMenu.style.display === "block" ? "none" : "block"
        for (let i of options) {
            i.addEventListener("click", function (e) {
                e.preventDefault()
                const notSelected = i.children[0].textContent
                const selected = selectedLang.textContent
                selectedLang.textContent = notSelected
                i.children[0].textContent = selected
            })
        }
    })
}


// mobile lang select 
const mobileLang = document.getElementById("mobilelang")

if(mobileLang) {
    mobileLang.addEventListener("click" , function() {
        const mobileSelected = document.getElementById("mobileselected")
        const mobileCaret = document.getElementById("mobilechangecolorvector")
        const mobileLangMenu = document.getElementById("mobilelangmenu") 
        const mobileOptions = mobileLangMenu.children
        toggleColor(mobileCaret)
        mobileLangMenu.style.display = mobileLangMenu.style.display === "block" ? "none" : "block"
        for(let i of mobileOptions) {
            i.addEventListener("click" , function(e) {
                e.preventDefault()
                const notSelected = i.children[0].textContent
                const selected = mobileSelected.textContent
                mobileSelected.textContent = notSelected
                i.children[0].textContent = selected
            })
        }

    })
}



// _________________
// open close info blocks in Questions

const AllInfoBlocks = document.getElementsByClassName("info-block__item")
if (AllInfoBlocks) {
    for (let i of AllInfoBlocks) {
        i.addEventListener("click", function () {
            const caret = i.children[0].children[1].children[0].children[0]
            i.children[1].classList.toggle("open")
            toggleColor(caret)
        })
    }
}

// __________________________
// pharma form copy item +

const pharmaBlock = document.getElementById("item")

if (pharmaBlock) {
    const addNew = document.getElementById("addnew")
    const pharmaBlockChild = pharmaBlock.children[1]
    const pharmaBlockcopy = pharmaBlockChild.cloneNode(true)
    addNew.addEventListener("click", function (e) {
        e.preventDefault()
        addNew.appendChild(pharmaBlockcopy)
    })
}

const animateFlower = document.getElementById('animate-flower')

if (animateFlower) {
    window.addEventListener('scroll', function () {
        let y = window.scrollY;
        let animateY = animateFlower.offsetTop
        if (y > (animateY - animateFlower.offsetHeight / 2)) {
            animateFlower.classList.add('active')
            window.removeEventListener('scroll', function () {})
        }
    })
}


new WOW().init();



// _____________________________

const mobileCase = document.getElementById("mobilecase")

if(mobileCase) {
    const mobileCaseBlock = document.getElementById("mobilecaseblock")
    mobileCase.addEventListener("click" , function(e) {
        e.preventDefault()
        mobileCaseBlock.style.display = mobileCaseBlock.style.display === "block" ? "none" : "block"      
    })
}



const reactionForm = document.getElementById("reaction")?.children[0]?.cloneNode(true);

const addNewReaction = () => {
    if (reactionForm) {
        document.getElementById('reaction').appendChild(reactionForm.cloneNode(true));
    } else {
        console.error("Reaction form element not found");
    }
};


const closeHeaderMenu = document.getElementById("closemenu")
if(closeHeaderMenu) {
    closeHeaderMenu.addEventListener("click" , function() {
        headerMobile.style.display = "none"
    })
}
