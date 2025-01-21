import { Form,Link, redirect } from "react-router-dom";
import { FormInput, Submit } from "../components";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

export const action = async ({request}) =>{
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try{
    const response = await customFetch.post('/auth/local/register',data)
    toast.success('account created successfully')
    return redirect('/login')
  }catch (error){
    const errorMessage = error?.response?.data?.error?.message || 'please check your credentials'
    toast.error(errorMessage)
    return null
  }
}

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form method="POST" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type='text' label='Username' name='username' defaultValue='PepGuardiola'/>
        <FormInput type='email' label='Email' name='email' defaultValue='pepGuardiola@test.com'/>
        <FormInput type='password' label='Password' name='password' defaultValue='secret'/>
        <div className="mt-4">
          <Submit text='Register'/>
        </div>      
      </Form>
      <p className="text-center">already a member? <Link to='/login'>Login</Link> </p>
    </section>
  )
}
export default Register;