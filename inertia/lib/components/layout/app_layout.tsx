import { MainNav } from '@/components/main_nav'
import { mainNavConfig } from '~/config/main_nav'
import { UserAccountNav } from '@/components/user_account_nav'

interface AppLayoutProps {
  children?: React.ReactNode
  user: any
}

const AppLayout = ({ children, user }: AppLayoutProps) => {
  console.log(user)
  return (
    <div className="flex min-h-screen flex-col space-y-6">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <MainNav items={mainNavConfig} />

          <UserAccountNav
            user={{
              name: user.name,
              email: user.email,
            }}
          />
        </div>
      </header>
      <main className="flex flex-1 flex-col overflow-hidden m-6">{children}</main>
    </div>
  )
}

export default AppLayout
