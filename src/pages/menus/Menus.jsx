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
import { doDELETE, doGET } from '../../utils/httpUtil';
import ConfirmDialog from '../../components/Dialog/ConfirmDialog';
import { useUserContext } from '../../context/UserContext';

const Menus = () => {
    // const [open, setOpen] = useState({
    //     visible: false,
    //     _id: null
    // });
    // const handleOpen = (id = null) => {
    //     setOpen(prev => ({
    //         ...prev,
    //         _id: id,
    //         visible: !open?.visible
    //     }))
    // };
    const [open, setOpen] = useState(false);
    const [editId, setEditId] = useState(null);
    const [deleteId, setDeleteId] = useState(null);
    const { success, error } = useUserContext()
    const handleOpen = () => setOpen(!open);

    const [data, setData] = useState([]);

    const [confirmOpen, setConfirmOpen] = useState(false);
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

    const deleteSingleItem = async () => {
        try {

            const response = await doDELETE(MENUITEMS_ENDPOINTS.DELETE(deleteId));

            if (response?.data?.status >= 400) {
                return error(response?.data?.message)
            }

            if (response?.data?.status == 200) {
                getAllMenuItems()
                return success('Menu Item Deleted Successfully')
            }

        } catch (error) { }
    };

    useEffect(() => {
        getAllMenuItems()
    }, [])

    return (
        <>
            <AddItemDialog currentMenuItem={currentMenuItem} onSuccess={getAllMenuItems} setCurrentMenuItem={setCurrentMenuItem} open={open} handleOpen={handleOpen} editId={editId} setEditId={setEditId} />
            <ConfirmDialog confirm={deleteSingleItem} open={confirmOpen} handleOpen={confirmhandleOpen} />
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
                <CardBody className="w-full grid lg:grid-cols-2 xl:grid-cols-3 overflow-y-auto 2xl:grid-cols-4 gap-5 -mt-8 ">
                    {data?.map((item, index) => (
                        <div key={index}>
                            <MenuSingleCard setDeleteId={setDeleteId} setEditId={setEditId} onSuccess={getAllMenuItems} item={item} open={open} handleOpen={handleOpen} confirmhandleOpen={confirmhandleOpen} />
                        </div>
                    ))}

                </CardBody>

            </Card>
        </>
    )
}

export default Menus
