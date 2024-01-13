import './parallax.scss'

function Parallax() {
  return (
    <div className='parallaxContainer'>
      <img src="/src/images/oval.png" alt="ovalPNG" className='background1 element' />
      <img src="/src/images/mount1.png" alt="mount1" className='mount1 element' />
      <img src="/src/images/mount2.png" alt="mount1" className='mount2 element' />
    </div>
  )
}

export default Parallax