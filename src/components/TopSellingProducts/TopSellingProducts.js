import Image from "next/image";

const TopSellingProducts = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid grid-cols-5">
          <div className="row-span-2 col-span-2">
            <Image
              src="/assets/TopSelling/nullam-sed-sollicitudin.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSellingProducts;
