import 'babel-polyfill'
import request from 'supertest-as-promised'
import httpStatus from 'http-status'
import chai from 'chai'
import { expect } from 'chai'
import app from '../index'

chai.config.includeStack = true;

describe('## Book APIs', () => {

  let book = {
    title: 'Title Test',
    author: 'Mr. Test',
    year: 2016,
    pages: 999
  }

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

  describe('# POST /api/book', () => {
    it('should create a new book', (done) => {
      request(app)
        .post('/api/book')
        .send(book)
        .expect(httpStatus.OK)
        .then(res => {
          expect(res.body.title).to.equal(book.title)
          expect(res.body.author).to.equal(book.author)
          expect(res.body.year).to.equal(book.year)
          expect(res.body.pages).to.equal(book.pages)
          done()
        })
    })
  });
});
