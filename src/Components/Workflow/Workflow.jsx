import React from 'react'
import './Workflow.css'
import wf1 from '../../images/wf1.png'
import wf2 from '../../images/wf2.png'
import wf3 from '../../images/wf3.png'
import wf4 from '../../images/wf4.png'
import WFM from '../../images/WFM.png'
import WFL1 from '../../images/WFL1.png'
import WFL2 from '../../images/WFL2.png'
const Workflow = () => {
  return (
    <div className='workflow'>
        <h2>Enhance Your Workflow with Integrated Tools</h2>
        <div className='wf-down'>
            <div className="wf-img">
                <img src={wf1} alt="" />
                <img src={wf2} alt="" />
                </div>
                <div className='wf-img2'>
                <img src={wf3} alt="" />
                <img src={wf4} alt="" />
</div>
<div className='wfm-img'>
<img src={WFM} alt="" />
<img src={WFL1} alt="" />
<img src={WFL2} alt="" /></div>
        </div>
        <button>Explore Tools</button>
    </div>
  )
}

export default Workflow