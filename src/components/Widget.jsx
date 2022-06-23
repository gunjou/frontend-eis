

const Widget = () => {
	return (
		<div className="widget ml-2 mb-3">
					
			<div className="card p-4 flex rounded border border-white bg-white  drop-shadow-xl">

				<div className="left ">
					<div className="title font-bold text-sm text-left">Pasien Rawat Jalan</div>
					<div className="counter text-left text-4xl p-2">
						232
					</div>
					<div className="detail text-left text-xs">detail</div>
				</div>
				<div className="right">
				<img src={process.env.PUBLIC_URL + "images/icon-pasien-rawat-inap.png"} alt="pasien rawat inap" className="h-16 w-16" />
				</div>
			</div>
		</div>
	)
}

export default Widget

// const Widget = () => {
//   return (
//     <div className="widget flex-col">
// 			<div className="category float-left pl-8 pt-5 text-xs">
// 				<button className='mr-3 text-white border-2 border-[#04A449]/0 bg-[#049D79]/60 hover:bg-[#049D79]/60 hover:text-white px-3 py-1 rounded'>Pasien Terlayani</button>
// 				<button className='mr-3 text-gray-600 border-2 border-[#04A449]/0 hover:bg-[#049D79]/60 hover:text-white px-3 py-1 rounded'>Pasien Terlayani</button>
// 			</div>
// 			<div className="card flex mt-16 ml-8">
// <div className="card flex mt-16 ml-8 border-1 rounded bg-red-500">

// 				<div className="left">
// 					<div className="title font-bold p-2">
// 						Pasien Rawat Jalan
// 					</div>
// 					<div className="value p-2 text-5xl text-left pl-4">
// 						800
// 					</div>
// 					<div className="detail p-2 text-left text-xs">
// 						detail --
// 					</div>
// 				</div>
// 				<div className="right">
// 					<img src={process.env.PUBLIC_URL + "images/icon-pasien-rawat-inap.png"} alt="pasien rawat inap" className="w-16 pt-4 mr-4" />
// 				</div>
// 				</div>

// 				<div className="card flex mt-16 ml-8 border-1 rounded bg-red-500">
// 				<div className="left">
// 					<div className="title font-bold p-2">
// 						Pasien Rawat Jalan
// 					</div>
// 					<div className="value p-2 text-5xl text-left pl-4">
// 						800
// 					</div>
// 					<div className="detail p-2 text-left text-xs">
// 						detail --
// 					</div>
// 				</div>
// 				<div className="right">
// 					<img src={process.env.PUBLIC_URL + "images/icon-pasien-rawat-inap.png"} alt="pasien rawat inap" className="w-16 pt-4 mr-4" />
// 				</div>
// 				</div>
// </div>
			
			
//     </div>
//   )
// }

// export default Widget