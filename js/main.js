let options1 = {
    // The radius of the arc
    radius: 80,

    // The padding on the top and bottom of the gauge
    paddingX: 20,

    // The padding on the left and right of the gauge
    paddingY: 20,

    // The width of the gauge itseld
    gaugeWidth: 30,

    // The fill of the gauge, this can be a solid color or a gradient
    fill: '0-#1cb42f:0-#fdbe37:50-#fa4133:100',

    // The fill of the gauge background, this can be a solid color or a gradient
    gaugeBackground: '#f4f4f4',

    // The fill of the canvas, this can be a solid color or a gradient
    background: '#fff',

    // Show or hide the needle, 
    // if true the value label shows half of the range
    // if false the value label shows the value
    showNeedle: false,

    // The speed of the animation in miliseconds
    animationSpeed: 900,

    // The minimum value of the gauge
    min: 0,

    // The maximum value of the gauge
    max: 100,

    // The actual value of the gauge
    value: 77,

    // The label that indicates the value
    valueLabel: {
        // show or hide this label
        display: true,

        // The font family of this label
        fontFamily: 'gilroy- bold',

        // The font color of this label
        fontColor: '#09C3FF',

        // Integer of The font size of this label (without px)
        fontSize: 20,

        // font weight of this label

        // The font weight of this label
        fontWeight: 'normal'
    },

    title: {

        // show or hide this label
        display: true,

        // String the value of the title
        value: '',

        // The font family of this label
        fontFamily: 'Arial',

        // The font color of this label
        fontColor: '#000',

        // Integer of The font size of this label (without px)
        fontSize: 20,

        // The font weight of this label
        fontWeight: 'normal'
    },
    label: {

        // show or hide this label
        display: false,

        // The value of the left (minimum) label
        left: 'Low',

        // The value of the right (maximum) label
        right: 'High',

        // The font family of this label
        fontFamily: 'Arial',

        // The font color of this label
        fontColor: '#000',

        // Integer of The font size of this label (without px)
        fontSize: 12,

        // The font weight of this label
        fontWeight: 'normal'
    }
}

let options2 = {
    // The radius of the arc
    radius: 80,

    // The padding on the top and bottom of the gauge
    paddingX: 20,

    // The padding on the left and right of the gauge
    paddingY: 20,

    // The width of the gauge itseld
    gaugeWidth: 30,

    // The fill of the gauge, this can be a solid color or a gradient
    fill: '0-#1cb42f:0-#fdbe37:50-#fa4133:100',

    // The fill of the gauge background, this can be a solid color or a gradient
    gaugeBackground: '#f4f4f4',

    // The fill of the canvas, this can be a solid color or a gradient
    background: '#fff',

    // Show or hide the needle, 
    // if true the value label shows half of the range
    // if false the value label shows the value
    showNeedle: false,

    // The speed of the animation in miliseconds
    animationSpeed: 900,

    // The minimum value of the gauge
    min: 0,

    // The maximum value of the gauge
    max: 100,

    // The actual value of the gauge
    value: 93,

    // The label that indicates the value
    valueLabel: {
        // show or hide this label
        display: true,

        // The font family of this label
        fontFamily: 'gilroy- bold',

        // The font color of this label
        fontColor: '#09C3FF',

        // Integer of The font size of this label (without px)
        fontSize: 20,

        // font weight of this label

        // The font weight of this label
        fontWeight: 'normal'
    },

    title: {

        // show or hide this label
        display: true,

        // String the value of the title
        value: '',

        // The font family of this label
        fontFamily: 'Arial',

        // The font color of this label
        fontColor: '#000',

        // Integer of The font size of this label (without px)
        fontSize: 20,

        // The font weight of this label
        fontWeight: 'normal'
    },
    label: {

        // show or hide this label
        display: false,

        // The value of the left (minimum) label
        left: 'Low',

        // The value of the right (maximum) label
        right: 'High',

        // The font family of this label
        fontFamily: 'Arial',

        // The font color of this label
        fontColor: '#000',

        // Integer of The font size of this label (without px)
        fontSize: 12,

        // The font weight of this label
        fontWeight: 'normal'
    }
}
$('.gauge1').kumaGauge(options1);
$('.gauge2').kumaGauge(options2);

// $('.gauge__value').text(options1.value);



// var songs = {
//     "Mon": 80,
//     "Tues": 40,
//     "Wed": 60,
//     "Thu": 80,
//     "Fri": 40,
//     "Sat": 60,
// };

// $('.example').graphiq({
//     data: songs,
//     colorLine: "#d3a2ef",
//     colorDot: "#c3ecf7",
//     colorXGrid: "#7f7f7f",
//     colorYGrid: "#7f7f7f",
//     colorLabels: "#FFFFFF",
//     colorUnits: "#FFFFFF",
//     colorRange: "#FFFFFF",
//     colorFill: "#533c68",
//     colorDotStroke: "#FFFFFF",
//     dotStrokeWeight: 0,
//     fillOpacity: 0.25,
//     rangeOpacity: 0.5,
//     dotRadius: 3,
//     lineWeight: 2,
//     yLines: true,
//     dots: true,
//     xLines: true,
//     xLineCount: 5,
//     fill: true,
//     // height: 100,
//     fluidParent: null
// });


var myData1 = [
    [5, 51, 59, 92, 84, 62, 73, 100]
]
var myData2 = [
    [15, 11, 29, 92, 48, 46, 75, 95]
]

var myData3 = [
    [15, 61, 52, 62, 94, 32, 53, 80]
]
var myData4 = [
    [65, 21, 19, 92, 78, 26, 95, 25]
]

$('.Absolute').blueberryChart({
    chartData: myData1,
    // shows lines
    showLines: true,

    // shows dots
    showDots: true,

    // an array of line colors
    lineColors: ['#FF5252', '#777777']
});
$('.Adjusted').blueberryChart({
    chartData: myData2,
    // shows lines
    showLines: true,

    // shows dots
    showDots: true,

    // an array of line colors
    lineColors: ['#FF5252', '#777777']
});


$('.Communication').blueberryChart({
    chartData: myData3,
    // shows lines
    showLines: true,

    // shows dots
    showDots: true,

    // an array of line colors
    lineColors: ['#FF5252', '#777777']
});


$('.Crisis').blueberryChart({
    chartData: myData4,
    // shows lines
    showLines: true,

    // shows dots
    showDots: true,

    // an array of line colors
    lineColors: ['#FF5252', '#777777']
});

$('.btn-outline-info').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    if ($(this).hasClass('AdjustedBtn')) {
        $('.Absolute').hide()
        $('.Adjusted').show()
    }
    else if ($(this).hasClass('AbsoluteBtn')) {
        $('.Adjusted').hide()
        $('.Absolute').show()
    }
    else if ($(this).hasClass('CommunicationBtn')) {
        $('.Crisis').hide()
        $('.Communication').show()
    }
    else if ($(this).hasClass('CrisisBtn')) {
        $('.Communication').hide()
        $('.Crisis').show()
    }
})

$('.btn-menu').click(function () {
    $('.col-lg-2.py-3.bg-info.leftSidebar, .menu-bg').addClass('active')
    $('body, html').css('overflow-y', 'hidden')
})
$('.menu-bg').click(function () {
    $('.col-lg-2.py-3.bg-info.leftSidebar, .menu-bg').removeClass('active')
    $('body, html').css('overflow-y', 'scroll')
})