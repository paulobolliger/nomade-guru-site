import { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      const logo = document.querySelector('.logo img');
      if (!header || !logo) return;

      if (window.scrollY > 50) {
        header.classList.add('scrolled');
        logo.style.height = '50px';
      } else {
        header.classList.remove('scrolled');
        logo.style.height = '80px';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'Como Funciona', 'Destinos', 'Curadoria Humana', 'Contato'];

  return (
    <header className="bg-white fixed w-full top-0 left-0 z-50 shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="logo">
          <img
            src="https://res.cloudinary.com/dhqvjxgue/image/upload/v1744155441/logo_nomade_guru_y2inow.png"
            alt="Nomade Guru"
            style={{ height: '80px' }}
          />
        </div>
        <button
          className="menu-toggle text-2xl ml-auto"
          onClick={() => document.querySelector('nav ul')?.classList.toggle('show')}
        >
          ☰
        </button>
        <nav>
          <ul className="hidden md:flex space-x-4" onClick={() => document.querySelector('nav ul')?.classList.remove('show')}>
            {menuItems.map((item, i) => (
              <li key={i}>
                <a href={`#${item.toLowerCase().replace(/ /g, '-')}`}>{item}</a>
              </li>
            ))}
            <li>
              <button
                className="header-btn bg-[#5053c4] text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-[#342ca4]"
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Experimente seu Roteiro
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
