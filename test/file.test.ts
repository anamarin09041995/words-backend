import { FileService } from "../src/services/file-service";
import { DBConnection } from "../src/services/db-connection";
import { config } from "../src/config/global";
import * as uuid from "uuid";
import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { img } from "./test-data";

describe("Couchbase Files", function () {

    let service: FileService;
    let db: DBConnection;
    beforeAll(function (done) {
        chai.should();
        chai.use(chaiAsPromised);
        db = new DBConnection(() => {
            service = new FileService(db);
            done();
        });
    });

    it.skip("upload", function (done) {
        service.saveFile("00e89e46-7014-4ab7-9c1e-44b8a35be7cf", "gato5", "image/jpeg", img)
            .then(x => {
                console.log("DOC=>" + JSON.stringify(x));
                done();
            })
            .catch(err => done(err));
    });

    it.only("get By ID", function (done) {
        db.getRevById("a75ce451-f617-45fb-8c1b-7fe11b42fa9e")
            .then(x => {
                console.log(x);
                done();
            })
            .catch(err => done(err));
    });

});