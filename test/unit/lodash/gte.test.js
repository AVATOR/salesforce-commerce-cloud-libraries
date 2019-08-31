var assert = require('assert');
var gte = require('../../../cartridges/lodash/gte');

describe('gte', function () {
    it('should return `true` if `value` >= `other`', function () {
        assert.strictEqual(gte(3, 1), true);
        assert.strictEqual(gte(3, 3), true);
        assert.strictEqual(gte('def', 'abc'), true);
        assert.strictEqual(gte('def', 'def'), true);
    });

    it('should return `false` if `value` is less than `other`', function () {
        assert.strictEqual(gte(1, 3), false);
        assert.strictEqual(gte('abc', 'def'), false);
    });
});
