// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) {
    return driver.toLowerCase();
  });
}


function nameToAttributes(array) {

  return array.map(function(name) {
    const driverFirstName = name.split(' ')[0];
    const driverLastName = name.split(' ')[1];
    return {firstName: driverFirstName, lastName: driverLastName}
  });
}


function attributesToPhrase (array) {
  return array.map (function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}
