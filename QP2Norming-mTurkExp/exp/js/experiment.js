function make_slides(f) {
  var   slides = {};

  slides.i0 = slide({
     name : "i0",
     start: function() {
      exp.startT = Date.now();
     }
  });

  slides.instructions = slide({
    name : "instructions",
         start : function() {
     	var inst0 = ""
     	var task = ""
     	var example = ""
    	if (exp.block == "dem") {
    		group = "College Democrats Club"
    		party = "The Democratic Party"
    		//inst0 = inst0 + "Imagine a meeting of the "+ group + " at a university campus."
    		}
    	else {
    		group = "College Republicans Club"
    		party = "The Republican Party"
    		//inst0 = inst0 + "Imagine a meeting of the " + group + " at a university campus."
    		}
    	inst0=inst0+ "Imagine a meeting of the " + group + " at a university campus." 
    	example="<i><b>"+example+party+ " is a beacon of hope for the American people.</i></b>"
    	task = "<i>" + task + "How likely is a member of the " + group + " to agree with this statement?</i>"  
    	$("#inst0").html(inst0);
    	$("#task").html(task);
    	$("#example").html(example);

    	
    	    	
    },
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });


  slides.instructions1 = slide({
    name : "instructions1",
    start : function() {
    $('.bar').css('width', ( (100*(exp.phase)/exp.nQs) + "%"));  
    $(document).ready(function(){
    	$(this).scrollTop(0);
		});
      	
    	var inst1 = "";
    	//console.log(block_order)
    	//console.log("instructions say")
    	//console.log(exp.block)
    	if (exp.block == "dem") {
    		group = "College Democrats Club"
    		
    	} else {
    		group = "College Republicans Club"
    		    }
    	inst1 = inst1 + "Imagine a meeting of the " + group + " at a university campus. How likely is a member of this club to agree with the following statements?" 	
    	$("#inst1").html(inst1);
    },
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  }); 
     
  slides.block1 = slide({
    name : "block1",
    present : exp.stims_block1,
    start : function() {
      $(".err").hide();
    },
    present_handle : function(stim) {
    
    $('.bar').css('width', ( (100*(exp.phase)/exp.nQs) + "%"));    
    $(document).ready(function(){
    	$(this).scrollTop(0);
	});	    	    
        this.stim = stim;
      
    	this.stim.trial_start = Date.now();      
        $(".err").hide();    	
	  this.init_sliders();
      exp.sliderPost = null;	 
      //console.log(this.stim); 
          	 
	  //var utterance = "<b>Person 1: </b>" + this.stim.complement
      //$(".utt1").html(utterance); 
      
      //console.log(this.stim.block);
	  			
	  		//trials[tcounter].complement[0].toUpperCase() + trials[tcounter].complement.substring(1)	
	  		var compProp = "<b>"+this.stim.complement[0].toUpperCase()+ this.stim.complement.substring(1)+".</b>";
	  		var question = compProp + "<br><br><br>How likely is a member of the " + group + " to agree with this statement?";
	  		//"How likely is it that a member of the" + group + " believes this?"; 
		//$(".proposition").html(this.stim.complement);	
	  $(".question").html(question);	  
    },
      
    button : function() {
    	//console.log(exp.sliderPost);
      if (exp.sliderPost != null) {
        this.log_responses();
        _stream.apply(this); //use exp.go() if and only if there is no "present" data.
      } else {
        $(".err").show();
      }
    },
    init_sliders : function() {
      utils.make_slider("#single_slider", function(event, ui) {
        exp.sliderPost = ui.value;
      });
    },


    log_responses : function() {
      exp.data_trials.push({
      "socCond" : exp.block,
      "overallList": exp.overallList,
   	  "slide_number_in_experiment" : exp.phase,
   	  "list": this.stim.list, 
   	  "itemID": this.stim.id,  
   	   "item_orientation": this.stim.idorientation,
   	   "orientation": this.stim.orientation,	 
   	   "complement": this.stim.complement, 
   	   "complementType": this.stim.complementType,
   	   "topic": this.stim.topic,
   	   //"speakerName": this.stim.speakerName,
   	   //"speakerGender": this.stim.speakerGender,
       "response" : exp.sliderPost,
       "rt" : Date.now() - this.stim.trial_start
      });
    }
  }
  ); 



slides.questionaire =  slide({
 
    name : "questionaire",
	
	// polSlider_init : function(){
// 		this.init_sliders();
//       	exp.sliderPost = null;
// 		},
// 	button : function() {
//     	console.log(exp.sliderPost);
//       if (exp.sliderPost != null) {
//         this.log_responses();
//         _stream.apply(this); //use exp.go() if and only if there is no "present" data.
//       } 
//     },
//     init_sliders : function() {
//       utils.make_slider("#single_slider", function(event, ui) {
//         exp.sliderPost = ui.value;
//       });
//     },
// 	
	
	
	
	submit : function(e){
      //if (e.preventDefault) e.preventDefault(); // I don't know what this means.

      exp.subj_data = {
        language : $("#language").val(),
//        enjoyment : $("#enjoyment").val(),
//        asses : $('input[name="assess"]:checked').val(),
        american : $('input[name="ame"]:checked').val(),
        politics : $('input[name="pol"]:checked').val(),
        
        party : $('input[name="party"]:checked').val(),
        otherParty : $("#otherParty").val(),
        //race: getCheckedBoxes("race"),
    	//race:   document.querySelectorAll('input[name=race]:checked'),
    	race_white: $('input[name="white"]:checked').val(),
    	race_black: $('input[name="black"]:checked').val(),
    	race_latino: $('input[name="latino"]:checked').val(),
    	race_asian: $('input[name="asian"]:checked').val(),
    	race_native: $('input[name="native"]:checked').val(),
    	race_hawaiian: $('input[name="hawaiian"]:checked').val(),
    	race_otherRaceCheck: $('input[name="otherRaceCheck"]:checked').val(),
        race_otherRaceText : $("#otherRaceText").val(),
        age : $("#age").val(),
        gender : $("#gender").val(),
        education : $("#education").val(),
        income : $("#income").val(),
       // occupation : $("#occupation").val(),
        comments : $("#comments").val(),
      };
      

      
      exp.go(); //use exp.go() if and only if there is no "present" data.
         // $(document).ready(function(){
    	//$(this).scrollTop(0);
	//});	 
    }
  });

  slides.finished = slide({
    name : "finished",
    start : function() {
      exp.data= {
          "trials" : exp.data_trials,
          "catch_trials" : exp.catch_trials,
          "system" : exp.system,
          "condition" : exp.condition,
          "subject_information" : exp.subj_data,
          "time_in_minutes" : (Date.now() - exp.startT)/60000
      };
      setTimeout(function() {turk.submit(exp.data);}, 1000);
    }
  });

  return slides;
}

/// init ///
function init() {

  function makeStim(i) {
    //get item
    var item = exp.all_stims[i];
    //console.log(item)
    var question = item.prompt;
    //console.log(question)
    return {
    "list": item.list, 
    "id": item.id,
    "idorientation": item.idCondition,   

	  "name1": item.speakerName,
	 	"orientation": item.orientation,	  
   	   "topic": item.topic,
   	   "complement": item.complement,
   	   "complementType": item.complementType,
   	   //"speakerName": item.speakerName,
   	   //"speakerGender": item.speakerGender,  	   
    }
  }
  
  

//var allLists = _.shuffle(["Dem-1","Dem-2","Rep-1","Rep-2"])
var allLists = _.shuffle(["Rep-2"])
var selectedList = allLists[0]
console.log("list that was selected:")
console.log(selectedList)

if (selectedList == "Dem-1"){
	exp.all_stims = _.shuffle(list1)
	exp.block = "dem"
	
	}
else if (selectedList == "Dem-2"){
	exp.all_stims = _.shuffle(list2)
	exp.block = "dem"
	}
else if (selectedList == "Rep-1"){
	exp.all_stims = _.shuffle(list1)
	exp.block = "rep"
	}
else {
	exp.all_stims = _.shuffle(list2)
	exp.block = "rep"
	}
exp.overallList = selectedList
//console.log("overalList")
//console.log(exp.overallList)
  //console.log(exp.all_stims.length)
exp.stims_block1 = []
  //exp.stims_block2 = []
//console.log("block name")
//console.log(exp.block)
for (var i=0; i<exp.all_stims.length; i++) {
  var stim = makeStim(i);
  	//console.log(stim)
	exp.stims_block1.push(jQuery.extend(true, {}, stim));
	//exp.stims_block2.push(jQuery.extend(true, {}, stim));	
  }  
  
  
//console.log(exp.stims_block1);
  exp.trials = [];
  exp.catch_trials = [];
  exp.condition = {}; //can randomize between subject conditions here
  exp.system = {
      Browser : BrowserDetect.browser,
      OS : BrowserDetect.OS,
      screenH: screen.height,
      screenUH: exp.height,
      screenW: screen.width,
      screenUW: exp.width
    };
  //blocks of the experiment:
  exp.structure=["i0", "instructions", "instructions1", "block1", 'questionaire', 'finished'];
  
  exp.data_trials = [];
  //make corresponding slides:
  exp.slides = make_slides(exp);

//  exp.nQs = utils.get_exp_length(); //this does not work if there are stacks of stims (but does work for an experiment with this structure)
                    //relies on structure and slides being defined
                    
   exp.nQs = 3 + 19 + 1; 
  $(".nQs").html(exp.nQs);

  $('.slide').hide(); //hide everything

  //make sure turkers have accepted HIT (or you're not in mturk)
  $("#start_button").click(function() {
    if (turk.previewMode) {
      $("#mustaccept").show();
    } else {
      $("#start_button").click(function() {$("#mustaccept").show();});
      exp.go();
    }
  });

  exp.go(); //show first slide
}