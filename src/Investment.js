
function Investment (params) {
  this.stock = params.stock;
  this.shares = params.shares;
  this.sharePrice = params.sharePrice;
  this.cost = params.shares * params.sharePrice
}

Investment.prototype.roi = function () {
  if (!this.sharePrice) return 0;
  return (this.stock.sharePrice - this.sharePrice) / this.sharePrice;
};

Investment.prototype.isGood = function () {
  if (!this.sharePrice) return false;
  return this.roi() > 0;
};
