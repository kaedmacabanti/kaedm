import React from 'react'
import profile from '../img/profile.jpg'


const Image = () => {
    return(
    <section className='container1'>
        <div className='backgroundPhoto'>
            
        </div>
      
    </section>
    )
}

const AboutMe = () => {
    return(
    <section className='container2'>
        <section className='mycontent'>
            <h3>Web Developer</h3>
            <h2>Kyle Ash Ezequiel D. Macabanti</h2>
            <p className="intro">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam sint a, repudiandae esse cumque suscipit explicabo, ratione obcaecati cupiditate error est dignissimos vitae eveniet voluptatem, illum corporis fuga quisquam labore?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ullam consectetur ipsa eius molestiae veniam accusamus quia consequatur fugiat ipsum! Quibusdam consequuntur sunt necessitatibus asperiores quas eveniet recusandae ratione numquam!
            </p>
            <hr/>
            <div className="info templateCollumn">
                        <div> <b>Birthday:</b>  November 20 2001</div>
                        <div> <b>Degree:</b> Bachelor of Science in Information Technology</div>
                        <div> <b>Website:</b> wwww.kaedm.com</div>
                        <div> <b>Email: </b>kyleashderaco@gmail.com</div>
                        <div> <b>Contact Number:</b> 0926 362 0950</div>
                        <div> <b>LinkedIn:</b> KyleAshMacabanti</div>
            </div>
            <hr/>   

            <h3>What I do</h3>
            <h2>Services</h2>
            <div class="skillInfo templateCollumn">
                    <div>
                        <div></div>
                        <h3>Web Development</h3> Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Veritatis ad natus 
                        facere labore, vel, aliquid est magnam assumenda,
                        hic esse nesciunt quia. Enim maiores nesciunt in </div>
                    <div>
                        <div></div>
                        <h3>UI/UX</h3> Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Veritatis ad natus 
                        facere labore, vel, aliquid est magnam assumenda,
                        hic esse nesciunt quia. Enim maiores nesciunt in</div>
                    <div>
                        <div></div>
                        <h3>Graphic Design</h3>Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Veritatis ad natus 
                        facere labore, vel, aliquid est magnam assumenda,
                        hic esse nesciunt quia. Enim maiores nesciunt in</div>
                    <div>
                        <div></div>
                        <h3>Search Engine Optimization</h3>Lorem ipsum dolor
                        consectetur adipisicing elit. Veritatis ad natus 
                        facere labore, vel, aliquid est magnam assumenda,
                        hic esse nesciunt quia. Enim maiores nesciunt in</div>
                </div>
        </section>
    </section>
    )
}



const KaedHome = () => {
  return (
    <section className='maincontainer'>
        <Image/>
        <AboutMe/>
    </section>
  )
}

export default KaedHome
