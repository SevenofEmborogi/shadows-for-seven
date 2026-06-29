const emberContainer = document.querySelector(".embers");
const featherContainer = document.querySelector(".feathers");

if (emberContainer) {
  for (let i = 0; i < 70; i++) {
    const ember = document.createElement("span");
    ember.className = "ember";

    const size = 3 + Math.random() * 7;
    const height = size * (2.3 + Math.random() * 1.8);

    ember.style.width = `${size}px`;
    ember.style.height = `${height}px`;
    ember.style.left = `${Math.random() * 100}%`;
    ember.style.animationDuration = `${6 + Math.random() * 11}s`;
    ember.style.animationDelay = `${-Math.random() * 18}s`;
    ember.style.setProperty("--drift", `${-160 + Math.random() * 320}px`);
    ember.style.filter = `blur(${Math.random() * 0.8}px)`;

    emberContainer.appendChild(ember);
  }
}

if (featherContainer) {
  for (let i = 0; i < 7; i++) {
    const feather = document.createElement("span");
    feather.className = "feather";

    feather.style.left = `${Math.random() * 100}%`;
    feather.style.animationDuration = `${16 + Math.random() * 18}s`;
    feather.style.animationDelay = `${-Math.random() * 28}s`;
    feather.style.setProperty("--drift", `${-260 + Math.random() * 520}px`);
    feather.style.transform = `rotate(${Math.random() * 360}deg)`;

    featherContainer.appendChild(feather);
  }
}

const enterButton = document.querySelector(".enter");

if (enterButton) {
  enterButton.addEventListener("click", function (event) {
    event.preventDefault();

    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = this.href;
    }, 700);
  });
}
