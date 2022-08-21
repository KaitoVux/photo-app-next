import { ImageGridItem } from '../ImageGridItem';

export const ImageGrid: React.FC = () => {
    const mocks = [
        {
            id: 1,
            url: 'https://res.cloudinary.com/photoappgo/image/upload/v1652589147/photo-app/kfbadildygwlau9fugoj.jpg',
        },
        {
            id: 2,
            url: 'https://res.cloudinary.com/photoappgo/image/upload/v1652589147/photo-app/kfbadildygwlau9fugoj.jpg',
        },
        {
            id: 3,
            url: 'https://res.cloudinary.com/photoappgo/image/upload/v1652589147/photo-app/kfbadildygwlau9fugoj.jpg',
        },
        {
            id: 4,
            url: 'https://res.cloudinary.com/photoappgo/image/upload/v1652589147/photo-app/kfbadildygwlau9fugoj.jpg',
        },
        {
            id: 5,
            url: 'https://res.cloudinary.com/photoappgo/image/upload/v1652589147/photo-app/kfbadildygwlau9fugoj.jpg',
        },
        {
            id: 6,
            url: 'https://res.cloudinary.com/photoappgo/image/upload/v1652589147/photo-app/kfbadildygwlau9fugoj.jpg',
        },
        {
            id: 7,
            url: 'https://res.cloudinary.com/photoappgo/image/upload/v1652589147/photo-app/kfbadildygwlau9fugoj.jpg',
        },
    ];
    return (
        <section className="grid lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 xs:gap-2 lg:gap-4 lg:mt-4 xs:mt-2">
            {mocks && mocks.map((item) => <ImageGridItem key={item.id} url={item.url} />)}
        </section>
    );
};
