import React from 'react'



type ProductProps = {
  // id: number,
  name: string;
  url: string;
  title: string;
  price: string;
  description: string;
 
 
};

// export const ProductHome = ({ name, url, price, description }: ProductProps) => {
export const ProductHome = ({  name, url, price, description, title, }: ProductProps) => {
  return (
    <div>

      <div>
      {/* <div className="product"> */}
        {/* <img src={url} alt={name} className="product-image" /> */}
        {/* <h2>{name}</h2> */}
        {/* <p>{price}</p> */}
        {/* <p>{taitel}</p> */}
        {/* <p>{description}</p> */}
        {/* <button className="add-to-cart">Add to Cart</button>
      </div> */}

      

      <div>
        <div className='flex bg-[#F2F0FF] h-[450px] w-[1263px] max-w-screen-xl   mx-auto'>

          <div><img src="icon/image 32.png" alt="" width={230}  /></div>

          <div className='flex gap-[] '>
            <div className='flex flex-col  justify-center w-[550px] h-[450px]   '>  {/* {id-1} */}
              <div className=''>
              <h2 className='text-[14px] text-[#FB2E86]'> { name}</h2>
              <h2 className='text-[44px] text-black font-bold'>{ title}</h2>
              <h2 className='text-[13px] text-[#8A8FB9] w-[456px] h-14'>{ description}</h2>
              </div>
              <button className='w-[140px] h-10 text-white bg-[#FB2E86]'>Shop Now</button>
            </div>

            <div className='flex items-center mr-14  ' >  {/* { url} */}
              <div className='bg-[#ECD2FA59] w-[400px] h-[410px] rounded-[410px] ml-11 absolute  z-0  ' />
              <div className='bg-[#ECD2FA59] w-[400px] h-[410px] rounded-[410px] mt-[50px] absolute   z-10 ' />
              <div className='   ml- mt-14  absolute z-20'>
                <img src={url}  width={380} height={100}   />
              </div>
              
              <div className='bg-[#00C1FE] w-[100px] h-[100px] rounded-[410px] ml-[300px] mb-[300px] z-30 m flex justify-center items-center text-center   '> <h2 className='flex justify-center items-center text-center mt-1 text-white text-2xl font-bold  w-[80]'>{price}</h2></div>
            </div>
          </div>

        </div>
      </div>
      </div>


    </div>
  );
};
