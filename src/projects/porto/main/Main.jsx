import "./main.css"

const Main = () => {
  return (
    <>
    <header>
    
    <h2 className="logo">Haythem</h2>
    <nav className="navigation">
        <a href="#">Home</a>
        <a href="#Services">Services</a>
        <a href="#Projects">Projects</a>
        <a href="#Contacts">Contact</a>
        
    </nav>
</header>
    <section className="main">
    <div className="content-efc">
        <h2>Hello , I'm Haythem<br/><span>student-in efc</span></h2>
        <h3>& Web-Developer</h3>
        <a href="#projects" className="main-btn">View my work</a>
       <div className="social-icons"> 
        <a href="https://www.linkedin.com/in/haythem-dhiffallah-514346277/" target="_blank"  rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
        <a href="#" target="_blank"><i className="fa-brands fa-square-twitter"  rel="noopener noreferrer"></i></a>
        <a href="https://www.facebook.com/haythem.di.94/" target="_blank"  rel="noopener noreferrer"><i className="fa-brands fa-square-facebook"></i></a>
        <a href="https://www.instagram.com/haythem.di.94/?next=%2F" target="_blank"  rel="noopener noreferrer"><i className="fa-brands fa-square-instagram"></i></a>
        </div> 
    </div>
   
    </section>
    </>
  );
}

export default Main;
