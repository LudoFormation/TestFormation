const myBtn = document.querySelector('button');
myBtn.addEventListener('click', clickBtn);
myBtn.addEventListener('mouseover', overBtn);
myBtn.addEventListener('mouseleave', leaveBtn);
const nm = document.querySelector('#nom');
nm.addEventListener('change', changeNom);
const pnm = document.querySelector('#prenom');
pnm.addEventListener('change', changePrenom);
const titre = document.querySelector('h1');
const btn2 = document.querySelector('#btn2');

btn2.addEventListener('click', affImg);

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', toggleDiv);
const divCarre = document.querySelector('.carre');

// input colors
document.querySelector('#backColor').addEventListener('change', changeFond);
document.querySelector('#txtColor').addEventListener('change', changeCoul);
document.querySelector('#reset').addEventListener('click', resetP);


function clickBtn() {
    titre.innerText += ' ' + nm.value + ' ' + pnm.value;
}

function overBtn() {
    myBtn.style.color = "#fff";
    myBtn.style.backgroundColor = "#000";
    myBtn.style.border = '1px solid #f00';
    myBtn.style.cursor = 'pointer';
}

function leaveBtn() {
    // myBtn.style.color = "initial";
    // myBtn.style.backgroundColor = "initial";
    // myBtn.style.border = '1px solid #000';

    myBtn.style.removeProperty('color');
    myBtn.style.removeProperty('background-color');
    myBtn.style.removeProperty('border');
}

function changeNom() {
    titre.innerText += ' - nom changé : ' + nm.value;
}

function changePrenom() {
    titre.innerText += ' - Prénom changé : ' + pnm.value;
}

function affImg() {
    if (document.querySelector('#myPictures') != undefined) {
        document.body.removeChild(document.querySelector('#myPictures'));
    } else {

        let divImage = document.createElement("div");
        divImage.id = 'myPictures';
        divImage.style.display = 'flex';
        divImage.style.justifyContent = 'space-around';
        document.body.appendChild(divImage);

        let divImg1 = document.createElement('div');
        divImg1.style.width = '30%';
        divImg1.style.aspectRatio = '1';
        divImg1.style.backgroundImage = "url('img/house2.jpg')";
        divImg1.style.backgroundPosition = 'center';
        divImg1.style.backgroundSize = 'cover';
        divImage.appendChild(divImg1);

        let divImg2 = document.createElement('div');
        divImg2.style.width = '30%';
        divImg2.style.aspectRatio = '1';
        divImg2.style.backgroundImage = "url('img/house3.jpg')";
        divImg2.style.backgroundPosition = 'center';
        divImg2.style.backgroundSize = 'cover';
        divImage.appendChild(divImg2);
    }
}

function toggleDiv() {
    divCarre.classList.toggle('vert');
}

function changeFond() {
    let couleur = document.querySelector('#backColor');
    // console.log(couleur.value);
    let txtP = document.querySelector('#texte');
    txtP.style.backgroundColor = couleur.value;
}

function changeCoul() {
    let couleur = document.querySelector('#txtColor');
    // console.log(couleur.value);
    let txtP = document.querySelector('#texte');
    txtP.style.color = couleur.value;
}

function resetP() {
    let txtP = document.querySelector('#texte');
    // txtP.style.backgroundColor = '#fff';
    // txtP.style.color = '#000';

    txtP.style.removeProperty('background-color');
    txtP.style.removeProperty('color');
}