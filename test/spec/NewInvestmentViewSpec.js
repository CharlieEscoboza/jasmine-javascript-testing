// describe('NewInvestmentView', function () {
//   var view;
//   beforeEach(function () {
//     loadFixtures('NewInvestmentView.hbs');
//     appendLoadFixtures('InvestmentListView.hbs');
//
//     listView = new InvestmentListView({
//       selector: '#investment-list'
//     });
//
//     view = new NewInvestmentView({
//       selector: '#new-investment',
//       listView: listView
//     });
//   });
//
//   it('should expose a property with its DOM element', function () {
//     expect(view.$element).toExist();
//   });
//
//   it('should have have a stock symbol', function () {
//     expect(view.getStockSymbol()).toExist();
//   });
//
//   it('should set a stock symbol value', function () {
//     var stockValue = 'aaa';
//     view.setStockSymbolValue(stockValue);
//     expect(view.getStockSymbolValue(stockValue)).toEqual(stockValue);
//   });
//
//   it('should allow the input of the stock symbol', function () {
//
//   });
//
//   it('should allow the input of shares', function () {
//
//   });
//
//   it('should allow the input of the share price', function () {
//
//   });
//
//   describe('when its add button is clicked', function () {
//     beforeEach(function () {
//
//     });
//
//     it('should add the investment to the list', function () {
//       expect(listView.count).toEqual(1);
//     });
//   });
// });
