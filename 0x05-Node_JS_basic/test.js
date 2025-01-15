const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('./6-http_express');

chai.use(chaiHttp);
chai.should();

describe('Small HTTP server using Express', () => {
  it('Returns the right content', (done) => {
    chai.request(app)
      .get('/')
      .end((error, response) => {
        chai.expect(response.text).to.equal('Hello Holberton School!');
        done();
      });
  });

  it('Returns the right status', (done) => {
    chai.request(app)
      .get('/')
      .end((error, response) => {
        chai.expect(response.statusCode).to.equal(200);
        done();
      });
  });
});

const chai = require('chai');
const chaiHttp = require('chai-http');

const app = require('./5-http');


// for test 5
chai.use(chaiHttp);
chai.should();

describe('More complex HTTP server using node', () => {
  describe('/endpoint', () => {
    it('Returns the right content', (done) => {
      chai.request(app)
        .get('/')
        .end((error, response) => {
          chai.expect(response.text).to.equal('Hello Holberton School!');
          chai.expect(response.statusCode).to.equal(200);
          done();
        });
    });
  });
});