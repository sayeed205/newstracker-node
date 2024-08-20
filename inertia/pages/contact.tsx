import { Head, Link } from '@inertiajs/react'

export default function Home(props: { version: number }) {
  return (
    <>
      <Head title="Contact Details - ShipStation" />

      <div className="bg-red-500">
        <div className="title">AdonisJS {props.version} x Inertia x React</div>

        <span>
          Learn more about AdonisJS and Inertia.js by visiting the
          <Link href="https://docs.adonisjs.com/guides/inertia">AdonisJS documentation</Link>.
        </span>
      </div>
    </>
  )
}
