import React from 'react'
import Logo from './Logo'

const Header = () => {
    let companyName=' Journey' //สร้างตัวแปร
    const companyAddress = <p>340/3 KK ThaiLand</p>
    let num=10
    const showMessage =()=>{
        // สร้างฟังชั่น ที่เรียกว่า showMessage ตามด้วย Arrow
        return companyName + '.com'

    };

    const islogin = false;
    
    const shomwMe = () =>{
       //การสร้างฟังชั่นที่เรียกว่าการแจ้งเตือน  
       alert(' Say Hi Brother ');
    }
     
    //ประกาศตัวแปรธรรมดา สินค้า array
    const products =[
        {id: 1,name : 'coke'},
        {id :2 ,name : 'pepsi'}

    ]

    return (
    <div>
        <h1> บริษัท {companyName}</h1> 
        {companyAddress}
        {num+ 10} <br/>
        {showMessage()} 
         {/* ใส่ฟังชั่น showMessageใส่ ()ภายในปีกกา */}
        {islogin == true && (
            <> 
        <p>ยินดีต้อนรับครับ</p>
        <p>ยินดีต้อนรับคะ</p>
         </>
        )
         }
         {
            islogin ? <Logo/> :<p>ไม่มีสิทธิ์ ดู Logo</p>
         } {/* if else */}
            

        <hr/>
        <br/>
        <button onClick={shomwMe}>submit</button>
        <br/>
    <ul>
    {
    products.map((product,index) =>{
        return (
            <li key={product.id}>{product.name}{index+2}</li>
        )

    })
    }    
        </ul>

        
</div>
  )
}

export default Header