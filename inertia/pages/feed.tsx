import { Link } from '@inertiajs/react'
import { cn } from '@/lib/utils'
import AppLayout from '@/components/layout/app_layout'
import { InferPageProps } from '@adonisjs/inertia/types'
import FeedsController from '#controllers/feeds_controller'

export default function FeedPage({ user }: InferPageProps<FeedsController, 'index'>) {
  return (
    <AppLayout user={user}>
      <div className="flex0">
        Feed page
        <Link className={cn()} type="submit" href="/auth/logout" method="post" as="button">
          Log out
        </Link>
      </div>
    </AppLayout>
  )
}
