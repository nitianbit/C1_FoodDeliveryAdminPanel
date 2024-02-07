import {  UserPlusIcon } from "@heroicons/react/24/solid";
import {
    Card,
    Typography,
    Button,
    CardBody,
} from "@material-tailwind/react";
import UsersTable from "../../components/UsersTable";




const Users = () => {
    
    return (
        <Card className="mt-7 h-[82vh] w-full text-gray-800 " shadow={false}>
            <Card floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <h1 className='text-3xl font-bold tracking-wide text-black'>Dashboard</h1>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all members
                        </Typography>
                    </div>
                </div> 
            </Card>
            <CardBody className="overflow-scroll px-0">
                <UsersTable />
            </CardBody>
            
        </Card>
    );
}

export default Users