import Image from 'next/image'
const UserSection = ({profile: {image, name, email}}) => (
  <>
    <section
      id='user-profile'
      className='inline-flex flex-wrap justify-around items-center m-auto py-2 px-5 rounded-md h-full text-transparent bg-clip-text'
    >
      <div className='m-auto relative w-16 h-16 rounded-full ring-4 ring-primary'>
        <Image
          src={image}
          alt='user-avatar'
          width={60}
          height={60}
          layout='responsive'
          loading='lazy'
          className='rounded-full select-none'
        />
      </div>

      <div className='px-3 flex flex-col select-none' id='info-container'>
        <h3 className='font-semibold text-xl'>{name}</h3>
        <h5>{email}</h5>
      </div>
    </section>
    <style jsx>{`
      #user-profile {
        background-image: linear-gradient(to bottom right, #ef4765, #ff9a5a);
        border: 0;
        cursor: pointer;
        outline: transparent;
        text-align: center;
        transition: box-shadow 0.3s ease-in-out;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        white-space: nowrap;
      }

      #user-profile:not([disabled]):focus {
        box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
          -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
          0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
      }

      #user-profile:not([disabled]):hover {
        box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.5),
          -0.125rem -0.125rem 1rem rgba(239, 71, 101, 0.5),
          0.125rem 0.125rem 1rem rgba(255, 154, 90, 0.5);
      }
    `}</style>
  </>
)
export default UserSection
