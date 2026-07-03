(function () {
  let flag = false;
  const profileImage = document.getElementById("profile_image");

  profileImage.addEventListener("click", function () {
    if (flag) {
      profileImage.src = "./img/VRChat_2026-05-29_19-59-43.183_1920x1080.png";
      flag = false;
    } else {
      profileImage.src = "./img/VRChat_2026-04-20_20-26-52.706_2048x1440.png";
      flag = true;
    }
  });
})();