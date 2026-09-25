(function () {
  let flag = false;
  const profileImage = document.getElementById("profile_image");

  profileImage.addEventListener("click", function () {
    if (flag) {
      profileImage.src = "./img/kaguya-baka.png";
      flag = false;
    } else {
      profileImage.src = "./img/kaguya-pink.png";
      flag = true;
    }
  });
})();