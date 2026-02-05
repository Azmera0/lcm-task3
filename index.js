const express = require('express');
const app= express();

const getGSD=(a,b) =>{
    while(b){
    a%=b;
    [a,b]=[b,a]
}
 return a;
};
app.get('/azmera9104_gmail_com',(req,res)=>{
    const {x,y}=req.query;
    const numX=Number(x);
    const numY=Number(y);

    if( !Number.isInteger(numX) || !Number.isInteger(numY) || numX <= 0 || numY <= 0){
        return res.type('text/plain').send("NaN");
    }
    const lcm = (numX / getGSD(numX, numY)) * numY;
    res.type('text/plain').send(lcm.toString());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
