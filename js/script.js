// animation one
var heroAnimation = bodymovin.loadAnimation({
  container: document.getElementById("heroAnimation"),
  path: "/animated-data/animation-hero.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
});

// animation one
var animation = bodymovin.loadAnimation({
  container: document.getElementById("animationOne"),
  path: "/animated-data/animation-one.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
});

// animation two
var animation2 = bodymovin.loadAnimation({
  container: document.getElementById("animationTwo"),
  path: "/animated-data/animation-two.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
});

// animation three
var animation3 = bodymovin.loadAnimation({
  container: document.getElementById("animationThree"),
  path: "/animated-data/animation-three.json",
  renderer: "svg",
  loop: true,
  autoplay: true,
});
