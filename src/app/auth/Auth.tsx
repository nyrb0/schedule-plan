'use client';

import Heading from '../components/ui/Heading';
import { Button } from '../components/ui/buttons/Button';
import { Field } from '../components/ui/fields/Field';
import { DASHBOARD_PAGES } from '@/config/pages-url.config';
import { authService } from '@/services/auth.service';
import { IAuthForm } from '@/types/auth.types';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';

const Auth = () => {
	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange'
	});

	const [isLoginForm, setIsLoginForm] = useState(false);

	const { push } = useRouter();

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			authService.main(isLoginForm ? 'login' : 'register', data),
		onSuccess() {
			toast.success('Successfully login!');
			reset();
			push(DASHBOARD_PAGES.HOME);
		}
	});

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data);
	};
	return (
		<div
			className='flex min-h-screen'
			onSubmit={handleSubmit(onSubmit)}
		>
			<form
				action=''
				className='w-1/4 m-auto shadow bg-sidebar rounded-xl p-layout'
			>
				<Heading title='Auth' />

				<Field
					{...register('email', { required: 'Email is required' })}
					id='email'
					label='Email:'
					placeholder='Enter email:'
					type='email'
					extra='mb-3'
				/>
				<Field
					{...register('password', {
						required: 'Password is required'
					})}
					id='password'
					label='Password:'
					placeholder='Enter password:'
					type='password'
					extra='mb-3'
				/>
				<div className='flex items-center gap-5 justify-center'>
					<Button onClick={() => setIsLoginForm(true)}>Login</Button>
					<Button onClick={() => setIsLoginForm(false)}>
						Register
					</Button>
				</div>
			</form>
		</div>
	);
};

export default Auth;
