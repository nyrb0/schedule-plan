'use client';

import { authService } from '@/services/auth.service';
import { useMutation } from '@tanstack/react-query';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
	const { push } = useRouter();
	const {} = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess: () => push('/auth')
	});
	return (
		<div className='absolute top-1 right-1'>
			<button className='opacity-20 hover:opacity-100 transition-opacity duration-300'>
				<LogOut size={20} />
			</button>
		</div>
	);
};

export default LogoutButton;
