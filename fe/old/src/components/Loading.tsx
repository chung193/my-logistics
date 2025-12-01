const Loading = ({ isLoading = false }) => {
    return (
        <div className="preloader" id="preloader" style={{ display: (isLoading ? "block" : "none") }}>
            <div className="preloader-inner">
                <div className="spinner">
                    <div className="dot1"></div>
                    <div className="dot2"></div>
                </div>
            </div>
        </div>
    );
}

export default Loading;