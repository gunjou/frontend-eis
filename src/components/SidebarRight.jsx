import PersonIcon from '@mui/icons-material/Person';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SidebarRight = () => {
  return (
    <div className="absolute top-0 right-0 h-16 w-16 p-3">
      <ul>
        <li className="flex item-center p-2 mb-4 hover:bg-[#049D79]/60 hover:text-white hover:rounded-xl">
          <PersonIcon className='text-sm' />
        </li>
        <li className="flex item-center p-2 mb-4 hover:bg-[#049D79]/60 hover:text-white hover:rounded-xl">
          <PowerSettingsNewIcon className='text-sm' />
        </li>
      </ul>
    </div>
  )
}

export default SidebarRight;