import { useForm } from '@inertiajs/react'
import React from 'react'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import useError from '@/hooks/use_error'
import Icons from '@/components/icons'
import { cn } from '@/lib/utils'

interface AuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  auth: 'Login' | 'Sign up'
}

export default function AuthForm({ className, auth, ...props }: AuthFormProps) {
  const form = useForm({
    email: '',
    password: '',
  })

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const postURL = auth === 'Login' ? '/auth/login' : '/auth/signup'
    form.post(postURL)
  }
  const errors = useError()

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={handleSignup}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              value={form.data.email}
              onChange={(e) => form.setData('email', e.target.value)}
            />
            {errors?.email && <p className="px-1 text-xs text-red-600">{errors.email}</p>}
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              placeholder="*********"
              type="password"
              autoCapitalize="none"
              value={form.data.password}
              onChange={(e) => form.setData('password', e.target.value)}
            />
            {errors?.password && <p className="px-1 text-red-600">{errors.password}</p>}
          </div>

          <Button disabled={form.processing}>
            {form.processing && <Icons.spinner />}
            {auth}
          </Button>
          {errors?.auth && <p className="px-1 text-red-600">{errors.auth}</p>}
        </div>
      </form>
    </div>
    //   <form onSubmit={handleSignup} }>
    //     <div className="grid gap-2">
    //
    //
    //       <div className="grid gap-1">
    //         <Label className="sr-only" htmlFor="email">
    //           Email
    //         </Label>
    //         <Input
    //           id="email"
    //           placeholder="name@example.com"
    //           type="email"
    //           autoCapitalize="none"
    //           autoComplete="email"
    //           autoCorrect="off"
    //           disabled={isLoading}
    //           {...register('email')}
    //         />
    //         {errors?.email && <p className="px-1 text-xs text-red-600">{errors.email.message}</p>}
    //       </div>
    //       <div className="relative">
    //         <Label className="sr-only" htmlFor="password">
    //           Password
    //         </Label>
    //         <Input
    //           id="password"
    //           placeholder="********"
    //           type={showPassword ? 'text' : 'password'}
    //           autoCapitalize="none"
    //           disabled={isLoading}
    //           {...register('password')}
    //         />
    //         <div
    //           className="absolute top-0 bottom-0 right-0 flex items-center w-10 px-3 cursor-pointer text-muted-foreground"
    //           onClick={() => setShowPassword(!showPassword)}
    //         >
    //           {showPassword ? <Icons.eyeOff /> : <Icons.eye />}
    //         </div>
    //         {errors?.password && (
    //           <p className="px-1 text-xs text-red-600">{errors.password.message}</p>
    //         )}
    //       </div>
    //       <div className="relative">
    //         <Label className="sr-only" htmlFor="confirmPassword">
    //           Confirm Password
    //         </Label>
    //         <Input
    //           id="confirmPassword"
    //           placeholder="********"
    //           type={showConfirmPassword ? 'text' : 'password'}
    //           autoCapitalize="none"
    //           disabled={isLoading}
    //           {...register('confirmPassword')}
    //         />
    //         <div
    //           className="absolute top-0 bottom-0 right-0 flex items-center w-10 px-3 cursor-pointer text-muted-foreground"
    //           onClick={() => setShowConfirmPassword(!showConfirmPassword)}
    //         >
    //           {showConfirmPassword ? <Icons.eyeOff /> : <Icons.eye />}
    //         </div>
    //         {errors?.confirmPassword && (
    //           <p className="px-1 text-xs text-red-600">{errors.confirmPassword.message}</p>
    //         )}
    //       </div>
    //       <button
    //         className={cn(buttonVariants())}
    //         disabled={isLoading || Object.keys(errors).length > 0 || !formState.isValid}
    //       >
    //         {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
    //         Signup
    //       </button>
    //     </div>
    //   </form>
    //   <div className="relative">
    //     <div className="absolute inset-0 flex items-center">
    //       <span className="w-full border-t" />
    //     </div>
    //     <div className="relative flex justify-center text-xs uppercase">
    //       <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
    //     </div>
    //   </div>
    //   <button
    //     type="button"
    //     className={cn(buttonVariants({ variant: 'outline' }))}
    //     onClick={() => {
    //       signIn('github')
    //     }}
    //     disabled={true}
    //   >
    //     {/* {isGitHubLoading ? ( */}
    //     {/* <Icons.spinner className="mr-2 h-4 w-4 animate-spin" /> */}
    //     {/* ) : ( */}
    //     {/* <Icons.gitHub className="mr-2 h-4 w-4" /> */}
    //     {/* )}{" "} */}
    //     Google
    //   </button>
  )
}
