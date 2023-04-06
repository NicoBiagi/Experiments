var likert_scale_bis = [
    "Rarely/Never",
    "Occasionally",
    "Often",
    "Almost Always/Always"
  ];

  var BIS_survey = {
    type: jsPsychSurveyLikert,
     preamble: "<h1>BIS</h1><div>DIRECTIONS: People differ in the ways they act and think in different situations. This is a test to measure some of the ways in which you act and think. Read each statement and put an X on the appropriate circle on the right side of this page. Do not spend too much time on any statement. Answer quickly and honestly. </div>",
    questions: [
      {prompt: "I plan task carefully", labels: likert_scale_bis, required: true},
      {prompt: "I do things without thinking", labels: likert_scale_bis, required: true},
      {prompt: "I make-up my mind quickly", labels: likert_scale_bis, required: true},
      {prompt: "I am happy-go-lucky", labels: likert_scale_bis, required: true},
      {prompt: "I don’t “pay attention”", labels: likert_scale_bis, required: true},
      {prompt: "I have “racing” thoughts", labels: likert_scale_bis, required: true},
      {prompt: "I plan trips well ahead of time", labels: likert_scale_bis, required: true},
      {prompt: "I am self controlled", labels: likert_scale_bis, required: true},
      {prompt: "I concentrate easily", labels: likert_scale_bis, required: true},
      {prompt: "I save regularly", labels: likert_scale_bis, required: true},
      {prompt: "I “squirm” at plays or lectures", labels: likert_scale_bis, required: true},
      {prompt: "I am a careful thinker", labels: likert_scale_bis, required: true},
      {prompt: "I plan for job security", labels: likert_scale_bis, required: true},
      {prompt: "I say things without thinking", labels: likert_scale_bis, required: true},
      {prompt: "I like to think about complex problems", labels: likert_scale_bis, required: true},
      {prompt: "I change jobs", labels: likert_scale_bis, required: true},
      {prompt: "I act “on impulse.”", labels: likert_scale_bis, required: true},
      {prompt: "I get easily bored when solving thought problems", labels: likert_scale_bis, required: true},
      {prompt: "I act on the spur of the moment", labels: likert_scale_bis, required: true},
      {prompt: "I am a steady thinker", labels: likert_scale_bis, required: true},
      {prompt: "I change residences", labels: likert_scale_bis, required: true},
      {prompt: "I buy things on impulse", labels: likert_scale_bis, required: true},
      {prompt: "I can only think about one thing at a time", labels: likert_scale_bis, required: true},
      {prompt: "I change hobbies", labels: likert_scale_bis, required: true},
      {prompt: "I spend or charge more than I earn", labels: likert_scale_bis, required: true},
      {prompt: "I often have extraneous thoughts when thinking", labels: likert_scale_bis, required: true},
      {prompt: "I am more interested in the present than the future", labels: likert_scale_bis, required: true},
      {prompt: "I am restless at the theater or lectures", labels: likert_scale_bis, required: true},
      {prompt: "I like puzzle", labels: likert_scale_bis, required: true},
      {prompt: "I am future oriented", labels: likert_scale_bis, required: true},
      {prompt: "", labels: likert_scale_bis, required: true},
    ],
    randomize_question_order: false
  };

  // reverse coding for items 9-21-12-1-8-7-13-