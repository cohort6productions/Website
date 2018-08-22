const members = {
    andrewc: ["Andrew Cheung", "https://www.linkedin.com/in/dzinyungandrewcheung/", "https://www.andrew-cheung.com/"],
    andrewl: ["Andrew Law", "https://www.linkedin.com/in/andrewlaw1/", "https://www.andrew-law.com"],
    brad: ["Brad Wong", "https://www.linkedin.com/in/brad-wong-1070b4165/", "https://bwsl.me"],
    harrison: ["Harrison Chan", "https://www.linkedin.com/in/harrixon-chan/", "https://harrixon.stream"],
    ivan: ["Ivan Oung", "https://hk.linkedin.com/in/ivanoung", "https://www.ivanoung.io"],
    jacob: ["Jacob Chan", "https://www.linkedin.com/in/pak-hei-chan-82bba4157/", "https://jacobcph.com"],
    judith: ["Judith Curtit", "https://www.linkedin.com/in/judith-curtit-182b0357/", ""],
    lucas: ["Lucas Ng", "https://www.linkedin.com/in/lucas-ng-008252164/", "https://lucas-ng.com"],
    mangal: ["Mangal Limbu", "https://www.linkedin.com/in/mangal-limbu-05a951111", "https://lazehang.com"],
    parker: ["Parker Chan", "https://www.linkedin.com/in/parker-chan-4b0678166/", "http://www.programmerparker.surge.sh"],
    stephen: ["Stephen Chiang", "https://www.linkedin.com/in/stephen-chiang-31103582/", "https://skhchiang.com"],
    terence: ["Terence So", "https://www.linkedin.com/in/terence-so-453b73165/", "http://www.terenceso.surge.sh"]
}

class ModalFunctions {
    constructor() {
        this.eventListenters();
    }
    eventListenters() {
        var that = this;
        $("#team-member-modal").on("show.bs.modal", function (e) {
            that.openModal(e);
        });

        $("#team-member-modal").on("hide.bs.modal", function () {
            that.closeModal();
        });

        $("body").scrollspy({
            target: ".navbar",
            offset: 0
        });

        $(window).scroll((e) => {
            var fromTop = $(window).scrollTop();
            if (fromTop > 100) {
                $(".navbar").removeClass("transparentNav");
            } else {
                $(".navbar").addClass("transparentNav");
            }
        })
    }
    openModal(e) {

        var name = $(e.relatedTarget).closest("a").data("name");
        var LinkedIn = '<a class="linkedin-link" href="' + members[name][1] + '"><i class="fab fa-linkedin-in"></i>LinkedIn</a>'
        var personalWebsite = '<a class="website-link" href="' + members[name][2] + '"><i class="fas fa-globe-asia"></i>Personal Website</a>'

        setTimeout(function () {

            $("main").addClass("modal-show");
            $("#team-member-modal").addClass("modal-show");

            $(".modal-header #team-member-name").html(members[name][0]);
            $(".modal-body .team-member-icon").attr("class", "team-member-icon icon-" + name);
            $(".modal-body .team-member-icon").addClass("team-member-icon-large");
            $(".modal-body #linkedIn-holder").html(LinkedIn);
            $(".modal-body #website-holder").html(personalWebsite);
            setTimeout(function () {
                $(".modal-dialog").addClass("modal-show");
            }, 200);
        }, 200);
    }
    closeModal() {
        $(".modal-dialog").removeClass("modal-show");

        setTimeout(function () {
            $(".modal-show").removeClass("modal-show");
        }, 200);
    }
}

var modalFunctions = new ModalFunctions();

$(document).ready(() => {

    // nav bar animation
    $("body").mousemove(function(e){
        if (e.clientY <= 50) {
            $(".navbar").slideDown();
        }
        else {
            $(".navbar").slideUp();
        }
    })

    // our-work section
    $(".single-project-btn").on("click", function(){
        // move hr tag
        $(".showing-project").remove();
        $(this).append(`<hr class="showing-project" />`);
        // change banner
        var project = "." + $(this).data("name") + "-banner-web";
        $(".project-banner").addClass("hide-banner");
        $(project).removeClass("hide-banner");
    })

    // generate team-members section
    Object.keys(members).forEach(member => {
        $(".team-members").append(
        `
            <li class="team-member col-lg-4 col-md-12">
                <div class="member-container">
                    <a class="team-member-a" data-name=${member} data-toggle="modal" data-target="#team-member-modal">
                        <div class="team-member-icon icon-${member}">
                            <div class="team-member-overlay">
                                <p>See more</p>
                            </div>
                        </div>
                    </a>
                    <div class="team-member-des">
                        <span class="team-member-name" data-name="${member}">${members[member][0]}</span>
                        <div class="social-links">
                            <a class="website" href=${members[member][2]}></a>
                            <a class="github" href="http://www.google.com"></a>
                            <a class="linkedin" href=${members[member][1]}></a>
                        </div>
                    </div>                    
                </div>
            </li>
        `
        );
    });

    $(".website").append(`<img src="./assets2/image/Team/Social Icons/website.svg" class="team-social-icons" alt="website"/>`)
    $(".github").append(`<img src="./assets2/image/Team/Social Icons/github.svg" class="team-social-icons" alt="github"/>`)
    $(".linkedin").append(`<img src="./assets2/image/Team/Social Icons/linkedin.svg" class="team-social-icons" alt="linkedin"/>`)

});