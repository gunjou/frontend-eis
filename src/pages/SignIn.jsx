import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';


const SignIn = () => {
	return (
		<div className="login flex m-auto mt-36 grid-col-3 gap-4 ">
			<div className="form">
				<form className="w-80 mb-12 h-[24rem] pl-5 pr-5 justify-center border border-white bg-gray-50 rounded drop-shadow-2xl">
					<div className="logo pb-7 pt-5 text-xl">
						<img src={process.env.PUBLIC_URL + "images/logo.svg"} className="w-48 m-auto mb-2" alt="jasamedika-logo" />
						<h5 className='text-gray-700'>Log in</h5>
					</div>
					<div className="username mb-4">
						<label class="relative block">
							<span class="sr-only">Username</span>
							<span class="absolute inset-y-0 left-0 flex items-center pl-2">
								<AccountCircleIcon className='h-5 w-5 text-gray-700' />
							</span>
							<input class="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#04ac49] focus:ring-[#04ac49] focus:ring-1 sm:text-sm" placeholder="username" type="text" name="username" />
						</label>
					</div>
					<div className="password mb-4">
						<label class="relative block">
							<span class="sr-only">Password</span>
							<span class="absolute inset-y-0 left-0 flex items-center pl-2">
								<LockIcon className='h-5 w-5 text-gray-700' />
							</span>
							<input class="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#04ac49] focus:ring-[#04ac49] focus:ring-1 sm:text-sm" placeholder="password" type="password" name="password" />
						</label>
					</div>
					<div className="flex item-start mb-6 ">
						<div className="flex item-center h5">
							<input id="remember" type="checkbox" className="w-6 h-6 rounded accent-green-700" />
						</div>
						<label htmlFor="remember" className="ml-2 pt-1 text-sm text-gray-700">Remember Me</label>
					</div>
					<div className="submit h-8 mb-3 rounded w-full pt-1 text-white bg-[#04ac49] hover:bg-[#026e2e] text-md">
						<button type="submit" ><a href="/">LOGIN</a></button>
					</div>
					<div className='text-xs'>
						<span>Belum punya akun? <a href="/sign-up" className='text-blue-700'>Daftar Disini</a></span>
					</div>
				</form>
				<span className='text-xs'>© 2022, PT. Jasamedika Saranatama</span>
			</div>
			<div className="picture col-span-2">
				<div className="pic w-[45rem]">
					<img src={process.env.PUBLIC_URL + "images/login-register.webp"} alt="signin" />
				</div>
			</div>
		</div>
	)
}

export default SignIn