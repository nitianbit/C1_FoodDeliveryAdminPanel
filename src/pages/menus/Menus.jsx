import React from 'react'
import { UserPlusIcon } from "@heroicons/react/24/solid";
import {
    Card,
    Typography,
    Button,
    CardBody,
} from "@material-tailwind/react";
import MenuSingleCard from '../../components/Menu/MenuSingleCard'
import AddItemDialog from '../../components/Dialog/AddItemDialog';

const Menus = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);

    return (
        <>
            <AddItemDialog open={open} handleOpen={handleOpen} />
            <Card className="w-full text-gray-900 mt-7 h-[82vh]" floated={false} shadow={false}>
                <Card floated={false} shadow={false} className="rounded-none">
                    <div className="mb-8 flex items-center justify-between gap-8">
                        <div>
                            <h1 className='text-3xl font-bold tracking-wide text-black'>Menu Items</h1>

                            <Typography color="gray" className="mt-1 font-normal">
                                See information about all menu items
                            </Typography>
                        </div>
                        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                            <Button className="flex items-center gap-3" size="sm" onClick={handleOpen} variant="gradient">
                                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add items
                            </Button>

                        </div>
                    </div>

                </Card>
                <CardBody className="overflow-y-auto px-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 -mt-8">
                    <MenuSingleCard open={open} handleOpen={handleOpen}/>
                    <MenuSingleCard open={open} handleOpen={handleOpen}/>
                    <MenuSingleCard open={open} handleOpen={handleOpen}/>
                    <MenuSingleCard open={open} handleOpen={handleOpen}/>
                    <MenuSingleCard open={open} handleOpen={handleOpen}/>
                    <MenuSingleCard open={open} handleOpen={handleOpen}/>
                    <MenuSingleCard open={open} handleOpen={handleOpen}/>
                    <MenuSingleCard open={open} handleOpen={handleOpen}/>
                    <MenuSingleCard open={open} handleOpen={handleOpen}/>
                    <MenuSingleCard open={open} handleOpen={handleOpen}/>
                    <MenuSingleCard open={open} handleOpen={handleOpen}/>
                    <MenuSingleCard open={open} handleOpen={handleOpen}/>
                    <MenuSingleCard open={open} handleOpen={handleOpen}/>
                    <MenuSingleCard open={open} handleOpen={handleOpen}/>
                    <MenuSingleCard open={open} handleOpen={handleOpen}/>
                    <MenuSingleCard open={open} handleOpen={handleOpen}/>
                    <MenuSingleCard open={open} handleOpen={handleOpen}/>
                    <MenuSingleCard open={open} handleOpen={handleOpen}/>
                    <MenuSingleCard open={open} handleOpen={handleOpen}/>
                    <MenuSingleCard open={open} handleOpen={handleOpen}/>
                    <MenuSingleCard open={open} handleOpen={handleOpen}/>
                    <MenuSingleCard open={open} handleOpen={handleOpen}/>
                    <MenuSingleCard open={open} handleOpen={handleOpen}/>
                    <MenuSingleCard open={open} handleOpen={handleOpen}/>
                    <MenuSingleCard open={open} handleOpen={handleOpen}/>
                </CardBody>

            </Card>
        </>
    )
}

export default Menus
