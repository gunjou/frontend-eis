import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';


const SignUp = () => {
	return (
		<div className="login flex m-auto mt-36 grid-col-3 gap-4 ">
			<div className="form">
				<form className="w-80 mb-12 h-[24rem] pl-5 pr-5 justify-center border border-white bg-gray-50 rounded drop-shadow-2xl">
					<div className="logo pb-6 pt-5 text-xl">
						<img src={process.env.PUBLIC_URL + "images/logo.svg"} className="w-48 m-auto mb-2" />
						<h5 className='text-gray-700'>Daftar</h5>
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
					<div className="email mb-4">
						<label class="relative block">
							<span class="sr-only">Email</span>
							<span class="absolute inset-y-0 left-0 flex items-center pl-2">
								<EmailIcon className='h-5 w-5 text-gray-700' />
							</span>
							<input class="placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-[#04ac49] focus:ring-[#04ac49] focus:ring-1 sm:text-sm" placeholder="email" type="email" name="email" />
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
					<div className="submit h-8 mb-3 rounded w-full pt-1 text-white bg-[#04ac49] hover:bg-[#026e2e] text-md">
						<button type="submit" ><a href="/">SIGN UP</a></button>
					</div>
					<div className='text-xs'>
						<span>Sudah punya akun? <a href="/login" className='text-blue-700'>Login Disini</a></span>
					</div>
				</form>
				<span className='text-xs'>© 2022, PT. Jasamedika Saranatama</span>
			</div>
			<div className="picture col-span-2">
				<div className="pic w-[45rem]">
					<img src={process.env.PUBLIC_URL + "images/login-register.webp"} />
				</div>
			</div>
		</div>
	)
}

export default SignUp