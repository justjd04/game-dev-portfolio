import React from 'react';
function Explore() {
    return (
        <React.Fragment>
        <div id="parallax">
        <div id="subscribe" className="container-fluid text-justify p-5">
            <div className="col-12  ml-5 subscribe">
                    <h1 className="subscribeh1">Subscribe to get notified about the latest news and top gaming trends.</h1>
                    <p className="subscribe-subtext">Get early access to new apps if you join our email list. </p>
             <input className="subscribe-input" placeholder="Enter your email" type="email" name="email" id="email"/> <button className="subscribe-btn text-center"> SUBSCRIBE  </button>
            </div>
        </div>
        </div>
            <p className="explore text-center pt-5">Coming Soon!</p>
        <div className="container-fluid">

            <div className="explore_content">

                <div className="card">
                        <img src="https://i.imgur.com/urr6Uny.png" alt="news" className="card-img-top img-1 img-fluid mt-3"/>
                    <div className="card-footer">
                        <p className=" blog-cat mb-0 text-muted"><strong>Dungeon Games</strong></p>
                        <p className="blog-par">Explore the dungeon, collect crazy weapons, kill monsters and Dungeon Bosses and become an S class hunter!</p>
                    </div>
                </div>

                <div className="card">
                        <img src="https://i.imgur.com/6nkN4j2.png" alt="news" className="card-img-top img-fluid mt-3" />
                    <div className="card-footer">
                        <p className=" blog-cat mb-0 text-muted"><strong>Open World</strong></p>
                        <p className="blog-par">Choose your class and explore a breathtaking world, level up your character and gear up to prepare for a massive battles!</p>
                    </div>
                </div>

                <div className="card">
                        <img src="https://i.imgur.com/k8COXYt.png" alt="news" className="card-img-top img-fluid mt-3 " />
                    <div className="card-footer">
                        <p className=" blog-cat text-muted mb-0"><strong>War Strategy</strong></p>
                        <p className="blog-par">Gather and train elite troops, build your own kingdom, Wage war and make the world tremble with fear!</p>
                    </div>
                </div>

            </div>
        </div>
        </React.Fragment>
    )
}

export default Explore