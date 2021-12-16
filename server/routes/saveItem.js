var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(express.json());

// 상품 구매
router.post("/", (req, res, next) => {
  try {
    // Mysql Api 모듈 (CRUD)
    const dbconnect_Module = require("./dbconnect_Module");
    // Mysql 쿼리 호출 정보 입력
    req.body.mapper = "NaverProductMapper"; // mybatis xml 파일명
    req.body.crud = "insert";
    req.body.mapper_id = "saveNaverProductNaver";

    router.use("/", dbconnect_Module);
    next("route");
  } catch (error) {
    console.log("Module > dbconnect error: ", error);
    res.send("error");
  }
});

module.exports = router;
