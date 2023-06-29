import React from 'react'

const Logo = () => {
    const logoImage={
        URL:'./logo192.png'
        // สร้างตัวแปร เพื่อเก็บรูป
    }
  return (
    <div>
        {/* <img src="./logo192.png" width="100" alt="logo"/> */}
        <img src={logoImage.URL} width="100" alt="logo"/> 
        {/* หน้าตาการเขียน jsx. */}

        
    </div>
  )
}

export default Logo