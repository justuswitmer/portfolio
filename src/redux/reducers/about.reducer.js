const about = [
  {
    profile:'Strengths Finders', 
    type: ['Responsibility', 'Restorative', 'Analytical', 'Intellection', 'Consistency'], 
    description: 'The basic philosophy behind StrengthsFinder is that everyone has natural talents and that we’ll get the farthest in life if we focus on elevating our personal strengths, rather than trying to balance out our weaknesses. StrengthsFinder lists 34 potential strengths, and after taking the assessment, you’ll get to see and learn about your top five with in-depth information and suggestions for using your strengths in your life and work.', 
    sources: ['https://www.melyssagriffin.com/strengthsfinder/', 'https://www.gallup.com/cliftonstrengths/en/strengthsfinder.aspx'],
  },
  {
    profile:'Myers Briggs', 
    type: ['ISTJ'], 
    description: 'Myers-Briggs Type Indicator (MBTI) is a personality test, typically based on psychological attributes and is used to determine differing strengths and types of personalities in a workplace or other setting. The questionnaire’s battery of tests can provide insight into the subject’s perception, decision making, leadership skills, and other attributes may contribute to personal or professional success.', 
    sources: ['https://www.talkspace.com/blog/myers-briggs-personality-test-how-to-take-it/', 'https://www.myersbriggs.org',],
  },
  {
    profile:'Enneagram', 
    type: ['Type 6', 'Wing 5'], 
    description: 'From one point of view, the Enneagram can be seen as a set of nine distinct personality types, with each number on the Enneagram denoting one type. It is common to find a little of yourself in all nine of the types, although one of them should stand out as being closest to yourself. This is your basic personality type. Everyone emerges from childhood with one of the nine types dominating their personality, with inborn temperament and other pre-natal factors being the main determinants of our type. This is one area where most all of the major Enneagram authors agree—we are born with a dominant type. Subsequently, this inborn orientation largely determines the ways in which we learn to adapt to our early childhood environment. It also seems to lead to certain unconscious orientations toward our parental figures, but why this is so, we still do not know. In any case, by the time children are four or five years old, their consciousness has developed sufficiently to have a separate sense of self. Although their identity is still very fluid, at this age children begin to establish themselves and find ways of fitting into the world on their own.', 
    sources: ['https://www.enneagraminstitute.com/how-the-enneagram-system-works/',],
  },
  {
    profile:'SuperPowers', 
    type: ['Experimentation', 'Grit', 'Vision'], 
    description: '', 
    sources: [],
  },
];


const aboutReducer = (state = about, action) => {
  console.log('in aboutReducer', action);
  switch (action.type) {
    case 'LOAD_ABOUT':
      return action.payload
    default:
      return state;
  }
};

export default aboutReducer;