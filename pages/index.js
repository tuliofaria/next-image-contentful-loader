import Image from 'next/image'

const contentfulImageLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`
}

// https://www.understood.org/hub/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fp0qf7j048i0q%2F4Wk2AxbRbVSbMTH9IZZxJq%2F73ca12456ccf195781489c0ce2c33eb4%2FG1086727832.png&w=1080&q=75
// https://images.ctfassets.net/p0qf7j048i0q/4Wk2AxbRbVSbMTH9IZZxJq/73ca12456ccf195781489c0ce2c33eb4/G1086727832.png&w=1080&q=75
const Home = () => {
  return (
    <>
      <h1>Images</h1>
      <Image
        loader={contentfulImageLoader}
        src='https://images.ctfassets.net/p0qf7j048i0q/4Wk2AxbRbVSbMTH9IZZxJq/73ca12456ccf195781489c0ce2c33eb4/G1086727832.png'
        alt='image-alt-text'
        layout='responsive'
        width={500}
        height={500}
      />
      <Image
        src='https://images.ctfassets.net/p0qf7j048i0q/4Wk2AxbRbVSbMTH9IZZxJq/73ca12456ccf195781489c0ce2c33eb4/G1086727832.png'
        alt='image-alt-text'
        layout='responsive'
        width={500}
        height={500}
      />
    </>
  )
}
export default Home
