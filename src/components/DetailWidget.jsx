import React from 'react'
import TableDetail from './diagram/dashboard/TableDetail'

const DetailWidget = () => {

	const data = [
		{ id: "detail-pasien-rawat-jalan", title: "Pasien Rawat Jalan", },
		{ id: "detail-pasien-igd", title: "Pasien IGD", },
		{ id: "detail-pasien-rawat-inap", title: "Pasien Rawat Inap", },
		{ id: "detail-pasien-radiologi", title: "Pasien Radiologi", },
		{ id: "detail-pasien-laboratorium", title: "Pasien Laboratorium", },
		{ id: "detail-pasien-rehabilitasi", title: "Pasien Rehabilitasi Medik", },
		{ id: "detail-pasien-bedah", title: "Pasien Bedah", },
		{ id: "detail-farmasi", title: "Pasien Farmasi", },
		{ id: "detail-pengunjung-rawat-jalan", title: "Pengunjung Rawat Jalan", },
		{ id: "detail-pengunjung-igd", title: "Pengunjung IGD", },
		{ id: "detail-pengunjung-rawat-inap", title: "Pengunjung Rawat Inap", },
		{ id: "detail-pengunjung-radiologi", title: "Pengunjung Radiologi", },
		{ id: "detail-pengunjung-laboratorium", title: "Pengunjung Laboratorium", },
		{ id: "detail-pengunjung-rehabilitasi", title: "Pengunjung Rehabilitasi Medik", },
	]

	return (
		<div className="all-modal">
			{data.map((data) => (
				<div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto bg-black/50"
					id={data.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div class="modal-dialog relative pointer-events-none w-full max-w-7xl h-full">
						<div
							class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
							<div
								class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
								<h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">{data.title}</h5>
								<button type="button"
									class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
									data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div class="modal-body p-4">
								<TableDetail />
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default DetailWidget