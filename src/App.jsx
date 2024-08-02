import user from './assets/user.png';
import Work from './Work.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPhone} from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram , faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-regular-svg-icons';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxbO7MAuTTw9EuOs6d4o4iDIpA1wLQd3xJ3Q0xMhscvZPBtj1bnEJSMXWGtujn8F-9e/exec'
    const form = document.forms['submit-to-google-sheet']
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    });
  });
  function handleMore(e){
    document.getElementById("work").classList.toggle('hidden');
    e.target.innerText = (e.target.innerText === "See More")? "See Less" : "See More";
  }
  function activeTab(e,id){
    const aboutP=document.querySelectorAll(".aboutP");
    const tabSkill=document.querySelectorAll(".tabSkill");
    aboutP.forEach((a) => {
      a.classList.remove("activeTab");
    });
    tabSkill.forEach((t)=>{
      t.classList.remove("tabSkillDisplay")
    });
    e.target.classList.add("activeTab");
    document.getElementById(id).classList.add("tabSkillDisplay");
  }
  return (<>
    <div id="Home" className="bg-firstImage h-screen w-full bg-cover bg-center">
      <div className="p-6">
        <nav className="flex items-center justify-between flex-wrap">
          <p className="text-3xl bold"><span className='spann'>V</span>inu <span className='spann'>K</span>anth</p>
          <ul className=''>
            <li className="navEle"><a href="#Home">Home</a></li>
            <li className="navEle"><a href="#About">About</a></li>
            <li className="navEle"><a href="#Services">Services</a></li>
            <li className="navEle"><a href="#Portflolio">Portflolio</a></li>
            <li className="navEle"><a href="#Contact">Contact</a></li>
          </ul>
        </nav>
        <div className="text-2xl ml-pad" style={{marginTop:"20%"}}>
          <p>Full Stack Developer</p>
          <h1 className='text-5xl pt-4'>Hi, i'm <span className="text-proj">V</span>inu <span className='text-proj'>K</span>anth<br/>From <span className='text-proj'>LPU</span></h1>
        </div>
      </div>
    </div>


    <div id="About" className='flex mt-20 ml-pad justify-between'>
      <div className='basis-1/3 h-100'>
        <img src={user} className="h-full rounded-xl"></img>
      </div>
      <div className='basis-3/5'>
        <h1 className='text-5xl mb-4'>About Me</h1>
        <p className='text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit, eius excepturi esse saepe adipisci porro velit ut ipsam aperiam commodi corporis aspernatur soluta id quisquam placeat enim, repudiandae nisi accusamus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor non voluptatem quae corrupti nobis explicabo, quo quod aliquam rerum esse quaerat tempore excepturi quisquam officia autem laborum? Illum, explicabo dolor!</p>
        <div className='flex mt-10'>
          <p className='aboutP activeTab' onClick={(e) => activeTab(e,"Skills")}>Skills</p>
          <p className='aboutP' onClick={(e) => activeTab(e,"Experience")}>Experience</p>
          <p className='aboutP' onClick={(e) => activeTab(e,"Education")}>Education</p>
        </div>
        <div className='tabSkill mt-8 hidden tabSkillDisplay' id="Skills">
          <ul>
            <li><span className='text-proj'>HTML</span> - Profecient</li>
            <li><span className='text-proj'>CSS</span> - Profecient</li>
            <li><span className='text-proj'>Java Script</span> - Profecient</li>
            <li><span className='text-proj'>Type Script</span> - Beginner</li>
            <li><span className='text-proj'>Java</span> - Profecient</li>
            <li><span className='text-proj'>React</span> - Profecient</li>
            <li><span className='text-proj'>Tailwind CSS</span> - Beginner</li>
          </ul>
        </div>
        <div className='tabSkill mt-8 hidden' id="Experience">
          <ul>
            <li><span className='text-proj'>Experience 1 </span><br/>Lorem ipsum dolor sit.</li>
            <li className='pt-4'><span className='text-proj'>Experience 2 </span><br/>Lorem ipsum dolor sit.</li>
            <li className='pt-4'><span className='text-proj'>Experience 3 </span><br/>Lorem ipsum dolor sit.</li>
          </ul>
        </div>
        <div className='tabSkill mt-8 hidden' id="Education">
          <ul>
            <li><span className='text-proj'>2022 - Present </span><br/>Lovely Professional University, Punjab CGPA - 8.6</li>
            <li className='pt-4'><span className='text-proj'>2017 - 2021</span><br/>Sainik School Amaravathinagar, TamilNadu CGPA - 82%</li>
          </ul>
        </div>
      </div>
    </div>


    <div id="Services" className='ml-pad mt-10 '>
      <h1 className='text-6xl p-8 font-bold'>My Services</h1>
      <div className="card-container mt-8">
        <div className='card flex justify-center flex-col items-center'>
          <p>😊</p>
          <h1>Web Developer</h1>
          <p>I can create wonderfull WebPages</p>
          <br/><a href="">Learn More</a>
        </div>
        <div className='card flex justify-center flex-col items-center'>
          <p>😊</p>
          <h1>App Development</h1>
          <p>Have jumped into world of App Development</p>
          <br/><a href="">Learn More</a>
        </div>
        <div className='card flex justify-center flex-col items-center'>
          <p>😊</p>
          <h1>Data Science</h1>
          <p>Learning Data Science from college</p>
          <br/><a href="">Learn More</a>
        </div>
      </div>
    </div>

    <div id="Portflolio" className='ml-pad mt-10'>
      <h1 className='text-6xl pl-8 pt-8 font-bold'>My Work</h1>
      <div className='works mt-10 mr-10'>
        <Work source="./src/assets/work-1.png" heading="Online-Text-Editor" 
              content="Made an interactive Text Editor for HTML, CSS, JavaScript" link="https://vinu75kanth.github.io/Code-Pen/"/>
        <Work source="./src/assets/work-2.png" heading="" content="" link=""/>
        <Work source="./src/assets/work-3.png"/>
      </div>
      <div id="work" className='text-center pt-16 text-4xl text-proj hidden'>
        Nothing More.
      </div>
      <div className='flex justify-center'>
      <button className="btn text-center mt-16 text-3xl rounded-md " onClick={handleMore}>See More</button>
      </div>
    </div>
    

    <div id="Contact" className='ml-pad mt-16 mr-10 flex justify-between'>
      <div id="leftEle" className="basis-1/3">
        <h1 className='text-6xl pt-8 pb-8 font-bold'>Contact Me</h1>
        <p className='text-xl font-bold'><FontAwesomeIcon icon={faEnvelope}/> vinukanth75@gmail.com</p>
        <p className='text-xl font-bold mt-2 mb-4'><FontAwesomeIcon icon={faPhone}/> 9344079654</p>
        <div id="socials" className="mt-8 mb-6">
          <a href="#"><FontAwesomeIcon icon={faFacebook}/></a>
          <a href="#"><FontAwesomeIcon icon={faTwitter}/></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin}/></a>
        </div>
        <a href="./src/assets/Vinu Kanth resume 02-08-2024.pdf" download className='down'>Download CV</a>
      </div>
      <div id="rightEle" className="basis-3/5 flex">
        <form name="submit-to-google-sheet" >
          <input type="text" name="Name" placeholder='Your Name' required></input>
          <input type="email" name="Email" placeholder='Email' required></input>
          <textarea rows="6" name="Message" placeholder='Message'></textarea>
          <button type='submit' className='btn mt-6 text-3xl rounded-md'>Submit</button>
        </form>
      </div>
    </div>

    <footer className='flex justify-center mt-16 p-2 text-2xl bg-back'>
      ©️ {new Date().getFullYear()} All Rights Reserved 😉
    </footer>
  </>
  )
}

export default App
