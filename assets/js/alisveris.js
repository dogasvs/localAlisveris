let alisverisForm = document.querySelector('.alisverisForm');
let urunler = document.querySelector('.urunler');
let sifirlama = document.querySelector('.delete');
let alisverisSepeti = document.querySelector('.alisverisSepeti');
let satinAl = document.querySelector('.satinAl');

let giyimList = document.querySelector('.giyim');
let elektronikList = document.querySelector('.elektronik');
let evList = document.querySelector('.ev');
let kozmetikList = document.querySelector('.kozmetik');
let sporList = document.querySelector('.spor');

let urunList = [
  {
  id: 0,
  name: 'Lenova',
  fiyat: '4000',
  catagory: 'elektronik',
  rengi: 'Kırmızı',
},
{
  id: 1,
  name: 'Mac M2',
  fiyat: '5600',
  catagory: 'elektronik',
  rengi: 'Uzay Grisi',
}
];

// let urunSepeti = [];

if(typeof localStorage.urunList !== 'undefined') {
  urunList = JSON.parse(localStorage.urunList);
  renderForm();
}

function handleSubmitForm(e) {
  e.preventDefault();
  let formData = new FormData(alisverisForm);
  let formObj = Object.fromEntries(formData);
  urunList.push(formObj);
  alisverisForm.reset();
  saveForm();
  renderForm();
}

alisverisForm.addEventListener('submit', handleSubmitForm);

function saveForm() {
  localStorage.urunList = JSON.stringify(urunList);
}

function renderForm() {

  giyimList.innerHTML = '';
  elektronikList.innerHTML = '';
  evList.innerHTML = '';
  kozmetikList.innerHTML = '';
  sporList.innerHTML = '';

  for(let i = 0; i < urunList.length; i++) {
    let urunListItem = ` <div class="urun">
    <p> ${urunList[i].name} </p>
    <p> ${urunList[i].fiyat} </p>
    <p> ${urunList[i].catagory} </p>
    <p> ${urunList[i].rengi} </p>
    <button class="urunSeç"> Seç </button> <button class="satinAl"> Satın Al </button>
    </div>`;

    if(urunList[i].catagory === 'giyim') {
      giyimList.innerHTML += urunListItem;
    } else if(urunList[i].catagory === 'elektronik') {
      elektronikList.innerHTML += urunListItem;
    } else if(urunList[i].catagory === 'ev') {
      evList.innerHTML += urunListItem;
    } else if(urunList[i].catagory === 'kozmetik') {
      kozmetikList.innerHTML += urunListItem;
    } else if(urunList[i].catagory === 'spor') {
      sporList.innerHTML += urunListItem;
    }
  }
}

function clearForm() {
  localStorage.clear();
  urunList = [];
  renderForm();
}

sifirlama.addEventListener('click', clearForm);

// function SepeteEkle() {
//   if(  satinAl.addEventListener('submit', SepeteEkle)) {
//     for(let i = 0; i < urunSepeti; i++) {
//       alisverisSepeti.innerHTML += ` <div class="urun"> 
//       <p> ${urunList[i].name} </p>
//       <p> ${urunList[i].fiyat} </p>
//       <p> ${urunList[i].catagory} </p>
//       <p> ${urunList[i].rengi} </p>
//       `;
//     }
//   }
// }
// satinAl.addEventListener('submit', SepeteEkle);
