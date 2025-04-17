// local reviews data
const reviews = [
  {
    id: 1,
    name: "adam smith",
    job: "software ingenieur",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry.",
  },
  {
    id: 2,
    name: "luna park",
    job: "tattoo artist",
    img: "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg",
    text: "Art party yuccie before they sold out, fam prism brunch freegan kickstarter pour-over artisan. Cronut hammock vexillologist stumptown green juice selfies.",
  },
  {
    id: 3,
    name: "mike johnson",
    job: "barista",
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
    text: "VHS hoodie thundercats four loko. Dreamcatcher blog small batch flannel, synth 8-bit chillwave tbh tofu snackwave leggings fixie.",
  },
  {
    id: 4,
    name: "zoe miller",
    job: "content creator",
    img: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png",
    text: "Tacos fingerstache subway tile, cliche truffaut you probably haven't heard of them authentic. Neutra ramps man bun irony vinyl keytar.",
  },
  {
    id: 5,
    name: "james franco",
    job: "freelance photographer",
    img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
    text: "Live-edge raclette chillwave, irony man braid drinking vinegar pitchfork. Pok pok tote bag squid succulents fashion axe jean shorts kitsch.",
  },
  {
    id: 6,
    name: "mia chen",
    job: "ux designer",
    img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg",
    text: "Cloud bread prism disrupt, snackwave bushwick bicycle rights quinoa. Brooklyn raw denim literally seitan tilde microdosing pickled swag.",
  },
];

// select item
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

//show person based on item

function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// show prev person

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

// show random person
randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  console.log(currentItem);

  showPerson();
});
