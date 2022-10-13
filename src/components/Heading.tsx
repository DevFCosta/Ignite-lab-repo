import { Slot } from '@radix-ui/react-slot';
import {clsx} from 'clsx';
import { ReactNode } from 'react';

export interface HeadingProps {
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    asChild?: boolean;
}

export function Heading({size = 'md',children, asChild}:HeadingProps){
    const Comp = asChild ? Slot : 'h2';
    return(
        <Comp className={clsx('Heading-gray-100 font-bold font-sans',
        {
            'Text-lg': size === 'sm',
            'Text-xl': size === 'md',
            'Text-xxl': size === 'lg',
        })}>{children}</Comp>
    )
}