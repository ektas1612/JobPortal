import { IconClipboardText, IconBell, IconSettings } from '@tabler/icons-react';
import { Avatar, Indicator } from '@mantine/core';
import NavLinks from './NavLinks';

const Header =()=>{
    return <div className="w-full bg-curious-blue-500 h-20 px-6 flex justify-between items-center">
        {/* logo */}
        <div className='flex gap-1 items-center text-curious-blue-100'>
            <IconClipboardText className='h-7 w-7 stroke-1.25'/>
            <div className='text-3xl font-semibold'>NextHire</div>
        </div>
        {/* links */}
        <NavLinks />
        {/* profile */}
        <div className='flex gap-3 items-center text-curious-blue-100'>
            <div className='flex gap-2 items-center font-semibold'>
                <div>Flix</div>
                <Avatar src="avatar.png" alt="it's me" />
            </div>
            <div className='bg-curious-blue-400 p-1.5 rounded-full'>
                <IconSettings stroke={1.5}/>
            </div>
            <div className='bg-curious-blue-400 p-1.5 rounded-full'>
            <Indicator color="rgba(255, 234, 5, 1)" offset={6} size={8} processing>
                <IconBell stroke={1.5}/>
            </Indicator>
            </div>
        </div>
    </div>
}
export default Header;