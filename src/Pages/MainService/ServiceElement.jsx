import { Player} from '@lottiefiles/react-lottie-player';

const ServiceElement = () => {
    return (
        <div className="px-4 md:px-36 grid md:grid-cols-2">
            <div>
                <h2 className="font-bold md:text-3xl">A partial list of our services includes:</h2>
                <ul>
                    <li>Scouting a venue</li>
                    <li>Developing a theme
                    </li>
                    <li>Coordinating paper goods with a stationery vendor
                    </li>
                    <li>Organizing a tasting with up to three caterers
                    </li>
                    <li>Recommending up to three florists (if necessary)
                    </li>
                    <li>Recommending up to three photographers (if necessary)
                    </li>
                    <li>Managing your guest list
                    </li>
                    <li>Assisting with rentals
                    </li>
                    <li>And, depending on the wishes, being on-site or on-call during the event to ensure everything runs smoothly
                    </li>
                </ul>
            </div>
            <div>
                <Player
                    autoplay
                    loop
                    src="https://lottie.host/4f2464e4-880d-4a17-a0cd-c7c2bfa9566c/C5WzE98mZf.json"
                    style={{ height: '300px', width: '300px' }}
                >
                    
                </Player>
            </div>
        </div>
    );
};

export default ServiceElement;