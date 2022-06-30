import PersonIcon from '@mui/icons-material/Person';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const SidebarRight = () => {
  return (
    <div className="top-0 right-8 h-14 w-[53px] pr-[17px] pt-4">
      <ul>
        <li className="flex item-center p-1.5 mb-4 hover:bg-[#049D79]/60 hover:text-white hover:rounded-xl">
          <PersonIcon className='text-sm' />
        </li>
        <li className="flex item-center p-1.5 mb-4 hover:bg-[#049D79]/60 hover:text-white hover:rounded-xl">
          <a href="/login">
            <PowerSettingsNewIcon className='text-sm' />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SidebarRight;