import { Head, Link } from '@inertiajs/react'

// export default function Home(props: { version: number }) {
//   return (
//     <>
//
//       <div className="bg-red-500">
//         <div className="title">AdonisJS {props.version} x Inertia x React</div>
//
//         <span>
//           Learn more about AdonisJS and Inertia.js by visiting the
//           <Link href="https://docs.adonisjs.com/guides/inertia">AdonisJS documentation</Link>.
//         </span>
//       </div>
//     </>
//   )
// }
//
// import Image from "next/image";
// import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head title="Homepage" />
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">inertia/pages/home.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <Link
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="/login"
            rel="noopener noreferrer"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  )
}
