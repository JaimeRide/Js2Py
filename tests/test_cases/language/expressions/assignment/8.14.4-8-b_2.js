// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 8.14.4-8-b_2
description: Non-writable property on a prototype written to in strict mode.
flags: [onlyStrict]
includes: [runTestCase.js]
---*/

function testcase() {
    "use strict";
    
    function foo() {};
    Object.defineProperty(foo.prototype, "bar", {value: "unwritable"}); 
    
    var o = new foo(); 
    try {
        o.bar = "overridden"; 
        return false;
    } catch(e) {
        return (e instanceof TypeError) && (o.bar==="unwritable");
    }
}
runTestCase(testcase);
