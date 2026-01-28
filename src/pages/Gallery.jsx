import styles from "../styles/Gallery.module.css"
import g1 from "../assets/gallery/Image.png"
import g2 from "../assets/gallery/Image-0.png"
import g3 from "../assets/gallery/Image-1.png"
import g4 from "../assets/gallery/Image-2.png"
import g5 from "../assets/gallery/Image-3.png"
import g6 from "../assets/gallery/Image-4.png"
import g7 from "../assets/gallery/Image-5.png"
import g8 from "../assets/gallery/Image-6.png"
import g9 from "../assets/gallery/Image-7.png"


import Footer from '../components/Footer.jsx'
import WorkWithUs from '../components/WorkWithUs.jsx'
import Services from '../components/Services.jsx'
function Gallery(){
    return(
        <>
           
            <div className={styles.header}>
                <h1 classname="heading1">GALLERY</h1>
            </div>
            <div className={styles.main}>
                <div className={styles.container}>
                    <p className="caption1">SEASONAL ARRANGEMENTS</p>
                    <div className={styles.galleryContainer}>


                        <div className={styles.image1}>
                            <p>Dawn Bloom
                                <span className="heading4">$55/Bunch</span>
                            </p>
                            <img src={g1} alst="gallery img"/>
                        </div>


                        <div className={styles.image2}>
                            <p>Solstice Stems
                                <span className="heading4">$30/Bunch</span>
                            </p>
                            <img src={g2} alst="gallery img"/>
                        </div>


                        <div className={styles.image3}>
                            <p>Whisper GreenS
                                <span className="heading4">$120/Bunch</span>
                            </p>
                            <img src={g3} alst="gallery img"/>
                        </div>


                        <div className={styles.image4}>
                            <p>Clarity Petals
                                <span className="heading4">$55/Bunch</span>
                            </p>
                            <img src={g4} alst="gallery img"/>
                        </div>


                        <div className={styles.image5}>
                            <p>River Stone
                                <span className="heading4">$30/Bunch</span>
                            </p>
                            <img src={g5} alst="gallery img"/>
                        </div>


                        <div className={styles.image6}>
                            <p>Moonlit Meadow
                                <span className="heading4">$120/Bunch</span>
                            </p>
                            <img src={g6} alst="gallery img"/>
                        </div>


                        <div className={styles.image7}>
                            <p>Ember Leaf
                                <span className="heading4">$35/Bunch</span>
                            </p>
                            <img src={g7} alst="gallery img"/>
                        </div>


                        <div className={styles.image8}>
                            <p>Skyline Bloom
                                <span className="heading4">$75/Bunch</span>
                            </p>
                            <img src={g8} alst="gallery img"/>
                        </div>


                        <div className={styles.image9}>
                            <p>Still Waters
                                <span className="heading4">$250/Bunch</span>
                            </p>
                            <img src={g9} alst="gallery img"/>
                        </div>


                    </div>
               
                </div>
            </div>
            <Services/>
            <WorkWithUs/>
            <Footer/>


        </>
    );
}
export default Gallery;

