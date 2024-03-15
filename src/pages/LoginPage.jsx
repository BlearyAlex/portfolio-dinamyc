import { Button, Card, Input, Label } from "../components/ui";
import { useForm } from "react-hook-form";
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    // useForm hook from react-hook-form library
    const {
        register,
        handleSubmit,
    } = useForm();

    // useNavigate hook from react-router-dom library
    const Navigate = useNavigate();

    // useAuth hook from AuthContext
    const { signin, errors } = useAuth();

    const onSubmit = handleSubmit(async (data) => {
        const user = await signin(data);
        if (user) {
            Navigate('/profile');
        }
    });

    return (
        <div className="h-screen flex items-center justify-center">
            <Card>
                {
                    errors && (
                        errors.map((err) => ((
                            <p className="text-red-500 font-semibold text-center">{err}</p>
                        )
                        )))
                }

                <h3 className="text-3xl font-bold text-white text-center">Login</h3>

                <form onSubmit={onSubmit}>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        type="email"
                        placeholder="email"
                        {...register("email", { required: true })}
                    />

                    <Label htmlFor="password">Password</Label>
                    <Input
                        type="password"
                        placeholder="password"
                        {...register("password", { required: true })}
                    />

                    <Button>Login</Button>
                </form>
            </Card>
        </div>
    );
}

export default LoginPage;
