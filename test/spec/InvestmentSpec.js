// Tests file

describe('Investment', function () {
  var stock;
  var investment;

  beforeEach(function () {
    stock = new Stock({
      symbol: 'AOUE',
      sharePrice: 0
    });

    investment = new Investment({
      stock: stock,
      shares: 100,
      sharePrice: 20
    });
  });

  it('should be of a stock', function () {
    expect(investment.stock).toBe(stock);
  });

  it('should have the investest share quantity', function () {
    expect(investment.shares).toBe(100);
  });

  it('should have the investest share price', function () {
    expect(investment.sharePrice).toBe(20);
  });

  it('should have the investest cost', function () {
    expect(investment.cost).toBe(2000);
  });

  describe('when its stock share prices valorizes', function () {
    beforeEach(function () {
      stock.sharePrice = 40;
    });

    it('should have a possitive return of investment', function () {
      expect(investment.roi()).toEqual(1);
    });

    it('should be a good investment', function () {
      expect(investment).toBeAGoodInvestment();
    });
  });

  describe('when its stock share prices devalorizes', function () {
    beforeEach(function () {
      stock.sharePrice = 10;
    });

    it('should have a return of investment method', function () {
      expect(investment.roi).toBeTruthy();
    });

    it('should have a negative return of investment', function () {
      expect(investment.roi()).toEqual(-0.5);
    });

    it('should be a bad investment', function () {
      expect(investment).not.toBeAGoodInvestment();
    });
  });

  describe('when no sharePrice is provited', function () {
    beforeEach(function () {
      stock = new Stock({
        symbol: 'AOUE',
        sharePrice: 0
      });

      investment = new Investment({
        stock: stock,
        shares: 100
      });
    });

    it('should return an undefined investment sharePrice', function () {
      expect(investment.sharePrice).toBeUndefined();
    });

    it('should return 0 return of investment', function () {
      expect(investment.roi()).toEqual(0);
    });

    it('should not return a good Investment', function () {
      expect(investment.isGood()).toBeFalsy();
    });
  });
});
