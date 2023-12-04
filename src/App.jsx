import { Route } from 'react-router-dom';
import Department from './components/sub/department/Department';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import './globalStyles/Variables.scss';
import './globalStyles/Reset.scss';
import Youtube from './components/sub/youtube/Youtube';

function App() {
	return (
		<div class='wrap'>
			<Header />
			<Route path='/department' component={Department} />
			<Route path='/youtube' component={Youtube} />
			<Footer />
		</div>
	);
}

export default App;
