import ClipLoader from 'react-spinners/HashLoader';

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-full w-full bg-[rgba(0,0,0,0.3)] text-center z-999  absolute inset-0">
            <ClipLoader />
        </div>
    );
};

export default Loader;
