
'use strict';
var expect = require('chai').expect;
var assert = require('chai').assert;

describe('WikiCrawler', function() {
    it('should exist', function() {
        var WikiCrawler = require('../wiki_crawler.js');
        expect(WikiCrawler).to.not.be.undefined;
    });
});

describe('TextBoxRoot', function() {
    it('should exist');
    it('should be a string');
    it('should start as Article of the Day');
    it('should disappear after first query');
});

describe('ButtonRootSubmit', function() {
    it('should exist');
    it('should submit query when pressed');
    it('should not submit query if text hasn\'nt changed since last press');
    it('should not submit query if text is blank');
    it('should disappear after first successful query');
});

describe('ApiQuery', function() {
    it('should accept an api key');
    it('should accept an article name to query');
    it('should generate an api url from input');
    it('should return a result from the query');
});

describe('ApiResult', function() {
    it('should begin empty');
    it('should contain array of articles within article');
});

describe('ListChildrenArticles', function() {
    it('should exist');
    it('should begin empty');
    it('should be hidden if empty');
    it('should accept an array of article names as input');
    it('should be have each article name clickable');
    it('should submit new query when clicked');
    it('should return selected article when clicked');
});

describe('ButtonPreviousArticle', function() {
    it('should start hidden');
    it('should unhide when TextBoxRoot queried');
    it('should requery the previously selected article');
    it('should disappear if reach first article');
});

describe('ListVisitedArticles', function() {
    it('should exist');
    it('should begin empty');
    it('should contain every article that has been queried before');
});