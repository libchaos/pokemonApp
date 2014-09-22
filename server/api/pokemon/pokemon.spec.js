'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var Pokemon = require('./pokemon.model');
var assert = require('assert');

describe('GET /api/pokemons', function() {

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/pokemons')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});

describe('POST /api/pokemons', function () {
  it('should return a JSON object', function (done) {
    request(app)
      .post('/api/pokemons')
      .type('json')
      .send({ name: 'Pikachu',
              picture: 'http://awesomeSite.com/pika.png',
              description: 'This pokemon is yellow' })
      .expect(200)
      .end(function (err, res) {
        res.body.should.be.instanceOf(Object);
        done();
      });
  });
});

describe('Pokemon Model', function () {
  describe('.isValidName', function () {
    it('should return false for an empty string', function (done) {
      assert.equal(Pokemon.isValidName(''), false);
      done();
    });
  });
});