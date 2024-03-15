import { Label, Input, Button } from '../components/ui'

import MailBox from '../assets/svg/mailbox.svg'

import { LuMessagesSquare } from "react-icons/lu";
import { IoSend } from "react-icons/io5";


function ContactPage() {
    return (
        <section className="min-h-screen block justify-center items-center lg:grid lg:grid-cols-2 lg:mx-72">

            <div className="flex flex-col items-center gap-2 text-3xl font-bold text-white pt-10 md:pt-0">

                <div className='flex justify-center items-center gap-4 pb-10'>
                    <h1 className='text-4xl'>Contáctame</h1>
                    <span className="text-teal-400 text-4xl">
                        <LuMessagesSquare />
                    </span>
                </div>
                <div className='w-52 h-36'>
                    <img src={MailBox} alt="" />
                </div>

            </div>

            <div className="px-10 pt-20 lg:px-0">

                <form action="">
                    <Label htmlFor='nombre'>Tu nombre:</Label>
                    <Input type='text' placeholder='Nombre' />

                    <Label htmlFor='email'>Tu correo:</Label>
                    <Input type='email' placeholder='Correo' />

                    <Label htmlFor='email'>Tu mensaje:</Label>
                    <textarea name="" id="" cols="30" rows="5" className="bg-white px-3 py-2 my-2 w-full text-gray-800 rounded-md"></textarea>
                    <button className="relative inline-flex items-center gap-x-1.5 rounded-md 
            bg-teal-400 px-3 py-1.5 text-sm font-semibold text-white shadow-sm
            hover:bg-teal-500 focus-visible:outline focus-visible:outline-2
            focus-visible:outline-offset-2 focus-visible:outline-teal-500 disabled:opacity-50
            disabled:cursor-not-allowed w-full text-center justify-center lg:w-auto">Enviar    <IoSend /></button>
                </form>

            </div>
        </section >
    )
}

export default ContactPage