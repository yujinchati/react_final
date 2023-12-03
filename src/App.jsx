import { Route } from 'react-router-dom';
import Department from './components/sub/department/Department';
import Header from './components/common/header/Header';
import Footer from './components/common/footer/Footer';
import './globalStyles/Variables.scss';
import './globalStyles/Reset.scss';

function App() {
	return (
		<div class='wrap'>
			<Header />
			<Route path='/department' component={Department} />
			<Footer />
		</div>
	);
}

export default App;
