import Head from 'next/head';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <nav className="md:container mx-2 py-2 flex justify-between items-center">
            <Image width="48" height="48" src="/app-icon.png" alt=""/>
            <p>Hello, Miu Lem</p>
        </nav>
    );
};

export default Header;
