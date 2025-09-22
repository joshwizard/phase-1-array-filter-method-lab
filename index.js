// Code your solution here

// 1️⃣ Case-insensitive exact match
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// 2️⃣ Partial match (starts with letters)
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

// 3️⃣ Match by name property in an object
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}
