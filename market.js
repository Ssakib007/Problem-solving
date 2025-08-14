/// shirt price -- 500
/// pant price --- 600
/// shoe price --- 900

function moneyAmount(shirtPiece, pantPiece, shoePiece) {
  const perShirt = 500;
  const perPant = 600;
  const perShoe = 900;

  const totalShirtPrice = shirtPiece * perShirt;
  const totalPantPrice = pantPiece * perPant;
  const totalShoePrice = shoePiece * perShoe;

  const totalCost = totalPantPrice + totalShirtPrice + totalShoePrice;
  return totalCost;
}

const money = moneyAmount(3, 2, 2);
console.log("total money needed", money);
