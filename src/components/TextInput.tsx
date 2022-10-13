import { InputHTMLAttributes, ReactNode } from 'react';

export interface TextInputRootProps{
    children: ReactNode;
}

function TextInputRoot(props: TextInputRootProps){
    return(
        <div className='flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300 outline-none'>
            {props.children}
       </div>)
}

export interface TextInputIconProps{
    children: ReactNode;
}

 function TextInputIcon(props: TextInputIconProps){
    return(<slot className='w-6 h-6 text-gray-400'></slot>)
 } 

 TextInputIcon.displayName = 'TextInput.Icon'
 TextInputInput.displayName = 'TextInput.Input'
 TextInputRoot.displayName = 'TextInput.Root'

export interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {

}

function TextInputInput(props:TextInputInputProps){
    return(
        <input
        className='bg-transparent flex-1  text-gray-100 text-xs placeholder:text-gray-400 '{...props}>
        
        </input>)
}


export const TextInput = {
    Icon: TextInputIcon,
    Root: TextInputRoot,
    Input: TextInputInput,
    
}