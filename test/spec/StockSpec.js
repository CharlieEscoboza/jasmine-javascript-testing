describe('Stock', function () {
  var stock;
  var originalSharePrice = 0;
  var defaultTimeout;

  beforeEach(function () {
    defaultTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;
    stock = new Stock({
      symbol: 'AOUE',
      sharePrice: originalSharePrice
    });
  });

  afterEach(function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = defaultTimeout;
  });

  it('should have a sharePrice', function () {
    expect(stock.sharePrice).toEqual(originalSharePrice);
  });

  it('should update its sharePrice', function (done) {
    stock.fetch({
      success: function (stock) {
        expect(stock.sharePrice).toEqual(20.18);
        done();
      }
    });
  });
});

function test2() {
  console.log(1);
}

describe('spies', function () {
  var test;

  beforeEach(function () {
    spyOn(console, 'log');
    test2();
  });

  it('should have been called a callback', function () {
    expect(console.log).toHaveBeenCalled();
  });

  it('should have been called a callback with 1', function () {
    expect(console.log).toHaveBeenCalledWith(1);
  });
});
