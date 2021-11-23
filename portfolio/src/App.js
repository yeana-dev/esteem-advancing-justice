import React from 'react';
import BrowserRouter from 'react-router-dom';
import Route from 'react-router-dom';
import Routes from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import Project from './components/Project';

function App()  {

    return (
			<BrowserRouter>
				<Routes>
					<Route exact path='/' component={Home} />
					<Route exact path='/about' component={About} />
					<Route exact path='/post/:slug' component={SinglePost} />
					<Route exact path='/post' component={Post} />
					<Route exact path='/project' component={Project} />
				</Routes>
			</BrowserRouter>
		);
  }


export default App;
