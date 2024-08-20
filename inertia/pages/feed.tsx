import { Link } from '@inertiajs/react'
import { cn } from '@/lib/utils'

export default function FeedPage() {
  return (
    <>
      <div className="flex0">
        Feed page
        <Link className={cn()} type="submit" href="/auth/logout" method="post" as="button">
          Log out
        </Link>
      </div>
    </>
  )
}
