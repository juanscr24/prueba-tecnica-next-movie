'use client'
import { FC } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { IModal } from '@/interfaces/IModal';
import Typography from '@mui/material/Typography';

export const ModalComponent: FC<IModal> = ({ title, desc, img }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className=''>
            <img src={img} alt="img" onClick={handleOpen} className='cursor-pointer' />
            <Modal
                className='flex justify-center items-center'
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className='absolute w-[500px] max-lg:w-[400px] max-2xl:w-[430px] max-sm:w-[300px] bg-white border-2 border-white shadow-md p-4 transition-all duration-500'>
                    <h1 className='text-xl max-md:text-lg'>
                        {title}
                    </h1>
                    <img src={img} alt="img" className='my-2' />
                    <h3 className='mt-2 max-md:text-sm'>
                        {desc}
                    </h3>
                </Box>
            </Modal>
        </div>
    )
}






