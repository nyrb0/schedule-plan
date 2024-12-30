'use client';

import { useInitialData } from './useInitialData';
import useUpdateSettings from './useUpdateSettings';
import { Button } from '@/app/components/ui/buttons/Button';
import { Field } from '@/app/components/ui/fields/Field';
import { TypeUserForm } from '@/types/auth.types';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const Settings = () => {
	const { register, handleSubmit, reset } = useForm<TypeUserForm>({
		mode: 'onChange'
	});

	useInitialData(reset);

	const { isPending, mutate } = useUpdateSettings();

	const onSubmit: SubmitHandler<TypeUserForm> = data => {
		const { password, ...rest } = data;

		mutate({ ...rest, password: password || undefined });
	};

	return (
		<div>
			<form
				className='w-2/4'
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='grid grid-cols-2 gap-10'>
					<div>
						<Field
							id='email'
							label='Email:'
							placeholder='email'
							type='email'
							{...register('email', {
								required: 'Email is required'
							})}
							extra='mb-4'
						/>
					</div>

					<div>
						<Field
							id='workInterval'
							label='Work Interval (min.): '
							placeholder='password'
							isNumber
							{...register('workInterval', {
								valueAsNumber: true
							})}
							extra='mb-4'
						/>
					</div>
					<div>
						<Field
							id='name'
							label='Name:'
							placeholder='name'
							type='name'
							{...register('name', {
								required: 'Name is required'
							})}
							extra='mb-4'
						/>
					</div>

					<div>
						<Field
							id='breakInterval'
							label='Break Interval (min.): '
							placeholder='Enter break interval (min.).'
							isNumber
							{...register('breakInterval', {
								valueAsNumber: true
							})}
							extra='mb-6'
						/>
					</div>
					<div>
						<Field
							id='password'
							label='Password:'
							placeholder='password'
							type='password'
							{...register('password', {
								required: 'Password is required'
							})}
							extra='mb-4'
						/>
					</div>
					<div>
						<Field
							id='intervalsCount'
							label='Break Interval (min.): '
							placeholder='Enter intervals interval (min.).'
							isNumber
							{...register('intervalsCount', {
								valueAsNumber: true
							})}
							extra='mb-6'
						/>
					</div>
				</div>
				<Button
					type='submit'
					disabled={isPending}
				>
					Save
				</Button>
			</form>
		</div>
	);
};

export default Settings;
