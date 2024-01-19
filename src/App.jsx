import { Route } from 'react-router-dom';
import Department from './components/sub/department/Department';
import Footer from './components/common/footer/Footer';
import './globalStyles/Variables.scss';
import './globalStyles/Reset.scss';
import Youtube from './components/sub/youtube/Youtube';
import Gallery from './components/sub/gallery/Gallery';
import Detail from './components/sub/youtube/Detail';
import Contact from './components/sub/contact/Contact';
import Community from './components/sub/community/Community';
import Member from './components/sub/member/Member';
import { useMedia } from './hook/useMedia';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Header from './components/common/header/Header';
import { useState } from 'react';
function App() {
	const queryClient = new QueryClient();
	const [Dark, setDark] = useState(false);

	return (
		<QueryClientProvider client={queryClient}>
			<div className={`wrap  ${Dark ? 'dark' : ''} ${useMedia()}`}>
				<Header Dark={Dark} setDark={setDark} />
				<Route path='/department' component={Department} />
				<Route path='/youtube' component={Youtube} />
				<Route path='/detail/:id' component={Detail} />
				<Route path='/gallery' component={Gallery} />
				<Route path='/contact' component={Contact} />
				<Route path='/community' component={Community} />
				<Route path='/member' component={Member} />
				<Footer />
			</div>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}

export default App;
