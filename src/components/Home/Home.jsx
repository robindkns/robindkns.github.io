import './Home.sass';
import Typewriter from '../Typewriter/Typewriter';
import urlRobinHome from '../../assets/mimsynet.PNG';

export default function Home() {
    return (
        <section className='home' id='home'>
            <div className="home-bg"></div>
            <div className="home-container">
                <div className="home-left" data-aos="fade-right">
                    <h3>HELLO I'M</h3>
                    <h1 id='name'>Robin Lefèvre</h1>
                    <h2>A Passionate <Typewriter /></h2>
                </div>
                <div className="home-right">
                <img src={urlRobinHome} alt="Robin Lefèvre" />
                    <div className="circle-bg"></div>
                </div>
            </div>
            
        </section>
    );
}