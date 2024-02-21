import { Button, Card, CardBody, Dialog,Input,Typography } from '@material-tailwind/react';
import React from 'react'


const AddDriverDialog = ({open,handleOpen}) => {

    return (
        <Dialog
            open={open}
            handler={handleOpen}
            className="bg-transparent shadow-none"
        >
            <Card className="mx-auto w-full max-w-[24rem]">
                <CardBody className="flex flex-col gap-4">
                    <Typography variant="h4" color="blue-gray">
                        Enter Driver Detail
                    </Typography>
                    <div className="w-full space-y-5">
                        <Input label="Driver Name" type='text'/>
                        <Input label="PhoneNo" type="number"/>
                    </div>
                    <Button type="submit" className=" w-full tracking-wider" onClick={handleOpen}>
                        Submit
                    </Button>
                </CardBody>
            </Card>
        </Dialog>
    )
}

export default AddDriverDialog

{/*  */ }