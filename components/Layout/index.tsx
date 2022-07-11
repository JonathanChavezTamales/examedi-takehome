export default function Layout({ children }) {
  return (
    <div className='bg-gray-200 min-h-screen' style={{ backgroundImage: 'url("https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png")' }}>
      <div className='max-w-4xl bg-white m-auto min-h-screen py-5'>
        {children}
      </div>
    </div>
  )
}