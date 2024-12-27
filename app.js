


function m1() {
  const a = +document.getElementById("inputValue").value;
  const b = +document.getElementById("inputValue-1").value;
  const c = +document.getElementById("inputValue-2").value;

  function digitSum(K) {
    if (K === 0) return false; 
    return (K % 10) + digitSum(Math.floor(K / 10));
  }
  function totalSum(a, b, c) {
    return digitSum(a) + digitSum(b) + digitSum(c);
  }
  document.getElementById(
    "output"
  ).innerHTML = `Raqamlar yig'indisi: ${totalSum(a, b, c)}`;
}






function m2() {
  const input = document.getElementById("inputValue2").value;
  const arr = input.trim().split(" ").map(Number);
  let tub = arr.filter((son) => {
    if (son < 2) return false;
    for (let i = 2; i < son; i++) {
      if (son % i === 0) return false;
    }
    return true;
  });
  document.getElementById("output2").innerHTML = tub.join(", ");
}

function m3() {
  const input = document.getElementById("inputValue3").value;
  const arr = input.trim().split(" ").map(Number);
  let juft = 0;
  let toq = 0;
  for (let i = 0; i < arr.length; i++) {
    const son = arr[i];
    if (son % 2 === 0) {
      juft++;
      toq = 0;
    } else {
      toq++;
      juft = 0;
    }
    if (juft === 3)
      return (document.getElementById("output3").innerHTML =
        "3 ta Juft ketma-ket");
    if (toq === 3)
      return (document.getElementById("output3").innerHTML =
        "3 ta Toq ketma-ket");
  }
  document.getElementById("output3").innerHTML = "Unday emas";
}

// SOME FUNCTION -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const moonIcon = document.querySelector(".moon-icon");
const body = document.body;
if (!localStorage.getItem("mode")) {
  localStorage.setItem("mode", "dark");
  body.classList.add("dark");
} else {
  body.classList.add(localStorage.getItem("mode"));
}
moonIcon.addEventListener("click", () => {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("mode", "light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("mode", "dark");
  }

  if (body.classList.contains("dark")) {
    moonIcon.classList.remove("fa-sun");
    moonIcon.classList.add("fa-moon");
  } else {
    moonIcon.classList.remove("fa-moon");
    moonIcon.classList.add("fa-sun");
  }
});
let backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const customCursor = document.querySelector(".custom-cursor");

document.addEventListener("mousemove", (e) => {
  const smoke = document.createElement("div");
  smoke.classList.add("tutun");

  smoke.style.left = `${e.pageX}px`;
  smoke.style.top = `${e.pageY}px`;

  document.body.appendChild(smoke);

  setTimeout(() => {
    smoke.style.opacity = "0";
  }, 100);

  setTimeout(() => {
    smoke.remove();
  }, 550);
});
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  mouseWheel: true,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: "auto",

  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  touchEventsTarget: "container",
  touchRatio: 1,
});
