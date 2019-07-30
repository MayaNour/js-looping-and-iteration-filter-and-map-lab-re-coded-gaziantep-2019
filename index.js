// Code your solution here:
function driversWithRevenueOver(drivers, revenueValue){
  const newDriversFilterList = drivers.filter({
    function (driver) { return driver > revenueValue; }
  });
}