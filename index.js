const cardContainer = document.getElementById("cardContainer");

/** api url */
const getAllProfiles = "https://fa.bdtechnologies.ch/api/v1/profiles";
const postFavoriteUrl = "https://fa.bdtechnologies.ch/api/v1/favorites";

/** get all profile api call */
fetch(getAllProfiles)
  .then((response) => response.json())
  .then((data) => {
    data.profiles.forEach((post) => {
      /** image card  */
      const card = document.createElement("div");
      card.className = "card";

      const img = document.createElement("img");
      img.src = post.avatar;
      img.alt = "Avatar";
      img.width = "245";
      img.height = "240";

      const cardBody = document.createElement("div");
      cardBody.className = "container";

      const name = document.createElement("p");
      name.textContent = `${post.name} (${post.age})`;

      const buttons = document.createElement("p");

      const messageButton = document.createElement("button");
      messageButton.className = "btn";
      messageButton.innerHTML = "<span>✉️</span> Message";

      const flirtButton = document.createElement("button");
      flirtButton.className = "btn";
      flirtButton.innerHTML = "<span>❤️</span> Flirt";

      /** add favourite functionality */
      const starIcon = document.createElement("div");
      starIcon.className = "star";

      const filledStarImg = document.createElement("img");
      filledStarImg.src = "./images/star-active.png";
      filledStarImg.alt = "Star Icon";
      filledStarImg.style.display = "none";

      const outlineStarImg = document.createElement("img");
      outlineStarImg.src = "./images/favourite.png";
      outlineStarImg.alt = "Star Icon";
      outlineStarImg.style.display = "block";

      starIcon.appendChild(filledStarImg);
      starIcon.appendChild(outlineStarImg);

      starIcon.addEventListener("click", (event) => {
        event.stopPropagation();
        toggleStar(starIcon, filledStarImg);
      });

      card.appendChild(starIcon);

      card.addEventListener("click", () => {
        window.location.href = `pages/detail.html?id=${post.id}`;
      });

      function toggleStar(star, filledStarImg) {
        star.classList.toggle("active");
        filledStarImg.style.display = star.classList.contains("active")
          ? "block"
          : "none";
        outlineStarImg.style.display = star.classList.contains("active")
          ? "none"
          : "block";

        /** Add favourite api call */
        if (star.classList.contains("active")) {
          fetch(postFavoriteUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ profileId: post.id }),
          })
            .then((response) => response.json())
            .then((data) => {
              alert("Favorite added successfully");
            })
            .catch((error) => {
              console.error("Error calling API:", error);
            });
        } else {
          /** delete favourite api call */
          fetch(postFavoriteUrl, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ profileId: post.id }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Favorite deleted successfully");
            })
            .catch((error) => {
              console.error("Error calling API:", error);
            });
        }
      }

      card.appendChild(starIcon);
      cardContainer.appendChild(card);

      buttons.appendChild(messageButton);
      buttons.appendChild(flirtButton);

      cardBody.appendChild(name);
      cardBody.appendChild(buttons);

      card.appendChild(img);
      card.appendChild(cardBody);

      cardContainer.appendChild(card);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));
