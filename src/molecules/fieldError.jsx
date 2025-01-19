const FieldError = ({ error }) => {
    return (
        error ?
            <div className=" p-1 text-sm text-destructive mt-1">
                <p>{error}</p>
            </div> : <></>
    );
};

export default FieldError;
