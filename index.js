const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const adder = (total, el) => total+el;

let totalBatteries = batteryBatches.reduce(adder, 0);