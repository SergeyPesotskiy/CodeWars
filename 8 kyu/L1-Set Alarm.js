//8 kyu
//L1: Set Alarm
//
//Instructions
//
//Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
//
//The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise.
//
//Examples:
//
//employed | vacation
//true     | true     => false
//true     | false    => true
//false    | true     => false
//false    | false    => false
//
//Solution

function setAlarm(employed, vacation) {
    if (employed && !vacation) {
        return true;
    } else {
        return false;
    }
}

//Sample Tests
//
//const chai = require("chai");
//const assert = chai.assert;
//chai.config.truncateThreshold=0;
//
//describe("Test Suite",()=>{
//  it("Fixed tests",()=>{
//    assert.strictEqual(setAlarm(true, true),  false,"Should be false.");
//    assert.strictEqual(setAlarm(false,true),  false, "Should be false.");
//    assert.strictEqual(setAlarm(true, false), true,"Should be true.");
//  });
//});
