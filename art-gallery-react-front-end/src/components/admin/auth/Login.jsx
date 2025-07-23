import { Link } from 'react-router';
import InputErrorMessage from '../../common/InputErrorMsg';
import TextInput from '../../common/TextInput';
import PasswordInput from './PasswordInput';

const errorMessages = {
	usernameRequired: 'Username is required.',
	passwordRequired: 'Password is required.',
};

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [hasErrors, setHasErrors] = useState(false);

	const handleUsernameChange = event => {
		setUsername(event.target.value);
	};

	const handlePasswordChange = event => {
		setPassword(event.target.value);
	};

	const handleSubmit = event => {
		if (username === '' || password === '') {
			event.preventDefault();
			setHasErrors(true);
		} else {
			// TODO: POST to /api/artists/add endpoint
			console.log('Validation passed and form submitted.');
		}
	};

	return (
		<main>
			<h1>Log In</h1>

			<form method="post">
				<div className="container">
					<div className="row">
						<div className="form-item col-4">
							<TextInput
								id="username"
								label="Username"
								value={username}
								setValue={setUsername}
								handleChange={handleUsernameChange}
							/>
							<InputErrorMessage
								hasError={hasErrors && username === ''}
								msg={errorMessages[usernameRequired]}
							/>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="form-item col-4">
							<PasswordInput
								id="password"
								label="Password"
								value={password}
								handleChange={handlePasswordChange}
							/>
							<InputErrorMessage
								hasError={hasErrors && password === ''}
								msg={errorMessages[passwordRequired]}
							/>
						</div>
					</div>
				</div>

				<button type="submit" onSubmit={handleSubmit}>
					Log In
				</button>
			</form>
			<p className="mt-5">
				Don't have an account? <Link to="/register">Register here.</Link>
			</p>
		</main>
	);
};

export default Login;
