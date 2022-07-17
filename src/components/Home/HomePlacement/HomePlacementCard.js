import React from 'react'

function HomePlacementCard() {
  return (
    <div className='homePlacementCard'>
        <div className='placementCard_content'>
            <div className='pcc_top'>
                <div className='plcmnt_info'>
                    <p>Students Placed</p>
                    <h3>130+</h3>
                </div>
                <div className='plcmnt_info'>
                    <p>Offers</p>
                    <h3>130+</h3>
                </div>
                <div className='plcmnt_info'>
                    <p>Companies</p>
                    <h3>130+</h3>
                </div>
            </div>
            <div className='pcc_bottom'>
                <div className='plcmnt_info'>
                    <p>Average Package</p>
                    <h3>5 LPA</h3>
                </div>
                <div className='plcmnt_info'>
                    <p>Highest Package</p>
                    <h3>30 LPA</h3>
                </div>
            </div>
        </div>
        <div className='placementCard_img'>
            <div className='pci_div'>
                <img src='https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png' alt='' />
            </div>
        </div>
    </div>
  )
}

export default HomePlacementCard