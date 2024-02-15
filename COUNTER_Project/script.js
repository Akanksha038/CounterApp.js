// esse html me wp element jiski id counter hai wo  variable=> constValue me aa jayegi
const countValue=document.querySelector('#counter');

//jab value mil gayi to abb increment and decrement value define kar dete hai


// count value us element ko store kar raha hai jiski id counter hai
const increment=()=>{
    //get the value from UI
    // let value=constValue.innerText;
    //inner text ke dwara ham constValue me pade data ko le liya lekin ye data string ke form me aayegi
    // esliye hamme parseInt() method ka use karege ess string value ko integer me karne ke liye
    let value=parseInt(countValue.innerText);
    //Update the value

    //aab value ko 1 se plus kar denge 
    value=value+1;
    // aab incremented updated value ko wapas ui ke ander dalna hai to we do ==>jaise value ko inner text se liya tha waise hi updated value ko inner text me daal do
    //set the value onto UI
      countValue.innerText=value;
};

const decrement=()=>{
    let value=parseInt(countValue.innerText);
    value=value-1;
    countValue.innerText=value;

};



// uppar jitna code likha hai agar itna karne ke baad go live karte hai and plus and minus pe 
// click karte haito kuch nahi hoga==>batao kyu?==>akanksha reload kar lena page ko golive karne ke baad  :) hehehe
