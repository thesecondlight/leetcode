describe("top", function () {
    before(function () {
        console.log("top before");
    });
    after(function () {
        console.log("top after");
    });
    beforeEach(function () {
        console.log("top beforeEach");
    });
    afterEach(function () {
        console.log("top afterEach");
    });
    it("test1", function () {
        console.log("top test1");
    });
    describe("sublevel", function() {
        before(function () {
            console.log("sublevel before");
        });
        after(function () {
            console.log("sublevel after");
        });
        beforeEach(function () {
            console.log("sublevel beforeEach");
        });
        afterEach(function () {
            console.log("sublevel afterEach");
        });
        it("test1", function () {
            console.log("sublevel test1");
        });
        it("test2", function () {
            console.log("sublevel test2");
        });
    });
    it("test2", function () {
        console.log("top test2");
    });
  });