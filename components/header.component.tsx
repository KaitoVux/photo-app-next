import Image from 'next/image';

export const Header: React.FC = () => {
    return (
        <nav className="sticky top-0 z-50 border-b border-x-0 border-t-0 border-slate-300 bg-white px-4 py-2 flex justify-between items-center">
            <Image width="60" height="60" src="/app-icon.png" alt="" />
            <p>Hello, Miu Lem</p>
        </nav>
    );
};
