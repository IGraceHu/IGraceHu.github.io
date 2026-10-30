import Masonry from "@mui/lab/Masonry";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from 'next/head';


export default function Illustrations() {
  return (
    <>
        <Head>
            <title>Isabelle Hu's Artworks</title>
        </Head>

        <Header small url="Isabelle Hu" route="illustrations">
            <h1>
                My <span className="highlight">Artworks</span>
            </h1>
        </Header>
        <main>
            <section className="relative px-10 sm:px-30 pt-20 pb-10">
                <Masonry columns={3} spacing={2}>
                    <img src="/images/blooming-fields.png" />
                    <img src="/images/render-dance-pl.png" />
                    <img src="/images/wings.png" />
                    <img src="/images/meditation.png" />
                    <img src="/images/folly.png" />
                    <img src="/images/garden.png" />
                    <img src="/images/render-blestie-dorm.png" />
                    <img src="/images/emi_ballroom.png" />
                    <img src="/images/lisaryn.png" />
                    <img src="/images/dance.png" />
                    <img src="/images/stained_glass.png" />
                    <img src="/images/clouds.png" />
                    <img src="/images/render-dance-ts.png" />
                    <img src="/images/red.png" />
                    <img src="/images/empty_ocean.png" />
                </Masonry>
            </section>
        <div id="footer-pad"></div>
        </main>
        <Footer />
    </>
  );
}
