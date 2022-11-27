import Basic from '../components/templates/Basic'

const Dashboard = () => {
  return (
    <main className='h-screen mx-auto flex max-w-7xl overflow-hidden bg-gray-50'>
      {/* main */}
      <section className='relative flex-1 overflow-x-auto no-scrollbar'>
        {/* navigation */}
        <nav className='absolute top-0 left-0 w-full flex  items-center justify-between px-4 py-2 bg-white border-b border-gray-200'>
          {/* logo */}
          <div className='w-40 h-12 bg-blue-50'></div>
        </nav>
      </section>
      {/* side / preview */}
      <section className='flex-1  max-w-xl flex justify-center items-center border-l border-gray-200'>
        {/* live preview */}
        <div className='relative w-4/5 h-4/5 bg-white border border-gray-100 shadow-xl shadow-blue-100 hover:shadow-blue-200 transition-all transform duration-500 rounded-lg'>
          {/* <iframe src='/preview' className='w-full h-full'></iframe> */}
          <div className='absolute -top-[60%] -left-[60%] h-[220%] w-[220%] overflow-y-auto no-scrollbar scale-[0.45] '>
            <Basic preview />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Dashboard
