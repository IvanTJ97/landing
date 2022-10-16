import Head from 'next/head';
import Image from 'next/future/image';
import {useState} from 'react';
import {IoShareSocialOutline} from "react-icons/io5";
import {BsHandThumbsUp,BsArrowLeft,BsArrowRight,BsInstagram,BsYoutube} from "react-icons/bs";
import {MdAllInclusive} from "react-icons/md";
import {GrSecure} from "react-icons/gr";
import {ImFacebook} from "react-icons/im";
import {SiTiktok} from "react-icons/si";
export default function Home(){
  const [c1,setC1]=useState(1);
  const [c2,setC2]=useState(2);
  const [c3,setC3]=useState(3);
  const [visible,setVisible]=useState(false);
  const add=()=>{
    setC1(c1===11?1:c1+1);
    setC2(c2===11?1:c2+1);
    setC3(c3===11?1:c3+1);
  };
  const minus=()=>{
    setC1(c1===1?11:c1-1);
    setC2(c2===1?11:c2-1);
    setC3(c3===1?11:c3-1);
  };
  return (
    <div>
      <Head>
        <title>Imanes Landing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <nav className='text-sm font-medium flex justify-between'>
          <ul className='flex self-center flex-1'>
            <li className='flex-1 text-center ml-5'><Image src="/ImageNav.svg" alt="ImagenNav" width={125} height={28}/></li>
            <li className='flex-1 text-2xl text-center'>
              <a href="#" className='border-b-4 border-solid hover:border-imanes border-transparent'>Inicio</a>
            </li>
            <li className='flex-1 text-2xl text-center'>
              <a href="#App" className='border-b-4 border-solid hover:border-imanes border-transparent'>Aplicación</a>
            </li>
            <li className='flex-1 text-2xl text-center'>
              <a href="#Us" className='border-b-4 border-solid hover:border-imanes border-transparent'>Nosotros</a>
            </li>
          </ul>
          <Image src="/HeaderUp.svg" alt='HeaderUp' width={330} height={81}/>
        </nav>
        <div className="bg-imanes grid grid-cols-2 place-items-center">
          <div className='flex flex-col justify-center'>
            <h1 className='text-6xl font-sans font-semibold text-white ml-8 mb-5'>¿Estás List@ para vivir nuevas experiencias?</h1>
            <h3 className='text-4xl font-sans font-medium text-white ml-8 mb-7'>Potencia tu magnetismo</h3>
            <div className='text-center'>
              <input type="button" value="Descargar ahora" className='text-2xl bg-white p-5 rounded-xl font-sans font-medium text-imanes cursor-pointer hover:text-white hover:bg-blue-700'/>
            </div>
          </div>
          <div className='bg-white rounded-full p-20 outline outline-offset-[19px] outline-blue-700 outline-4 my-10 ml-12'>
            <Image src="/IconoHeader.svg" width={289} height={301} alt="IconoHeader"/>
          </div>
        </div>
        <Image src="/HeaderDown.svg" alt='HeaderDown' width={446} height={74}/>
        <div className='grid grid-cols-8 place-items-center'>
          <div className='col-span-8'>
            <h2 className='text-5xl font-sans font-bold text-imanes'>La Aplicación que te conecta en tiempo real</h2>
          </div>
          <div className='col-span-4 row-span-2'>
            <Image src="/Description.svg" width={600} height={600} alt="Description"/>
          </div>
          <div>
            <IoShareSocialOutline size={131}/>
            <h3 className='text-2xl font-sans font-semibold text-imanes text-center'>Intuitiva</h3>
          </div>
          <div></div>
          <div>
            <BsHandThumbsUp size={131}/>
            <h3 className='text-2xl font-sans font-semibold text-imanes text-center'>Fácil de usar</h3>
          </div>
          <div></div>
         <div>
            <MdAllInclusive size={131}/>
            <h3 className='text-2xl font-sans font-semibold text-imanes text-center'>Inclusiva</h3>
          </div>
          <div></div>
          <div>
            <GrSecure size={131}/>
            <h3 className='text-2xl font-sans font-semibold text-imanes text-center'>Segura</h3>
          </div>
          <div></div>
        </div>
        <div>
          <h2 className='text-5xl font-sans font-bold text-imanes text-center mb-12' id='App'>Viaje del Usuario</h2>
          <div className="flex items-center justify-center relative bg-[url('/BackImage.svg')] mb-8 pb-12">
            <BsArrowLeft onClick={minus} size={50} className="cursor-pointer rounded-full hover:bg-slate-300 ease-in duration-300"/>
            <Image src={`/MU${c1}.svg`} alt='Carrusel 1' width={253} height={500}/>
            <Image src={`/MU${c2}.svg`} alt='Carrusel 2' width={253} height={500} className=""/>
            <Image src={`/MU${c3}.svg`} alt='Carrusel 3' width={253} height={500}/>
            <BsArrowRight onClick={add} size={50} className="cursor-pointer rounded-full hover:bg-slate-300 ease-in duration-300"/>
          </div>
        </div>
        <div id='Us'>
          <h2 className='text-5xl font-sans font-bold text-imanes text-center mb-12'>Nosotros</h2>
          <div className='grid grid-cols-3 place-items-center mb-12'>
            <div className='grid place-items-center'>
              <Image src="/IT.jpeg" alt='IT' width={122} height={122} className="rounded-full" />
              <h4>Ivan Tejedor - Full Stack</h4>
              <p>Project Manager</p>
            </div>
            <div className='grid place-items-center'>
              <Image src="/IT.jpeg" alt='IT' width={122} height={122} className="rounded-full" />
              <h4>Ivan Tejedor - Full Stack</h4>
              <p>Diseño UX/UI</p>
            </div>
            <div className='grid place-items-center'>
              <Image src="/IT.jpeg" alt='IT' width={122} height={122} className="rounded-full" />
              <h4>Ivan Tejedor</h4>
              <p>Programación Front-End</p>
            </div>
            <div className='grid place-items-center'>
              <Image src="/IT.jpeg" alt='IT' width={122} height={122} className="rounded-full" />
              <h4>Ivan Tejedor - Full Stack</h4>
              <p>Diseño UX/UI</p>
            </div>
            <div className='grid place-items-center'>
              <Image src="/IT.jpeg" alt='IT' width={122} height={122} className="rounded-full" />
              <h4>Ivan Tejedor - Full Stack</h4>
              <p>Diseño UX/UI</p>
            </div>
            <div className='grid place-items-center'>
              <Image src="/IT.jpeg" alt='IT' width={122} height={122} className="rounded-full" />
              <h4>Ivan Tejedor</h4>
              <p>Programación Full Stack</p>
            </div>
          </div>
        </div>
        <div className='flex justify-center mb-8 gap-12'>
          <Image src="/Googleplay.svg" alt="GooglePlay" width={184} height={53} className="cursor-pointer"/>
          <Image src="/Appstore.svg" alt="AppStore" width={184} height={53} onClick={()=>setVisible(!visible)} className="cursor-pointer"/>   
        </div>
        {visible?<p className='text-center pb-2'>Próximamente disponible en AppStore</p>:<p className='text-transparent select-none pb-2'>Próximamente disponible en AppStore</p>} 
      </main>  
      <footer className="relative grid place-items-center">
        <div className="absolute left-10">
          <Image src="/IconoHeader.svg" alt="FooterImg" width={129} height={129}/>
        </div>
        <nav>
          <ul className='flex gap-x-8 justify-center pb-3'>
            <li><a href="#">Soluciones</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Recursos</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </nav>
        <nav>
          <ul className='flex gap-x-14 justify-center py-5'>
            <li><a href="#"><ImFacebook size={26} className=""/></a></li>
            <li><a href="#"><BsInstagram size={26} className=""/></a></li>
            <li><a href="#"><BsYoutube size={26} className=""/></a></li>
            <li><a href="#"><SiTiktok size={26} className=""/></a></li>
          </ul>
        </nav>
        <p className='text-center text-slate-500 pb-5'>Copyright © 2022 IMANES TJ97</p>
      </footer>
</div>
)
};
