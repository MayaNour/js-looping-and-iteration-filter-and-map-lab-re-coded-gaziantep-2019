// Code your solution here:
function driversWithRevenueOver(drivers, revenueValue){
    const newDriversFilterList = drivers.filter(
      function (driver) { return driver.revenue > revenueValue; }
    ).map(function(driver){
      return driver.name;
    });
    
    return newDriversFilterList;
  }