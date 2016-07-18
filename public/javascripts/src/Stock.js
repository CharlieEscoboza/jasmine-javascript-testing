function Stock(params) {
  this.symbol = params.symbol;
  this.sharePrice = params.sharePrice;
}

Stock.prototype.fetch = function (params) {
  var params = params || {};
  var url = 'http://localhost:3000/stocks/' + this.symbol;
  var that = this;
  var success = params.success || function () {};

  $.getJSON(url, function (data) {
    that.sharePrice = data.sharePrice;
    success(that);
  });
};
