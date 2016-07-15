"use strict";

var chai            = require("chai"),
    server          = require("../server"),
    expect          = chai.expect,
    test;

describe("public site", function () {

    before(function (done) {
        server.init(function (err, res) {
            if (err) {
                return done(err);
            }

            test = require("./util").test(res);
            done();
        });
    });

    it("get index", function (done) {
        test(done, function (req) {
            return req
                .get("/")
                .set("Accept", "text/html")
                .expect("Content-Type", /html/)
                .expect(200);
        }, function (data) {
            expect(data).to.be.ok;
        });
    });
});
