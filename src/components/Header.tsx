import { Link } from 'react-router-dom'
import { Button } from './common/Button'
import Spline from '@splinetool/react-spline'
import { ROUTE } from '../routes'

export const Header = () => {
  return (
    <header id="header" className="grid grid-cols-2 mb-32 mt-20">
      <section>
        <h1 className="w-full text-[96px] title-gradient font-bold leading-28">
          La Hackathon<br /> Del Dev
        </h1>
        <h2 className="mt-10 text-[#AEB2B9] font-semibold text-[36px]">Una hackathon para cualquier dev</h2>
        <p className='text-[#AEB2B9] font-medium text-[24px] mb-[24px]'>Próxima edición 13 de abril del 2024</p>
        <Link to={ROUTE.register}>
          <Button onClick={() => {}}>Registrarme</Button>
        </Link>
      </section>
      <div className="h-[600px]">
        <Spline scene="https://prod.spline.design/M1HgjURyO4sZWucZ/scene.splinecode" />
      </div>
    </header>
  )
}
