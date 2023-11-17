const pages = [
  './image1.png', './image2.png', './image3.png', './image4.png', './image5.png',
  './image6.png', './image7.png', './image8.png', './image9.png', './image10.png',
  './image11.png', './image12.png', './image13.png', './image14.png', './image15.png',
  './image16.png', './image17.png', './image18.png', './image19.png'
 
];
const liste = document.querySelector('ul');
const numDesPages = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'];
// const searchPage = document.querySelector('.recherche-page input')


function makePage() {
for(let i = 0; i < pages.length; i++){
    const page = document.createElement('li');
    const numPage = document.createElement('p');
    const imgPage = document.createElement('img');
     imgPage.src = pages[i];
     numPage.innerText = numDesPages[i];
     if (pages[i] === "./image14.png") {
        imgPage.style.width = "1300px";
      }
    

    liste.appendChild(page);
    page.appendChild(imgPage);
    page.appendChild(numPage);
}}

makePage();

// console.log(imgPage);

// searchPage.addEventListener('keyup' , recherche);


// function recherche() {
//     const formRecherche = document.querySelector('form');

//     let allLi, allPara, paraValue
//     filter = searchPage.value;
//     allLi = document.querySelectorAll('li');
//     allPara = document.querySelectorAll('p');

//     for(let i = 0; i < allLi.length; i++){
//         paraValue = allPara[i].innerText;

//         if(paraValue.indexOf(filter) > -1) {
//             allLi[i].style.display = 'flex';
//         } else {
//             allLi[i].style.display = 'none';
//         }
//     }
// }


// const pagesChapS = ['./image21.jpg' , './image2.jpg' , './image3.jpg', './image4.jpg', './image5.jpg', './image6.jpg', './image7.jpg', './image8.jpg', './image9.jpg', './image10.jpg', './image11.jpg', './image12.jpg', './image13.jpg', './image14.jpg', './image15.jpg', './image16.jpg', './image17.jpg', './image18.jpg', './image19.jpg', './image20.jpg'];
// const liste2 = document.querySelector('.liste2');


// function makePage2() {
//     for(let i = 0; i < pagesChapS.length; i++){
//         const page2 = document.createElement('li');
//         const numPage = document.createElement('p');
//         const imgPage2 = document.createElement('img');
//         imgPage2.src = pagesChapS[i];
//         numPage.innerText = numDesPages[i];
        
    
//         liste2.appendChild(page2);
//         page2.appendChild(imgPage2);
//         page2.appendChild(numPage);
//     }}

//     makePage2();
