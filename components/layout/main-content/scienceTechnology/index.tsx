import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'

export default function ScienceTechnology() {
  return (
    <>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

      </Head>
      <div className="row">
        <div className="h1">
            <h1>Science and Technology</h1>
        </div>
        <div className="col-md-3">
            <div className="card">
                <Image className="card-img-top" src="/bg-01.PNG" alt="Card image cap" width="200" height="200"></Image>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card</p>
                    </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card">
                <Image className="card-img-top" src="/bg-04.jpg" alt="Card image cap" width="200" height="200"></Image>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card</p>
                    </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card">
                <Image className="card-img-top" src="/bg-03.jpeg" alt="Card image cap" width="200" height="200"></Image>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card</p>
                    </div>
            </div>
        </div>
        <div className="col-md-3">
            <div className="card">
                <Image className="card-img-top" src="/bg-01.PNG" alt="Card image cap" width="200" height="200"></Image>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card</p>
                    </div>
            </div>
        </div>
    </div>
    </>
  )
}