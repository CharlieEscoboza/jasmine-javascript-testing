
function Investment (params) {
  this.stock = params.stock;
  this.shares = params.shares;
  this.sharePrice = params.sharePrice;
  this.cost = params.shares * params.sharePrice
}

Investment.prototype.roi = function () {
  return (this.stock.sharePrice - this.sharePrice) / this.sharePrice;
};

Investment.prototype.isGood = function () {
  return this.roi() > 0;
};
