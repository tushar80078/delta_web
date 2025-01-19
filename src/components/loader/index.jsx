import ClipLoader from 'react-spinners/FadeLoader';

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-full w-full bg-[rgba(0,0,0,0.5)] text-center z-[9999] absolute inset-0">
            <ClipLoader className="z-50 " color='white' size={100} speedMultiplier={2} />
        </div>
    );
};

export default Loader;
