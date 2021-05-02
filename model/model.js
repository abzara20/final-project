var homeContent = `<div class="home">
<section class="quote">
    <div class="text-container">
        <p>
            “Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
            accusantium doloremque laudantium totam rem aperiam eaque ipsa quae 
            ab illo inventore veritatis et quasi architecto beatae vitae dicta 
            sunt explicabo. Iste natus error sit voluptatem accusantium doloremque 
            laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis 
            et quasi architecto beatae vitae dicta sunt explicabo”
        </p>
        <h3>John Smith</h3>
        <h6>Corporation CEO, books author.</h6>
    </div>
</section>

<section class="upcoming-events">
    <div class="header">
        <p>UPCOMING EVENTS:</p>
    </div>

    <div class="calendar">

        <div class="calendar-date">
            <div class="date-icon">
                <h3>06</h3>
                <p>JUN</p>
            </div>

            <div class="text-container">
                <h4>
                    Sed et persipiatis unde omnis iste natus
                </h4>
                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Aliquid temporibus quos aspernatur
                </p>
            </div>
        </div>

        <div class="calendar-date">
            <div class="date-icon">
                <h3>30</h3>
                <p>JUL</p>
            </div>

            <div class="text-container">
                <h4>
                    Sed et persipiatis unde omnis iste natus
                </h4>
                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Aliquid temporibus quos aspernatur
                </p>
            </div>
        </div>

        <div class="calendar-date">
            <div class="date-icon">
                <h3>30</h3>
                <p>AUG</p>
            </div>

            <div class="text-container">
                <h4>
                    Sed et persipiatis unde omnis iste natus
                </h4>
                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Aliquid temporibus quos aspernatur
                </p>
            </div>
        </div>

        <div class="calendar-date">
            <div class="date-icon">
                <h3>23</h3>
                <p>NOV</p>
            </div>

            <div class="text-container">
                <h4>
                    Sed et persipiatis unde omnis iste natus
                </h4>
                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Aliquid temporibus quos aspernatur
                </p>
            </div>
        </div>

        <div class="calendar-date">
            <div class="date-icon">
                <h3>23</h3>
                <p>DEC</p>
            </div>

            <div class="text-container">
                <h4>
                    Sed et persipiatis unde omnis iste natus
                </h4>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Aliquid temporibus quos aspernatur
                </p>
            </div>
        </div>
    </div>
</section>
</div>`;

var aboutContent = `<div class="about">
<div class="banner">
    <div class="image-container">
        <div class="caption"><p>OUR HISTORY: </p></div>
    </div>
    <hr>
</div>

<div class="text">
    <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto 
        beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut 
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
        sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat 
        voluptatem. 
    </p>
</div>
</div>`;

var galleryContent = `gallery`;

var blogContent = `blog`;

var contactContent = `contact`;

export function getPageContent(pageID) {
    $("#app").html(eval(pageID));
}