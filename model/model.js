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

var aboutContent = `hi`;

var galleryContent = `gallery`;

var blogContent = `blog`;

var contactContent = `contact`;

export function getPageContent(pageID) {
    $("#app").html(eval(pageID));
}