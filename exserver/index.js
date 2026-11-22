//express  모듈 불러오기
const express =require("express")

//서버 생성하기
const app = express();
//포트번호 설정
const PORT = Number(process.env.PORT) || 3000;

//라우팅 설정
app.get("/", (req,res) => {
    res.status(200);
    res.send("Hello, Node");
})

app.get("/home", (req,res) => {
    res.status(200);
    res.send("Home");
})

app.get("/about", (req,res) => {
    res.status(200);
    res.send("ABOUT");
})//.post("/about",(req,res) =>{
    
//})
//연속으로 이어서 적용시킬때 자바스크립트는 이렇게써도 가능하게함

app.post("/about", (req,res) => {
    res.status(200);
    res.send("ABOUT");
})


app.get("/user/:id", (req,res) => {
    const userid =req.params.id;
    res.status(200);
    res.send(`${userid} 사용자에 대한 정보 요청`);
});

//서버 실행하기
app.listen(PORT, ()=>{
    console.log(`${PORT}번 포트로 서버 실행`);
})

//post 요청 데이터는
//body에 담겨진 정보이기서버로 post요청할때 넘겨준 정보를 담고있음 body에 
//예를들어 로그인 버튼을 눌렀을때 req.body로 알수있음
//req.params url뒤에 라우트 파라미터 가 포함되어있을경우 파라미터 정보가담겨있음
