import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import logo from "../assets/logo.svg"
import {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'

export function SignupForm({
  className,
  ...props
}) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: ""
      });
      const navigate=useNavigate();
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value,
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        navigate("/onboarding")
      };
  return (
    <div className={cn("flex flex-col gap-8", className)} {...props}>
      <Card className="overflow-hidden bg-[#000000cc]">
        <CardContent className="">
          <form className="p-12 md:p-10" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-8">
              <div className="flex items-center justify-center -m-8"><img src={logo} className="w-12 h-12"></img></div>
              <div className="flex flex-col items-center text-center">
                <h1 className="text-3xl font-bold">Welcome to CareerShepherds!</h1>
                <p className="text-muted-foreground">
                  Create an account for personalized career guidance.
                </p>
              </div>
              <div className="flex ">
                <div className="grid gap-3 w-1/2 pr-1">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input name="firstName" type="text" placeholder="first name" id="firstName" value={formData.firstName} onChange={handleInputChange} required />
                </div>
                <div className="grid gap-3 pr-1 w-1/2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input name="lastName" type="text" placeholder="last name" id="lastName" value={formData.lastName} onChange={handleInputChange}/>
                </div>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email *</Label>
                <Input name="email" type="email" placeholder="xyz@gmail.com" required value={formData.email} onChange={handleInputChange} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username">username *</Label>
                <Input name="username" type="text" placeholder="ilovebedbugs" required value={formData.username} onChange={handleInputChange}/>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password">Password *</Label>
                <Input name="password" type="password" minLength="6" required value={formData.password} onChange={handleInputChange}/>
              </div>
              <Button type="submit" className="w-full">
                Create Account 
              </Button>
              <div className="text-center text-sm">
                Already have an account?{" "}
                <Link to="/login" className="underline underline-offset-4">
                  Sign in
                </Link>
              </div>
            </div>
          </form>
          {/* <div className="relative md:block flex items-center justify-center border-l-2 border-[#ffffff16]">
            <Link to="/">
            <img
              src={logo}
              alt="CareerShepherds"
              className="absolute -top-10 inset-0 h-full w-full object-cover" />
            </Link>
          </div> */}
        </CardContent>
      </Card>
      {/* <div
        className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div> */}
    </div>
  );
}
