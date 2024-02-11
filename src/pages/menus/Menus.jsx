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
import { useEffect, useState } from "react";
import { MENUITEMS_ENDPOINTS } from "../../utils/constants";
import { doGET } from '../../utils/httpUtil';
import ConfirmDialog from '../../components/Dialog/ConfirmDialog';

const Menus = () => {
    const [open, setOpen] = useState({
        visible: false,
        _id: null
    });
    const handleOpen = (id = null) => {
        setOpen(prev => ({
            ...prev,
            _id: id,
            visible: !open?.visible
        }))
    };
    const [data, setData] = useState([]);
    // const [open, setOpen] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    // const handleOpen = () => setOpen(!open);
    const confirmhandleOpen = () => setConfirmOpen(!confirmOpen);

    const [currentMenuItem, setCurrentMenuItem] = useState({
        name: '',
        description: '',
        price: '',
    });


    const getAllMenuItems = async (e) => {
        try {
            const response = await doGET(MENUITEMS_ENDPOINTS.GET_ALL);
            if (response?.data?.status == 200) {
                setData(response?.data?.data)
            }
        } catch (error) { }
    };

    useEffect(() => {
        getAllMenuItems()
    }, [currentMenuItem])

    return (
        <>
            <AddItemDialog currentMenuItem={currentMenuItem} setCurrentMenuItem={setCurrentMenuItem} open={open} handleOpen={handleOpen} />
            <ConfirmDialog open={confirmOpen} handleOpen={confirmhandleOpen} />
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
                    {data?.map((item, index) => (
                        <div key={index}>
                            <MenuSingleCard onSuccess={getAllMenuItems} item={item} open={open} handleOpen={handleOpen} />
                            <MenuSingleCard item={item} open={open} handleOpen={handleOpen} confirmhandleOpen={confirmhandleOpen} />
                        </div >
                    ))}

                </CardBody >

            </Card >
        </>
    )
}

export default Menus
