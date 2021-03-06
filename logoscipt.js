        $(document).ready(function () {
            var logoset = [
                'enm',
                'enr',
                'gcio',
                'cio',
                'cioasia',
                'cwsg',
                'cwmy',
                'cwph',
                '3rmedia',
                'mis',
                'pinpoint',
                'cio100',
                'bankit',
                'mistech',
                'mtechdata',
                'mtechsecure',
                'mtechcloud',
                'mtechhk',
                'mislog',
                'mismfg'
    ];

            var html = "";

            for (var a in logoset) {
                html += "<div class=\"boxcontainer\">\
            <div class=\"small\"><img src=\"http://www.execnetworks.com/repo/corplogo/" + logoset[a] + ".svg\" alt=\"\"></div>\
            <div class=\"big clearfix\">\
                <div class=\"bigimagecontainer\">\
                    <img class=\"logoImage\" src=\"http://www.execnetworks.com/repo/corplogo/" + logoset[a] + ".svg\" alt=\"\"></div>\
                <div class=\"clipMessage\">\
                    <p></p>\
                </div>\
                <div class=\"logoFormatBox clearfix\">\
                    <a class=\"animated action\" href=\"http://www.execnetworks.com/repo/corplogo/" + logoset[a] + "@low.jpg\" download>jpg low</a>\
                    <a class=\"animated action\" href=\"http://www.execnetworks.com/repo/corplogo/" + logoset[a] + "@med.jpg\" download>jpg med</a>\
                    <a class=\"animated action\" href=\"http://www.execnetworks.com/repo/corplogo/" + logoset[a] + "@med.jpg\" download>jpg high</a>\
                    <div class=\"spacer\"></div>\
                    <div class=\"clipMessage2\">\
                        <p></p>\
                    </div>\
                    <a class=\"animated action\" href=\"http://www.execnetworks.com/repo/corplogo/" + logoset[a] + "@low.png\" download>png low</a>\
                    <a class=\"animated action\" href=\"http://www.execnetworks.com/repo/corplogo/" + logoset[a] + "@high.png\" download>png high</a>\
                    <a class=\"animated action\" href=\"http://www.execnetworks.com/repo/corplogo/" + logoset[a] + ".svg\" download>ai/svg/eps</a>\
                </div>\
            </div>\
        </div>";
            }

            $('.wrapper').append(html);
        });
