$("#teleport-btn").click(() => {
    // if ($(".input-left").val() !== "") {
    //     let left = $(".input-left").val();
    //     $(".input-right").val(left);
    //     $(".input-left").val("")
    // } else {
    //     let right = $(".input-right").val();
    //     $(".input-left").val(right);
    //     $(".input-right").val("")
    // }
    let temp = $(".input-right").val();
    $(".input-right").val($(".input-left").val());
    $(".input-left").val(temp)
});