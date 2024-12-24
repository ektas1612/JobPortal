import { TextInput, Avatar } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

const DreamJob=()=>{
    return (
    <div className="flex items-center pl-10">
        {/* left section */}
        <div className="flex flex-col w-[65%] gap-3">
            {/* Taglines */}
            <div className="text-6xl font-bold leading-tight text-curious-blue-950 [&>span]:text-curious-blue-500">Your <span>dream</span> <span>career</span> is calling!</div>
            <div className="text-lg text-curious-blue-900">From startups to industry giants, discover the perfect job that matches your skills and passion.</div>
            {/* Input fields and search button */}
            <div className='flex gap-3 mt-5'>
            <TextInput
                className='bg-curious-blue-100 rounded-lg p-1 px-2 text-curious-blue-900 [&_input]:!text-curious-blue-800'
                variant='unstyled'
                label="Job Title"
                placeholder="Software Engineer"
            />
            <TextInput
                className='bg-curious-blue-100 rounded-lg p-1 px-2 text-curious-blue-800 [&_input]:!text-curious-blue-800'
                variant='unstyled'
                label="Job Type"
                placeholder="Full time"
            />
            <div className='flex items-center justify-center h-full w-20 bg-curious-blue-100 text-curious-blue-900 rounded-lg p-3 hover:bg-curious-blue-300 cursor-pointer'>
                <IconSearch className='h-[85%] w-[85%]' />
            </div>
            </div>
        </div>

        {/* right section */}
        <div className="w-[35%] flex items-center justify-end">
            <div className="w-[30rem] relative">

                {/* Main Image */}
                <img src="boy_with_laptop.png" alt="boy" />

                {/* Cards */}
                {/* 10k+ card */}
                <div className='absolute top-[50%] right-1 w-fit p-2 border rounded-lg border-curious-blue-100 backdrop-blur-md'>
                    <div className='text-center text-curious-blue-900 mb-1 text-sm'>10k+ got job</div>
                        <Avatar.Group>
                        <Avatar src="avatar.png" />
                        <Avatar src="avatar.png" />
                        <Avatar src="avatar.png" />
                        <Avatar>+9k</Avatar>
                        </Avatar.Group>
                </div>

                {/* Job role card */}
                <div className='absolute top-[80%] left-[-4] w-fit p-2 border rounded-lg border-curious-blue-100 backdrop-blur-md flex flex-col gap-3'>
                    <div className='flex gap-2 items-center'>
                        {/* company logo */}
                        <div className='w-12 h-12 p-1 bg-curious-blue-600 rounded-lg'>
                            <img src="/walmart-logo.png" alt="" />
                        </div>
                        {/* About position and city */}
                        <div className='text-sm text-curious-blue-800'>
                            {/* position */}
                            <div>SDE-III</div>
                            {/* city */}
                            <div className='text-curious-blue-600'>Bengaluru</div>
                        </div>
                    </div>
                        <div className='flex gap-2 justify-around text-curious-blue-800 text-xs'>
                            <span>1 day ago</span>
                            <span>120 applicants</span>
                        </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default DreamJob;