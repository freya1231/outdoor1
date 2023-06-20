if(window.location.href.includes('/camp/'||'/blogs/'||'/cycle/'||'/hike/'||'/stay/'||'/water/'||'/wellness/'||'/wildflife/')) 
{

let appHeader1 = `
      <div class="title1"><h1>Outdoor micro-holidays from London</h1></div>
      <nav>
      <div class="menu-area">
    <ul>
        <li><a href="../index.html">Home</a></li>
        <li><a href="../activities.html">Activities</a>
            <ul class="dropdown-1">
                <li><a href="../hike/hike.html">Walks and hiking</a>
                        <ul class="dropdown-2">
                            <li><a href="../hike/day-hikes.html">Day-trip walks and hikes</a></li>
                            <li><a href="../hike/overnight-hikes.html">Overnight hikes</a></li>
                            <li><a href="../outdoor1/hike/London-walks.html">London based walks</a></li>
                        </ul>
                </li>
                <li><a href="../cycle/cycle.html">Cycling</a>
                        <ul class="dropdown-2">
                            <li><a href="../cycle/road-biking.html">Road biking</a></li>
                            <li><a href="../cycle/gravel-biking.html">Gravel biking</a></li>
                            <li><a href="../cycle/mountain-biking.html">Mountain biking</a></li>
                            <li><a href="#">Bike-packing trips</a></li>
                            <li><a href="../cycle/cycling-gear.html">Gear advice</a></li>
                        </ul>
                </li>
                <li><a href="../camp/camp.html">Camping</a>
                        <ul class="dropdown-2">
                            <li><a href="../camp/coastal-camping.html">Beachside</a></li>
                            <li><a href="../camp/forest-camping.html">Forest</a></li>
                            <li><a href="../camp/wild-camping.html">Wild camping</a></li>
                            <li><a href="../camp/glamping.html">Glamping</a></li>
                        </ul>
                </li>
                
                <li><a href="../water/water.html">Water activities</a>
                        <ul class="dropdown-2">
                            <li><a href="../water/London-swimming.html">Swim</a></li>
                            <li><a href="../water/kayak-canoe.html">Kayak & canoe</a></li>
                            <li><a href="#">Sailing</a></li>
                        </ul>
                </li>
                
                <li><a href="../stays/nature-stays.html">Nature stays</a>
                        <ul class="dropdown-2">
                            <li><a href="../stay/x1.html">Shepherd's huts</a></li>
                            <li><a href="../stay/x2.html">Cottages</a></li>
                            <li><a href="../stay/x3.html">Lodges</a></li>
                            <li><a href="../stay/x4.html">Festivals</a></li>
                        </ul>
                </li>
                
                <li><a href="../wildlife/wildlife.html">Wildlife watching</a>
                        <ul class="dropdown-2">
                            <li><a href="#">Flora</a></li>
                            <li><a href="#">Fauna</a></li>
                        </ul>
                </li>
                
                <li><a href="#">Wellness</a>
                        <ul class="dropdown-2">
                            <li><a href="../wellness/yoga.html">Yoga</a></li>
                            <li><a href="#">Breathwork</a></li>
                        </ul>
                </li>
            </ul>
        </li>
        <li><a href="../#">Blog</a></li>
        <li><a href="../#">Gear</a></li>
        <li><a href="../about.html">About</a></li>
        <li><a href="../#">Contact</a></li>
    </ul>
</nav>
`;
document.getElementById("app-header1").innerHTML = appHeader1;
} 
else 
{

    let appHeader1 = `
    <div class="title1"><h1>Outdoor micro-holidays from London</h1></div>
        <nav>
        <div class="menu-area">
      <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="activities.html">Activities</a>
              <ul class="dropdown-1">
                  <li><a href="./hike/hike.html">Walks and hiking</a>
                          <ul class="dropdown-2">
                              <li><a href="./hike/day-hikes.html">Day-trip walks and hikes</a></li>
                              <li><a href="./hike/overnight-hikes.html">Overnight hikes</a></li>
                              <li><a href="./outdoor1/hike/London-walks.html">London based walks</a></li>
                          </ul>
                  </li>
                  <li><a href="./cycle/cycle.html">Cycling</a>
                          <ul class="dropdown-2">
                              <li><a href="./cycle/road-biking.html">Road biking</a></li>
                              <li><a href="./cycle/gravel-biking.html">Gravel biking</a></li>
                              <li><a href="./cycle/mountain-biking.html">Mountain biking</a></li>
                              <li><a href="#">Bike-packing trips</a></li>
                              <li><a href="./cycle/cycling-gear.html">Gear advice</a></li>
                          </ul>
                  </li>
                  <li><a href="./camp/camp.html">Camping</a>
                          <ul class="dropdown-2">
                              <li><a href="./camp/coastal-camping.html">Beachside</a></li>
                              <li><a href="./camp/forest-camping.html">Forest</a></li>
                              <li><a href="./camp/wild-camping.html">Wild camping</a></li>
                              <li><a href="./camp/glamping.html">Glamping</a></li>
                          </ul>
                  </li>
                  
                  <li><a href="./water/water.html">Water activities</a>
                          <ul class="dropdown-2">
                              <li><a href="./water/London-swimming.html">Swim</a></li>
                              <li><a href="./water/kayak-canoe.html">Kayak & canoe</a></li>
                              <li><a href="#">Sailing</a></li>
                          </ul>
                  </li>
                  
                  <li><a href="./stays/nature-stays.html">Nature stays</a>
                          <ul class="dropdown-2">
                              <li><a href="./stay/x1.html">Shepherd's huts</a></li>
                              <li><a href="./stay/x2.html">Cottages</a></li>
                              <li><a href="./stay/x3.html">Lodges</a></li>
                              <li><a href="./stay/x4.html">Festivals</a></li>
                          </ul>
                  </li>
                  
                  <li><a href="./wildlife/wildlife.html">Wildlife watching</a>
                          <ul class="dropdown-2">
                              <li><a href="#">Flora</a></li>
                              <li><a href="#">Fauna</a></li>
                          </ul>
                  </li>
                  
                  <li><a href="#">Wellness</a>
                          <ul class="dropdown-2">
                              <li><a href="./wellness/yoga.html">Yoga</a></li>
                              <li><a href="#">Breathwork</a></li>
                          </ul>
                  </li>
              </ul>
          </li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Gear</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="#">Contact</a></li>
      </ul>
  </nav>
  `;

  document.getElementById("app-header1").innerHTML = appHeader1;
}


