(function () {
  let flag = false;
  const profileImage = document.getElementById("profile_image");

  profileImage.addEventListener("click", function () {
    if (flag) {
      profileImage.src = "./img/mafuyu-baka.png";
      flag = false;
    } else {
      profileImage.src = "./img/kaguyabaka.png";
      flag = true;
    }
  });
})();