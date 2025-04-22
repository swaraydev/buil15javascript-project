//get only unique catégorigs - Hardest one
//iteate over categories return buttons
//make sur to select buttons when they are available
// items
const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./assets/buttermilkpaka.png",
    desc: `I'm baby woke mlkshk wolf bitters live-edge
          blue bottle, hammock freegan copper mug whatever
          cold-pressed`,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./assets/dinnerdouble.png",
    desc: `vaporware iphone mumblecore 
          selvage raw denim slow-carb leggings 
          gochujang helvetica man braid jianbing. Marfa thundercats`,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./assets/godzillashake.png",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art 
          photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./assets/countrydelight.png",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. 
          Prism austin mlkshk truffaut.`,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./assets/eggattack.png",
    desc: `Franzen vegan pabst bicycle rights kickstarter pinterest meditation 
          farm-to-table 90's pop-up.`,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./assets/oreodream.png",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer 
          chia heirloom iPhone everyday.`,
  },
  {
    id: 7,
    title: "boeuf overflow",
    category: "breakfast",
    price: 8.99,
    img: "./assets/boeufoverflow.png",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, 
          pork belly cloud bread iceland put a bird.`,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./assets/americanclassic.png",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. 
          Food truck truffaut.`,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./assets/quarantinebuddy.png",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb 
          yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "dinner",
    category: "dinner",
    price: 13.99,
    img: "./assets/dinnerdouble.png",
    desc: `vaporware iphone mumblecore 
          selvage raw denim slow-carb leggings 
          gochujang helvetica man braid jianbing. Marfa thundercats`,
  },
];

const sectionCenter = document.querySelector(".section-center");

const btnContainer = document.querySelector(".btn-container");
// console.log(filterBtns);

// load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
                    <img
                      src=${item.img}
                      class="photo"
                      alt= ${item.title}
                    />
                    <div class="item-info">
                      <header>
                        <h4>${item.title}</h4>
                        <h4 class=${item.price}>$15</h4>
                      </header>
                      <p class="item-text">
                        ${item.desc}
                      </p>
                    </div>
                  </article>
          `;
  });

  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button class="filter-btn" type="button" data-id=${category}>
              ${category}
            </button>`;
    })
    .join("");
  //   console.log(categoryBtns);
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");

  // filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      // console.log(menuCategory);
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
