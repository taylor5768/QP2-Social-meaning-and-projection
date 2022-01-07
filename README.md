# QP2-Social-meaning-and-projection

This repository contains materials related to the experiments reported in this paper: http://www.journals.linguisticsociety.org/proceedings/index.php/PLSA/article/view/  

**QP2Stim-Main-Expanded.csv**: Stimuli for the main experiment reported in the paper.  

Target sentences in the main experiment featured a third-person matrix subject (e.g.,_Ben_), a clause-embedding predicate (e.g., _know, believe_), and a clausal complement (e.g., _Obama improved the American economy_).  The predicate and complement were embedded under negation (e.g., _John doesn't know that Obama improved the American economy_). Participants were asked whether a Democrat- or Republican-affiliated speaker who uttered the target sentence is certain that the content of the complement is true.  

Each row in the file represents a single target sentence.
-** Predicate:** the emebedding predicate
- **Complement:** the lexical content used to instantiate the clausal complement.
- **Orientation:** the political orientation of the lexical content (R= right, L=left, N=neutral)
- **Topic:** the topic that the lexical content is associated with. R/L lexical contents are paired such that there is a R and L lexical content corresponding to the same political topic. Each neutral lexical content is associated with a single topic. 
- **Block1.Speaker/Block2.Speaker, Block1.SpeakerGender/Block2.SpeakerGender**: the names and (stereotypical) genders of the speakers used in the two blocks, i.e., the Block1.speaker name was used in one block of the experiment for a given participant, and the Block2.speaker name was used in the other block* 
- **Block1.Subject/Block2.Subject, Block1.SubjectGender/Block2.SubjectGender**: the names and (stereotypical) genders for the third-person matrix subjects used in the two blocks, i.e., the Block1.subject name was used in one block of the experiment for a given participant, and the Block2.subject name was used in the other block* 

*Note: block order was randomized, so the block numbers don't necessarily correspond to the order in which a given participant saw the stimuli with each speaker/subject name/gender.


The main experiment can be viewed here: https://www.asc.ohio-state.edu/mahler.38/QP2Main-Expanded-Exp1/run-AMT-experiment/experiment.html

The materials that were used to build the experiment webpage for the main experiment are also available in the directory "QP2-Main-Expanded-Exp1". To view the experiment locally on your browser, download the entire directory, and then open the "exp" directory. Click on the experiment. html file to open the experiment webpage locally in your browser.  The js directory contains the javascript for the webpage.


**QP2Stim-Stim-Norming.csv**: Stimuli for the norming experiment.

Results from the norming experiment were used to select lexical contents for the main experiment. Target sentences featured lexical contents presented as main clauses (e.g., _Obama improved the American economy_), and participants were asked how likely a Democrat- or Republican-affiliated person would be to agree with that statement. 

Each row in the file represents a single target sentence:
- **Content:** the lexical content, presented to participants as a main clause. 
- **Orientation:** the political orientation of the lexical content (R= right, L=left)
- **Topic:** the topic that the lexical content is associated with. Lexical contents are paired such that there is a R and L lexical content corresponding to the same political topic.

The norming experiment can be viewed here: https://www.asc.ohio-state.edu/mahler.38/QP2Norming/run-AMT-experiment/experiment.html

The materials that were used to build the experiment webpage for the main experiment are also available in the directory "QP2Norming-mTurkExp". To view the experiment locally on your browser, download the entire directory, and then open the "exp" directory. Click on the experiment. html file to open the experiment webpage locally in your browser.  The js directory contains the javascript for the webpage.
