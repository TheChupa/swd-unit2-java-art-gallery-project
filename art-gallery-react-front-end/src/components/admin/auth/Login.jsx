const Login = () => {
	const [loginData, setLoginData] = useState({
		username: '',
		password: '',
	});

	return (
		<main>
			<h1>Log In</h1>

			<form method="post">
				<div className="container">
					<div className="row">
						<div className="form-item col-4">
							<label for="username">Username</label>
							<input id="username" value={loginData.username} type="text" />
							{hasErrors && <p className="error">Username is required.</p>}
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="form-item col-4">
							<label for="password">Password</label>
							<input value={loginData.password} type="password" />
							{hasErrors && <p className="error">Password is required.</p>}
						</div>
					</div>
				</div>

				<button type="submit">Log In</button>
			</form>
			<p className="mt-5">
				Don't have an account? <a href="/register">Register here.</a>
			</p>
		</main>
	);
};

export default Login;
