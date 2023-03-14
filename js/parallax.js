//very simple activation
$(window).enllax({
  //default values

  // type can be defined as it is background parallax scrolling element or foreground scrolling element.
  type: "background", // another value for type is 'foreground'.

  ratio: 0.5, // multiplier for scrolling speed. Less is slower. Default: '0'.

  direction: "vertical", // another value for direction is 'horizontal'.
});

//or
$("#par-img-1").enllax();
$("#par-img-2").enllax();
$("#par-img-3").enllax(); // This selector should be parent of parallax scrolling elements
