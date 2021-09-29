function computerFactory(brand) {
  return {
    brand: brand,
  };
}

function dellXPSFactory(brand) {
  let dell = computerFactory("Dell");
  dell.hasHDMI = true;
  return dell;
}

let myComp = dellXPSFactory();
console.log(myComp);