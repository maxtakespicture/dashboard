var tabledata = [
    { id: 1, name: 'Gorskey McHoover', city: 'Cape Rown', color:'Fuchsia'},
    { id: 2, name: 'Lilla Westerbedford', city: 'Honolulu', color:'Veridian'},
    { id: 3, name: 'Rorinald Oberunterlaut', city: 'Vienna', color:'Jasmine'},
    { id: 4, name: 'Zeezee Harringway', city: 'London', color:'Tangerine'},
    { id: 5, name: 'Gleeyoria Cornaldson', city: 'Tokyo', color:'Cyan'}
];

var newsarticle = [
    { h: 'HOLY COW', copy: 'This is the copy of the first article. Sesame snaps cupcake bonbon apple pie pie jelly-o tiramisu gummies. Dessert topping gummi bears gingerbread sugar plum. Jelly beans sweet sweet. Candy gummies cotton candy sugar plum.'},
    { h: 'LOOK AT THIS', copy: 'This is the copy of the second article. Sesame snaps cupcake bonbon apple pie pie jelly-o tiramisu gummies. Dessert topping gummi bears gingerbread sugar plum. Jelly beans sweet sweet. Candy gummies cotton candy sugar plum.'},
    { h: 'INCREDIBLE', copy: 'This is the copy of the third article. Sesame snaps cupcake bonbon apple pie pie jelly-o tiramisu gummies. Dessert topping gummi bears gingerbread sugar plum. Jelly beans sweet sweet. Candy gummies cotton candy sugar plum.'}
];

var app = new Vue ({
    el: "#app",
    data: {
        username: 'User',
        checked: false,
        tabledata: tabledata,
        newsarticle: newsarticle
    }
});


//-----------------JQUERY-----------------

$( document ).ready(function() {
    // Smooth scroll    
        $('.nav a').click(function (e) {
            var linkHref = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(linkHref).offset().top - 200
            }, 800);
            e.preventDefault();
        });
    
    // Click user show namebox
        $('#user').click(function(){
            console.log('clicky');
            $('.namebox').slideToggle(200);
        });
    
        $('.namebox').mouseleave(function(){
            console.log('whoops');
            $('.namebox').hide(200);
        });
        
    console.log('done');
});
     

//-----------------CHART 1-----------------

new Chartist.Line('.ct-chart1', {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  series: [
    [12, 9, 7, 8, 5],
    [2, 1, 3.5, 7, 3],
    [1, 3, 4, 5, 6]
  ]
}, {
  fullWidth: true,
  chartPadding: {
    right: 40
  }
});

//-----------------CHART 2-----------------

var data = {
  series: [5, 3, 4]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('.ct-chart2', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});