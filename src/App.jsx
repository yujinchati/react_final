import { Route } from 'react-router-dom';
import Department from './components/sub/department/Department';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import './globalStyles/Variables.scss';
import './globalStyles/Reset.scss';
import Youtube from './components/sub/youtube/Youtube';
import Gallery from './components/sub/gallery/Gallery';
import Detail from './components/sub/youtube/Detail';
import Contact from './components/sub/contact/Contact';
import Community from './components/sub/community/Community';
import Member from './components/sub/member/Member';

function App() {
	return (
		<div class='wrap'>
			<Header />
			<Route path='/department' component={Department} />
			<Route path='/youtube' component={Youtube} />
			<Route path='/detail/:id' component={Detail} />
			<Route path='/gallery' component={Gallery} />
			<Route path='/contact' component={Contact} />
			<Route path='/community' component={Community} />
			<Route path='/member' component={Member} />
			<Footer />
		</div>
	);
}

export default App;
