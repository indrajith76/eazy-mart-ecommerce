import Image from 'next/image';
import { useState } from 'react';

const Banner = () => {
    const [activeItem, setActiveItem] = useState("");
    const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);
    const toggleMenu = () => {
        setIsMenuCollapsed(!isMenuCollapsed)
    }
    const menuItems = [
        {
            name: "HOME APPLIANCE",
            icon: "home",
        },
        {
            name: "ELECTRONICS",
            icon: "settings",
            items: ["Display", "Editor", "Theme", "Interface"],
        },
        {
            name: "AUDIO & SOUND DEVICES",
            icon: "add_box",
            items: ["Article", "Document", "Report"],
        },
        {
            name: "SMARTPHONE & TABLETS",
            icon: "lock",
            items: ["Dashboard", "Logout"],
        },
        {
            name: "GAME DEVICES & ACCESSORIES",
            icon: "inventory_2",
        },
        {
            name: "SECURITY DEVICES",
            icon: "favorite",
        },
        {
            name: "SMART HOME",
            icon: "search",
        },
        {
            name: "COMPUTERS & NETWORKING",
            icon: "person",
        },
        {
            name: "LAPTOPS & ACCESSORIES",
            icon: "person",
        },
        {
            name: "SMART WATCHES",
            icon: "SMART WATCHES",
        },
        {
            name: "OFFICE DEVICES",
            icon: "SMART WATCHES",
        },
        {
            name: "CAMERAS & PHOTO",
            icon: "SMART WATCHES",
        },
        {
            name: "MONITOR & TELEVISION",
            icon: "SMART WATCHES",
        },
    ];
    const Icon = ({ icon }) => (
        <span className="material-symbols-outlined">{icon}</span>
    );
    const NavButton = ({
        onClick,
        name,
        icon,
        isActive,
        hasSubNav,
    }) => (
        <button
            type="button"
            onClick={() => onClick(name)}
            className={isActive ? "active" : ""}
        >
            {icon && <Icon icon={icon} />}
            <span>{name}</span>
            {/* {hasSubNav && <Icon icon={`expand_${isActive ? "less" : "more"}`} />} */}
        </button>
    );



    const handleClick = (item) => {
        console.log("activeItem", activeItem);
        setActiveItem(item !== activeItem ? item : "");
    };
    const bannerData = [
        {
            image: `https://images.squarespace-cdn.com/content/v1/589615ee1e5b6cc3eb67d37b/1627740334479-9KSUWFJRK7N9VHDHIVB9/Harmony+%E2%80%94+Elegant+Gradient+Backgrounds+by+Creative+Veila+02.jpg`,
            info: "Introducing the best gaming laptop",
            prev: 6,
            id: 1,
            next: 2
        },
        {
            image: `https://i5.walmartimages.com/asr/dfc0d147-1996-43c5-8f03-6594ece7fc00_4.e7178625fc14d6f4af57cee6a4e88137.jpeg`,
            info: "New blender fruit juice for summer",
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: `https://img.freepik.com/premium-photo/wireless-headphones-yellow-background_176402-7160.jpg`,
            info: "Spacial promotion by javil headphone",
            prev: 2,
            id: 3,
            next: 1
        }
    ]
    return (
        <div>
            <div className='lg:w-[85%] lg:mx-auto md:w-full flex gap-4'>
                <div className='bg-gray-600 flex-0 hidden lg:block'>
                    <aside className="sidebar">
                        {menuItems.map((item) => (
                            <>
                                {!item.items && (
                                    <NavButton
                                        onClick={handleClick}
                                        name={item.name}
                                        isActive={activeItem === item.name}
                                        hasSubNav={!!item.items}
                                    />
                                )}
                                {item.items && (
                                    <>
                                        <NavButton
                                            onClick={handleClick}
                                            name={item.name}
                                            isActive={activeItem === item.name}
                                            hasSubNav={!!item.items}
                                        />
                                        {/* <SubMenu
                  activeItem={activeItem}
                  handleClick={handleClick}
                  item={item}
                /> */}
                                    </>
                                )}
                            </>
                        ))}
                    </aside>

                </div>
                <aside className='lg:hidden p-1 md:block sm:block'>
                    <div className=''>
                        <button onClick={toggleMenu} className="btn text-red-600 text-xl btn-outline ml-1  btn-square btn-ghost">
                            {
                                isMenuCollapsed === true ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg> : 'x'
                            }
                        </button>
                        {!isMenuCollapsed && (
                            <>
                                <div className='sidebarsm'>
                                    {menuItems.map((item) => (
                                        <>
                                            {!item.items && (
                                                <NavButton
                                                    onClick={handleClick}
                                                    name={item.name}
                                                    isActive={activeItem === item.name}
                                                    hasSubNav={!!item.items}
                                                />
                                            )}
                                            {item.items && (
                                                <>
                                                    <NavButton
                                                        onClick={handleClick}
                                                        name={item.name}
                                                        isActive={activeItem === item.name}
                                                        hasSubNav={!!item.items}
                                                    />
                                                    {/* <SubMenu
                          activeItem={activeItem}
                          handleClick={handleClick}
                          item={item}
                        /> */}
                                                </>
                                            )}
                                        </>
                                    ))}
                                </div>
                            </>
                        )}

                    </div>
                </aside>
                <div className='flex-1'>
                    <div className="carousel w-full h-[90%]">
                        {
                            bannerData.map(slide => <>
                                <div id={`slide${slide.id}`} className="carousel-item relative w-full">
                                    <div className='carousel-img w-full'>
                                        <img width={100} height={100} property src={slide.image} alt="" className="w-full h-full rounded-xl" />

                                    </div>
                                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                                        <h1 className='text-6xl font-bold text-white'>
                                            {slide.info}
                                        </h1>
                                    </div>


                                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                                        <a href={`#slide${slide.prev}`} className="btn btn-circle mr-5">❮</a>
                                        <a href={`#slide${slide.next}`} className="btn btn-circle">❯</a>
                                    </div>
                                </div>
                            </>)
                        }

                    </div>
                </div>
            </div >
        </div>
    );
};

export default Banner;