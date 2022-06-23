import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Filter = () => {
  return (
    <div className="widget" >
      <div className="filter-btn">
        <button className='text-white bg-[#049D79]/60 hover:bg-[#049D79]/90 px-3 py-1 rounded'>
          <span className='font-bold text-sm text-center pl-1.5'>
            Filter Date:
          </span>
          <ExpandMoreIcon className='text-sm ml-5'/>

        </button>
      </div>
        
    </div>
  )
}

export default Filter