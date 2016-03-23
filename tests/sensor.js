var chai = require("chai");
var http = require("../core/httpservice")
describe("Sensor Update Tests", function(){
    it('Check status', function(done){
        var should = chai.should();
        http.getData("mysensor--v1.partners.apprendalabs.com", null, '/sensor/update/334/12', null, true, null, function (err, result) {
            if (!err) {
                var obj = JSON.parse(result);
                obj.should.have.property("sid");
            }
            else{
                err.should.not.exist();
            }
            done();
        });

    });
});