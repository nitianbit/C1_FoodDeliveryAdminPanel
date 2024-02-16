import {
    Card,
    Input,
    Button,
    Typography,
    Select,
    Option,
} from "@material-tailwind/react";
import { useState } from "react";
import { EmailIcon, PasswordIcon, PersonIcon } from "../../constants/Icons";
import { Link, useNavigate } from "react-router-dom";
import { AUTH_ENDPOINTS } from "../../utils/constants";
import { doPOST } from "../../utils/httpUtil";
import { useUserContext } from "../../context/UserContext";

const Register = () => {
    const { success, error } = useUserContext()
    const navigate = useNavigate()
    const [data, setData] = useState({});
    const signUp = async () => {
        if ((!data?.name || !data?.email || !data?.password || !data?.confirmPassword)) {
            return error('Please Enter all required Fields');
        } else if (data?.password != data?.confirmPassword) {
            return error('Password did not match with Confirm Password')
        }
        try {

            const response = await doPOST(AUTH_ENDPOINTS.SIGNUP, data);

            if (response?.data?.status >= 400) {
                return error(response?.data?.message)
            }

            if (response?.data?.status == 200) {
                navigate('/')
                return success(response?.data?.message)
            }

        } catch (error) { }
    };
    return (
        <Card
            color="transparent"
            shadow={false}
            className="w-screen h-screen flex items-center justify-center"
        >
            <Card className="border shadow-md w-96 p-5">
                <Typography variant="h4" color="blue-gray">
                    Welcome to Admin Panel
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to register.
                </Typography>
                <form className="mt-8 mb-2 w-full mx-auto">
                    <div className="flex flex-col gap-6">
                        <Input
                            required={true}
                            onChange={(v) => {
                                setData({
                                    ...data,
                                    name: v?.target?.value,
                                });
                            }}
                            type="text"
                            label="Name"
                            icon={<PersonIcon />}
                        />
                        <Input label="Email"
                            required={true}
                            onChange={(v) => {
                                setData({
                                    ...data,
                                    email: v?.target?.value,
                                });
                            }}
                            type="email"
                            icon={<EmailIcon />} />
                        {/* <Select label="Select Role">
              <Option>Admin</Option>
              <Option>Manager</Option>
            </Select> */}
                        <Input
                            required={true}
                            onChange={(v) => {
                                setData({
                                    ...data,
                                    password: v?.target?.value,
                                });
                            }}
                            label="Password"
                            type="password"
                            icon={<PasswordIcon />} />
                        <Input
                            required={true}
                            onChange={(v) => {
                                setData({
                                    ...data,
                                    confirmPassword: v?.target?.value,
                                });
                            }}
                            label="Confirm Password"
                            type="password"
                            icon={<PasswordIcon />} />
                    </div>

                    <Button onClick={signUp} className="mt-6 w-full tracking-wider">Register</Button>
                    <Typography
                        color="gray"
                        className="mt-4 text-center text-sm tracking-wider"
                    >
                        Already have an account?{" "}
                        <Link to="/" className="font-bold text-gray-900">
                            Login
                        </Link>
                    </Typography>
                </form>
            </Card>
        </Card>
    );
};

export default Register;
