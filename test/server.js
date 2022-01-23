//const expect = require("chai").expect;
const request = require("request");
const chai = require("chai")
const chaiHttp = require("chai-http")
const sinon = require("sinon")
const expect = chai.expect
chai.use(chaiHttp)
//let app = require('../index')
const middleware = require('../routes/middleware')


describe.skip("Books API testing when server is running", () => {

    describe("Get All books testing", () => {

        var url = "http://localhost:3000/books";

        it("returns status 200", () => {
            request(url, (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                expect(JSON.parse(response.body).length).to.equal(5);
            });
        });

    });

    describe("Get Book By Id", function () {
        var url = "http://localhost:3000/books/1";

        it("returns status 200", function () {
            request(url, function (error, response, body) {
                expect(response.statusCode).to.equal(200);
                expect(JSON.parse(response.body).title).to.equal('The Pragmatic Programmer');
            });
        });
    });
});


describe("Get /books", () => {

    beforeEach(() => {

        //replace the isLoggedIn function in the middleware module with this fake function
        loggedInStub = sinon.stub(middleware, 'isLoggedIn1').callsFake((req, res, next) => {
            next()
        })
        //console.log("hello");
        app = require('../index')
    })
    it("should return status 200", async () => {
        let res = await chai
            .request(app)
            .get('/books');
        console.log(res.body.length);
        expect(res.status).to.equal(200);
        expect(res.body.length).to.equal(5);

    })
    afterEach(async () => {
        //await Dog.deleteOne({ name: "Charlie" })
        loggedInStub.restore()
    })
})
