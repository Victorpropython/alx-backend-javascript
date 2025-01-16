const chai = require('chai');
const chaiHttp = require('chai-http');

// Import the necessary modules
const app5 = require('./5-http'); // For test 5
const app6 = require('./6-http_express'); // For test 6
const app8 = require('./server'); // For test 8

chai.use(chaiHttp);
chai.should();

describe('HTTP Server Tests', () => {

  describe('Test 5: More complex HTTP server using node', () => {
    describe('/ endpoint', () => {
      it('Returns the right content and status', (done) => {
        chai.request(app5)
          .get('/')
          .end((error, response) => {
            chai.expect(response.text).to.equal('Hello ALX!');
            chai.expect(response.statusCode).to.equal(200);
            done();
          });
      });
    });
  });

  describe('Test 6: HTTP server using Express', () => {
    it('Returns the right content and status for /', (done) => {
      chai.request(app6)
        .get('/')
        .end((error, response) => {
          chai.expect(response.text).to.equal('Hello ALX!');
          chai.expect(response.statusCode).to.equal(200);
          done();
        });
    });
  });

  describe('Test 8: Full HTTP server using Express', () => {
    describe('/students endpoint', () => {
      describe('When the database is available', () => {
        before(() => {
          process.argv[2] = './database.csv';
        });

        it('Returns the right content and status', (done) => {
          chai.request(app8)
            .get('/students')
            .end((error, response) => {
              chai.expect(response.statusCode).to.equal(200);
              chai.expect(response.text).to.have.string(`This is the list of our students
Number of students in CS: 6. List: Johenn, Arielle, Jonathen, Emmenuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy`);
              done();
            });
        });
      });
    });
  });
});