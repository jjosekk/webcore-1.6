window.addEventListener("resize", (evt) => {
  if (evt.target.window.innerWidth >= 768) brandsShowAllTablet();
  if (evt.target.window.innerWidth >= 1120) brandsShowAllDesktop();

  if (evt.target.window.innerWidth >= 768) typesShowAllTablet();
  if (evt.target.window.innerWidth >= 1120) typesShowAllDesktop();

  if (evt.target.window.innerWidth < 768) deleteClassHidden();
});

const btnShowAllBrands = document.querySelector(".repaired-brands__btn");
const cardsBrands = Array.from(document.querySelectorAll(".repaired-brands__item"));
const expandImgBrands = document.querySelector(".repaired-brands__expand");
let brandsIsOpen = false;

const brandsShowAllDesktop = () => {
  if (window.innerWidth >= 1120) {
    cardsBrands.forEach((item, index) => {
      item.classList.add("hidden");
      if (index < 8) {
        item.classList.remove("hidden");
      }
    });
  }
};

const brandsShowAllTablet = () => {
  if (window.innerWidth < 1120 && window.innerWidth >= 768) {
    cardsBrands.forEach((item, index) => {
      item.classList.add("hidden");
      if (index < 6) {
        item.classList.remove("hidden");
      }
    });
  }
};

const showAllBrands = () => {
  if (window.innerWidth >= 1120 && !brandsIsOpen) {
    cardsBrands.forEach((item) => item.classList.remove("hidden"));
    brandsIsOpen = true;
    btnShowAllBrands.textContent = "Скрыть";
    expandImgBrands.style.transform = "rotate(180deg)";
  } else if (window.innerWidth >= 1120 && brandsIsOpen) {
    brandsShowAllDesktop();
    btnShowAllBrands.textContent = "Показать все";
    expandImgBrands.style.transform = "none";
    brandsIsOpen = false;
  }

  if (window.innerWidth < 1120 && window.innerWidth >= 768 && !brandsIsOpen) {
    cardsBrands.forEach((item) => item.classList.remove("hidden"));
    brandsIsOpen = true;
    btnShowAllBrands.textContent = "Скрыть";
    expandImgBrands.style.transform = "rotate(180deg)";
  } else if (window.innerWidth < 1120 && window.innerWidth >= 768 && brandsIsOpen) {
    brandsShowAllTablet();
    btnShowAllBrands.textContent = "Показать все";
    expandImgBrands.style.transform = "none";
    brandsIsOpen = false;
  }
};

btnShowAllBrands.addEventListener("click", showAllBrands);

brandsShowAllDesktop();
brandsShowAllTablet();

const btnShowAllTypes = document.querySelector(".repaired-types__btn");
const cardsTypes = Array.from(document.querySelectorAll(".repaired-types__item"));
const expandImgTypes = document.querySelector(".repaired-types__expand");
let typesIsOpen = false;

const typesShowAllDesktop = () => {
  if (window.innerWidth >= 1120) {
    cardsTypes.forEach((item, index) => {
      item.classList.add("hidden");
      if (index < 4) {
        item.classList.remove("hidden");
      }
    });
  }
};

const typesShowAllTablet = () => {
  if (window.innerWidth < 1120 && window.innerWidth >= 768) {
    cardsTypes.forEach((item, index) => {
      item.classList.add("hidden");
      if (index < 3) {
        item.classList.remove("hidden");
      }
    });
  }
};

const showAllTypes = () => {
  if (window.innerWidth >= 1120 && !typesIsOpen) {
    cardsTypes.forEach((item) => item.classList.remove("hidden"));
    typesIsOpen = true;
    btnShowAllTypes.textContent = "Скрыть";
    expandImgTypes.style.transform = "rotate(180deg)";
  } else if (window.innerWidth >= 1120 && typesIsOpen) {
    typesShowAllDesktop();
    btnShowAllTypes.textContent = "Показать все";
    expandImgTypes.style.transform = "none";
    typesIsOpen = false;
  }

  if (window.innerWidth < 1120 && window.innerWidth >= 768 && !typesIsOpen) {
    cardsTypes.forEach((item) => item.classList.remove("hidden"));
    typesIsOpen = true;
    btnShowAllTypes.textContent = "Скрыть";
    expandImgTypes.style.transform = "rotate(180deg)";
  } else if (window.innerWidth < 1120 && window.innerWidth >= 768 && typesIsOpen) {
    typesShowAllTablet();
    btnShowAllTypes.textContent = "Показать все";
    expandImgTypes.style.transform = "none";
    typesIsOpen = false;
  }
};

btnShowAllTypes.addEventListener("click", showAllTypes);

typesShowAllDesktop();
typesShowAllTablet();

const deleteClassHidden = () => {
  if (window.innerWidth < 768) {
    cardsTypes.forEach((item, index) => {
      item.classList.remove("hidden");
    });
  
    cardsBrands.forEach((item, index) => {
      item.classList.remove("hidden");
    });
  }
}

deleteClassHidden();


