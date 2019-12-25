

window.onload = function () {

 
    OrgChart.toolbarUI.expandAllIcon = '<img width="32" src=https://cdn.balkan.app/shared/expand.png />';
    OrgChart.toolbarUI.fitIcon = '<img width="32" src=https://cdn.balkan.app/shared/plan.png />';
    OrgChart.toolbarUI.zoomInIcon = '<img width="32" src=https://cdn.balkan.app/shared/zoom-out.png />';
    OrgChart.toolbarUI.zoomOutIcon = '<img width="32" src=https://cdn.balkan.app/shared/zoom-in.png />';    
    OrgChart.toolbarUI.layoutIcon = '<img width="32" src=https://cdn.balkan.app/shared/layout.png />';  
    

   

    
    
    var chart = new OrgChart(document.getElementById("tree"), {
        
            template: "ula",
            toolbar: {
                layout: true,
                zoom: true,
                fit: true,
                expandAll: true
            },
    
            layout: OrgChart.tree,
            align: OrgChart.ORIENTATION,
            nodeBinding: {
                field_0: "Code",
                field_1:"Package",
                field_2: "Side",
                field_3: "LeftUser",
                field_4: "LeftInvest",
                field_5: "RightUser",
                field_6:"RightInvest",
                img_0: "Image"
            },
            collapse: {
                level: 2
            },
            expand: {
                nodes: [2, 4],
                allChildren: true
            },
            // nodes: [
            //     { id: 1, Code: "XVG802121", title: "Chairman and CEO", email: "amber@domain.com", img: "https://cdn.balkan.app/shared/1.jpg" },
            //     { id: 2, pid: 1, Code: "Lexie Cole", title: "QA Lead", email: "ava@domain.com", img: "https://cdn.balkan.app/shared/2.jpg" },
            //     { id: 3, pid: 1, Code: "Janae Barrett", title: "Technical Director", img: "https://cdn.balkan.app/shared/3.jpg" },
            //     { id: 4, pid: 1, Code: "Aaliyah Webb", title: "Manager", email: "jay@domain.com", img: "https://cdn.balkan.app/shared/4.jpg" },
            //     { id: 5, pid: 2, Code: "Elliot Ross", title: "QA", img: "https://cdn.balkan.app/shared/5.jpg" },
            //     { id: 6, pid: 2, Code: "Anahi Gordon", title: "QA", img: "https://cdn.balkan.app/shared/6.jpg" },
            //     { id: 7, pid: 2, Code: "Knox Macias", title: "QA", img: "https://cdn.balkan.app/shared/7.jpg" },
            //     { id: 8, pid: 3, Code: "Nash Ingram", title: ".NET Team Lead", email: "kohen@domain.com", img: "https://cdn.balkan.app/shared/8.jpg" },
            //     { id: 9, pid: 3, Code: "Sage Barnett", title: "JS Team Lead", img: "https://cdn.balkan.app/shared/9.jpg" },
            //     { id: 10, pid: 3, Code: "Alice Gray", title: "Programmer", img: "https://cdn.balkan.app/shared/10.jpg" },
            //     { id: 11, pid: 3, Code: "Anne Ewing", title: "Programmer", img: "https://cdn.balkan.app/shared/11.jpg" },
            //     { id: 12, pid: 3, Code: "Reuben Mcleod", title: "Programmer", img: "https://cdn.balkan.app/shared/12.jpg" },
            //     { id: 13, pid: 3, Code: "Ariel Wiley", title: "Programmer", img: "https://cdn.balkan.app/shared/13.jpg" },
            //     { id: 14, pid: 4, Code: "Lucas West", title: "Marketer", img: "https://cdn.balkan.app/shared/14.jpg" },
            //     { id: 15, pid: 4, Code: "Adan Travis", title: "Designer", img: "https://cdn.balkan.app/shared/15.jpg" },
            //     { id: 16, pid: 4, Code: "Alex Snider", title: "Sales Manager", img: "https://cdn.balkan.app/shared/16.jpg" }
            // ]

             nodes: [
                 {id:2,"Code":"XVG802121","Package":"$500","Side":"Right","LeftUser":"6","LeftInvest":"2000","RightUser":"6","RightInvest":"1000","Image":"/Content/images/logo/chart-bg.png"},
                 {id:4,pid:2,"Code":"XVG621568","Package":"$500","Side":"Left","LeftUser":"3","LeftInvest":"1000","RightUser":"2","RightInvest":"500","Image":"/Content/images/logo/chart-bg.png"},
                 {id:6,pid:4,"Code":"XVG724501","Package":"$500","Side":"Left","LeftUser":"1","LeftInvest":"500","RightUser":"1","RightInvest":"0","Image":"/Content/images/logo/chart-bg.png"},
                 {id:14,pid:6,"Code":"XVG825116","Package":"$500","Side":"Left","LeftUser":"0","LeftInvest":"0","RightUser":"0","RightInvest":"0","Image":"/Content/images/logo/chart-bg.png"},
                 {id:9,pid:6,"Code":"XVG692189","Package":"None","Side":"Right","LeftUser":"0","LeftInvest":"0","RightUser":"0","RightInvest":"0","Image":"/Content/images/logo/chart-bg.png"},
                 {id:5,pid:4,"Code":"XVG275869","Package":"$500","Side":"Right","LeftUser":"0","LeftInvest":"0","RightUser":"1","RightInvest":"0","Image":"/Content/images/logo/chart-bg.png"},
                 {id:10,pid:5,"Code":"XVG708691","Package":"None","Side":"Right","LeftUser":"0","LeftInvest":"0","RightUser":"0","RightInvest":"0","Image":"/Content/images/logo/chart-bg.png"}, 
                 {id:3,pid:2,"Code":"XVG600182","Package":"$500","Side":"Right","LeftUser":"2","LeftInvest":"0","RightUser":"3","RightInvest":"500","Image":"/Content/images/logo/chart-bg.png"},
                 {id:8,pid:3,"Code":"XVG610049","Package":"None","Side":"Left","LeftUser":"1","LeftInvest":"0","RightUser":"0","RightInvest":"0","Image":"/Content/images/logo/chart-bg.png"},
                 {id:11,pid:8,"Code":"XVG679231","Package":"None","Side":"Left","LeftUser":"0","LeftInvest":"0","RightUser":"0","RightInvest":"0","Image":"/Content/images/logo/chart-bg.png"},
                 {id:7,pid:3,"Code":"XVG373344","Package":"None","Side":"Right","LeftUser":"1","LeftInvest":"0","RightUser":"1","RightInvest":"500","Image":"/Content/images/logo/chart-bg.png"},
                 {id:12,pid:7,"Code":"XVG830379","Package":"None","Side":"Left","LeftUser":"0","LeftInvest":"0","RightUser":"0","RightInvest":"0","Image":"/Content/images/logo/chart-bg.png"},
                 {id:13,pid:7,"Code":"XVG910576","Package":"$500","Side":"Right","LeftUser":"0","LeftInvest":"0","RightUser":"0","RightInvest":"0","Image":"/Content/images/logo/chart-bg.png"}
 ]

            
        });
};
