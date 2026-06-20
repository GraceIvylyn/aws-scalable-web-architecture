/* ── Mobile Nav ── */
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  menuBtn.textContent = navMenu.classList.contains("show") ? "✕" : "☰";
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
    navMenu.classList.remove("show");
    menuBtn.textContent = "☰";
  });
});

/* ── Food Explorer Data ── */
const foodData = {
  waakye: {
    title: "Waakye with gari & shito",
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=1200&q=80",
    message: "A plate of waakye reminds us that simple ingredients can create unforgettable greatness.",
    description: "Waakye is one of Ghana's most loved meals, usually served with rice, beans, gari, spaghetti, egg, meat, salad, and spicy shito. It represents community, street food culture, and the joy of sharing a filling meal."
  },
  banku: {
    title: "Banku with grilled tilapia",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    message: "Banku and tilapia teach us balance: softness, spice, smoke, and strength on one plate.",
    description: "Banku with grilled tilapia is a favourite coastal Ghanaian dish. The smooth banku, spicy pepper, and smoky fish celebrate freshness, patience, and the beauty of eating together."
  },
  jollof: {
    title: "Jollof rice with kelewele",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1200&q=80",
    message: "Jollof is confidence in a pot: bold colour, bold flavour, and bold African pride.",
    description: "Jollof rice is a famous West African dish cooked with rice, tomatoes, pepper, onion, and spices. Served with kelewele, it becomes a joyful celebration of flavour, creativity, and culture."
  },
  fufu: {
    title: "Fufu with light soup",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    message: "Fufu reminds us that tradition is not old; tradition is strength passed from hand to hand.",
    description: "Fufu with light soup is deeply loved in Ghanaian homes. It is often enjoyed with fish, goat meat, chicken, or mushrooms, bringing families together around warmth, comfort, and heritage."
  },
  tuo: {
    title: "Tuo zaafi with ayoyo soup",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=80",
    message: "Tuo zaafi speaks of the North: humble, nourishing, powerful, and full of identity.",
    description: "Tuo zaafi, often served with ayoyo soup, is a beloved meal from Northern Ghana. It reflects nourishment, simplicity, resilience, and the rich food heritage of Ghana's northern communities."
  },
  kontomire: {
    title: "Kontomire stew with plantain",
    image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=1200&q=80",
    message: "Kontomire stew shows that green leaves can carry deep flavour, health, and home memory.",
    description: "Kontomire stew is made with cocoyam leaves, palm oil, tomatoes, pepper, onion, and sometimes fish or eggs. Served with plantain, it is a nutritious reminder of home, care, and local wisdom."
  }
};

/* ── Food Explorer Logic ── */
const foodButtons    = document.querySelectorAll(".food-pill");
const foodImage      = document.getElementById("foodImage");
const foodTitle      = document.getElementById("foodTitle");
const foodMessage    = document.getElementById("foodMessage");
const foodDescription = document.getElementById("foodDescription");

function displayFood(foodKey) {
  const food = foodData[foodKey];
  foodImage.style.backgroundImage = `url('${food.image}')`;
  foodTitle.textContent       = food.title;
  foodMessage.textContent     = food.message;
  foodDescription.textContent = food.description;
}

foodButtons.forEach((button) => {
  button.addEventListener("click", () => {
    foodButtons.forEach((btn) => btn.classList.remove("active-food"));
    button.classList.add("active-food");
    displayFood(button.getAttribute("data-food"));
  });
});

displayFood("waakye");

/* ── Carousel ── */
const slides     = document.getElementById("slides");
const prevBtn    = document.getElementById("prevBtn");
const nextBtn    = document.getElementById("nextBtn");
const totalSlides = document.querySelectorAll(".slide").length;
let currentSlide = 0;

function showSlide(index) {
  if (index < 0) {
    currentSlide = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentSlide = 0;
  } else {
    currentSlide = index;
  }
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

prevBtn.addEventListener("click", () => showSlide(currentSlide - 1));
nextBtn.addEventListener("click", () => showSlide(currentSlide + 1));
setInterval(() => showSlide(currentSlide + 1), 5000);

/* ── Forms ── */
document.getElementById("subscribeForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("subscribeMessage").style.display = "block";
  this.reset();
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("contactMessage").style.display = "block";
  this.reset();
});

/* ── Back to Top ── */
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 500);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
