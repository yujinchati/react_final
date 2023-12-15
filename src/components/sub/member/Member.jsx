import Layout from '../../common/layout/Layout';
import './Member.scss';

export default function Member() {
	return (
		<Layout title={'Member'}>
			<section>
				<div className='formBox'>
					<form>
						<fieldset>
							<legend className='h'>회원가입 폼</legend>
							<div className='boxInput'>
								<label for='userName' className='tit'>
									NAME
								</label>
								<input type='text' id='userName' name='userName' placeholder='User ID' />
							</div>
							<div className='boxInput'>
								<label for='userEmail' className='tit'>
									EMAIL
								</label>
								<input type='text' id='userEmail' name='email' placeholder='Email' />
							</div>
							<div className='boxInput'>
								<label for='pwd1' className='tit'>
									PASSWORD
								</label>
								<input type='password' id='pwd1' name='pwd1' placeholder='Password' />
							</div>
							<div className='boxInput'>
								<label for='pwd2' className='tit'>
									RE-PASSWORD
								</label>
								<input type='text' id='pwd2' name='pwd2' placeholder='Password' />
							</div>
							<div className='boxInput'>
								<label for='edu' className='tit'>
									EDUCATION
								</label>
								<div className='groupInput'>
									<select id='edu' name='edu'>
										<option value=''>Education</option>
										<option value='elementary-school'>초등학교 졸업</option>
										<option value='middle-school'>중학교 졸업</option>
										<option value='high-school'>고등학교 졸업</option>
										<option value='college'>대학교 졸업</option>
									</select>
								</div>
							</div>
							<div className='boxInput type'>
								<strong className='tit'>GENDER</strong>
								<div className='groupInput'>
									<div className='custom'>
										<input type='radio' defaultValue='female' id='female' name='gender' />
										<label htmlFor='female'>Female</label>
									</div>
									<div className='custom'>
										<input type='radio' defaultValue='male' id='male' name='gender' />
										<label htmlFor='male'>Male</label>
									</div>
								</div>
							</div>
							<div className='boxInput type'>
								<strong className='tit'>INTERESTING</strong>
								<div className='groupInput'>
									<div className='custom'>
										<input type='checkbox' name='interest' id='sports' defaultValue='sports' />
										<label htmlFor='sports'>Sports</label>
									</div>
									<div className='custom'>
										<input type='checkbox' name='interest' id='reading' defaultValue='reading' />
										<label htmlFor='reading'>Reading</label>
									</div>
									<div className='custom'>
										<input type='checkbox' name='interest' id='music' defaultValue='music' />
										<label htmlFor='music'>Music</label>
									</div>
									<div className='custom'>
										<input type='checkbox' name='interest' id='game' defaultValue='game' />
										<label htmlFor='game'>Game</label>
									</div>
								</div>
							</div>
							<div className='boxInput'>
								<label htmlFor='comments' className='tit'>
									COMMENT
								</label>
								<textarea name='comments' cols='30' rows='5' placeholder='Leave a comment'></textarea>
							</div>
							<div className='wrapBtn'>
								<input type='reset' value='Cancel' />
								<input type='submit' value='Submit' />
							</div>
						</fieldset>
					</form>
				</div>
			</section>
		</Layout>
	);
}
