<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/25423296/163456776-7f95b81a-f1ed-45f7-b7ab-8fa810d529fa.png">
  <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png">
  <img align='right' alt="Shows an illustrated sun in light mode and a moon with stars in dark mode." src="https://user-images.githubusercontent.com/25423296/163456779-a8556205-d0a5-45e2-ac17-42d089e3c3f8.png" width='50' height='50'>
</picture>

![GitHub last commit](https://img.shields.io/github/last-commit/nereidarondon/react-nav?style=for-the-badge)

[My Portfolio](http://NereidaRondon.com)

# <h1>React Nav bar using React-Router</h1>

Using vite and react-router, I created a simple navbar template that can be used for any single page application.

![image](https://user-images.githubusercontent.com/97356401/198838782-1665a773-0ece-4a11-860f-71fcc2bdd344.png)



[Visit website](https://sugarplumfairy.netlify.app/)

----------------------

### Dependencies

<h4> Vite and Node:</h4>

```
npm create vite@latest

npm install

npm run dev
```


<h4>React-router:</h4>

```
npm install react-router-dom@6
```

----------------------

### Components


<h4> Code for Nav component:</h4>

```.jsx
import React from 'react';
import { NavLink } from react-router';

export default function AppNavBar() {
  let activeClassName = 'active';

  return (
    <nav className="nav">
      <h2>New Site</h2>
      <ul>
        <li> 
          <NavLink to="/" end> Home </NavLink> 
        </li>
        
        <li> 
          <NavLink to="/about" className={({ isActive }) => (isActive ? activeClassName : '')}> About </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? activeClassName : '')}> Contact
          </NavLink>
        </li>

      </ul>
    </nav>
  );
}
```

<h4> Code for Router using BrowserRouter from react-router:</h4>

```.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

export default function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
```

<h4>Make sure to include the BrowserRouter by wrapping the whole project like so:</h4>

```.jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

```
------------------
<h3 align="left">Languages and Tools used in this Project:</h3>
<p align="left"> <a href="https://vitejs.dev/" target="_blank" rel="noreferrer"> <img src="https://vitejs.dev/logo-with-shadow.png" alt="vite" width="40" height="40"/> </a> $~~~$
<a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/></a> $~~~$
<a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> $~~~$  
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> $~~~$ 
<a href="https://reactjs.org/docs/jsx-in-depth.html"> <img src="https://tinyurl.com/5bpva66d" alt="css3" width="40" height="40"/> </a> $~~~$  
<a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/></a> $~~~$
<a href="https://reactrouter.com/en/main"> <img src="https://user-images.githubusercontent.com/97356401/197912754-907c7c61-eaf9-4912-b979-ba3daf4a434e.svg" alt="react-router" width="45" height="45"/> </a> $~~~$ 
</p>



<!-- -------------------------------------------------

### Video:

[Weather Dashboard App](https://user-images.githubusercontent.com/97356401/196055500-8988c32a-f2ef-48a2-85c7-d545590214bb.webm) -->


---

<h3 align="left">Connect with me:</h3>
<p align="left">
<a href="https://linkedin.com/in/https://www.linkedin.com/in/nereidarondon/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="https://www.linkedin.com/in/nereidarondon/" height="30" width="40" /></a> $~~~$
<a href="https://www.youtube.com/c/https://www.youtube.com/channel/ucinpd9noy3jb9l4owsmg6uq" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg" alt="https://www.youtube.com/channel/ucinpd9noy3jb9l4owsmg6uq" height="30" width="40" /></a> $~~~$
<a href="https://www.leetcode.com/nereidarondon" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/leet-code.svg" alt="nereidarondon" height="30" width="40" /></a>
</p>
