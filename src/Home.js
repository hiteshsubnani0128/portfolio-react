import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './index.css';
import StickyFooter from './pages/Footer';

const Sections = (props) =>{
    var st = {
        padding: '46px 16px'
    }
    if(props.class==="dark"){
        st = {padding: '46px 16px',
            backgroundColor: 'rgb(247, 249, 250)'}
    }
    return(
        <div style={st}>
            <h3 className="my-3 my-headings display-4">{props.heading}</h3>
            {props.children}
        </div>
    )
}

const Card = (props) =>{
    return(
        <div className="card-Shadow col-md-3 m-3 text-center bg-white">
            <img className="pt-3" src={props.image} alt={props.image} width="100%" />
            <h4 className="pt-3 pb-2 font-weight-light">{props.title}</h4>
            <hr class="MuiDivider-root jss82" />
            <p class="text-muted"> {props.children}</p>
            {/* <hr class="MuiDivider-root jss82" />
            <p>Tech Stack :- </p> */}
            <hr class="MuiDivider-root jss82" />
        <p>Tech Stack :- { props.tech}</p>
        </div>
    )
}

const HomePage = () =>{
    var iAm = ['Self Taught Programmer', 'Software Developer', "Photographer", "FullStack Developer", "Mobile App Developer",'Software Developer', "Photographer", "FullStack Developer", "Mobile App Developer",'Software Developer', "Photographer", "FullStack Developer", "Mobile App Developer",'Software Developer', "Photographer", "FullStack Developer", "Mobile App Developer"]
    let [iA, updateIAm] = useState(iAm[0]);

    setInterval(()=>{
        updateIAm(iAm[Math.floor(Math.random()*iAm.length)]);
    },3000);

    return(
        <>
        <div className="text-center mb-2 pt-2 container-fluid">
            <div className="jumbotron" style={{backgroundColor:'#F7F8FA'}}>
            <img alt="hitesh Subnani" width="35%" src="https://i.pinimg.com/originals/50/83/e0/5083e0a2a7dcaae07c142e8b87036a27.gif"/>
            <h1 className="display-3 my-2">Hello, I’m Hitesh Subnani</h1>
            <h2 className="font-weight-light my-3 text-muted">A, { iA } </h2>
            </div>
            <div className="my-4"> 
            <div className="container">
            <Sections heading="About Me">
            <div className="row d-flex">
            <div className="col-md py-3">
                <img src="https://thefront.maccarianagency.com/images/illustrations/relax-in-sofa.svg" width="80%" alt="hitesh" />
                </div>
                <div className="col-md justify-content-center">
                <p className="text-muted vertical-center h5 font-weight-light" style={{lineHeight: '1.6'}}>
                I am a FullStack Engineer with expertise in JavaScript, Node.JS and Python. I am keenly interested in algorithm-level efficiency and has experience working both with Client side and Server side technologies as well as frameworks. I am also a competitive programmer who actively participates in different online challenges. I love learning about anything, especially if it makes him better at my craft.
                </p>
                </div>
            </div>
            </Sections>
            </div>
            <Sections heading="Some of my latest works" class="dark">
                <div className="row justify-content-center">
                    {/* <Card image="https://thefront.maccarianagency.com/images/illustrations/mobiles.svg" title="Microsoft code for future">Developed and Deployed website for microsoft India</Card> */}
                    {/* <Card image="https://thefront.maccarianagency.com/images/illustrations/dashboard.svg"></Card> */}
                    <Card image="https://hiteshsubnani.js.org/wp-content/uploads/2020/02/portfolio-screen1.png" title="Microsoft code for future" tech="NodeJS, ReactJS, Mongodb, Azure">Developed and Deployed website for microsoft India</Card>
                    <Card image="https://hiteshsubnani.js.org/wp-content/uploads/2020/02/portfolio-screen2.png" title="CodeBooky Online Education" tech="HTML, CSS, JavaScript, ReactJS">Designed and Coded website for codebooky.js.org</Card>
                    <Card image="https://hiteshsubnani.js.org/wp-content/uploads/2020/02/portfolio-screen3.png" title="Girlscript Jaipur Wesbsite" tech="ReactJS, Material-UI design">Designed and Developed PWA for Girlscript Jaipur</Card>
                </div>
            </Sections>
            <div className="text-center container">
            <Sections heading="Technologies I love to work on">
            <div className="row d-flex">
            <div className="col-md py-3">
                <img src="https://storage.googleapis.com/incind/3411109.jpgQRm6rxR" width="100%" alt="hitesh" />
                </div>
                <div className="col-md justify-content-center">
                <div className="text-muted vertical-center-hm h3 font-weight-light">
                I’m using top leading
                Programming Languages and Framework's
                </div>
                <div className="row mt-4">
                    <div className="col-3 my-3">
                        <img src="https://i.stack.imgur.com/PgcSR.png" alt="HTML"  width="90%" />
                    </div>
                    <div className="col-3 mt-2 mb-3">
                        <img src="https://cdn.worldvectorlogo.com/logos/css3.svg" alt="HTML"  width="100%" />
                    </div>
                    <div className="col-3 mt-2 mb-3">
                        <img src="https://www.dillancobb.com/images/tech/js.png" alt="HTML"  width="100%" />
                    </div>
                    <div className="col-3 my-3">
                        <img src="https://hiteshsubnani.js.org/images/ReactJS.png" alt="HTML"  width="100%" />
                    </div>
                    <div className="col-3 my-3">
                        <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="HTML"  width="70%" />
                    </div>
                    <div className="col-3 my-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" alt="HTML"  width="70%" />
                    </div>
                    <div className="col-3 my-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" alt="HTML"  width="70%" />
                    </div>
                    <div className="col-3 mt-4 mb-3">
                        <img src="https://cdn.worldvectorlogo.com/logos/aws-2.svg" alt="HTML"  width="70%" />
                    </div>
                </div>
                </div>
            </div>
            </Sections>
            </div>
            {/* <Sections heading="Experience" class="dark">
                <div className="text-left container">
                <h4>FULL STACK DEVELOPER</h4>
                </div>
            </Sections>
            <Sections heading="Education">

            </Sections> */}
            <Sections heading="My Awards / Honors" class="dark">
            <div className="row d-flex">
            <div className="col-md py-3 mt-3">
                <img src="https://hiteshsubnani.js.org/wp-content/uploads/2020/02/object-10.png" width="60%" alt="hitesh" />
                </div>
                <div className="col-md justify-content-center">
                    <div className="row">
                        <div className="col-md-2 mt-3">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" width="100%" alt="hitesh" />
                        </div>
                        <div className="col-md-8 my-4 text-left">
                            <h4>PROJECT SELECTED FOR GOOGLE BUILD FOR DIGITAL INDIA</h4>
                            <p>Presented my project at Google Mumbai</p>
                        </div>
                        <div className="col-md">
                        </div>
                        <div className="col-md-2 mt-3">
                        <img src="https://lh3.googleusercontent.com/jOOCxt0YRNlAEmJ4In1roEjEyjisdGakTGTzPzxdjB8KtpIU4VIUVxVNshcjqRUGejQ" width="90%" alt="hitesh" />
                        </div>
                        <div className="col-md-8 my-4 text-left">
                            <h4>SMART INDIA HACKATHON (2019 - 2020)</h4>
                            <p>Top 4 out of 1.6 Lakh + Participants</p>
                        </div>
                        <div className="col-md">
                        </div>
                        <div className="col-md-2 mt-3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUQUoR0FNGDd_phfGdFw-XNUxdmBAmbPBRd3RwwbhTQc0MEQSr&usqp=CAU" width="80%" alt="hitesh" />
                        </div>
                        <div className="col-md-8 my-4 text-left">
                            <h4>RTU HACKATHON WINNER (2020)</h4>
                            <p>For building a Project on Alternative Online School (AI-School)</p>
                        </div>
                        <div className="col-md">
                        </div>
                    </div>
                </div>
            </div>
            </Sections>
            </div>
        </div>
            <StickyFooter />
            </>
    )
}

const Home = () =>{
    return(
        <>  
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Hitesh <span className="font-weight-light">Subnani</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                {/* <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                </Nav>
                <Nav>
                <Nav.Link><NavLink className="link" exact activeClassName="active_class" to={'/'} style={{decoration:'none'}} > Home </NavLink></Nav.Link>
                <Nav.Link><NavLink className="link" exact activeClassName="active_class" to={'/todoapp'} style={{decoration:'none'}} > TODO App </NavLink></Nav.Link>
                <Nav.Link><NavLink className="link" exact activeClassName="active_class" to={'/counter'}  style={{decoration:'none'}} >Counter App</NavLink></Nav.Link>
                <Nav.Link><NavLink className="link btn btn-primary btn-sm" exact activeClassName="active_class" to={'/contact'}  style={{decoration:'none'}} >Contact Me</NavLink></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            
        </>
    )
}
export default Home;
export {HomePage};