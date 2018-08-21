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

        $(window).scroll((e)=>{
            var fromTop = $(window).scrollTop();
            if (fromTop > 100) {
                $(".navbar").removeClass("transparentNav");
            } else {
                $(".navbar").addClass("transparentNav");
            }
        })
    }
    openModal(e) {
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
        var name = $(e.relatedTarget).closest("a").data("name");
        var LinkedIn = '<a class="linkedin-link" href="' + members[name][1] + '"><i class="fab fa-linkedin-in"></i>LinkedIn</a>'
        var personalWebsite = '<a class="website-link" href="' + members[name][2] + '"><i class="fas fa-globe-asia"></i>Personal Website</a>'


        setTimeout(function () {

            $("main").addClass("modal-show");
            $("#team-member-modal").addClass("modal-show");

            $(".modal-header #team-member-name").html(members[name][0]);
            $(".modal-body .team-member-icon").attr("class", "team-member-icon icon-" + name);
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