// import './App.css';
import images from './Images/images.png';
import Top from './Component/Top';
import Intro from './Component/Intro';
import Foot from './Component/Foot';
import Educa from './Component/Educa';
import Skill from './Component/Skill';
import Experience from './Component/Experience';
import Contact from './Component/Contact';
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {

  let EducationDetails = [
    {
      Image: { images },
      ClgName: ' EWING CHRISTIAN COLLEGE',
      Duration: 'Allahabad Gaughat 211003, UP India',
      DurationClg: ' BCA - 2020 To 2023',
      List1: ' An autonomous constituent college of University of Allahabad',
      List2: 'I have learning various concept from this ',
      List3: 'I learnt to code in C/C++',
    },
    {
      Image: 'sfhjjjjsd',
      ClgName: 'S.K. INTER COLLEGE ALLAHABAD',
      Duration: 'Allahabad Attarsuiya 211003, Uttar Pradesh',
      DurationClg: ' Intermediate - 2017 To 2019',
      List1: 'Percentage -  62.00%',
      List2: 'Gocernment school in Allahabad',
      List3: 'Subjects - Physics, Chemistry, Mathematics.',
    },
    {
      Image: 'sfhjjjjsd',
      ClgName: 'S.K. INTER COLLEGE ALLAHABAD',
      Duration: ' Allahabad Attarsuiya 211003, Uttar Pradesh',
      DurationClg: ' High School - 2015 To 2017 ',
      List1: 'Percentage = 73.69%',
      List2: 'Government School in Allahabad',
      List3: 'I learnt lots of subject but Mathematics is my favourite in  High school.',
    }
  ]
  let skillsDetails = [
    {
      head: ' Language',
      first: ' C/C++ ',
      second: ' Javascript',
      third: 'java',
    },
    {
      head: 'Frameworks',
      first: ' ReactJs',
      second: ' NodeJs',
      third: 'Bootstrap',
    },
    {
      head: 'Tools',
      first: ' Git/Github ',
      second: 'Vs Code ',
      third: 'npm',
    },
    {
      head: 'Interests',
      first: ' Web Development ',
      second: 'Competitive Programming ',
      third: 'Video Editing',
    }

  ]

  let ExperienceDetails = [
    {
      // Image: { images },
      ClgName: 'Socialmeup',
      DurationClg: ' BACHELOR OF COMPUTER APPLICATIONS - 2020 To Present',
      List1: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit rerum remsint.',
      List2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. tus sint.',
    },
    {
      // Image: { images },
      ClgName: 'Google',
      DurationClg: ' BACHELOR OF COMPUTER APPLICATIONS - 2020 To Present',
      List1: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit rerum remsint.',
      List2: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. tus sint.',
    }

  ]

  return (
    <div>
{/* basename='/Portfolioweb' */}
      <BrowserRouter  >
        <Top/>

        <Switch>
          <Route exact path="/Portfolioweb">
            <Intro  />
            <Educa EducationDetails={EducationDetails} />
            <Skill skillsDetails={skillsDetails} />
            <Experience />
            <Contact />
          </Route>

          <Route exact path="/About">
            <Intro />
          </Route>

          <Route exact path="/Services">
            <Skill skillsDetails={skillsDetails} />
          </Route>

          <Route exact path="/Contact">
            <Contact />
          </Route>
        </Switch>

        <Foot />
      </BrowserRouter>
    </div>
  );
}
export default App;