import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Logo from "@/assets/Logo.svg"
import { useNavigate } from "react-router-dom"
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from "@/lib/form-schema"
import { useLoginMutation } from "@/redux/store/apiSlice/auth.api"



const Login = () => {
  const navigate = useNavigate();

  const [loginFn, { error, isError, isLoading }] = useLoginMutation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = async (data) => {
    const respones = await loginFn(data);
    if (respones.data) {
      navigate('/');
    }
  };

  return (
    <div className=" h-[100vh] w-[100%]   ">

      <div className="h-[10vh] pt-4 ml-4 flex items-center">

        <img src={Logo} alt="Logo" width="40" />
        <span className="font-poppins font-semibold text-xl pl-2">Delta</span>
      </div>

      <div className="flex h-[80vh] w-full justify-center items-center">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle className="text-3xl">
              Login
            </CardTitle>

          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid w-full items-center gap-4 ">

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name" className="mb-2">Email</Label>
                  <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, value } }) => (
                      <Input
                        id="name"
                        placeholder="johndoe@gmail.com"
                        type={'Email'}
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                </div>

                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name" className="mb-2">Password</Label>

                  <Controller
                    control={control}
                    name="password"
                    render={({ field: { onChange, value } }) => (
                      <Input
                        id="password"
                        placeholder="**********"
                        type="password"
                        onChange={onChange}
                        value={value}
                      />
                    )}
                  />
                </div>
              </div>

              <div className="flex flex-col ">
                <div>
                  <Button variant="link" onClick={() => navigate('/signup')}>Create Account?</Button>
                </div>
                <div className="flex justify-end">
                  <Button >Login</Button>
                </div>
              </div>
            </form>


          </CardContent>

        </Card>
      </div>
    </div>
  )
}

export default Login