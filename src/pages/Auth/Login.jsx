import {
    Card,
    Input,
    Button,
    Typography,
    Select,
    Option,
} from "@material-tailwind/react";
import { EmailIcon, PasswordIcon } from "../../constants/Icons";
import { Link, useNavigate } from "react-router-dom";
import { doPOST } from "../../utils/httpUtil";
import { useEffect, useState } from "react";
import { AUTH_ENDPOINTS, CONTENT_TYPE_URL_ENCODED } from "../../utils/constants";
import { useUserContext } from "../../context/UserContext";

const Login = () => {
    const { success, error, setLoggedIn, setUser, user } = useUserContext()
    const navigate = useNavigate()
    const isLoggedIn = localStorage.getItem('isLoggedIn')


    const [data, setData] = useState({});
    const login = async () => {
        if ((!data?.email || !data?.password)) {
            return error('Please Enter all required Fields');
        }
        try {
            const response = await doPOST(AUTH_ENDPOINTS.LOGIN, data);

            if (response?.data?.status >= 400) {
                return error(response?.data?.message)
            }

            if (response?.data?.status == 200) {
                navigate('/dashboard')
                setLoggedIn(true)

                localStorage.setItem('token', response?.data?.data?.token)
                setUser(response?.data?.data?.user)
                localStorage.setItem('isLoggedIn', true)
                return success(response?.data?.message)
            }

        } catch (error) { }
    };

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/dashboard')
        }
    }, [])
    return (
        <Card color="transparent" shadow={false} className="w-screen h-screen flex items-center justify-center">
            <Card className="border shadow-md w-96 p-5">
                <Typography variant="h4" color="blue-gray">
                    Welcome to Admin Panel
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to login
                </Typography>
                <form className="mt-8 mb-2 w-full mx-auto">
                    <div className="flex flex-col gap-6">
                        <Input
                            required
                            onChange={(v) => {
                                setData({
                                    ...data,
                                    email: v?.target?.value,
                                });
                            }}
                            type="email"
                            label="Email" icon={<EmailIcon />} />
                        {/* <Select label="Select Role">
                            <Option>Admin</Option>
                            <Option>Manager</Option>
                        </Select> */}
                        <Input
                            required
                            onChange={(v) => {
                                setData({
                                    ...data,
                                    password: v?.target?.value,
                                });
                            }}
                            type="password"
                            label="Password" icon={<PasswordIcon />} />
                    </div>

                    <Button onClick={login} className="mt-6 w-full tracking-wider">
                        Login
                    </Button>
                    <Typography color="gray" className="mt-4 text-center text-sm tracking-wider">
                        Don't have an account?{" "}
                        <Link to="/register" className="font-bold text-gray-900">
                            Register
                        </Link>
                    </Typography>
                </form>
            </Card>
        </Card>
    )
}

export default Login
