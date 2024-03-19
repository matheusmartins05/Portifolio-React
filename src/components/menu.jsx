import logo from '../assets/logo.svg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
    HamburgerMenuIcon,
    DotFilledIcon,
    CheckIcon,
    ChevronRightIcon,
} from '@radix-ui/react-icons';

export function Menu() {
    return (

        <DropdownMenu.Root>

            <header className="bg-zinc-900 text-slate-200  mx-auto">


                <div className='flex justify-between h-20 w-[80%] m-auto '>
                    <DropdownMenu.Trigger asChild className=''>
                        <button className="w-12 conButton text-zinc-50 md:hidden lg:hidden" aria-label="Customise options">
                            <HamburgerMenuIcon className='block mx-auto' />
                        </button>
                    </DropdownMenu.Trigger>

                    <img src={logo} alt="Logo" className='w-14 hidden md:block lg:block' />

                    <DropdownMenu.Content className='md:hidden  relative z-50 bg-zinc-700 w-[100vw] h-[100vh] flex flex-col items-center justify-start gap-10 pt-10'>
                        <DropdownMenu.Item className="h-20 w-[100%] flex justify-center items-center">
                            <a href="#apresentacao">Inicio</a>
                        </DropdownMenu.Item>
                        <DropdownMenu.Item className="h-20 w-[100%] flex justify-center items-center">
                            <a href="#habilidades">Habilidades</a>
                        </DropdownMenu.Item>
                        <DropdownMenu.Item className="h-20 w-[100%] flex justify-center items-center">
                            <a href="#projetos">Projetos</a>
                        </DropdownMenu.Item>
                        <DropdownMenu.Item className="h-20 w-[100%] flex justify-center items-center">
                            <a href="#rodape">Contato</a>
                        </DropdownMenu.Item>
                    </DropdownMenu.Content>

                    <ul className=" gap-10 items-center text-2xl hidden md:flex lg:flex">
                        <l1 className="h-[100%] group/item"><a className='h-[100%] flex items-center group-hover/item:border-b-2 box-content ' href="#apresentacao">Inicio</a></l1>
                        <l1 className="h-[100%] group/item"><a className='h-[100%]  flex items-center group-hover/item:border-b-2 box-content' href="#habilidades">Habilidades</a></l1>
                        <l1 className="h-[100%] group/item"><a className='h-[100%] flex items-center  group-hover/item:border-b-2 box-content' href="#projetos">Projetos</a></l1>
                        <l1 className="h-[100%] group/item"><a className='h-[100%] flex items-center  group-hover/item:border-b-2 box-content' href="#rodape">Contato</a></l1>
                    </ul>
                    <div className='flex gap-3'>
                        <a className='flex' href="https://github.com/matheusmartins05" target='_blank'><img src={github} alt="Logo github" className='w-11 min-w-10' /></a>
                        <a className='flex' href="https://www.linkedin.com/in/matheus-santos-martins" target='_blank'><img src={linkedin} alt="Logo linkedin" className='w-12 min-w-11' /></a>
                    </div>


                </div>
            </header >



        </DropdownMenu.Root>
    )
}