import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import logo from "../assets/logo.svg"
import {Link} from 'react-router-dom'
export function LoginForm({
  className,
  ...props
}) {
  return (
    <div className={cn("flex flex-col gap-8", className)} {...props}>
      <Card className="overflow-hidden bg-[#000000cc]">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-12 md:p-10">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col items-center text-center">
                <h1 className="text-3xl font-bold">Welcome back !</h1>
                <p className="text-muted-foreground">
                  Login to your account for personalized career guidance.
                </p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email/username">Email or Username</Label>
                <Input id="email/username" type="text" placeholder="email or username" required />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="ml-auto text-sm underline-offset-2 hover:underline">
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
              <div className="text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link to="/sign-up" className="underline underline-offset-4">
                  Sign up
                </Link>
              </div>
            </div>
          </form>
          <div className="relative md:block flex items-center justify-center border-l-2 border-[#ffffff16]">
            <Link to="/">
            <img
              src={logo}
              alt="CareerShepherds"
              className="absolute -top-10 inset-0 h-full w-full object-cover" />
            </Link>
          </div>
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
