function QuestionsView () {}

QuestionsView.prototype = {
  allQuestionsSuccess: function(data) {
    for(var i=0; i< data.length; i++) {
        var question = data[i]
        var questionId = question.id
        var questionDiv =
        '<div class="question" data-question-id="'+questionId+'">'+question.content+' - '+question.user_name+' <a class="show-question" href="">Show</a> '+'</div>'
        $('#dbc_stack').append(questionDiv);
      }
  },
  allQuestionsError: function() {
    alert("Your request was not successful. Please try again.")
  },

  allQuestionsDiv: function() {
    var allQuestionsDiv ='<div class="all-questions"><a class="all-questions-button" href="">See All Questions</a>'+'</div>';
    $('#all_questions').append(allQuestionsDiv);
    $('#all_questions').hide();
  },
}
