const detailContent = document.getElementById("detailContent");

const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("id");

/**  get provide by id */
const getProfileDetailById = `https://fa.bdtechnologies.ch/api/v1/profiles/${postId}`;

fetch(getProfileDetailById)
  .then((response) => response.json())
  .then((post) => {
    /** detail section */
    detailContent.innerHTML = `
    <div>

    <nav class="navigation">
    
    <ul class="profile-navbar">
      <li>
        <span><img src="/images/home.png" alt="home" width="16" /></span>
        <span class="font-14"> <a href="/">Home</a> </span>
      </li>
      <li>
        <span><img src="/images/people.png" alt="profile" width="16" /></span>
        <span class="font-14"> <a href="/">Profiles</a> </span>
      </li>
      <li>
        <span><img src="/images/star.png" alt="star" width="16" /></span>
        <span class="font-14"> Favourites </span>
      </li>
      <li>
        <span><img src="/images/heart.png" alt="heart" width="16" /></span>
        <span class="font-14">My Matches</span>
      </li>
      <li>
        <span><img src="/images/mail.png" alt="mail" width="16" /></span>
        <span class="font-14"> Mailbox</span>
      </li>
      <li>
        <span><img src="/images/credit.png" alt="credit" width="16" /></span>
        <span class="font-14">Buy credits</span>
      </li>
      
    </ul>
    <div class="responsive-icon" onclick="toggleElement()">
      <span><img src="/images/menu.png" alt="star" width="16" /></span>
      </div>
    
  </nav>
  
  <div class="profile-filter">
      <div>
          <label for="Search" class="mt-10 font-14"><b>Search:</b></label>
            <p class="profile-input"><input type="checkbox" name="gender" />Man</p>
            <p class="profile-input">
              <input type="checkbox" name="gender" />Woman
            </p>
    </div>
    <div>
    <label for="Age" class="font-14"><b>Age:</b></label>
    <p class="profile-text-input">
              <select name="Age" id="age">
                <option value="18">18</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
                <option value="32">32</option>
                <option value="33">33</option>
                <option value="34">34</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option> 
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
              </select>
            </p>
            <p class="profile-input">
              <input type="checkbox" name="picture" />With pic
            </p>

            </div>
            
          </div>

          <div>
            <p class="profile-heading">
              <span><img src="/images/user.png" alt="profile" /></span>
              <span> Profile of ${post.name}</span>
            </p>
            <hr />
          </div>


          <section class="profile-main-wrapper"> 

          <div>
              <div class="profile-wrapper">
                <div>
                  <img
                    src=${post.avatar}
                    alt="profile"
                    width="200"
                    height="200"
                  />
                </div>
                <div class="profile-action">
                  <button>❤️ Flirt</button>
                  <button>🎁 Gift</button>
                  <button>👁️ Wink</button>
                </div>
              </div>
            </div>
            <div class="profile-right-wrapper">
            <div>
              <div class="table-container">
                <table>
                <thead>
                  <tr>
                    <td class="font-14">Age:</td>
                    <td class="font-14">Status:</td>
                    <td class="font-14">Looking for gender:</td>
                    <td class="font-14">City:</td>
                    <td class="font-14">Country:</td>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td class="font-14">${post.age}</td>
                    <td class="font-14">${post.relationship_status}</td>
                    <td class="font-14">${post.gender || "Not available"}</td>
                    <td class="font-14">${post.city}</td>
                    <td class="font-14">${post.country || "Not available"}</td>
                  </tr>
                  </tbody>
                </table>
                </div>
              </div>
              <div class="profile-message-section">
                <p>h
                  <b class="font-14">
                    Do you like profile name ? Break the ice! send ger a message
                    Now!
                  </b>
                </p>
                <div>
                  <textarea cols="135" rows="10"></textarea>
                </div>
                <p class="profile-opening font-14">See all opening lines</p>
                <div class="profile-info-action">
                  <div>
                    <label class="profile-emoji">😃</label>
                    <label class="profile-file font-14">
                      <input type="file" hidden />
                      <span><img src="/images/camera.png" alt="profile" /></span>
                      Add photo (optional)
                    </label>
                  </div>
                  <div class="send-btn-wrapper">
                    <button class="profile-emoji send-btn"> 
                    <span><img src="/images/mail.png" alt="profile" width="16" />
                   </span> <span class="send-btn-text">Send message</span></button>
                  </div>
                </div>
              </div>
              <div class="profile-about">
                <h4 class="font-14">
                  <span><img src="/images/user.png" alt="profile" /></span>About me
                </h4>
                <p class="profile-opening font-14">
                  I am looking Mr. Fucker.I can be shy at first and it can take a
                  while to warm me up.I love watching xxx movies, walking & fucking
                  in the park.If you can handle my pussy, then message me soon .
                </p>
              </div>
              <div class="profile-moreInfo font-14">
                <h4 class="profile-opening">
                  <span><img src="/images/user.png" alt="profile" /></span>More info
                </h4>
                <div class="profile-info">
                  <div>
                    <table>
                      <tr>
                        <td>Plays safe:</td>
                        <td>No</td>
                      </tr>
                      <tr>
                        <td>Body type:</td>
                        <td>Slim</td>
                      </tr>
                      <tr>
                        <td>Piercing:</td>
                        <td>No</td>
                      </tr>
                      <tr>
                        <td>Smoking:</td>
                        <td>Sometimes</td>
                      </tr>
                    </table>
                  </div>
                  <div>
                    <table>
                      <tr>
                        <td>Height:</td>
                        <td>I will tell you later</td>
                      </tr>
                      <tr>
                        <td>Eye color:</td>
                        <td>Blue</td>
                      </tr>
                      <tr>
                        <td>Hair color:</td>
                        <td>Colored</td>
                      </tr>
                      <tr>
                        <td>Drinking:</td>
                        <td>Somtimes</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <div class="report-section">
              <button class="report-btn"> 
              <span>Report</span>
              </button>
              </div>
            </div>
          </section>
      



    </div>
    `;
  })
  .catch((error) => console.error("Error fetching profile detail:", error));

function toggleElement() {
  var element = document.querySelector(".profile-navbar");

  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
