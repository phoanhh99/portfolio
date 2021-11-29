import Image from 'next/image'
const UserSection = ({profile: {image, name, email}}) => (
  <>
    <section
      id='user-profile'
      className='inline-flex flex-wrap justify-around items-center my-3 mx-10'
    >
      <div className='relative w-16 h-16 rounded-full ring-4 ring-primary'>
        <Image
          src={image}
          alt='user-avatar'
          layout='fill'
          loading='lazy'
          className='rounded-full'
        />
      </div>

      <div className='px-3 flex flex-col select-none' id='info-container'>
        <h3 className='font-semibold text-xl'>{name}</h3>
        <h5>{email}</h5>
      </div>
    </section>
  </>
)
export default UserSection
