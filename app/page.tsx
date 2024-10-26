import Posts from "./components/Posts"

export default function Home() {
  return (
      <main className="px-6 mx-auto">
        <p className="mt-12 mb-12 text-3xl text-center dark:text-white"><i>expensiveCodes◩&nbsp;</i> By
          <span className="whitespace-nowrap"> <span className="font-bold italic">Hussein</span></span>
        </p>
        <Posts />
      </main>
     
  )
}
