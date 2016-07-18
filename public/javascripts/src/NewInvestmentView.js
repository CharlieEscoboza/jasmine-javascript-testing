(function ($, Investment, Stock) {
  function NewInvestmentView (params) {
    this.$element = $(params.selector);
    this.listView = params.listView;
    this.$element.on('submit', this.prototype.addListView.bind(this));
  }

  NewInvestmentView.prototype = {

    $: function () {
      return this.$element.find.apply(this.$element, arguments)
    },
    getStockSymbol: function () {
      return this.$('.new-investment-stock-symbol');
    },
    setStockSymbolValue: function (value) {
      return this.$('.new-investment-stock-symbol').val(value);
    },
    getStockSymbolValue: function (value) {
      return this.$('.new-investment-stock-symbol').val();
    },
    onCreate: function (callback) {
      this._callback = callback;
    },
    create: function () {
      this._callback();
    }
  }

  this.NewInvestmentView = NewInvestmentView;

})(jQuery, Investment, Stock)
