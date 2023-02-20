import Image from "next/image";

import product1 from "../../assets/TopSelling/nullam-sed-sollicitudin.jpg";
import product2 from "../../assets/TopSelling/nunc-euismod-fringilla.jpg";
import product3 from "../../assets/TopSelling/nunc-auctor-ligula-ligula.jpg";
import product4 from "../../assets/TopSelling/quisque-dapibus-et-mi.jpg";
import product5 from "../../assets/TopSelling/nunc-euismod-fringilla-1.jpg";
import product6 from "../../assets/TopSelling/quisque-dapibus-et-mi-1.jpg";
import product7 from "../../assets/TopSelling/nullam-sed-sollicitudin-2.jpg";
import { BsCart4, BsHeart, BsSearch, BsStarFill } from "react-icons/bs";

const TopSellingProducts = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-12">
        <div>
          <h2 className="text-green-600 font-bold text-3xl pb-5">
            BEST SELLERS
          </h2>
        </div>
        <div className="grid text-center grid-cols-5">
          <div className="row-span-2 col-span-2 relative product_card py-3 border">
            <Image
              src={product1}
              alt="Picture of the author"
              className="w-full"
            />
            <p>Nullam sed sollicitudin</p>
            <div className="flex justify-center gap-3 text-stone-400 text-sm">
              <div>
                <BsStarFill className="inline"></BsStarFill>
                <BsStarFill className="inline"></BsStarFill>
                <BsStarFill className="inline"></BsStarFill>
                <BsStarFill className="inline"></BsStarFill>
                <BsStarFill className="inline"></BsStarFill>
              </div>
              <p>( 0 review)</p>
            </div>
            <h4 className="text-green-600 text-2xl font-semibold">$50.00</h4>
            <div className="absolute  bg-black text-white flex w-full justify-center items-center cart hover:cursor-pointer gap-2">
              <BsCart4 className="inline"></BsCart4> <p>Add To Cart</p>
            </div>
            <div className="right_overlay">
              <BsSearch className="mb-3 hover:text-green-600 hover:cursor-pointer" />
              <BsHeart className="hover:text-green-600 hover:cursor-pointer" />
            </div>
          </div>
          <div className="relative product_card py-3 border border-l-0">
            <Image
              src={product2}
              alt="Picture of the author"
              className="w-full"
            />
            <p>Nullam sed sollicitudin</p>
            <div className="flex justify-center gap-3 text-stone-400 text-sm">
              <div>
                <BsStarFill className="inline"></BsStarFill>
                <BsStarFill className="inline"></BsStarFill>
                <BsStarFill className="inline"></BsStarFill>
                <BsStarFill className="inline"></BsStarFill>
                <BsStarFill className="inline"></BsStarFill>
              </div>
              <p>( 0 review)</p>
            </div>
            <h4 className="text-green-600 text-2xl font-semibold">$69.00</h4>
            <div className="absolute  bg-black text-white flex w-full justify-center items-center cart hover:cursor-pointer gap-2">
              <BsCart4 className="inline"></BsCart4> <p>Add To Cart</p>
            </div>
            <div className="right_overlay">
              <BsSearch className="mb-3 hover:text-green-600 hover:cursor-pointer" />
              <BsHeart className="hover:text-green-600 hover:cursor-pointer" />
            </div>
          </div>
          <div className="relative product_card py-3 border border-l-0">
            <Image
              src={product3}
              alt="Picture of the author"
              className="w-full"
            />
            <p>Nullam sed sollicitudin</p>
            <div className="flex justify-center gap-3 text-stone-400 text-sm">
              <div>
                <BsStarFill className="inline"></BsStarFill>
                <BsStarFill className="inline"></BsStarFill>
                <BsStarFill className="inline"></BsStarFill>
                <BsStarFill className="inline"></BsStarFill>
                <BsStarFill className="inline"></BsStarFill>
              </div>
              <p>( 0 review)</p>
            </div>
            <h4 className="text-green-600 text-2xl font-semibold">$35.00</h4>
            <div className="absolute  bg-black text-white flex w-full justify-center items-center cart hover:cursor-pointer gap-2">
              <BsCart4 className="inline"></BsCart4> <p>Add To Cart</p>
            </div>
            <div className="right_overlay">
              <BsSearch className="mb-3 hover:text-green-600 hover:cursor-pointer" />
              <BsHeart className="hover:text-green-600 hover:cursor-pointer" />
            </div>
          </div>
          <div className="relative product_card py-3 border border-l-0">
            <Image
              src={product4}
              alt="Picture of the author"
              className="w-full"
            />
            <p>Nullam sed sollicitudin</p>
            <div className="flex justify-center gap-3 text-stone-400 text-sm">
              <div>
                <BsStarFill className="inline"></BsStarFill>
                <BsStarFill className="inline"></BsStarFill>
                <BsStarFill className="inline"></BsStarFill>
                <BsStarFill className="inline"></BsStarFill>
                <BsStarFill className="inline"></BsStarFill>
              </div>
              <p>( 0 review)</p>
            </div>
            <h4 className="text-green-600 text-2xl font-semibold">$89.00</h4>
            <div className="absolute  bg-black text-white flex w-full justify-center items-center cart hover:cursor-pointer gap-2">
              <BsCart4 className="inline"></BsCart4> <p>Add To Cart</p>
            </div>
            <div className="right_overlay">
              <BsSearch className="mb-3 hover:text-green-600 hover:cursor-pointer" />
              <BsHeart className="hover:text-green-600 hover:cursor-pointer" />
            </div>
          </div>
          <div className="relative product_card py-3 border border-l-0 border-t-0">
            <Image
              src={product5}
              alt="Picture of the author"
              className="w-full"
            />
            <p>Nullam sed sollicitudin</p>
            <div className="flex justify-center gap-3 text-stone-400 text-sm">
              <div>
                <BsStarFill className="inline"></BsStarFill>
                <BsStarFill className="inline"></BsStarFill>
                <BsStarFill className="inline"></BsStarFill>
                <BsStarFill className="inline"></BsStarFill>
                <BsStarFill className="inline"></BsStarFill>
              </div>
              <p>( 0 review)</p>
            </div>
            <h4 className="text-green-600 text-2xl font-semibold">$45.00</h4>
            <div className="absolute  bg-black text-white flex w-full justify-center items-center cart hover:cursor-pointer gap-2">
              <BsCart4 className="inline"></BsCart4> <p>Add To Cart</p>
            </div>
            <div className="right_overlay">
              <BsSearch className="mb-3 hover:text-green-600 hover:cursor-pointer" />
              <BsHeart className="hover:text-green-600 hover:cursor-pointer" />
            </div>
          </div>
          <div className="relative product_card py-3 border border-l-0 border-t-0">
            <Image
              src={product6}
              alt="Picture of the author"
              className="w-full"
            />
            <p>Nullam sed sollicitudin</p>
            <div className="flex justify-center gap-3 text-stone-400 text-sm">
              <div>
                <BsStarFill className="inline"></BsStarFill>
                <BsStarFill className="inline"></BsStarFill>
                <BsStarFill className="inline"></BsStarFill>
                <BsStarFill className="inline"></BsStarFill>
                <BsStarFill className="inline"></BsStarFill>
              </div>
              <p>( 0 review)</p>
            </div>
            <h4 className="text-green-600 text-2xl font-semibold">$59.00</h4>
            <div className="absolute  bg-black text-white flex w-full justify-center items-center cart hover:cursor-pointer gap-2">
              <BsCart4 className="inline"></BsCart4> <p>Add To Cart</p>
            </div>
            <div className="right_overlay">
              <BsSearch className="mb-3 hover:text-green-600 hover:cursor-pointer" />
              <BsHeart className="hover:text-green-600 hover:cursor-pointer" />
            </div>
          </div>
          <div className="relative product_card py-3 border border-l-0 border-t-0">
            <Image
              src={product7}
              alt="Picture of the author"
              className="w-full"
            />
            <p>Nullam sed sollicitudin</p>
            <div className="flex justify-center gap-3 text-stone-400 text-sm">
              <div>
                <BsStarFill className="inline"></BsStarFill>
                <BsStarFill className="inline"></BsStarFill>
                <BsStarFill className="inline"></BsStarFill>
                <BsStarFill className="inline"></BsStarFill>
                <BsStarFill className="inline"></BsStarFill>
              </div>
              <p>( 0 review)</p>
            </div>
            <h4 className="text-green-600 text-2xl font-semibold">$50.00</h4>
            <div className="absolute  bg-black text-white flex w-full justify-center items-center cart hover:cursor-pointer gap-2">
              <BsCart4 className="inline"></BsCart4> <p>Add To Cart</p>
            </div>
            <div className="right_overlay">
              <BsSearch className="mb-3 hover:text-green-600 hover:cursor-pointer" />
              <BsHeart className="hover:text-green-600 hover:cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSellingProducts;
