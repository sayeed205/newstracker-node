import AppLayout from '@/components/layout/app_layout'
import { InferPageProps } from '@adonisjs/inertia/types'
import TopicsController from '#controllers/topics_controller'
import { useForm } from '@inertiajs/react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function TopicPage({ user }: InferPageProps<TopicsController, 'index'>) {
  const form = useForm({ topic: '' })

  const handleCreateTopic = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    form.post('/topics')
  }
  return (
    <AppLayout user={user}>
      <div className="bg-background">
        <h3 className="text-forground font-bold text-2xl mb-3">Topics of interest</h3>
        <form onSubmit={handleCreateTopic}>
          <div className="flex">
            <Label className="sr-only" htmlFor="name">
              Topic
            </Label>
            <Input
              id="topic"
              className="rounded-r-[0]"
              placeholder="Is modi a dictator?"
              type="text"
              autoCapitalize="none"
              autoCorrect="off"
              value={form.data.topic}
              onChange={(e) => form.setData('topic', e.target.value)}
            />
            <Button disabled={form.processing} className="rounded-l-[0]">
              Add
            </Button>
          </div>
        </form>
      </div>
    </AppLayout>
  )
}
