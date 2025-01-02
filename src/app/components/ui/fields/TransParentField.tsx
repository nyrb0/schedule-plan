import cn from 'clsx';
import React, { forwardRef, type InputHTMLAttributes } from 'react';

type TypeTransParentField = InputHTMLAttributes<HTMLInputElement>;

export const TransParentField = forwardRef<
	HTMLInputElement,
	TypeTransParentField
>(({ className, ...rest }, ref) => {
	return (
		<input
			className={cn(
				'bg-transparent border-none focus:outline-0 focus:shadow-transparent w-full',
				className
			)}
			ref={ref}
			{...rest}
		/>
	);
});

TransParentField.displayName = 'TransParentField';
