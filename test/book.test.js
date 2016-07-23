import 'babel-polyfill'
import request from 'supertest-as-promised'
import httpStatus from 'http-status'
import chai from 'chai'
import { expect } from 'chai'
import app from '../index'

chai.config.includeStack = true;

describe('## Book', () => {
  describe('# GET /api/', () => {
    it('should return OK', (done) => {
      request(app)
        .get('/api/')
        .expect(httpStatus.OK)
        .then(res => {
          expect(res.text).to.equal('OK');
          done();
        });
    });
  });
});
