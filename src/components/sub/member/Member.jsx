import { useRef, useState } from 'react';
import Layout from '../../common/layout/Layout';
import './Member.scss';

export default function Member() {
	const initVal = useRef({ userid: '', pwd1: '', pwd2: '', email: '', comments: '', edu: '', gender: '', interest: [] });
	const [Val, setVal] = useState(initVal.current);
	const [Errs, setErrs] = useState({});

	const handleReset = () => {
		setVal(initVal.current);
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
	};

	const handleCheck = (e) => {
		const { name } = e.target;
		const inputs = e.target.parentElement.querySelectorAll('input');
		const checkArr = [];
		inputs.forEach((input) => input.checked && checkArr.push(input.value));
		setVal({ ...Val, [name]: checkArr });
	};

	const check = (value) => {
		const errs = {};
		const num = /[0-9]/;
		const txt = /[a-zA-Z]/;
		const spc = /[!@#$%^&*()[\]_.+]/;
		const mail = /[[a-z0-9]+@[a-z]+\.[a-z]{2,3}$]/;

		if (value.userid.length < 5) errs.userid = '아이디는 최소 5글자 이상 입력하세요';
		if (value.comments.length < 10) errs.comments = '남기는 말은 최소 10글자 이상 입력하세요';
		if (!value.gender) errs.gender = '성별을 선택하세요';
		if (value.interest.length === 0) errs.interest = '관심사를 하나이상 선택하세요.';
		if (!value.edu) errs.edu = '최종학력을 선택하세요.';
		if (value.pwd1 !== value.pwd2 || !value.pwd2) errs.pwd2 = '두개의 비밀번호를 같게 입력하세요.';
		if (value.email) errs.email = '올바른 이메일 형식으로 입력하세요';
		if (!num.test(value.pwd1) || !txt.test(value.pwd1) || !spc.test(value.pwd1) || value.pwd1.length < 5)
			errs.pwd1 = '비밀번호는 특수문자, 문자, 숫자를 모두포함해서 5글자 이상 입력하세요.';

		return errs;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (Object.keys(check(Val)).length === 0) {
			alert('회원가입을 축하합니다.');
		}
	};

	return (
		<Layout title={'Member'}>
			<section>
				<div className='formBox'>
					<form onSubmit={handleSubmit}>
						<fieldset>
							<legend className='h'>회원가입 폼</legend>
							<div className='boxInput'>
								<label for='userName' className='tit'>
									NAME
								</label>
								<input type='text' id='userName' name='userName' placeholder='User ID' value={Val.userid} onChange={handleChange} />
								{Errs.userid && <p>{Errs.userid}</p>}
							</div>
							<div className='boxInput'>
								<label for='userEmail' className='tit'>
									EMAIL
								</label>
								<input type='text' id='userEmail' name='email' placeholder='Email' value={Val.email} onChange={handleChange} />
							</div>
							<div className='boxInput'>
								<label for='pwd1' className='tit'>
									PASSWORD
								</label>
								<input type='password' id='pwd1' name='pwd1' placeholder='Password' value={Val.pwd1} onChange={handleChange} />
							</div>
							<div className='boxInput'>
								<label for='pwd2' className='tit'>
									RE-PASSWORD
								</label>
								<input type='text' id='pwd2' name='pwd2' placeholder='Password' value={Val.pwd2} onChange={handleChange} />
							</div>
							<div className='boxInput'>
								<label for='edu' className='tit'>
									EDUCATION
								</label>
								<div className='groupInput'>
									<select id='edu' name='edu' onChange={handleChange}>
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
										<input type='radio' defaultValue='female' id='female' name='gender' onChange={handleChange} />
										<label htmlFor='female'>Female</label>
									</div>
									<div className='custom'>
										<input type='radio' defaultValue='male' id='male' name='gender' onChange={handleChange} />
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
								<textarea name='comments' cols='30' rows='5' placeholder='Leave a comment' onChange={handleChange}></textarea>
							</div>
							<div className='wrapBtn'>
								<input type='reset' value='Cancel' />
								<input type='submit' value='Submit' className='submit' />
							</div>
						</fieldset>
					</form>
				</div>
			</section>
		</Layout>
	);
}
