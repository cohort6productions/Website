$(".team-member > a").on("click", function (e) {
    var members = {
        andrewc: ["Andrew Cheung", "https://www.linkedin.com/in/dzinyungandrewcheung/", "https://www.andrew-cheung.com/"],
        andrewl: ["Andrew Law", "https://www.linkedin.com/in/andrewlaw1/", "www.andrew-law.com"],
        brad: ["Brad Wong", "https://www.linkedin.com/in/brad-wong-1070b4165/", "https://bwsl.me"],
        harrison: ["Harrison Chan", "https://www.linkedin.com/in/harrixon-chan/", "https://harrixon.stream"],
        ivan: ["Ivan Oung", "https://hk.linkedin.com/in/ivanoung", "https://www.ivanoung.io"],
        jacob: ["Jacob Chan", "https://www.linkedin.com/in/pak-hei-chan-82bba4157/", "jacobcph.com"],
        lucas: ["Lucas Ng", "https://www.linkedin.com/in/lucas-ng-008252164/", "https://lucas-ng.com"],
        mangal: ["Mangal Limbu", "https://www.linkedin.com/in/mangal-limbu-05a951111", "https://lazehang.com"],
        parker: ["Parker Chan", "https://www.linkedin.com/in/parker-chan-4b0678166/", "www.programmerparker.surge.sh"],
        stephen: ["Stephen Chiang", "https://www.linkedin.com/in/stephen-chiang-31103582/", "https://skhchiang.com"],
        terence: ["Terence So", "https://www.linkedin.com/in/terence-so-453b73165/", "www.terenceso.surge.sh"]
    }

    $("#sidebar").slideUp();
    setTimeout(function () {
        $("main").addClass("modal-show");
        $("#team-member-modal").addClass("modal-show");
        var name = $(e.target).closest("a").data("name");
        $(".modal-header .team-member-icon").addClass(`icon-${name}`);
        $(".modal-header .team-member-name").html(members[name][0]);
        $(".modal-body .linkedin-link").attr("href", members[name][1]);
        $(".modal-body .website-link").attr("href", members[name][2]);
        setTimeout(function () {
            $(".modal-dialog").addClass("modal-show");
        }, 200);
    }, 200);
});

$(".close-modal").on("click", function () {

    var members = [
        "andrewc",
        "andrewl",
        "brad",
        "harrison",
        "ivan",
        "jacob",
        "lucas",
        "mangal",
        "parker",
        "stephen",
        "terence"
    ]
    $(".modal-dialog").removeClass("modal-show");


    setTimeout(function () {
        $(".modal-show").removeClass("modal-show");
        $("#sidebar").slideDown();
    }, 200);

    members.forEach(function (member) {
        $(".modal-header .team-member-icon").removeClass(`icon-${member}`);
    })
});