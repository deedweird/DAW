'use strict';

var request = require("supertest"),
    app = require("../blah").getApp;

describe('GET /', function(){
  it('expects HTTP 200/OK response', function(done){
    request(app)
      .get('/')
      .expect(200, done)
      .expect("Content-type",/html/);
  });
});

