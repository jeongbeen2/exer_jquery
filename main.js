const hideFunc = () => {
  $(".btn").click(function () {
    $(".hello-text").hide();
  });
};

const overEvent = () => {
  $(".btn").mouseleave(function () {
    $(".hello-text").hide();
  });
};

$(overEvent);
