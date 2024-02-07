import {
    Card,
    Input,
    Button,
    Typography,
    Select,
    Option,
} from "@material-tailwind/react";
import { EmailIcon, PasswordIcon, PersonIcon } from "../../constants/Icons";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <Card color="transparent" shadow={false} className="w-screen h-screen flex items-center justify-center">
            <Card className="border shadow-md w-96 p-5">
                <Typography variant="h4" color="blue-gray">
                    Welcome to Admin Panel
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to register.
                </Typography>
                <form className="mt-8 mb-2 w-full mx-auto">
                    <div className="flex flex-col gap-6">
                        <Input label="Name" icon={<PersonIcon />} />
                        <Input label="Email" icon={<EmailIcon />} />
                        <Select label="Select Role">
                            <Option>Admin</Option>
                            <Option>Manager</Option>
                        </Select>
                        <Input label="Password" icon={<PasswordIcon />} />
                        <Input label="Confirm Password" icon={<PasswordIcon />} />
                    </div>

                    <Button className="mt-6 w-full tracking-wider">
                        Register
                    </Button>
                    <Typography color="gray" className="mt-4 text-center text-sm tracking-wider">
                        Already have an account?{" "}
                        <Link to="/" className="font-bold text-gray-900">
                            Login
                        </Link>
                    </Typography>
                </form>
            </Card>
        </Card>
    )
}

export default Register
