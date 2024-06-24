

const Carousel = () => {
    return (
        <div>
             <h2 className="text-center font-bold text-2xl md:text-6xl">Testimonials </h2>
            <div className="grid md:grid-cols-3 px-7">
           
            <div className="card  bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                           
                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                          
                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            
                        </div>
                    </div>
        </div>
        </div>
    );
};

export default Carousel;