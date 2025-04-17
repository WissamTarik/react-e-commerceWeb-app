import  { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { checkToken } from '../../hooks/guards';
import LogoutButton from '../LogoutButton/LogoutButton';
import CartComponent from '../CartComponent/CartComponent';
import WishListIcon from '../WishListIcon/WishListIcon';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);
  const navigate=useNavigate()

  function handleLogout(){
      localStorage.removeItem('token')
      navigate('/login')
    }
  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };
 
  // Array containing navigation items
  let navItems = [
    { id: 1, text: 'Home' ,link:'/'},
    { id: 2, text: 'Products' ,link:'/products'},
    { id: 3, text: 'Categories',link:'/categories' },
    { id: 4, text: 'Brands', link:'/brands' },
    { id: 5, text: 'Login',link:"/login" },
    { id: 6, text: 'Register',link:"/register" },
  ];
  if(checkToken()){
    navItems = [
      { id: 1, text: 'Home' ,link:'/'},
      { id: 2, text: 'Products' ,link:'/products'},
      { id: 3, text: 'Categories',link:'/categories' },
      { id: 4, text: 'Brands', link:'/brands' },
    
    ];

  }

  else{
    navItems = [
      { id: 1, text: 'Home' ,link:'/'},
      { id: 2, text: 'Products' ,link:'/products'},
      { id: 3, text: 'Categories',link:'/categories' },
      { id: 4, text: 'Brands', link:'/brands' },
      { id: 5, text: 'Login',link:"/login" },
      { id: 6, text: 'Register',link:"/register" },
    ];
  }

  return (
    <nav className='bg-sky-300 z-50   mx-auto p-4 dark:text-white  top-0 start-0 end-0'>
    <div className='flex justify-between items-center container mx-auto'>
        {/* Logo */}
        <Link to={'/'} className=' text-3xl font-bold text-sky-800'>FreshCart</Link>

{/* Desktop Navigation */}
<ul className='hidden md:flex mx-auto'>
  {navItems.map(item => (
    <li
      key={item.id}
      
    >
      <NavLink to={`${item.link}`} className={`p-2 hover:bg-sky-800 rounded-xl m-2 cursor-pointer duration-300  hover:text-white`} > {item.text}</NavLink>
      
    </li>
  ))}
  {checkToken()&&<>
    <li><CartComponent/></li> 
    <li><WishListIcon/></li> 
  </> }
</ul>
{checkToken()?<div className='hidden md:flex   px-5 pe-2 items-center' onClick={handleLogout}>
  <LogoutButton/>
</div>:""}
{/* Mobile Navigation Icon */}
<div onClick={handleNav} className='block md:hidden cursor-pointer'>
  {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
</div>

{/* Mobile Navigation Menu */}
<div  className={
    nav
      ? 'fixed md:hidden left-0 top-0 w-[60%] md:shadow-none h-full border-r border-r-sky-500 bg-sky-100 ease-in-out duration-500'
      : 'ease-in-out w-[60%] duration-500 fixed shadow-lg shadow-sky-200 top-0 bottom-0 left-[-100%]'
  }>

  {/* Mobile Logo */}
  <div className='flex justify-between items-center p-4'>
  <h1 className=' text-xl font-bold text-sky-800 '>FreshCart</h1>
  {checkToken()&&<div className='flex '>
    <CartComponent/>
    </div>}
  </div>
<ul>

  {/* Mobile Navigation Items */}
  {navItems.map(item => (
    <li
      key={item.id}
      className='px-4  rounded-xl  duration-300  cursor-pointer '
      onClick={handleNav}
    >
      <NavLink to={`${item.link}`} className={`p-2 block text-center hover:bg-sky-800 rounded-xl w-full m-2 cursor-pointer duration-300  hover:text-white`} > {item.text}</NavLink>
      
      </li>
  ))}
 
  {checkToken()?  
  <>

  <li className='flex justify-center items-center' > <WishListIcon/></li>
  <li className='flex justify-center items-center' onClick={handleLogout}> <LogoutButton/></li>
  </>
:""}
</ul>

</div>

    </div>
    </nav>
  );
};

export default Navbar;