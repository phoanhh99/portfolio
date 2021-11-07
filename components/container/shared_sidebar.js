export default function SharedSideBar() {
  return (
    <div className='absolute w-full h-screen overflow-y-auto overscroll-y-contain z-10 bg-black bg-opacity-50'>
      <div className='flex flex-none flex-col w-80 md:w-1/3 lg:w-1/5 h-screen p-10 bg-black text-yellow-500'>
        <button className='btn btn-ghost'>item1</button>
        <button className='btn btn-ghost'>item1</button>
        <button className='btn btn-ghost'>item1</button>
        <button className='btn btn-ghost'>item1</button>
        <button className='btn btn-ghost'>item1</button>
      </div>
    </div>
  )
}
