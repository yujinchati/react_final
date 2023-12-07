import Layout from '../../common/layout/Layout';
import './Gallery.scss';

export default function Gallery() {
	const handleSearch = (e) => {};
	return (
		<Layout title={'Gallery'}>
			<h2>PROJECT GALLERY</h2>
			<section>
				<div class='control'>
					<ul class='tab'>
						<li>All PROJECT</li>
						<li>COMPLETE PROJECT</li>
					</ul>
					<form onSubmit={handleSearch}>
						<fieldset>
							<legend class='blind'>검색</legend>
							<input type='search' placeholder='Search' autocomplete='off' class='tf_search' />
							<button type='button' class='btnSearch'>
								search
							</button>
						</fieldset>
					</form>
				</div>
			</section>
		</Layout>
	);
}
