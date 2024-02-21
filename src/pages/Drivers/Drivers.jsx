import { UserPlusIcon } from '@heroicons/react/24/solid'
import { Button, Card, CardBody, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import AddDriverDialog from '../../components/Dialog/AddDriverDialog'
import SingleDriverCard from '../../components/driver/SingleDriverCard'
import ConfirmDialog from '../../components/Dialog/ConfirmDialog'

const Drivers = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    
    const [confirmOpen, setConfirmOpen] = useState(false);
    const confirmhandleOpen = () => setConfirmOpen(!confirmOpen);

  return (
    <div>
      <AddDriverDialog open={open} handleOpen={handleOpen}/>
      <ConfirmDialog  open={confirmOpen} handleOpen={confirmhandleOpen} />
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
                   
                    <SingleDriverCard handleOpen={handleOpen} confirmhandleOpen={confirmhandleOpen}/>
                    <SingleDriverCard handleOpen={handleOpen} confirmhandleOpen={confirmhandleOpen}/>
                    <SingleDriverCard handleOpen={handleOpen} confirmhandleOpen={confirmhandleOpen}/>
                    <SingleDriverCard handleOpen={handleOpen} confirmhandleOpen={confirmhandleOpen}/>
                   
                </CardBody>

            </Card>
    </div>
  )
}

export default Drivers
