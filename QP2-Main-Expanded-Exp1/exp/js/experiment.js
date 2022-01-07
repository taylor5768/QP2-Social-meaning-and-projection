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
	    $(document).ready(function(){
    	$(this).scrollTop(0);
		});
	var inst0 = ""
	var task = ""
	var example = ""
	if (exp.stims_block1[0].block == "dem") {
		group = "College Democrats Club"
		secondgroup="College Republicans Club"
		party = "The Democratic Party"
		//inst0 = inst0 + "Imagine a meeting of the "+ group + " at a university campus."
		}
	else {
		group = "College Republicans Club"
		secondgroup="College Democrats Club"
		party = "The Republican Party"
		//inst0 = inst0 + "Imagine a meeting of the " + group + " at a university campus."
		}
	inst0=inst0+ "In the first part of the experiment, you'll be asked to imagine a meeting of the " + group + " at a university campus." 
	example="<center>"+example+"Eric, at the " + group + " meeting: "+"<br><i>Hannah came to the meeting today.</i></center>"
	task = "<center>" + task + "Is Eric certain that Hannah came to the meeting today?</center>"  
	inst0block2="In the second part of the experiment, you'll be asked to imagine a meeting of the " + secondgroup +". The members of the " + secondgroup + " are <u><b>not</b></u> the same people who were at the " + group + " meeting. You'll read similar sentences and answer the same type of questions as you did in the first part."

	
	$("#inst0").html(inst0);
	$("#task").html(task);
	$("#example").html(example);
	
    $("#inst0block2").html(inst0block2);	
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
//    	console.log(block_order);
    	if (exp.stims_block1[0].block == "dem") {
    		group="College Democrats Club" 	
    	} else {
    		group="College Republicans Club"
    		}
    	inst1 = inst1 + "Imagine a meeting of the " + group + " at a university campus. Read what different members of the club say and answer the questions." 	
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
      this.stim = stim;
      
    	this.stim.trial_start = Date.now();      
        $(".err").hide();  
         this.init_sliders();
         exp.sliderPost = null;
          	 
       console.log(this.stim);    

	  if (this.stim.block == "dem") {
	  		group="College Democrats Club"
	  		
	  } else {
	  		group="College Republicans Club"

	  	}
	  	
	  	if (this.stim.predicate == "discover") {
    			negation = " didn't "
    	} else {
    		negation = " doesn't "
    		    }
    		    
    	if (this.stim.id == "filler1" || this.stim.id == "filler2"){
    		    //var target= "<table><tr><td><width=400px><dl margin-top=200px><b>" +this.stim.speakerName +":</b></td><td>" + this.stim.complement + ".</dl></td></tr></table>"
				var setup= this.stim.block1_speakerName+ ", at the "+ group + " meeting:<br><br>"
				var target ="<i> "+ this.stim.block1_subjectName+ " " + this.stim.complement + ".</i>"
				var question =  "Is " + this.stim.block1_speakerName + " certain that " + this.stim.block1_subjectName + " " +this.stim.complement +"?";

    			
    		} else {
    		    //var target= "<table><tr><td><width=400px><dl margin-top=200px><b>" +this.stim.speakerName +":</b></td><td>" +this.stim.subjectName + negation + this.stim.predicate + " that " + this.stim.complement + ".</dl></td></tr></table>"
				var setup = this.stim.block1_speakerName+ ", at the "+ group + " meeting:<br><br>"
				var target= "<i>" + this.stim.block1_subjectName + negation + this.stim.predicate + " that " + this.stim.complement + ".</i>"
				var question =  "Is " + this.stim.block1_speakerName + " certain that " + this.stim.complement +"?";
    	}	    

	  $(".utt1").html(setup);
	  $(".utt2").html(target);	
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
      "block" : "block1",
      "socCond" : this.stim.block,    
   	  "slide_number_in_experiment" : exp.phase,
   	  "list": this.stim.list, 
   	  "itemID": this.stim.id,  
   	   "item_orientation": this.stim.orientation,
   	   "complement": this.stim.complement,
   	   "complementType":this.stim.complementType,
   	   "topic":this.stim.topic,
   	    "predicate": this.stim.predicate,
   	   "speakerName": this.stim.block1_speakerName,
   	   "speakerGender": this.stim.block1_speakerGender,
   	  "subjectName" : this.stim.block1_subjectName,
   	  "subjectGender" : this.stim.block1_subjectGender,
      "response": exp.sliderPost,
      "rt" : Date.now() - this.stim.trial_start
      });
    }
  }
  ); 
  
  slides.instructions2 = slide({
    name : "instructions2",
    start : function() {
    $('.bar').css('width', ( (100*(exp.phase)/exp.nQs) + "%"));    	    	
    	var inst2 = "That was the first half! ";
    	if (exp.stims_block2[0].block == "dem") {
    		group="College Democrats Club" 
    		firstblockgroup="College Republicans Club"	
    	} else {
    		group="College Republicans Club"
    		firstblockgroup="College Democrats Club"
    		}
    	inst2 = inst2 + "Now imagine a meeting of the " + group + " at a university campus. The club members at this meeting are <u><b>not</b></u> the same people who were at the meeting you were asked to imagine in the first part of the experiment. Read what different members of the " +group +" say and answer the questions." 	
    	$("#inst2").html(inst2);
    		
    		    },
    button : function() {
      exp.go(); //use exp.go() if and only if there is no "present" data.
    }
  });   
  
    slides.block2 = slide({
    name : "block2",
    present : exp.stims_block2,
    start : function() {
      $(".err").hide();
    },
    present_handle : function(stim) {
    
    $('.bar').css('width', ( (100*(exp.phase)/exp.nQs) + "%"));    	    	    
      this.stim = stim;
      
    	this.stim.trial_start = Date.now();      
        $(".err").hide();  
         this.init_sliders();
         exp.sliderPost = null;
          	 
       console.log(this.stim);    

	  	  if (this.stim.block == "dem") {
	  		group="College Democrats Club"
	  		
	  		
	  } else {
	  		group="College Republicans Club"
			
	  	}
	  	
	  	if (this.stim.predicate == "discover") {
    			negation = " didn't "
    	} else {
    		negation = " doesn't "
    		    }
    		    
    	if (this.stim.id == "filler1" || this.stim.id == "filler2"){
    		    //var target= "<table><tr><td><width=400px><dl margin-top=200px><b>" +this.stim.speakerName +":</b></td><td>" + this.stim.complement + ".</dl></td></tr></table>"
				var setup= this.stim.block2_speakerName+ ", at the "+ group + " meeting:<br><br>"
				var target ="<i> "+ this.stim.block2_subjectName+ " " + this.stim.complement + ".</i>"
				var question =  "Is " + this.stim.block2_speakerName + " certain that " + this.stim.block2_subjectName + " " +this.stim.complement +"?";

    			
    		} else {
    		    //var target= "<table><tr><td><width=400px><dl margin-top=200px><b>" +this.stim.speakerName +":</b></td><td>" +this.stim.subjectName + negation + this.stim.predicate + " that " + this.stim.complement + ".</dl></td></tr></table>"
				var setup = this.stim.block2_speakerName+ ", at the "+ group + " meeting:<br><br>"
				var target= "<i>" + this.stim.block2_subjectName + negation + this.stim.predicate + " that " + this.stim.complement + ".</i>"
				var question =  "Is " + this.stim.block2_speakerName + " certain that " + this.stim.complement +"?";
    	}	    

	  $(".utt1").html(setup);
	  $(".utt2").html(target);	
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
      utils.make_slider("#single_slider2", function(event, ui) {
        exp.sliderPost = ui.value;
      });
    },


    log_responses : function() {
      exp.data_trials.push({
      "block" : "block2",
      "socCond" : this.stim.block,    
      //"socCond-list": 
   	  "slide_number_in_experiment" : exp.phase,
   	  "list": this.stim.list, 
   	  "itemID": this.stim.id,  
   	   "item_orientation": this.stim.orientation,
   	   "complement": this.stim.complement,
   	   "complementType":this.stim.complementType,
   	   "topic":this.stim.topic,
   	    "predicate": this.stim.predicate,
   	   "speakerName": this.stim.block2_speakerName,
   	   "speakerGender": this.stim.block2_speakerGender,
   	  "subjectName" : this.stim.block2_subjectName,
   	  "subjectGender" : this.stim.block2_subjectGender,
      "response": exp.sliderPost,
      "rt" : Date.now() - this.stim.trial_start
      });
    }
  }
  ); 
      
 

  slides.questionaire =  slide({
    name : "questionaire",
    submit : function(e){
		exp.subj_data = {
			language : $("#language").val(),
	//        enjoyment : $("#enjoyment").val(),
	//        asses : $('input[name="assess"]:checked').val(),
			club_memory : $('input[name="memoryCheck"]:checked').val(),
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
    "idCondition": item.idCondition,
    "orientation": item.orientation,
    "topic": item.topic,
     "predicate": item.predicate,
    "complement":item.complement,
    "complementType":item.complementType,
	  "block1_speakerName": item.block1_speakerName,
	  "block1_speakerGender":item.block1_speakerGender, 
	  "block1_subjectName":item.block1_subjectName, 
	  "block1_subjectGender":item.block1_subjectGender,
	  "block2_speakerName": item.block2_speakerName,
	  "block2_speakerGender":item.block2_speakerGender, 
	  "block2_subjectName":item.block2_subjectName, 
	  "block2_subjectGender":item.block2_subjectGender,
    }
  }
  
  
  exp.all_stims = _.shuffle(_.shuffle([list2])[0])
	//exp.all_stims = _.shuffle(_.shuffle([list1,list2,list3,list4])[0])

  console.log(exp.all_stims.length)
  exp.stims_block1 = []
  exp.stims_block2 = []
   
  for (var i=0; i<exp.all_stims.length; i++) {
  	var stim = makeStim(i);
  	console.log(stim)
  	
	exp.stims_block1.push(jQuery.extend(true, {}, stim));
	exp.stims_block2.push(jQuery.extend(true, {}, stim));	
  }  
  
console.log(exp.stims_block1);
console.log(exp.stims_block2);   

	exp.stims_block1 = _.shuffle(exp.stims_block1);  
	exp.stims_block2 = _.shuffle(exp.stims_block2); 
	
// decide which block comes first
  var block_order = _.shuffle(["dem","rep"]);
  var block1type = block_order[0];
  var block2type = block_order[1];  
  console.log(block_order);
  console.log(block1type);  
  console.log(block2type);    

   for (k in exp.stims_block2) {
   		exp.stims_block2[k].block = block_order[1];   	
   	}
   	
   for (i in exp.stims_block1) {
   		exp.stims_block1[i].block = block_order[0];   	
   	}


console.log(exp.stims_block1);
console.log(exp.stims_block2);   	

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
  exp.structure=["i0", "instructions", "instructions1", "block1", "instructions2", "block2", 'questionaire', 'finished'];
  
  exp.data_trials = [];
  //make corresponding slides:
  exp.slides = make_slides(exp);

//  exp.nQs = utils.get_exp_length(); //this does not work if there are stacks of stims (but does work for an experiment with this structure)
                    //relies on structure and slides being defined
                    
   exp.nQs = 3 + 23 + 1 + 23 + 1; 
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