import React from 'react'
import subheaderimg from './../../images/Mario and Adrian A.jpg'
import "./Subheader.css"

const Subheader = () => {
  return (
    <>
        <div className='subheader'>
            <div className='subheader_main'>
                <div className='subheader_col1'>
                    <h1 className='subheader_heading'>Little Lemons</h1>
                    <h3 className='subheader_subheading'>Chicago</h3>
                    <p className='subheader_para'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className='subheader_col2'>
                    <img
                        src={subheaderimg}
                        alt="subheader_image"
                        className='subheader_img'
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default Subheader