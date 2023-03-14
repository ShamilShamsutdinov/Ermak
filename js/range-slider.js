const rangeSlider = document.getElementById("scale");
const rangerRevenue = document.getElementById("revenue");
const rangeProfit = document.getElementById("profit");
const mobilePofit = document.getElementById("mobileProfit");

console.log(rangeSlider);

noUiSlider.create(rangeSlider, {
  start: 450,
  connect: "lower",
  step: 50,
  range: {
    min: [50],
    max: [500],
  },
  pips: {
    mode: "count",
    density: 20,
    values: 10,
  },
});

rangeSlider.noUiSlider.on("update", function (values) {
  console.log(values);

  values.forEach((element) => {
    console.log(element);
  });

  if (values == 50) {
    rangerRevenue.innerHTML = "98 255";
    rangeProfit.innerHTML = "18 955";
    mobilePofit.innerHTML = "18 955";
  }

  if (values == 100) {
    rangerRevenue.innerHTML = "196 510";
    rangeProfit.innerHTML = "25 145";
    mobilePofit.innerHTML = "25 145";
  }

  if (values == 150) {
    rangerRevenue.innerHTML = "294 765";
    rangeProfit.innerHTML = "33 275";
    mobilePofit.innerHTML = "33 275";
  }

  if (values == 200) {
    rangerRevenue.innerHTML = "393 020";
    rangeProfit.innerHTML = "41 565";
    mobilePofit.innerHTML = "41 565";
  }

  if (values == 250) {
    rangerRevenue.innerHTML = "491 275";
    rangeProfit.innerHTML = "96 275";
    mobilePofit.innerHTML = "96 275";
  }

  if (values == 300) {
    rangerRevenue.innerHTML = "589 530";
    rangeProfit.innerHTML = "150 985";
    mobilePofit.innerHTML = "150 985";
  }

  if (values == 350) {
    rangerRevenue.innerHTML = "687 785";
    rangeProfit.innerHTML = "205 694";
    mobilePofit.innerHTML = "205 694";
  }

  if (values == 400) {
    rangerRevenue.innerHTML = "786 040";
    rangeProfit.innerHTML = "260 404";
    mobilePofit.innerHTML = "260 404";
  }

  if (values == 450) {
    rangerRevenue.innerHTML = "884 295";
    rangeProfit.innerHTML = "315 114";
    mobilePofit.innerHTML = "315 114";
  }

  if (values == 500) {
    rangerRevenue.innerHTML = "982 550";
    rangeProfit.innerHTML = "369 824";
    mobilePofit.innerHTML = "369 824";
  }
});
