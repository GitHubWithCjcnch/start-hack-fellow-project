import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import './Login.css'
import { Button } from "@/components/ui/button"
import backgroundImage from '../../../assets/global_polygon.png'
import AuthService from '@/credentials/AuthService';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useNavigate } from 'react-router-dom';

const schema = z.object({
    email: z.string().email({
        message: "Enter a valid email."
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters."
    })
})
const Login: FC = () => {
    const navigate = useNavigate();
    const form = useForm<z.infer<typeof schema>>({
      resolver: zodResolver(schema),
      defaultValues: {
        email: "",
        password: ""
      }
    })
  
    async function onSubmit(values: z.infer<typeof schema>) {
     if(await AuthService.login(values.email, values.password)) {
         navigate('/dashboards')
     }
    }
  
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "50%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full sm:w-96 border p-10 rounded bg-white"
          style={{ borderColor: "#808080" }}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <Button type="submit">Login</Button>
        </form>
      </Form>
    </div>
  );
};

export default Login;
