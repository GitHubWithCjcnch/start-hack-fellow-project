import { FC } from 'react';
import { buttonVariants } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import FellowSummitWhiteLogo from '../../../assets/white_FS_svg.svg'
import './Header.css'

const Header: FC = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <img className='p-2' src={FellowSummitWhiteLogo} alt='logo_fellow_summit'/>
      <div className="space-x-4 p-2">
        <Link className={buttonVariants({ variant: "secondary", className: 'font-bold' })} to={''}>APPLY</Link>
        <Link className='hover-effect' to={'login'}>LOGIN</Link>
      </div>
    </header>
  );
}

export default Header;