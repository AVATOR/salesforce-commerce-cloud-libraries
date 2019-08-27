module.exports = {
    array: function () { return []; },
    true: function () { return true; },
    false: function () { return false; },
    stubA: function () { return 'a'; },
    stubB: function () { return 'b'; },
    stubC: function () { return 'c'; },
    empties: [[], {}].concat(require('./falsey').slice(1)),
    stubObject: function () { return {}; },
    stubString: function () { return ''; },
    noop: function () {},
    stubZero: function () { return 0; },
    stubOne: function () { return 1; },
    stubTwo: function () { return 2; },
    stubThree: function () { return 3; },
    stubFour: function () { return 4; },
    stubNaN: function () { return NaN; },
    stubNull: function () { return null; }
};
