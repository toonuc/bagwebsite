import logo from '@/assets/logo.svg';
import instagram from '@/assets/instagram.svg';
import facebook from '@/assets/facebook.svg';
import tiktok from '@/assets/tiktok.svg';
import lazada from '@/assets/lazada.svg';
import shopee from '@/assets/shopee.svg';

export default function Footer() {
    const socials = [
        {
            name: 'instagram',
            url: 'https://www.instagram.com/krapaw_store',
            icon: instagram,
        },
        {
            name: 'facebook',
            url: 'https://www.facebook.com/profile.php?id=100090905180228',
            icon: facebook,
        },
        {
            name: 'tiktok',
            url: 'https://tiktok.com/@krapaw_store',
            icon: tiktok,
        },
        {
            name: 'email',
            url: 'mailto:krapawstore@gmail.com',
            icon: 'https://drive.google.com/uc?view&id=1Kp8tdAfiDHiZQKs97u3m0a56XgztdtuL',
        },
    ];

    const shops = [
        {
            name: 'lazada',
            url: 'https://www.lazada.co.th/shop/krapaw-store',
            icon: lazada,
        },
        {
            name: 'shopee',
            url: 'https://shopee.co.th/pob3_ho804',
            icon: shopee,
        },
    ];

    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-10 justify-between p-10">
                <div className="flex flex-col justify-center">
                    <img
                        className="w-32 mb-2 mx-auto sm:mx-0"
                        src={logo}
                        alt=""
                    />
                    <p className="font-inter text-center text-p4 text-white">
                        Welcome to our store, where you can find a variety of
                        premium bags. Enjoy!
                    </p>
                </div>

                <div className="flex flex-wrap gap-10">
                    <div className="flex flex-col gap-2 mx-auto mb-2">
                        <p className="font-inter text-center sm:text-left text-p4 text-white pt-2">
                            Follow us
                        </p>
                        <div className="flex flex-row space-x-4 content-center items-center pt-2">
                            {socials.map(({ name, url, icon }) => {
                                return (
                                    <div className="w-10 hover:opacity-80">
                                        <a target="_blank" href={url}>
                                            <img src={icon} alt={name} />
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 mx-auto">
                        <p className="font-inter text-center sm:text-left text-p4 text-white pt-2">
                            Visit our shops
                        </p>
                        <div className="flex gap-4 pt-2">
                            {shops.map(({ name, url, icon }) => {
                                return (
                                    <div>
                                        <a
                                            target="_blank"
                                            href={url}
                                            className="flex items-center h-12 px-4 py-2 bg-gradient-to-bl from-white to-gray-300 shadow-xl shadow-gray-400/60 rounded-md hover:opacity-80"
                                        >
                                            <img
                                                src={icon}
                                                alt={name}
                                                width={100}
                                            />
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
