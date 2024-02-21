import { UserPlusIcon } from '@heroicons/react/24/solid'
import { Button, Card, CardBody, Typography } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import AddDriverDialog from '../../components/Dialog/AddDriverDialog'
import SingleDriverCard from '../../components/driver/SingleDriverCard'
import ConfirmDialog from '../../components/Dialog/ConfirmDialog'
import { DRIVER_ENDPOINTS } from '../../utils/constants'
import { doDELETE, doGET } from '../../utils/httpUtil'
import { useUserContext } from '../../context/UserContext'

const Drivers = () => {
    const [open, setOpen] = useState(false);
    const [editId, setEditId] = useState(null);
    const [deleteId, setDeleteId] = useState(null);
    const { success, error } = useUserContext()
    const handleOpen = () => {

        setOpen(!open)
    }

    const [confirmOpen, setConfirmOpen] = useState(false);
    const confirmhandleOpen = () => setConfirmOpen(!confirmOpen);

    const [drivers, setDrivers] = useState(null)




    const getAllDrivers = async (e) => {
        try {
            const response = await doGET(DRIVER_ENDPOINTS.GET_ALL);
            if (response?.data?.status == 200) {
                setDrivers(response?.data?.data)
            }
        } catch (error) { }
    };

    const deleteSingleItem = async () => {
        try {

            const response = await doDELETE(DRIVER_ENDPOINTS.DELETE(deleteId));

            if (response?.data?.status >= 400) {
                return error(response?.data?.message)
            }

            if (response?.data?.status == 200) {
                getAllDrivers()
                return success('Driver Deleted Successfully')
            }

        } catch (error) { }
    };

    useEffect(() => {
        getAllDrivers()
    }, [])

    return (
        <div>
            <AddDriverDialog open={open} handleOpen={handleOpen} onSuccess={getAllDrivers} editId={editId} setEditId={setEditId} />
            <ConfirmDialog confirm={deleteSingleItem} open={confirmOpen} handleOpen={confirmhandleOpen} />
            <Card className="w-full text-gray-900 mt-7 h-[82vh]" floated={false} shadow={false}>
                <Card floated={false} shadow={false} className="rounded-none">
                    <div className="mb-8 flex items-center justify-between gap-8">
                        <div>
                            <h1 className='text-3xl font-bold tracking-wide text-black'>Driver Details</h1>

                            <Typography color="gray" className="mt-1 font-normal">
                                See information about all drivers
                            </Typography>
                        </div>
                        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                            <Button className="flex items-center gap-3" size="sm" variant="gradient" onClick={handleOpen}>
                                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Driver
                            </Button>

                        </div>
                    </div>

                </Card>
                <CardBody className="overflow-y-auto px-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 -mt-5">
                    {drivers?.map((driver, dIndex) => (
                        <SingleDriverCard key={dIndex} driver={driver} setDeleteId={setDeleteId} setEditId={setEditId} handleOpen={handleOpen} confirmhandleOpen={confirmhandleOpen} />
                    ))}

                </CardBody>

            </Card>
        </div>
    )
}

export default Drivers
