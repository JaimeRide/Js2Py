// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.3-4-192
description: >
    Object.getOwnPropertyDescriptor returns data desc (all false) for
    properties on built-ins (String (instance).length)
includes: [runTestCase.js]
---*/

function testcase() {
  var s = new String("abc");
  var desc = Object.getOwnPropertyDescriptor(s, "length");

  if (desc.writable === false &&
      desc.enumerable === false &&
      desc.configurable === false &&
      desc.hasOwnProperty('get') === false &&
      desc.hasOwnProperty('set') === false) {
    return true;
  }
 }
runTestCase(testcase);
