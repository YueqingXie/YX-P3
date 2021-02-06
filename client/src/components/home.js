import React from 'react'

function Home() {
    return (
        <div>

        <body>
        <div className="center container section" id="hhh">
            <img src="img/1.png" alt="" ></img>
            <p>Choose your role</p>
            
            <div className="row">
                <div className="col s6 m6 l6">
                    <li id="n"><a href="/list" className="black-text">Guest</a></li>
                </div>
                <div className="col s6 m6 l6">
                    <li id="n"><a href="/add" className="black-text">Author</a></li>
                </div>
            </div>
        </div>
        </body>

        <footer className="page-footer black darken-3">
                <div className="container">
                <div className="row">

                    <div className="flex text-xs-center col l2 m2 s2 offset-l1 offset-m1 offset-s1">
    
                        <p className="center">Y.X. P3</p>
                    </div>

                    <div className="col l9 m9 s9 ">
                    <h5>Y.X. Project-3</h5>
                    <p>Y.X. Project-3 is a fiction called "LiYuan", written by YX. Guests who know the password can view the content.</p>
                    </div>
              
              
                </div>
                </div>
                <div className="footer-copyright grey darken-4">
                <div className="container copyright center-align">Copyright &copy; 2021 Y.X. P3</div>
                </div>
            </footer>
  
  
        </div>
    )
}

export default Home
