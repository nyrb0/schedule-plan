'use client';

import Loader from '../../ui/Loader';
import { useProfile } from '@/hooks/useProfile';

const Profile = () => {
	const { data, isLoading } = useProfile();
	return (
		<div className='absolute top-big-layout right-big-layout'>
			{isLoading ? (
				<Loader />
			) : (
				<div className='flex items-cen'>
					<div className='text-right mt-3'>
						<p className='font-bold -m-1'>{data?.user.name}</p>
						<p className='text-sm opacity-40'>{data?.user.email}</p>
					</div>
					<div className='w-10 h-10 flex justify-center items-center text-2xl text-white bg-white/20 rounded uppercase '>
						{data?.user.name?.charAt(0) || 'A'}
					</div>
				</div>
			)}
		</div>
	);
};

export default Profile;
