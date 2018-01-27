
'use strict';
var expect = require('chai').expect;
var jsdom = require('jsdom-global');

describe('p5', function() {
    jsdom();
    it('should exist', function() {
        var p5 = require('../lib/p5/p5.js');
        expect(p5).to.not.be.undefined;
    });
});
