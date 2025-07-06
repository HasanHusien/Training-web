let option = localStorage.getItem("Color-option")
if(option !== null){
        // for check
        // this line for links them togther
        document.documentElement.style.setProperty('--main-color',option)

       /// remove clase active form all 
        let allACtivs = document.querySelectorAll('.active')
        handelClasses(allACtivs)
}

function handelClasses (ele){
        ele.forEach(element =>{
            element.classList.remove('active')
            if(element.dataset.color == option){
                element.classList.add('active')
            }
        })
}

let ImagesOptions = true;
let ImagesInterval ;


// switch background
const backgroundEl = document.querySelectorAll('.random-backgrond span') 
backgroundEl.forEach(span =>{
    span.addEventListener("click", (e) =>{

        // remove active form all cheldern
        handelActive(e)

        if(e.target.dataset.color === 'yes'){

        ImagesOptions = true;
        radomImages()
        localStorage.setItem('background_option', true);
    }else {

        ImagesOptions = false
        clearInterval(ImagesInterval)
        localStorage.setItem('background_option', false);
    }
    }); 
});

// Images
let landing = document.querySelector(".landing-page");
//  My image 
MyArray =['01.png','02.jpeg','03.jpg','04.jpg','05.jpg'];
// change my image
landing.style.backgroundImage = 'url("/image/03.jpg")';




// check local Storage item
let localStorageItem = localStorage.getItem('background_option');

// check local Storage isnt empty
if(localStorageItem !== null){

    if(localStorageItem == 'true'){
        ImagesOptions = true
    }else {
        ImagesOptions = false
    }
    //Remove class active from all
    document.querySelectorAll('.random-backgrond span').forEach((e) => {

        e.classList.remove('active')
    });
    if(localStorageItem == 'true'){

        document.querySelector('.random-backgrond .yes').classList.add('active');
    }else {
        document.querySelector('.random-backgrond .no').classList.add('active');
    }
}
// random Images
function radomImages(){

    if(ImagesOptions === true){
    
    ImagesInterval = setInterval(() => {

    let random = Math.floor(Math.random() * MyArray.length);

    landing.style.backgroundImage = `url('/image/${MyArray[random]}')`;
}, 3000);
    }
}
radomImages()
// handel active
function handelActive(ev){

        ev.target.parentElement.querySelectorAll('.active').forEach(element =>{
            element.classList.remove('active')
        })
        ev.target.classList.add('active')
}
let bulltesItems = document.querySelectorAll('.rand span');

let bulltesContainer = document.querySelector('.nav-bulltes');

let localBulltes = localStorage.getItem('option-bulltes');

let settingBox = document.querySelector(".setting-box");
let icon = document.querySelector(".con-icon .icon");
// rotate icone

icon.onclick = function (){
    this.classList.toggle("fa-spin")
    settingBox.classList.toggle("open")
}
// switch color
const liColor = document.querySelectorAll('.color-list li')

liColor.forEach(li =>{
    li.addEventListener("click", (e) =>{
        // Set color in root
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color)
        //set color on local Storge
        localStorage.setItem('Color-option',e.target.dataset.color)

        // remove active form all cheldern
        handelActive(e)
    });
});


// our skills animations very improtant
let skills = document.querySelector('.skills');
window.onscroll = function () {
    let PageyoSet = this.pageYOffset;

    if(PageyoSet >= 640){
        let allSpans = document.querySelectorAll('.skills .skills-progress span')
                allSpans.forEach(skill => {
                    skill.style.width = skill.dataset.progress
        })
    }
}
//  the pobup for images very improtant
let allImg = document.querySelectorAll('.gallary img');

    allImg.forEach(img => {
    img.addEventListener('click', (e) => {

        // create ovelay
        let pobup = document.createElement('div');
        pobup.className = 'pobup-overlay';
        document.body.appendChild(pobup)

        // creat pobup box the img
        let pobupBox = document.createElement('div');
        pobupBox.className = 'pobup-box';

        // creatr img title 
        if( img.alt !== null){

        let imgHeading = document.createElement('h3');

        let imgHeadingText = document.createTextNode(img.alt);

        imgHeading.appendChild(imgHeadingText);

        pobupBox.appendChild(imgHeading);
        }

        // create img tag
        let pobupimg = document.createElement('img');

        // for get source
        pobupimg.src = img.src 

        pobupBox.appendChild(pobupimg)

        document.body.appendChild(pobupBox)

        // create close btn
        let closebtn = document.createElement('span');

        closebtn.className = 'closbtn';

        let closebtnText = document.createTextNode('X');

        closebtn.appendChild(closebtnText);

        pobupBox.appendChild(closebtn);

    })
})

// turn on close btn 
addEventListener('click', (e) => {

    if(e.target.classList.contains('closbtn')){
        document.querySelector('.pobup-box').remove()

        document.querySelector('.pobup-overlay').remove()
    }
})
// start bulltes
let bulltes = document.querySelectorAll('.nav-bulltes .bulltes');

bulltes.forEach(bullet => {
    bullet.addEventListener('click', (e) => {

        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior : 'smooth'
        });
    });
});


// set in storage and show and hide container
bulltesItems.forEach(span => {

    span.addEventListener('click' , (e) => {
        
        if(e.target.dataset.display =='show'){

            bulltesContainer.style.display = 'block'

            localStorage.setItem('option-bulltes','block')
        }else {

            bulltesContainer.style.display ='none'

            localStorage.setItem('option-bulltes','none')
        }

    handelActive(e)
        
    })
})

// add and remove class active
if(localBulltes !== null){

    bulltesItems.forEach( (e) => {

        e.classList.remove('active');
    })

    if(localBulltes =='block'){

        bulltesContainer.style.display = 'block';

        document.querySelector('.rand .yes').classList.add('active');

    }else {

        bulltesContainer.style.display ='none';

        document.querySelector('.rand .no').classList.add('active');
    }
}
// setting-box rest-web 
document.querySelector('.setting-box .rest-web').onclick =  () => {

    localStorage.clear()

    window.location.reload()
}