

const Footer = () => {
  return (
    <div className='w-full flex flex-col md:flex-row md:justify-between items-center justify-center bg-black text-white p-4 text-sm mt-10'>
      <p className="text-center">© 2025 GetDHT. All rights reserved.</p>
      <div className="flex items-center gap-2 text-white/70 underline">
        <a href=''>Terms of Use </a> <span>|</span>
        <a href="">Privacy policy </a> <span>|</span> 
        <a href="">Help</a>
      </div>
      <p className="text-accent text-xs mt-2">Made with ❤️ by 
        <a href="https://manjitsportfolio.vercel.app/" target='_blank' className="underline ml-1">Manjit</a>
      </p>
    </div>
  )
}

export default Footer
