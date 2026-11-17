//http 모듈 불러오기
const http = require("http");

//fs 모듈 불러오기
const fs =require("fs");

const PORT = Number(process.env.PORT) || 3000;
//환경변수에 PORT 값을 불러오거나 없으면 3000번을써라

const server = http.createServer((req, res) => {
    console.log("요청 발생");
    console.log(req.method);
    //응답 헤더
    //res.setHeader("Content-Type", "text/plain");
    //응답 본문
    //res.write("Hello, Node!!");
    //res.end(); //응답 종료
    res.setHeader("Content-Type","text/html");
    const readStream = fs.createReadStream(__dirname+ "/index.html", "utf8");
    readStream.pipe(res); //file을 넘기면 res 출력하도록 file이 실제로 있어야함
});

server.listen(PORT, () => {
    console.log(`${PORT}번 포트로 서버 실행`);
});




