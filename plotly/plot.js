
let barHeight = 1

var barWidth = 1.2 *1000*3600*24

let labels = ["Submission Created", "Offer Made", "Offer Accepted", "Campaign Created","Campaign Completed","Campaign Activated","Campaign Renewed","Campaign Renewed"]
colors = {
    "Submission Created" : "#909CC2", 
    "Offer Made" : "#084887", 
    "Offer Accepted" : "#F58A07", 
    "Campaign Created" : "#F9AB55",
    "Campaign Completed" : "#F7F5FB",
    "Campaign Activated" : "#4A2545",
    "Campaign Renewed" : "#824C71",
}


let data = {
            "event" : ["Submission Created", "Offer Made", "Offer Accepted", "Campaign Created","Campaign Completed","Campaign Activated","Campaign Renewed"],
            "date" : ["2021-01-11 20:15:33", "2021-01-24 21:14:05","2021-02-05 3:54:19","2021-02-13 17:32:44","2021-02-19 23:48:09","2021-02-22 6:52:42","2021-03-10 1:20:25"],
            }       

let bars = [
    {
        displayLogo: false,
        x :[],
        y :[],
        type : "bar", 
        marker : {color : []},
        text : [],        
        width : barWidth,
        textfont: {
            family: 'Montserrat',
          },
    }
]


for (let i=0; i < data.event.length; i++) {
    bars[0].y.push(1)
    bars[0].x.push(data.date[i])
    bars[0].marker.color.push(colors[data.event[i]])
    bars[0].text.push("       ".concat(data.event[i]))
    
    
}


var layout = {
    title: {
            text: "Campaign Log", x: 0.05,   
            font: {
                family: 'Montserrat, monospace',
                size: 18,
                color : "#FFFFFF"
             },
    },
    paper_bgcolor: '#303133',
    plot_bgcolor: '#303133',
    yaxis : {visible : true, showticklabels : false,
     },
    xaxis: {
        tickfont: {
            family: 'Montserrat',
            size: 10,
            color: "#FFFFFF"
          },
        type: 'date',
        range: [Math.min(data.date), Math.max(data.date)], // this is the range the *selected area* of the slider spans
        rangeslider: {
            bgcolor : "#303133",
            rangemode : "normal",
            yanchor : "top",
            borderwidth : "1",
            bordercolor : "#696969",
            yaxis: {
                rangemode: "fixed",
            },
            
        }},


  };
    

  
Plotly.newPlot('myDiv', bars, layout, {displayModeBar: false});
  
var gd = document.getElementById("myDiv");

gd.on("plotly_relayout", function() {
    barWidth = parseInt((Date.parse(gd.layout.xaxis.range[1]) - Date.parse(gd.layout.xaxis.range[0])) /50)

    var update = {
        width: barWidth
    }

    Plotly.restyle(myDiv, update, [0])
    
});
