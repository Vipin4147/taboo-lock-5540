const navbar=()=>{
    return `<div id="nav">
    <div id="navtop">
        <div>
            <p class="grey">For any query, email us at &nbsp;</p><span class="orange"> care@startbuying.com &nbsp;</span><p class="grey"> or call us on &nbsp;</p><span class="orange"> +91 8000800080</span>

        </div>
        
    </div>
    <div id="navbot">
        <div id="start">
            <h1>Start</h1>
            <h1>Buying</h1>
        </div>
        <div id="search">
            <button id="all_cat">All Categories</button>
            <input type="text" placeholder="Search products by title, supplier, sku, category, brand etc...">
            <button id="srhimg"><img src="https://www.industrybuying.com/static/svg/search-icon-header.svg" alt=""></button>
        </div>
        <div id="signin">
            <img src="https://www.industrybuying.com/static/svg/signin-icon.svg" alt="">
            <div>
                <p>Sign In ></p>
                <p>My Account</p>
            </div>
        </div>
        <div id="track">
            <img src="https://www.industrybuying.com/static/svg/track-order-icon.svg" alt="">
            <div>
                <p>Track</p>
                <p>Order</p>
                
            </div>
        </div>
        <div id="cart">
            <img src="https://www.industrybuying.com/static/svg/cart-icon.svg" alt="">
            <div>
                <p id="count"></p>
                <p>CART</p>

            </div>
        </div>
        <div id="download">
            <div >
                <img src="https://www.industrybuying.com/static/images/android-paly.png" alt="">
                <img src="https://img.icons8.com/ios-filled/512/vertical-line.png" alt="">
                <img src="https://www.industrybuying.com/static/images/ios-play.png" alt="">
            </div>
            <div>
                <p>Download the APP!</p>
            </div>
        </div>
    </div>

</div>`
}



export default navbar;