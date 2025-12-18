import { ExamPageData, QuestionType } from './types';

// Helper to generate consistent page structure
const createPages = (idPrefix: string, tasks: any[]): ExamPageData[] => [
  {
    id: `${idPrefix}-page-1`,
    title: 'Grammar: Future & Modals',
    tasks: tasks.filter(t => ['task-1', 'task-2', 'task-5', 'task-6'].includes(t.id))
  },
  {
    id: `${idPrefix}-page-2`,
    title: 'Grammar: Past & Conditionals',
    tasks: tasks.filter(t => ['task-3', 'task-4', 'task-7', 'task-8', 'task-9', 'task-12'].includes(t.id))
  },
  {
    id: `${idPrefix}-page-3`,
    title: 'Grammar & Vocabulary',
    tasks: tasks.filter(t => ['task-10', 'task-14', 'task-16'].includes(t.id))
  },
  {
    id: `${idPrefix}-page-4`,
    title: 'Vocabulary: General',
    tasks: tasks.filter(t => ['task-19', 'task-21', 'task-23', 'task-24'].includes(t.id))
  },
  {
    id: `${idPrefix}-page-5`,
    title: 'Writing Training',
    tasks: tasks.filter(t => ['task-writing'].includes(t.id))
  }
];

const VERSION_A_TASKS = [
  {
    id: 'task-1',
    title: 'Task 1: Future Probability',
    instruction: 'Choose: will, won\'t, might or might not.',
    questions: [
      { id: 'vA-t1-q1', type: QuestionType.MCQ, prompt: 'If she studies hard, she _______ pass the exam comfortably.', options: ['might', 'will', 'won\'t'] },
      { id: 'vA-t1-q2', type: QuestionType.MCQ, prompt: 'Take an umbrella. It _______ rain later this afternoon.', options: ['will', 'won\'t', 'might'] },
      { id: 'vA-t1-q3', type: QuestionType.MCQ, prompt: 'I promise I _______ tell anyone your secret.', options: ['won\'t', 'might', 'might not'] },
      { id: 'vA-t1-q4', type: QuestionType.MCQ, prompt: 'They _______ come to the party because they are very tired.', options: ['will', 'might not', 'will'] },
      { id: 'vA-t1-q5', type: QuestionType.MCQ, prompt: 'If you don\'t hurry, we _______ miss the train.', options: ['might', 'will', 'won\'t'] },
      { id: 'vA-t1-q6', type: QuestionType.MCQ, prompt: 'There _______ be any tickets left for the cinema. It is a popular movie.', options: ['might not', 'will', 'won\'t'] },
      { id: 'vA-t1-q7', type: QuestionType.MCQ, prompt: 'He _______ become a doctor, but he isn\'t sure yet.', options: ['will', 'won\'t', 'might'] },
      { id: 'vA-t1-q8', type: QuestionType.MCQ, prompt: 'Don\'t worry, I _______ help you clean the room.', options: ['might', 'will', 'might not'] },
      { id: 'vA-t1-q9', type: QuestionType.MCQ, prompt: 'We _______ go to Samarkand for the holidays, or we might stay home.', options: ['will', 'won\'t', 'might'] },
      { id: 'vA-t1-q10', type: QuestionType.MCQ, prompt: 'My sister _______ eat sushi. She hates fish.', options: ['might', 'will', 'won\'t'] },
    ]
  },
  {
    id: 'task-2',
    title: 'Task 2: Future Predictions',
    instruction: 'Choose: will, won\'t, might or might not.',
    questions: [
      { id: 'vA-t2-q1', type: QuestionType.MCQ, prompt: 'The team is playing very well. They _______ win the championship.', options: ['might not', 'will', 'won\'t'] },
      { id: 'vA-t2-q2', type: QuestionType.MCQ, prompt: 'I _______ buy that shirt. It is too expensive for me right now.', options: ['won\'t', 'might', 'will'] },
      { id: 'vA-t2-q3', type: QuestionType.MCQ, prompt: 'If we visit the mountains, we _______ see an eagle, but it\'s not guaranteed.', options: ['will', 'might', 'won\'t'] },
      { id: 'vA-t2-q4', type: QuestionType.MCQ, prompt: 'Don\'t touch that plate! You _______ burn your hand.', options: ['will', 'might not', 'might'] },
      { id: 'vA-t2-q5', type: QuestionType.MCQ, prompt: 'She _______ be late for the meeting because of the traffic.', options: ['won\'t', 'might', 'will not'] },
    ]
  },
  {
    id: 'task-3',
    title: 'Task 3: Past Simple vs Continuous',
    instruction: 'Complete with past simple or past continuous. (Write both verbs)',
    questions: [
        { id: 'vA-t3-q1', type: QuestionType.FILL_BLANK, prompt: 'While I _______ (shop) at the bazaar, I _______ (meet) my old teacher.' },
        { id: 'vA-t3-q2', type: QuestionType.FILL_BLANK, prompt: 'We _______ (play) football when it _______ (start) to rain.' },
        { id: 'vA-t3-q3', type: QuestionType.FILL_BLANK, prompt: 'She _______ (sleep) when the alarm _______ (ring).' },
        { id: 'vA-t3-q4', type: QuestionType.FILL_BLANK, prompt: 'They _______ (not/listen) when the teacher _______ (ask) the question.' },
        { id: 'vA-t3-q5', type: QuestionType.FILL_BLANK, prompt: 'What _______ (you / do) when I _______ (call) you?' },
    ]
  },
  {
    id: 'task-4',
    title: 'Task 4: Past Simple vs Continuous (Part 2)',
    instruction: 'Complete with past simple or past continuous.',
    questions: [
        { id: 'vA-t4-q1', type: QuestionType.FILL_BLANK, prompt: 'He _______ (break) his leg while he _______ (ski).' },
        { id: 'vA-t4-q2', type: QuestionType.FILL_BLANK, prompt: 'The students _______ (wait) for the bus when the accident _______ (happen).' },
        { id: 'vA-t4-q3', type: QuestionType.FILL_BLANK, prompt: 'I _______ (lose) my keys while I _______ (walk) home.' },
        { id: 'vA-t4-q4', type: QuestionType.FILL_BLANK, prompt: 'She _______ (cook) plov when the guests _______ (arrive).' },
        { id: 'vA-t4-q5', type: QuestionType.FILL_BLANK, prompt: 'They _______ (drive) to Tashkent when the car _______ (stop).' },
    ]
  },
  {
    id: 'task-5',
    title: 'Task 5: Modals',
    instruction: 'Choose the correct modal verb.',
    questions: [
        { id: 'vA-t5-q1', type: QuestionType.MCQ, prompt: 'You MUST stop when the traffic light is red. (Example)', options: ['must', 'can'] },
        { id: 'vA-t5-q2', type: QuestionType.MCQ, prompt: 'Students _______ wear a uniform at this school.', options: ['have to', 'don\'t have to'] },
        { id: 'vA-t5-q3', type: QuestionType.MCQ, prompt: 'You _______ smoke inside the hospital.', options: ['mustn\'t', 'don\'t have to'] },
        { id: 'vA-t5-q4', type: QuestionType.MCQ, prompt: 'We _______ play video games after we finish our homework.', options: ['can', 'must'] },
        { id: 'vA-t5-q5', type: QuestionType.MCQ, prompt: 'He _______ wake up early on Sunday; it\'s a holiday.', options: ['has to', 'doesn\'t have to'] },
        { id: 'vA-t5-q6', type: QuestionType.MCQ, prompt: 'You _______ park here. It is private property.', options: ['can\'t', 'don\'t have to'] },
        { id: 'vA-t5-q7', type: QuestionType.MCQ, prompt: 'I _______ call my mother. It is her birthday today.', options: ['must', 'can'] },
        { id: 'vA-t5-q8', type: QuestionType.MCQ, prompt: 'They _______ speak English very well.', options: ['can', 'mustn\'t'] },
        { id: 'vA-t5-q9', type: QuestionType.MCQ, prompt: 'You _______ show your passport at the airport.', options: ['have to', 'can\'t'] },
        { id: 'vA-t5-q10', type: QuestionType.MCQ, prompt: 'We _______ bring food. The organizers will provide it.', options: ['don\'t have to', 'mustn\'t'] },
    ]
  },
  {
    id: 'task-6',
    title: 'Task 6: Modals (Part 2)',
    instruction: 'Choose: must/mustn\'t, have to/don\'t have to, can/can\'t.',
    questions: [
        { id: 'vA-t6-q1', type: QuestionType.MCQ, prompt: 'I CAN\'T hear you. The music is too loud.', options: ['must', 'can\'t'] },
        { id: 'vA-t6-q2', type: QuestionType.MCQ, prompt: 'You _______ forget to lock the door.', options: ['mustn\'t', 'don\'t have to'] },
        { id: 'vA-t6-q3', type: QuestionType.MCQ, prompt: 'Drivers _______ have a valid license.', options: ['have to', 'can'] },
        { id: 'vA-t6-q4', type: QuestionType.MCQ, prompt: 'She _______ cook tonight because we are going to a restaurant.', options: ['doesn\'t have to', 'mustn\'t'] },
        { id: 'vA-t6-q5', type: QuestionType.MCQ, prompt: 'You _______ use my computer if you need it.', options: ['can', 'must'] },
        { id: 'vA-t6-q6', type: QuestionType.MCQ, prompt: 'We _______ be late for the exam.', options: ['mustn\'t', 'don\'t have to'] },
        { id: 'vA-t6-q7', type: QuestionType.MCQ, prompt: 'He _______ wear glasses to read. His eyes are bad.', options: ['has to', 'can\'t'] },
    ]
  },
  {
    id: 'task-7',
    title: 'Task 7: First Conditional',
    instruction: 'Complete the sentences.',
    questions: [
        { id: 'vA-t7-q1', type: QuestionType.FILL_BLANK, prompt: 'If she _______ (not/study), she _______ (fail) the test.' },
        { id: 'vA-t7-q2', type: QuestionType.FILL_BLANK, prompt: 'I _______ (buy) a new phone if I _______ (save) enough money.' },
        { id: 'vA-t7-q3', type: QuestionType.FILL_BLANK, prompt: 'If you _______ (eat) too much candy, you _______ (get) a toothache.' },
        { id: 'vA-t7-q4', type: QuestionType.FILL_BLANK, prompt: 'The teacher _______ (be) happy if we _______ (finish) the project on time.' },
    ]
  },
  {
    id: 'task-8',
    title: 'Task 8: Second Conditional',
    instruction: 'Complete the sentences.',
    questions: [
        { id: 'vA-t8-q1', type: QuestionType.FILL_BLANK, prompt: 'If he _______ (have) a car, he _______ (drive) to work.' },
        { id: 'vA-t8-q2', type: QuestionType.FILL_BLANK, prompt: 'I _______ (buy) a big house if I _______ (be) a millionaire.' },
        { id: 'vA-t8-q3', type: QuestionType.FILL_BLANK, prompt: 'If we _______ (have) free time, we _______ (go) to the gym.' },
        { id: 'vA-t8-q4', type: QuestionType.FILL_BLANK, prompt: 'She _______ (travel) around the world if she _______ (not have) fear flying.' },
        { id: 'vA-t8-q5', type: QuestionType.FILL_BLANK, prompt: 'If I _______ (be) you, I _______ (accept) that job offer.' },
        { id: 'vA-t8-q6', type: QuestionType.FILL_BLANK, prompt: 'They _______ (play) better if they _______ (practice) every day.' },
        { id: 'vA-t8-q7', type: QuestionType.FILL_BLANK, prompt: 'If I _______ (know) the answer, I _______ (tell) you.' },
    ]
  },
  {
    id: 'task-9',
    title: 'Task 9: Time Clauses',
    instruction: 'Complete with correct time clause.',
    questions: [
        { id: 'vA-t9-q1', type: QuestionType.MCQ, prompt: 'I will call you _______ I finish work.', options: ['before', 'as soon as', 'if'] },
        { id: 'vA-t9-q2', type: QuestionType.MCQ, prompt: 'We will have dinner _______ the movie ends.', options: ['after', 'if', 'while'] },
        { id: 'vA-t9-q3', type: QuestionType.MCQ, prompt: '_______ you go out, please turn off the lights.', options: ['After', 'Before', 'When'] },
        { id: 'vA-t9-q4', type: QuestionType.MCQ, prompt: 'He will be very happy _______ he passes the driving test.', options: ['when', 'before', 'until'] },
        { id: 'vA-t9-q5', type: QuestionType.MCQ, prompt: 'I\'ll wait here _______ you come back.', options: ['if', 'until', 'as soon as'] },
    ]
  },
  {
    id: 'task-10',
    title: 'Task 10 & 11: Passive Voice',
    instruction: 'Complete with correct Passive form.',
    questions: [
        { id: 'vA-t10-q1', type: QuestionType.FILL_BLANK, prompt: 'It 2 __________ (visit) by thousands of people every weekend.' },
        { id: 'vA-t10-q2', type: QuestionType.FILL_BLANK, prompt: 'The shops 3 __________ (clean) every night.' },
        { id: 'vA-t10-q3', type: QuestionType.FILL_BLANK, prompt: 'A new cinema 4 __________ (build) on the second floor right now.' },
        { id: 'vA-t10-q4', type: QuestionType.FILL_BLANK, prompt: 'The tickets 5 __________ (sell) online.' },
        { id: 'vA-t10-q5', type: QuestionType.FILL_BLANK, prompt: 'Last week, a special concert 6 __________ (give) by a famous singer.' },
        { id: 'vA-t10-q6', type: QuestionType.FILL_BLANK, prompt: 'The parking lot 7 __________ (design) to hold 500 cars.' },
        { id: 'vA-t10-q7', type: QuestionType.FILL_BLANK, prompt: 'Next year, more restaurants 8 __________ (add) to the food court.' },
    ]
  },
  {
    id: 'task-12',
    title: 'Task 12 & 13: Used To',
    instruction: 'Complete with used to, didn\'t use to, or Did... use to?',
    questions: [
        { id: 'vA-t12-q1', type: QuestionType.FILL_BLANK, prompt: '_______ you _______ (wear) glasses when you were a child?' },
        { id: 'vA-t12-q2', type: QuestionType.FILL_BLANK, prompt: 'She _______ (not / like) coffee, but now she loves it.' },
        { id: 'vA-t12-q3', type: QuestionType.FILL_BLANK, prompt: 'We _______ (live) in Bukhara before we moved to Tashkent.' },
        { id: 'vA-t12-q4', type: QuestionType.FILL_BLANK, prompt: 'He _______ (have) long hair, but he cut it yesterday.' },
        { id: 'vA-t12-q5', type: QuestionType.FILL_BLANK, prompt: 'My father _______ (not / cook), but now he makes dinner every Sunday.' },
    ]
  },
  {
    id: 'task-14',
    title: 'Task 14 & 15: Present Perfect',
    instruction: 'Rewrite using Present Perfect with FOR or SINCE.',
    questions: [
        { id: 'vA-t14-q1', type: QuestionType.SENTENCE_BUILDER, prompt: 'She / work / at the bank / ten years.' },
        { id: 'vA-t14-q2', type: QuestionType.SENTENCE_BUILDER, prompt: 'We / not see / each other / last summer.' },
        { id: 'vA-t14-q3', type: QuestionType.SENTENCE_BUILDER, prompt: 'He / have / this computer / 2019.' },
        { id: 'vA-t14-q4', type: QuestionType.SENTENCE_BUILDER, prompt: 'They / live / in this house / a long time.' },
    ]
  },
  {
    id: 'task-16',
    title: 'Task 16 & 17: Make or Do',
    instruction: 'Fill in with MAKE or DO.',
    questions: [
        { id: 'vA-t16-q1', type: QuestionType.MCQ, prompt: 'It is important to ________ your homework every day.', options: ['MAKE', 'DO'] },
        { id: 'vA-t16-q2', type: QuestionType.MCQ, prompt: 'Can you ________ me a favor?', options: ['MAKE', 'DO'] },
        { id: 'vA-t16-q3', type: QuestionType.MCQ, prompt: 'She wants to ________ friends with the new student.', options: ['MAKE', 'DO'] },
        { id: 'vA-t16-q4', type: QuestionType.MCQ, prompt: 'I need to ________ an appointment with the dentist.', options: ['MAKE', 'DO'] },
        { id: 'vA-t16-q5', type: QuestionType.MCQ, prompt: 'Don\'t worry if you ________ a mistake. Just try again.', options: ['MAKE', 'DO'] },
        { id: 'vA-t16-q6', type: QuestionType.MCQ, prompt: 'Who is going to ________ the dishes tonight?', options: ['MAKE', 'DO'] },
        { id: 'vA-t16-q7', type: QuestionType.MCQ, prompt: 'He makes a lot of money, but he doesn\'t ________ any charity work.', options: ['MAKE', 'DO'] },
        { id: 'vA-t16-q8', type: QuestionType.MCQ, prompt: 'I need to ________ a phone call.', options: ['MAKE', 'DO'] },
        { id: 'vA-t16-q9', type: QuestionType.MCQ, prompt: 'Have you ________ your bed today?', options: ['MAKE', 'DO'] },
    ]
  },
  {
    id: 'task-19',
    title: 'Task 19: Transport & City',
    instruction: 'Complete with: rush hour / pollution / convenient / public transport / passengers',
    questions: [
        { id: 'vA-t19-q1', type: QuestionType.FILL_BLANK, prompt: 'During 1 __________, the roads are full of cars.' },
        { id: 'vA-t19-q2', type: QuestionType.FILL_BLANK, prompt: 'This creates a lot of air 2 __________ which is bad for the environment.' },
        { id: 'vA-t19-q3', type: QuestionType.FILL_BLANK, prompt: 'Many people prefer to use 3 __________ like the Metro because it is faster.' },
        { id: 'vA-t19-q4', type: QuestionType.FILL_BLANK, prompt: 'The Metro is very 4 __________ because there are stations everywhere.' },
        { id: 'vA-t19-q5', type: QuestionType.FILL_BLANK, prompt: 'However, sometimes there are too many 5 __________ and you cannot find a seat.' },
    ]
  },
  {
    id: 'task-21',
    title: 'Task 21 & 22: Prepositions',
    instruction: 'Complete the sentences with correct prepositions.',
    questions: [
        { id: 'vA-t21-q1', type: QuestionType.FILL_BLANK, prompt: 'This book belongs ______ the teacher.' },
        { id: 'vA-t21-q2', type: QuestionType.FILL_BLANK, prompt: 'Whether we go to the park depends ______ the weather.' },
        { id: 'vA-t21-q3', type: QuestionType.FILL_BLANK, prompt: 'She is thinking ______ moving to a new apartment.' },
        { id: 'vA-t21-q4', type: QuestionType.FILL_BLANK, prompt: 'I completely agree ______ you regarding this problem.' },
        { id: 'vA-t21-q5', type: QuestionType.FILL_BLANK, prompt: 'He succeeded ______ passing the difficult exam.' },
        { id: 'vA-t21-q6', type: QuestionType.FILL_BLANK, prompt: 'Uzbekistan consists ______ 12 regions and one republic.' },
        { id: 'vA-t21-q7', type: QuestionType.FILL_BLANK, prompt: 'What happened ______ your arm? Is it broken?' },
    ]
  },
  {
    id: 'task-23',
    title: 'Task 23: Phrasal Verbs',
    instruction: 'Choose: give up / set up / grow up / find out / put on',
    questions: [
        { id: 'vA-t23-q1', type: QuestionType.DROPDOWN, prompt: 'I want to start a business. I plan to __________ a small cafe.', options: ['give up', 'set up', 'grow up', 'find out', 'put on'] },
        { id: 'vA-t23-q2', type: QuestionType.DROPDOWN, prompt: 'Don\'t stop trying! Never __________.', options: ['give up', 'set up', 'grow up', 'find out', 'put on'] },
        { id: 'vA-t23-q3', type: QuestionType.DROPDOWN, prompt: 'Where did you __________?', options: ['give up', 'set up', 'grow up', 'find out', 'put on'] },
        { id: 'vA-t23-q4', type: QuestionType.DROPDOWN, prompt: 'I need to check the internet to __________ the answer.', options: ['give up', 'set up', 'grow up', 'find out', 'put on'] },
    ]
  },
  {
    id: 'task-24',
    title: 'Task 24: Linking Words',
    instruction: 'Select the correct linking word.',
    questions: [
        { id: 'vA-t24-q1', type: QuestionType.MCQ, prompt: '_______ it was raining, they played football outside.', options: ['Although', 'However'] },
        { id: 'vA-t24-q2', type: QuestionType.MCQ, prompt: 'She is very rich. _______, she is not happy.', options: ['However', 'Despite'] },
        { id: 'vA-t24-q3', type: QuestionType.MCQ, prompt: '_______ the traffic, we arrived on time.', options: ['In spite of', 'But'] },
        { id: 'vA-t24-q4', type: QuestionType.MCQ, prompt: 'I like apples, _______ I prefer oranges.', options: ['although', 'but'] },
        { id: 'vA-t24-q5', type: QuestionType.MCQ, prompt: '_______ working hard, he didn\'t get the promotion.', options: ['Despite', 'Although'] },
    ]
  },
  {
    id: 'task-writing',
    title: 'Topic: Mobile Phones in Schools',
    instruction: 'Write 80-100 words. Advantages/Disadvantages/Recommendation.',
    questions: [
        {
            id: 'vA-writing-1',
            type: QuestionType.WRITING,
            prompt: 'Start like this: Nowadays, almost every student has a mobile phone. There is a big discussion about whether they should be allowed in schools...',
            subPrompt: 'Write your essay below.'
        }
    ]
  }
];

const VERSION_B_TASKS = [
  {
    id: 'task-1',
    title: 'Task 1: Future Probability',
    instruction: 'Choose: will, won\'t, might or might not.',
    questions: [
      { id: 'vB-t1-q1', type: QuestionType.MCQ, prompt: 'I am not sure, but I _______ go to the cinema tonight.', options: ['might', 'will', 'won\'t'] },
      { id: 'vB-t1-q2', type: QuestionType.MCQ, prompt: 'Look at the clear sky! It _______ rain today.', options: ['won\'t', 'might', 'will'] },
      { id: 'vB-t1-q3', type: QuestionType.MCQ, prompt: 'He is the best player. He _______ win the match.', options: ['will', 'might', 'might not'] },
      { id: 'vB-t1-q4', type: QuestionType.MCQ, prompt: 'I promise I _______ help you with your homework.', options: ['will', 'might', 'won\'t'] },
      { id: 'vB-t1-q5', type: QuestionType.MCQ, prompt: 'They are very busy, so they _______ come to the party.', options: ['might not', 'will', 'will not'] },
      { id: 'vB-t1-q6', type: QuestionType.MCQ, prompt: 'If you eat too much, you _______ feel sick.', options: ['will', 'might', 'won\'t'] },
      { id: 'vB-t1-q7', type: QuestionType.MCQ, prompt: 'We _______ visit the museum, but we haven\'t decided yet.', options: ['might', 'will', 'won\'t'] },
      { id: 'vB-t1-q8', type: QuestionType.MCQ, prompt: 'Don\'t drink coffee at night. You _______ sleep.', options: ['won\'t', 'might', 'will'] },
      { id: 'vB-t1-q9', type: QuestionType.MCQ, prompt: 'She _______ like the movie. She hates horror films.', options: ['won\'t', 'might', 'will'] },
      { id: 'vB-t1-q10', type: QuestionType.MCQ, prompt: 'I _______ be late. The traffic is bad.', options: ['might', 'won\'t', 'will not'] },
    ]
  },
  {
    id: 'task-2',
    title: 'Task 2: Future Predictions',
    instruction: 'Choose: will, won\'t, might or might not.',
    questions: [
      { id: 'vB-t2-q1', type: QuestionType.MCQ, prompt: 'In the future, people _______ live on Mars.', options: ['might', 'won\'t', 'will'] },
      { id: 'vB-t2-q2', type: QuestionType.MCQ, prompt: 'I think it _______ become colder in the evening.', options: ['will', 'might not', 'won\'t'] },
      { id: 'vB-t2-q3', type: QuestionType.MCQ, prompt: 'If she runs, she _______ catch the bus.', options: ['will', 'might', 'won\'t'] },
      { id: 'vB-t2-q4', type: QuestionType.MCQ, prompt: 'I _______ buy a new car next year. I don\'t have money.', options: ['won\'t', 'might', 'will'] },
      { id: 'vB-t2-q5', type: QuestionType.MCQ, prompt: 'The teacher _______ give us a test tomorrow.', options: ['might', 'won\'t', 'will not'] },
    ]
  },
  {
    id: 'task-3',
    title: 'Task 3: Past Simple vs Continuous',
    instruction: 'Complete with past simple or past continuous. (Write both verbs)',
    questions: [
        { id: 'vB-t3-q1', type: QuestionType.FILL_BLANK, prompt: 'While I _______ (read) a book, the phone _______ (ring).' },
        { id: 'vB-t3-q2', type: QuestionType.FILL_BLANK, prompt: 'He _______ (walk) to work when he _______ (meet) his friend.' },
        { id: 'vB-t3-q3', type: QuestionType.FILL_BLANK, prompt: 'They _______ (play) tennis when it _______ (start) to snow.' },
        { id: 'vB-t3-q4', type: QuestionType.FILL_BLANK, prompt: 'She _______ (cook) dinner when she _______ (cut) her finger.' },
        { id: 'vB-t3-q5', type: QuestionType.FILL_BLANK, prompt: 'What _______ (you / do) when I _______ (arrive)?' },
    ]
  },
  {
    id: 'task-4',
    title: 'Task 4: Past Simple vs Continuous (Part 2)',
    instruction: 'Complete with past simple or past continuous.',
    questions: [
        { id: 'vB-t4-q1', type: QuestionType.FILL_BLANK, prompt: 'I _______ (lose) my wallet while I _______ (shop).' },
        { id: 'vB-t4-q2', type: QuestionType.FILL_BLANK, prompt: 'The students _______ (listen) when the teacher _______ (enter).' },
        { id: 'vB-t4-q3', type: QuestionType.FILL_BLANK, prompt: 'We _______ (wait) for the bus when we _______ (see) the accident.' },
        { id: 'vB-t4-q4', type: QuestionType.FILL_BLANK, prompt: 'She _______ (not/drive) fast when the police _______ (stop) her.' },
        { id: 'vB-t4-q5', type: QuestionType.FILL_BLANK, prompt: 'While they _______ (watch) TV, the lights _______ (go) out.' },
    ]
  },
  {
    id: 'task-5',
    title: 'Task 5: Modals',
    instruction: 'Choose the correct modal verb.',
    questions: [
        { id: 'vB-t5-q1', type: QuestionType.MCQ, prompt: 'You _______ be quiet in the library.', options: ['must', 'can'] },
        { id: 'vB-t5-q2', type: QuestionType.MCQ, prompt: 'I _______ go to work today. It is a holiday.', options: ['don\'t have to', 'mustn\'t'] },
        { id: 'vB-t5-q3', type: QuestionType.MCQ, prompt: 'She _______ speak English well.', options: ['can', 'must'] },
        { id: 'vB-t5-q4', type: QuestionType.MCQ, prompt: 'You _______ smoke here. It is forbidden.', options: ['mustn\'t', 'don\'t have to'] },
        { id: 'vB-t5-q5', type: QuestionType.MCQ, prompt: 'We _______ pay for the tickets. They are free.', options: ['don\'t have to', 'can\'t'] },
        { id: 'vB-t5-q6', type: QuestionType.MCQ, prompt: 'He _______ wear a uniform at work.', options: ['has to', 'can'] },
        { id: 'vB-t5-q7', type: QuestionType.MCQ, prompt: 'You _______ park here. It is illegal.', options: ['can\'t', 'don\'t have to'] },
        { id: 'vB-t5-q8', type: QuestionType.MCQ, prompt: 'I _______ help you if you want.', options: ['can', 'have to'] },
        { id: 'vB-t5-q9', type: QuestionType.MCQ, prompt: 'They _______ study hard for the exam.', options: ['must', 'can'] },
        { id: 'vB-t5-q10', type: QuestionType.MCQ, prompt: 'You _______ bring food into the classroom.', options: ['mustn\'t', 'don\'t have to'] },
    ]
  },
  {
    id: 'task-6',
    title: 'Task 6: Modals (Part 2)',
    instruction: 'Choose: must/mustn\'t, have to/don\'t have to, can/can\'t.',
    questions: [
        { id: 'vB-t6-q1', type: QuestionType.MCQ, prompt: 'I _______ swim. I never learned.', options: ['can\'t', 'mustn\'t'] },
        { id: 'vB-t6-q2', type: QuestionType.MCQ, prompt: 'You _______ eat vegetables to be healthy.', options: ['should', 'can'] },
        { id: 'vB-t6-q3', type: QuestionType.MCQ, prompt: 'We _______ run in the corridors.', options: ['mustn\'t', 'don\'t have to'] },
        { id: 'vB-t6-q4', type: QuestionType.MCQ, prompt: 'She _______ cook. Her mother is a chef.', options: ['can', 'has to'] },
        { id: 'vB-t6-q5', type: QuestionType.MCQ, prompt: 'You _______ call me. I will call you.', options: ['don\'t have to', 'can\'t'] },
        { id: 'vB-t6-q6', type: QuestionType.MCQ, prompt: 'He _______ finish the project by Friday.', options: ['has to', 'can'] },
        { id: 'vB-t6-q7', type: QuestionType.MCQ, prompt: 'They _______ speak loudly in class.', options: ['mustn\'t', 'don\'t have to'] },
    ]
  },
  {
    id: 'task-7',
    title: 'Task 7: First Conditional',
    instruction: 'Complete the sentences.',
    questions: [
        { id: 'vB-t7-q1', type: QuestionType.FILL_BLANK, prompt: 'If it _______ (rain), we _______ (stay) at home.' },
        { id: 'vB-t7-q2', type: QuestionType.FILL_BLANK, prompt: 'I _______ (tell) him if I _______ (see) him.' },
        { id: 'vB-t7-q3', type: QuestionType.FILL_BLANK, prompt: 'If she _______ (study), she _______ (pass) the test.' },
        { id: 'vB-t7-q4', type: QuestionType.FILL_BLANK, prompt: 'We _______ (be) late if we _______ (not/hurry).' },
        { id: 'vB-t7-q5', type: QuestionType.FILL_BLANK, prompt: 'If you _______ (eat) that, you _______ (be) sick.' },
    ]
  },
  {
    id: 'task-8',
    title: 'Task 8: Second Conditional',
    instruction: 'Complete the sentences.',
    questions: [
        { id: 'vB-t8-q1', type: QuestionType.FILL_BLANK, prompt: 'If I _______ (be) rich, I _______ (travel) the world.' },
        { id: 'vB-t8-q2', type: QuestionType.FILL_BLANK, prompt: 'She _______ (buy) a car if she _______ (have) money.' },
        { id: 'vB-t8-q3', type: QuestionType.FILL_BLANK, prompt: 'If we _______ (live) in London, we _______ (speak) English better.' },
        { id: 'vB-t8-q4', type: QuestionType.FILL_BLANK, prompt: 'I _______ (help) you if I _______ (know) the answer.' },
        { id: 'vB-t8-q5', type: QuestionType.FILL_BLANK, prompt: 'He _______ (not/work) if he _______ (win) the lottery.' },
        { id: 'vB-t8-q6', type: QuestionType.FILL_BLANK, prompt: 'If I _______ (be) you, I _______ (study) harder.' },
        { id: 'vB-t8-q7', type: QuestionType.FILL_BLANK, prompt: 'They _______ (come) if they _______ (be) invited.' },
    ]
  },
  {
    id: 'task-9',
    title: 'Task 9: Time Clauses',
    instruction: 'Complete with correct time clause.',
    questions: [
        { id: 'vB-t9-q1', type: QuestionType.MCQ, prompt: 'I will help you _______ I finish my work.', options: ['when', 'until', 'if'] },
        { id: 'vB-t9-q2', type: QuestionType.MCQ, prompt: 'Don\'t go out _______ it stops raining.', options: ['until', 'when', 'before'] },
        { id: 'vB-t9-q3', type: QuestionType.MCQ, prompt: '_______ I get home, I will call you.', options: ['As soon as', 'Until', 'Before'] },
        { id: 'vB-t9-q4', type: QuestionType.MCQ, prompt: 'Wash your hands _______ you eat.', options: ['before', 'if', 'until'] },
        { id: 'vB-t9-q5', type: QuestionType.MCQ, prompt: 'He will leave _______ he is ready.', options: ['when', 'before', 'until'] },
    ]
  },
  {
    id: 'task-10',
    title: 'Task 10 & 11: Passive Voice',
    instruction: 'Complete with correct Passive form.',
    questions: [
        { id: 'vB-t10-q1', type: QuestionType.FILL_BLANK, prompt: 'The letter _______ (write) by my sister.' },
        { id: 'vB-t10-q2', type: QuestionType.FILL_BLANK, prompt: 'The car _______ (repair) yesterday.' },
        { id: 'vB-t10-q3', type: QuestionType.FILL_BLANK, prompt: 'English _______ (speak) all over the world.' },
        { id: 'vB-t10-q4', type: QuestionType.FILL_BLANK, prompt: 'The house _______ (build) in 2005.' },
        { id: 'vB-t10-q5', type: QuestionType.FILL_BLANK, prompt: 'The room _______ (clean) every day.' },
        { id: 'vB-t10-q6', type: QuestionType.FILL_BLANK, prompt: 'Dinner _______ (serve) at 8 PM.' },
        { id: 'vB-t10-q7', type: QuestionType.FILL_BLANK, prompt: 'The flowers _______ (water) by the gardener.' },
        { id: 'vB-t10-q8', type: QuestionType.FILL_BLANK, prompt: 'The cake _______ (make) with chocolate.' },
    ]
  },
  {
    id: 'task-12',
    title: 'Task 12 & 13: Used To',
    instruction: 'Complete with used to, didn\'t use to, or Did... use to?',
    questions: [
        { id: 'vB-t12-q1', type: QuestionType.FILL_BLANK, prompt: 'I _______ (play) tennis, but now I play football.' },
        { id: 'vB-t12-q2', type: QuestionType.FILL_BLANK, prompt: '_______ you _______ (live) here?' },
        { id: 'vB-t12-q3', type: QuestionType.FILL_BLANK, prompt: 'She _______ (not/like) fish, but now she loves it.' },
        { id: 'vB-t12-q4', type: QuestionType.FILL_BLANK, prompt: 'We _______ (go) to the beach every summer.' },
        { id: 'vB-t12-q5', type: QuestionType.FILL_BLANK, prompt: 'He _______ (have) a bike, but he sold it.' },
        { id: 'vB-t12-q6', type: QuestionType.FILL_BLANK, prompt: '_______ they _______ (work) in a factory?' },
    ]
  },
  {
    id: 'task-14',
    title: 'Task 14 & 15: Present Perfect',
    instruction: 'Rewrite using Present Perfect with FOR or SINCE.',
    questions: [
        { id: 'vB-t14-q1', type: QuestionType.SENTENCE_BUILDER, prompt: 'I / live / here / 20 years.' },
        { id: 'vB-t14-q2', type: QuestionType.SENTENCE_BUILDER, prompt: 'She / be / a teacher / 2018.' },
        { id: 'vB-t14-q3', type: QuestionType.SENTENCE_BUILDER, prompt: 'We / know / him / a long time.' },
        { id: 'vB-t14-q4', type: QuestionType.SENTENCE_BUILDER, prompt: 'He / not/ eat / anything / morning.' },
        { id: 'vB-t14-q5', type: QuestionType.SENTENCE_BUILDER, prompt: 'They / play / football / two hours.' },
    ]
  },
  {
    id: 'task-16',
    title: 'Task 16 & 17: Make or Do',
    instruction: 'Fill in with MAKE or DO.',
    questions: [
        { id: 'vB-t16-q1', type: QuestionType.FILL_BLANK, prompt: 'Please _______ your bed.' },
        { id: 'vB-t16-q2', type: QuestionType.FILL_BLANK, prompt: 'I have to _______ my homework.' },
        { id: 'vB-t16-q3', type: QuestionType.FILL_BLANK, prompt: 'Don\'t _______ a noise.' },
        { id: 'vB-t16-q4', type: QuestionType.FILL_BLANK, prompt: 'Can you _______ me a favor?' },
        { id: 'vB-t16-q5', type: QuestionType.FILL_BLANK, prompt: 'He made a mistake, but he didn\'t _______ it on purpose.' },
        { id: 'vB-t16-q6', type: QuestionType.FILL_BLANK, prompt: 'I need to _______ a phone call.' },
        { id: 'vB-t16-q7', type: QuestionType.FILL_BLANK, prompt: 'She loves to _______ shopping.' },
        { id: 'vB-t16-q8', type: QuestionType.FILL_BLANK, prompt: 'Let\'s _______ a plan.' },
        { id: 'vB-t16-q9', type: QuestionType.FILL_BLANK, prompt: 'Who _______ the cooking?' },
        { id: 'vB-t16-q10', type: QuestionType.FILL_BLANK, prompt: 'I must _______ an appointment.' },
    ]
  },
  {
    id: 'task-19',
    title: 'Task 19: Transport & City',
    instruction: 'Complete with: ticket / platform / bus stop / crowded / expensive',
    questions: [
        { id: 'vB-t19-q1', type: QuestionType.FILL_BLANK, prompt: 'I bought a _______ for the train.' },
        { id: 'vB-t19-q2', type: QuestionType.FILL_BLANK, prompt: 'The train is leaving from _______ 5.' },
        { id: 'vB-t19-q3', type: QuestionType.FILL_BLANK, prompt: 'We waited at the _______ for 20 minutes.' },
        { id: 'vB-t19-q4', type: QuestionType.FILL_BLANK, prompt: 'The bus was very _______, there were no seats.' },
        { id: 'vB-t19-q5', type: QuestionType.FILL_BLANK, prompt: 'Taxis are very _______ in this city.' },
    ]
  },
  {
    id: 'task-21',
    title: 'Task 21 & 22: Prepositions',
    instruction: 'Complete the sentences with correct prepositions.',
    questions: [
        { id: 'vB-t21-q1', type: QuestionType.FILL_BLANK, prompt: 'I am afraid ______ dogs.' },
        { id: 'vB-t21-q2', type: QuestionType.FILL_BLANK, prompt: 'She is angry ______ me.' },
        { id: 'vB-t21-q3', type: QuestionType.FILL_BLANK, prompt: 'He is interested ______ music.' },
        { id: 'vB-t21-q4', type: QuestionType.FILL_BLANK, prompt: 'We are waiting ______ the bus.' },
        { id: 'vB-t21-q5', type: QuestionType.FILL_BLANK, prompt: 'This bag belongs ______ her.' },
        { id: 'vB-t21-q6', type: QuestionType.FILL_BLANK, prompt: 'I agree ______ you.' },
        { id: 'vB-t21-q7', type: QuestionType.FILL_BLANK, prompt: 'It depends ______ the weather.' },
        { id: 'vB-t21-q8', type: QuestionType.FILL_BLANK, prompt: 'Look ______ the picture.' },
    ]
  },
  {
    id: 'task-23',
    title: 'Task 23: Phrasal Verbs',
    instruction: 'Choose: wake up / get up / turn on / look for / give back',
    questions: [
        { id: 'vB-t23-q1', type: QuestionType.DROPDOWN, prompt: 'I usually __________ at 7 AM.', options: ['wake up', 'get up', 'turn on', 'look for', 'give back'] },
        { id: 'vB-t23-q2', type: QuestionType.DROPDOWN, prompt: 'Can you __________ the light?', options: ['wake up', 'get up', 'turn on', 'look for', 'give back'] },
        { id: 'vB-t23-q3', type: QuestionType.DROPDOWN, prompt: 'I need to __________ my keys. I lost them.', options: ['wake up', 'get up', 'turn on', 'look for', 'give back'] },
        { id: 'vB-t23-q4', type: QuestionType.DROPDOWN, prompt: 'Please __________ my book tomorrow.', options: ['wake up', 'get up', 'turn on', 'look for', 'give back'] },
        { id: 'vB-t23-q5', type: QuestionType.DROPDOWN, prompt: 'It is hard to __________ early in winter.', options: ['wake up', 'get up', 'turn on', 'look for', 'give back'] },
    ]
  },
  {
    id: 'task-24',
    title: 'Task 24: Linking Words',
    instruction: 'Select the correct linking word.',
    questions: [
        { id: 'vB-t24-q1', type: QuestionType.MCQ, prompt: 'I like tea, _______ I don\'t like coffee.', options: ['but', 'so'] },
        { id: 'vB-t24-q2', type: QuestionType.MCQ, prompt: 'It was raining, _______ we stayed inside.', options: ['because', 'so'] },
        { id: 'vB-t24-q3', type: QuestionType.MCQ, prompt: '_______ he was tired, he finished the work.', options: ['Although', 'Because'] },
        { id: 'vB-t24-q4', type: QuestionType.MCQ, prompt: 'I went to bed early _______ I was tired.', options: ['because', 'but'] },
        { id: 'vB-t24-q5', type: QuestionType.MCQ, prompt: 'She is clever, _______ she is lazy.', options: ['however', 'so'] },
    ]
  },
  {
    id: 'task-writing',
    title: 'Topic: Healthy Lifestyle',
    instruction: 'Write 80-100 words. Diet/Exercise/Habits.',
    questions: [
        {
            id: 'vB-writing-1',
            type: QuestionType.WRITING,
            prompt: 'Start like this: Living a healthy life is important for everyone. There are many ways to stay fit and healthy...',
            subPrompt: 'Write your essay below.'
        }
    ]
  }
];

const VERSION_C_TASKS = [
  {
    id: 'task-1',
    title: 'Task 1: Future Probability',
    instruction: 'Choose: will, won\'t, might or might not.',
    questions: [
      { id: 'vC-t1-q1', type: QuestionType.MCQ, prompt: 'Don\'t worry about the taxi. I _______ call one for you.', options: ['will', 'might not', 'won\'t'] },
      { id: 'vC-t1-q2', type: QuestionType.MCQ, prompt: 'We _______ go to the park later, but it depends on the rain.', options: ['might', 'will', 'won\'t'] },
      { id: 'vC-t1-q3', type: QuestionType.MCQ, prompt: 'If you don\'t wear a coat, you _______ catch a cold.', options: ['will', 'might not', 'won\'t'] },
      { id: 'vC-t1-q4', type: QuestionType.MCQ, prompt: 'I _______ eat that samsa. I am not hungry at all.', options: ['won\'t', 'might', 'will'] },
      { id: 'vC-t1-q5', type: QuestionType.MCQ, prompt: 'They _______ arrive on time because the flight was delayed.', options: ['won\'t', 'will', 'might'] },
      { id: 'vC-t1-q6', type: QuestionType.MCQ, prompt: 'Look at those clouds! It _______ rain soon.', options: ['will', 'might', 'won\'t'] },
      { id: 'vC-t1-q7', type: QuestionType.MCQ, prompt: 'She _______ be at home. She usually works until 6 PM.', options: ['won\'t', 'might not', 'will'] },
      { id: 'vC-t1-q8', type: QuestionType.MCQ, prompt: 'If I see him, I _______ give him your message.', options: ['will', 'might', 'won\'t'] },
      { id: 'vC-t1-q9', type: QuestionType.MCQ, prompt: 'We _______ watch a movie tonight, or we might just sleep.', options: ['might', 'will', 'won\'t'] },
      { id: 'vC-t1-q10', type: QuestionType.MCQ, prompt: 'He is a very good student. He _______ pass the IELTS exam easily.', options: ['will', 'might not', 'won\'t'] },
    ]
  },
  {
    id: 'task-2',
    title: 'Task 2: Future Predictions',
    instruction: 'Choose: will, won\'t, might or might not.',
    questions: [
      { id: 'vC-t2-q1', type: QuestionType.MCQ, prompt: 'I am very tired. I _______ go to bed early tonight.', options: ['will', 'might not', 'won\'t'] },
      { id: 'vC-t2-q2', type: QuestionType.MCQ, prompt: 'If we run, we _______ catch the bus, but it is leaving in one minute!', options: ['might', 'won\'t', 'will'] },
      { id: 'vC-t2-q3', type: QuestionType.MCQ, prompt: 'She _______ like this gift. It is not her style.', options: ['won\'t', 'might not', 'will'] },
      { id: 'vC-t2-q4', type: QuestionType.MCQ, prompt: 'They _______ move to a new house next year, but they haven\'t found one yet.', options: ['might', 'will', 'won\'t'] },
      { id: 'vC-t2-q5', type: QuestionType.MCQ, prompt: 'The teacher _______ be happy if you forget your homework again.', options: ['won\'t', 'will', 'might'] },
    ]
  },
  {
    id: 'task-3',
    title: 'Task 3: Past Simple vs Continuous',
    instruction: 'Complete with past simple or past continuous. (Write both verbs)',
    questions: [
        { id: 'vC-t3-q1', type: QuestionType.FILL_BLANK, prompt: 'While I _______ (do) my homework, the electricity _______ (go) out.' },
        { id: 'vC-t3-q2', type: QuestionType.FILL_BLANK, prompt: 'He _______ (drive) too fast when the police _______ (stop) him.' },
        { id: 'vC-t3-q3', type: QuestionType.FILL_BLANK, prompt: 'They _______ (have) a picnic when it _______ (start) to snow.' },
        { id: 'vC-t3-q4', type: QuestionType.FILL_BLANK, prompt: 'She _______ (not/watch) the movie when I _______ (ask) her about it.' },
        { id: 'vC-t3-q5', type: QuestionType.FILL_BLANK, prompt: 'What _______ (you / eat) when I _______ (see) you at the cafe?' },
    ]
  },
  {
    id: 'task-4',
    title: 'Task 4: Past Simple vs Continuous (Part 2)',
    instruction: 'Complete with past simple or past continuous.',
    questions: [
        { id: 'vC-t4-q1', type: QuestionType.FILL_BLANK, prompt: 'My brother _______ (find) a wallet while he _______ (run) in the park.' },
        { id: 'vC-t4-q2', type: QuestionType.FILL_BLANK, prompt: 'We _______ (wait) for the train when we _______ (see) our neighbor.' },
        { id: 'vC-t4-q3', type: QuestionType.FILL_BLANK, prompt: 'I _______ (drop) my phone while I _______ (take) a photo.' },
        { id: 'vC-t4-q4', type: QuestionType.FILL_BLANK, prompt: 'She _______ (listen) to music so she _______ (not/hear) the doorbell.' },
        { id: 'vC-t4-q5', type: QuestionType.FILL_BLANK, prompt: 'While the teacher _______ (explain) the grammar, the students _______ (listen) carefully.' },
    ]
  },
  {
    id: 'task-5',
    title: 'Task 5: Modals',
    instruction: 'Choose the correct modal verb.',
    questions: [
        { id: 'vC-t5-q1', type: QuestionType.MCQ, prompt: 'You _______ turn off your phone in the cinema.', options: ['must', 'can'] },
        { id: 'vC-t5-q2', type: QuestionType.MCQ, prompt: 'We _______ go to school tomorrow; it is Sunday.', options: ['don\'t have to', 'mustn\'t'] },
        { id: 'vC-t5-q3', type: QuestionType.MCQ, prompt: 'She _______ speak three languages: Uzbek, Russian, and English.', options: ['can', 'must'] },
        { id: 'vC-t5-q4', type: QuestionType.MCQ, prompt: 'You _______ buy a ticket before you get on the train.', options: ['have to', 'can\'t'] },
        { id: 'vC-t5-q5', type: QuestionType.MCQ, prompt: 'Students _______ cheat during the exam.', options: ['mustn\'t', 'don\'t have to'] },
        { id: 'vC-t5-q6', type: QuestionType.MCQ, prompt: 'He _______ help you if he is not busy.', options: ['can', 'has to'] },
        { id: 'vC-t5-q7', type: QuestionType.MCQ, prompt: 'I _______ finish this report today. My boss needs it.', options: ['must', 'can'] },
        { id: 'vC-t5-q8', type: QuestionType.MCQ, prompt: 'You _______ swim here. The water is dangerous.', options: ['can\'t', 'don\'t have to'] },
        { id: 'vC-t5-q9', type: QuestionType.MCQ, prompt: 'We _______ wear warm clothes. It is very cold outside.', options: ['have to', 'can'] },
        { id: 'vC-t5-q10', type: QuestionType.MCQ, prompt: 'She _______ wake up early. She is on vacation.', options: ['doesn\'t have to', 'mustn\'t'] },
    ]
  },
  {
    id: 'task-6',
    title: 'Task 6: Modals (Part 2)',
    instruction: 'Choose: must/mustn\'t, have to/don\'t have to, can/can\'t.',
    questions: [
        { id: 'vC-t6-q1', type: QuestionType.MCQ, prompt: 'I _______ work late tonight. I have a deadline.', options: ['have to', 'can'] },
        { id: 'vC-t6-q2', type: QuestionType.MCQ, prompt: 'You _______ shout in the library.', options: ['mustn\'t', 'don\'t have to'] },
        { id: 'vC-t6-q3', type: QuestionType.MCQ, prompt: 'We _______ walk to the park. It is very close.', options: ['can', 'must'] },
        { id: 'vC-t6-q4', type: QuestionType.MCQ, prompt: 'He _______ pay for the coffee. I will pay.', options: ['doesn\'t have to', 'can\'t'] },
        { id: 'vC-t6-q5', type: QuestionType.MCQ, prompt: 'Drivers _______ stop at the zebra crossing.', options: ['must', 'can'] },
        { id: 'vC-t6-q6', type: QuestionType.MCQ, prompt: 'You _______ use a pencil. You must use a pen.', options: ['can\'t', 'don\'t have to'] },
        { id: 'vC-t6-q7', type: QuestionType.MCQ, prompt: 'She _______ cook dinner every day for her large family.', options: ['has to', 'can'] },
    ]
  },
  {
    id: 'task-7',
    title: 'Task 7: First Conditional',
    instruction: 'Complete the sentences.',
    questions: [
        { id: 'vC-t7-q1', type: QuestionType.FILL_BLANK, prompt: 'If you _______ (not/hurry), you _______ (miss) the flight.' },
        { id: 'vC-t7-q2', type: QuestionType.FILL_BLANK, prompt: 'If he _______ (practice) every day, he _______ (win) the competition.' },
        { id: 'vC-t7-q3', type: QuestionType.FILL_BLANK, prompt: 'We _______ (stay) at home if it _______ (rain).' },
        { id: 'vC-t7-q4', type: QuestionType.FILL_BLANK, prompt: 'If she _______ (not/eat) breakfast, she _______ (be) hungry later.' },
        { id: 'vC-t7-q5', type: QuestionType.FILL_BLANK, prompt: 'I _______ (call) you if I _______ (need) help.' },
    ]
  },
  {
    id: 'task-8',
    title: 'Task 8: Second Conditional',
    instruction: 'Complete the sentences.',
    questions: [
        { id: 'vC-t8-q1', type: QuestionType.FILL_BLANK, prompt: 'If I _______ (be) a bird, I _______ (fly) to the mountains.' },
        { id: 'vC-t8-q2', type: QuestionType.FILL_BLANK, prompt: 'If she _______ (win) the lottery, she _______ (buy) a big house in Tashkent.' },
        { id: 'vC-t8-q3', type: QuestionType.FILL_BLANK, prompt: 'I _______ (drink) more water if I _______ (be) thirsty.' },
        { id: 'vC-t8-q4', type: QuestionType.FILL_BLANK, prompt: 'If we _______ (live) closer to the school, we _______ (can) walk.' },
        { id: 'vC-t8-q5', type: QuestionType.FILL_BLANK, prompt: 'He _______ (would learn) English faster if he _______ (watch) more movies.', subPrompt: 'Use appropriate forms (e.g. would learn / watched)' },
        { id: 'vC-t8-q6', type: QuestionType.FILL_BLANK, prompt: 'If I _______ (be) you, I _______ (go) to the doctor immediately.' },
        { id: 'vC-t8-q7', type: QuestionType.FILL_BLANK, prompt: 'They _______ (be) happy if you _______ (visit) their party.' },
        { id: 'vC-t8-q8', type: QuestionType.FILL_BLANK, prompt: 'If I _______ (have) his phone number, I _______ (call) him.' },
    ]
  },
  {
    id: 'task-9',
    title: 'Task 9: Time Clauses',
    instruction: 'Complete with correct time clause option.',
    questions: [
        { id: 'vC-t9-q1', type: QuestionType.MCQ, prompt: 'Please take off your shoes _______ you enter the house.', options: ['before', 'as soon as', 'if'] },
        { id: 'vC-t9-q2', type: QuestionType.MCQ, prompt: 'I will send you the photo _______ I find it.', options: ['when', 'until', 'before'] },
        { id: 'vC-t9-q3', type: QuestionType.MCQ, prompt: 'We will wait outside _______ the store opens.', options: ['if', 'until', 'after'] },
        { id: 'vC-t9-q4', type: QuestionType.MCQ, prompt: '_______ the lesson finishes, we will go for lunch.', options: ['Before', 'As soon as', 'If'] },
        { id: 'vC-t9-q5', type: QuestionType.MCQ, prompt: 'She always washes her hands _______ cooking dinner.', options: ['before', 'when', 'if'] },
    ]
  },
  {
    id: 'task-10',
    title: 'Task 10 & 11: Passive Voice',
    instruction: 'Complete with correct Passive form.',
    questions: [
        { id: 'vC-t10-q1', type: QuestionType.FILL_BLANK, prompt: 'The new metro line 1 _______ (complete) last year.' },
        { id: 'vC-t10-q2', type: QuestionType.FILL_BLANK, prompt: 'The stations 2 __________ (decorate) with beautiful Uzbek patterns.' },
        { id: 'vC-t10-q3', type: QuestionType.FILL_BLANK, prompt: 'The trains 3 __________ (clean) every night by the staff.' },
        { id: 'vC-t10-q4', type: QuestionType.FILL_BLANK, prompt: 'A new schedule 4 __________ (announce) next week.' },
        { id: 'vC-t10-q5', type: QuestionType.FILL_BLANK, prompt: 'The tickets 5 __________ (check) by machines at the entrance.' },
        { id: 'vC-t10-q6', type: QuestionType.FILL_BLANK, prompt: 'In the past, tokens 6 __________ (use), but now everyone uses QR codes.' },
        { id: 'vC-t10-q7', type: QuestionType.FILL_BLANK, prompt: 'The project 7 __________ (finance) by the government.' },
        { id: 'vC-t10-q8', type: QuestionType.FILL_BLANK, prompt: 'Soon, more stations 8 __________ (build) in the suburbs.' },
    ]
  },
  {
    id: 'task-12',
    title: 'Task 12 & 13: Used To',
    instruction: 'Complete with used to, didn\'t use to, or Did... use to?',
    questions: [
        { id: 'vC-t12-q1', type: QuestionType.FILL_BLANK, prompt: 'I _______ (not/eat) pumpkin, but now I like manti with pumpkin.' },
        { id: 'vC-t12-q2', type: QuestionType.FILL_BLANK, prompt: '_______ your grandfather _______ (ride) a horse?' },
        { id: 'vC-t12-q3', type: QuestionType.FILL_BLANK, prompt: 'We _______ (play) in the street until late at night when we were kids.' },
        { id: 'vC-t12-q4', type: QuestionType.FILL_BLANK, prompt: 'She _______ (have) a Nokia phone, but now she has an iPhone.' },
        { id: 'vC-t12-q5', type: QuestionType.FILL_BLANK, prompt: 'People _______ (not/use) the internet so much twenty years ago.' },
        { id: 'vC-t12-q6', type: QuestionType.FILL_BLANK, prompt: '_______ you _______ (believe) in Santa Claus?' },
    ]
  },
  {
    id: 'task-14',
    title: 'Task 14 & 15: Present Perfect',
    instruction: 'Rewrite using Present Perfect with FOR or SINCE.',
    questions: [
        { id: 'vC-t14-q1', type: QuestionType.SENTENCE_BUILDER, prompt: 'We / be / married / 2010.' },
        { id: 'vC-t14-q2', type: QuestionType.SENTENCE_BUILDER, prompt: 'I / not eat / anything / breakfast.' },
        { id: 'vC-t14-q3', type: QuestionType.SENTENCE_BUILDER, prompt: 'She / study / English / three years.' },
        { id: 'vC-t14-q4', type: QuestionType.SENTENCE_BUILDER, prompt: 'They / know / the teacher / September.' },
        { id: 'vC-t14-q5', type: QuestionType.SENTENCE_BUILDER, prompt: 'He / work / in this office / six months.' },
    ]
  },
  {
    id: 'task-16',
    title: 'Task 16 & 17: Make or Do',
    instruction: 'Fill in with MAKE or DO (and correct tense if needed).',
    questions: [
        { id: 'vC-t16-q1', type: QuestionType.FILL_BLANK, prompt: 'I need to ________ the laundry this weekend.' },
        { id: 'vC-t16-q2', type: QuestionType.FILL_BLANK, prompt: 'Try not to ________ a mess in the kitchen.' },
        { id: 'vC-t16-q3', type: QuestionType.FILL_BLANK, prompt: 'She always ________ her best in exams.' },
        { id: 'vC-t16-q4', type: QuestionType.FILL_BLANK, prompt: 'Can I ________ a suggestion?' },
        { id: 'vC-t16-q5', type: QuestionType.FILL_BLANK, prompt: 'He needs to ________ some research for his project.' },
        { id: 'vC-t16-q6', type: QuestionType.FILL_BLANK, prompt: 'I will ________ a cup of tea for you.' },
        { id: 'vC-t16-q7', type: QuestionType.FILL_BLANK, prompt: 'Stop talking and ________ your work!' },
        { id: 'vC-t16-q8', type: QuestionType.FILL_BLANK, prompt: 'It is time to ________ a choice: science or art?' },
        { id: 'vC-t16-q9', type: QuestionType.FILL_BLANK, prompt: 'Did you ________ business with that company?' },
        { id: 'vC-t16-q10', type: QuestionType.FILL_BLANK, prompt: 'The noise ________ me angry.' },
    ]
  },
  {
    id: 'task-19',
    title: 'Task 19: Transport & City',
    instruction: 'Complete with: traffic jam / fare / main roads / public transport / convenient',
    questions: [
        { id: 'vC-t19-q1', type: QuestionType.FILL_BLANK, prompt: 'I live far from the city center, so I usually take 1 __________.' },
        { id: 'vC-t19-q2', type: QuestionType.FILL_BLANK, prompt: 'The bus 2 __________ is very cheap, only 2000 soums.' },
        { id: 'vC-t19-q3', type: QuestionType.FILL_BLANK, prompt: 'However, in the morning there is always a big 3 __________ on the bridge.' },
        { id: 'vC-t19-q4', type: QuestionType.FILL_BLANK, prompt: 'The 4 __________ are very wide, but there are too many cars.' },
        { id: 'vC-t19-q5', type: QuestionType.FILL_BLANK, prompt: 'It is more 5 __________ to take the metro because it is underground and fast.' },
    ]
  },
  {
    id: 'task-21',
    title: 'Task 21 & 22: Prepositions',
    instruction: 'Complete the sentences with correct prepositions.',
    questions: [
        { id: 'vC-t21-q1', type: QuestionType.FILL_BLANK, prompt: 'This song reminds me ______ my childhood.' },
        { id: 'vC-t21-q2', type: QuestionType.FILL_BLANK, prompt: 'I am waiting ______ the bus. It is late.' },
        { id: 'vC-t21-q3', type: QuestionType.FILL_BLANK, prompt: 'She is afraid ______ spiders.' },
        { id: 'vC-t21-q4', type: QuestionType.FILL_BLANK, prompt: 'He is famous ______ his delicious plov.' },
        { id: 'vC-t21-q5', type: QuestionType.FILL_BLANK, prompt: 'We are looking forward ______ the holiday.' },
        { id: 'vC-t21-q6', type: QuestionType.FILL_BLANK, prompt: 'I strongly disagree ______ his opinion.' },
        { id: 'vC-t21-q7', type: QuestionType.FILL_BLANK, prompt: 'The book consists ______ five chapters.' },
        { id: 'vC-t21-q8', type: QuestionType.FILL_BLANK, prompt: 'Who does this bag belong ______?' },
    ]
  },
  {
    id: 'task-23',
    title: 'Task 23: Phrasal Verbs',
    instruction: 'Choose: give up / carry on / take up / find out / turn off',
    questions: [
        { id: 'vC-t23-q1', type: QuestionType.DROPDOWN, prompt: 'Please __________ the TV. I am trying to sleep.', options: ['give up', 'carry on', 'take up', 'find out', 'turn off'] },
        { id: 'vC-t23-q2', type: QuestionType.DROPDOWN, prompt: 'I want to __________ painting. It looks like a fun hobby.', options: ['give up', 'carry on', 'take up', 'find out', 'turn off'] },
        { id: 'vC-t23-q3', type: QuestionType.DROPDOWN, prompt: 'Even though it was raining, they decided to __________ playing football.', options: ['give up', 'carry on', 'take up', 'find out', 'turn off'] },
        { id: 'vC-t23-q4', type: QuestionType.DROPDOWN, prompt: 'I need to __________ what time the movie starts.', options: ['give up', 'carry on', 'take up', 'find out', 'turn off'] },
        { id: 'vC-t23-q5', type: QuestionType.DROPDOWN, prompt: 'The puzzle was too hard, so I decided to __________.', options: ['give up', 'carry on', 'take up', 'find out', 'turn off'] },
    ]
  },
  {
    id: 'task-24',
    title: 'Task 24: Linking Words',
    instruction: 'Select the correct linking word.',
    questions: [
        { id: 'vC-t24-q1', type: QuestionType.MCQ, prompt: '_______ he is 80 years old, he runs every day.', options: ['However', 'Although'] },
        { id: 'vC-t24-q2', type: QuestionType.MCQ, prompt: 'I wanted to go to the park. _______, I stayed home and read a book.', options: ['Instead', 'Despite'] },
        { id: 'vC-t24-q3', type: QuestionType.MCQ, prompt: '_______ the rain, we had a great picnic.', options: ['In spite of', 'Even though'] },
        { id: 'vC-t24-q4', type: QuestionType.MCQ, prompt: 'She studied very hard, _______ she didn\'t pass the test.', options: ['but', 'however'] },
        { id: 'vC-t24-q5', type: QuestionType.MCQ, prompt: '_______ being tired, he finished the race.', options: ['Despite', 'Although'] },
    ]
  },
  {
    id: 'task-writing',
    title: 'Topic: Learning a Foreign Language',
    instruction: 'Write 80-100 words. Advantages/Difficulties/Personal Experience.',
    questions: [
        {
            id: 'vC-writing-1',
            type: QuestionType.WRITING,
            prompt: 'Start like this: Learning a new language is very popular today. Many people in Uzbekistan are learning English, Russian, or Arabic...',
            subPrompt: 'Write your essay below.'
        }
    ]
  }
];

const VERSION_D_TASKS = [
  {
    id: 'task-1',
    title: 'Task 1: Future Probability',
    instruction: 'Choose: will, won\'t, might or might not.',
    questions: [
      { id: 'vD-t1-q1', type: QuestionType.MCQ, prompt: 'Take your jacket. It is cloudy and it _______ snow later.', options: ['will', 'might', 'won\'t'] },
      { id: 'vD-t1-q2', type: QuestionType.MCQ, prompt: 'I am sure he _______ win the race. He is the fastest runner.', options: ['will', 'might', 'might not'] },
      { id: 'vD-t1-q3', type: QuestionType.MCQ, prompt: 'She is very busy, so she _______ come to the dinner.', options: ['will', 'might not', 'will not'] },
      { id: 'vD-t1-q4', type: QuestionType.MCQ, prompt: 'If you don\'t study for the math test, you _______ pass.', options: ['won\'t', 'might', 'will'] },
      { id: 'vD-t1-q5', type: QuestionType.MCQ, prompt: 'They _______ be at the library, or they might be at the cafe.', options: ['will', 'won\'t', 'might'] },
      { id: 'vD-t1-q6', type: QuestionType.MCQ, prompt: 'Don\'t drink that coffee. You _______ sleep tonight.', options: ['will', 'won\'t', 'might not'] },
      { id: 'vD-t1-q7', type: QuestionType.MCQ, prompt: 'I promise I _______ be late for the meeting tomorrow.', options: ['might', 'won\'t', 'might not'] },
      { id: 'vD-t1-q8', type: QuestionType.MCQ, prompt: 'We _______ visit my grandmother on Sunday, but we haven\'t decided.', options: ['might', 'will', 'won\'t'] },
      { id: 'vD-t1-q9', type: QuestionType.MCQ, prompt: 'He _______ like the spicy food. He prefers mild dishes.', options: ['might not', 'will', 'will not'] },
      { id: 'vD-t1-q10', type: QuestionType.MCQ, prompt: 'The sky is blue. It _______ rain today.', options: ['might', 'won\'t', 'might not'] },
    ]
  },
  {
    id: 'task-2',
    title: 'Task 2: Future Predictions',
    instruction: 'Choose: will, won\'t, might or might not.',
    questions: [
      { id: 'vD-t2-q1', type: QuestionType.MCQ, prompt: 'The traffic is terrible. We _______ be late for the movie.', options: ['might not', 'will', 'won\'t'] },
      { id: 'vD-t2-q2', type: QuestionType.MCQ, prompt: 'I _______ buy the Samsung phone, or I might buy the iPhone.', options: ['will', 'won\'t', 'might'] },
      { id: 'vD-t2-q3', type: QuestionType.MCQ, prompt: 'Don\'t worry, the doctor _______ see you soon.', options: ['will', 'might not', 'won\'t'] },
      { id: 'vD-t2-q4', type: QuestionType.MCQ, prompt: 'If she calls me, I _______ answer. I am angry with her.', options: ['might', 'will', 'won\'t'] },
      { id: 'vD-t2-q5', type: QuestionType.MCQ, prompt: 'He _______ become a famous singer one day. He has a great voice.', options: ['might', 'won\'t', 'might not'] },
    ]
  },
  {
    id: 'task-3',
    title: 'Task 3: Past Simple vs Continuous',
    instruction: 'Complete with past simple or past continuous. (Write both verbs)',
    questions: [
        { id: 'vD-t3-q1', type: QuestionType.FILL_BLANK, prompt: 'While we _______ (watch) TV, the lights _______ (go) out.' },
        { id: 'vD-t3-q2', type: QuestionType.FILL_BLANK, prompt: 'She _______ (cook) osh when she _______ (burn) her hand.' },
        { id: 'vD-t3-q3', type: QuestionType.FILL_BLANK, prompt: 'I _______ (not/drive) fast when the accident _______ (happen).' },
        { id: 'vD-t3-q4', type: QuestionType.FILL_BLANK, prompt: 'They _______ (walk) in the mountains when they _______ (see) a wolf.' },
        { id: 'vD-t3-q5', type: QuestionType.FILL_BLANK, prompt: 'What _______ (you / do) when the teacher _______ (enter) the room?' },
    ]
  },
  {
    id: 'task-4',
    title: 'Task 4: Past Simple vs Continuous (Part 2)',
    instruction: 'Complete with past simple or past continuous.',
    questions: [
        { id: 'vD-t4-q1', type: QuestionType.FILL_BLANK, prompt: 'He _______ (lose) his passport while he _______ (travel) in Turkey.' },
        { id: 'vD-t4-q2', type: QuestionType.FILL_BLANK, prompt: 'The children _______ (play) outside when it _______ (start) to rain.' },
        { id: 'vD-t4-q3', type: QuestionType.FILL_BLANK, prompt: 'I _______ (meet) my friend while I _______ (wait) for the bus.' },
        { id: 'vD-t4-q4', type: QuestionType.FILL_BLANK, prompt: 'She _______ (listen) to music, so she _______ (not/hear) me.' },
        { id: 'vD-t4-q5', type: QuestionType.FILL_BLANK, prompt: 'While I _______ (shop) at Chorsu Bazaar, I _______ (buy) some spices.' },
    ]
  },
  {
    id: 'task-5',
    title: 'Task 5: Modals',
    instruction: 'Choose the correct modal verb.',
    questions: [
        { id: 'vD-t5-q1', type: QuestionType.MCQ, prompt: 'You _______ take photos in the museum.', options: ['mustn\'t', 'don\'t have to'] },
        { id: 'vD-t5-q2', type: QuestionType.MCQ, prompt: 'I _______ finish my homework before I play games.', options: ['have to', 'can'] },
        { id: 'vD-t5-q3', type: QuestionType.MCQ, prompt: 'Students _______ use a dictionary during the lesson.', options: ['can', 'must'] },
        { id: 'vD-t5-q4', type: QuestionType.MCQ, prompt: 'She _______ wear a uniform at university.', options: ['doesn\'t have to', 'can\'t'] },
        { id: 'vD-t5-q5', type: QuestionType.MCQ, prompt: 'We _______ respect our elders.', options: ['must', 'can'] },
        { id: 'vD-t5-q6', type: QuestionType.MCQ, prompt: 'You _______ run. We have plenty of time.', options: ['don\'t have to', 'mustn\'t'] },
        { id: 'vD-t5-q7', type: QuestionType.MCQ, prompt: 'He _______ swim very well. He needs lessons.', options: ['can\'t', 'has to'] },
        { id: 'vD-t5-q8', type: QuestionType.MCQ, prompt: 'Drivers _______ wear a seatbelt. It is the law.', options: ['must', 'can'] },
        { id: 'vD-t5-q9', type: QuestionType.MCQ, prompt: 'You _______ pay by card or cash. Both are okay.', options: ['can', 'have to'] },
        { id: 'vD-t5-q10', type: QuestionType.MCQ, prompt: 'They _______ bring lunch. The school provides it.', options: ['mustn\'t', 'don\'t have to'] },
    ]
  },
  {
    id: 'task-6',
    title: 'Task 6: Modals (Part 2)',
    instruction: 'Choose: must/mustn\'t, have to/don\'t have to, can/can\'t.',
    questions: [
        { id: 'vD-t6-q1', type: QuestionType.MCQ, prompt: 'I _______ come to the party. I am sick.', options: ['can', 'can\'t'] },
        { id: 'vD-t6-q2', type: QuestionType.MCQ, prompt: 'You _______ study hard if you want to be a doctor.', options: ['must', 'don\'t have to'] },
        { id: 'vD-t6-q3', type: QuestionType.MCQ, prompt: 'We _______ touch the paintings.', options: ['mustn\'t', 'don\'t have to'] },
        { id: 'vD-t6-q4', type: QuestionType.MCQ, prompt: 'She _______ wash the dishes. We have a dishwasher.', options: ['doesn\'t have to', 'can\'t'] },
        { id: 'vD-t6-q5', type: QuestionType.MCQ, prompt: 'You _______ park here. It is free.', options: ['can', 'have to'] },
        { id: 'vD-t6-q6', type: QuestionType.MCQ, prompt: 'He _______ wear glasses to see the board.', options: ['has to', 'can'] },
        { id: 'vD-t6-q7', type: QuestionType.MCQ, prompt: 'Passengers _______ turn off their phones during takeoff.', options: ['must', 'can'] },
    ]
  },
  {
    id: 'task-7',
    title: 'Task 7: First Conditional',
    instruction: 'Complete the sentences.',
    questions: [
        { id: 'vD-t7-q1', type: QuestionType.FILL_BLANK, prompt: 'If I _______ (go) to the bazaar, I _______ (buy) some fruit.' },
        { id: 'vD-t7-q2', type: QuestionType.FILL_BLANK, prompt: 'If she _______ (not/hurry), she _______ (be) late for school.' },
        { id: 'vD-t7-q3', type: QuestionType.FILL_BLANK, prompt: 'We _______ (play) football if the weather _______ (be) nice.' },
        { id: 'vD-t7-q4', type: QuestionType.FILL_BLANK, prompt: 'If you _______ (eat) too much chocolate, you _______ (feel) sick.' },
        { id: 'vD-t7-q5', type: QuestionType.FILL_BLANK, prompt: 'He _______ (get) a good job if he _______ (learn) English well.' },
    ]
  },
  {
    id: 'task-8',
    title: 'Task 8: Second Conditional',
    instruction: 'Complete the sentences.',
    questions: [
        { id: 'vD-t8-q1', type: QuestionType.FILL_BLANK, prompt: 'If I _______ (have) a million dollars, I _______ (buy) a Ferrari.' },
        { id: 'vD-t8-q2', type: QuestionType.FILL_BLANK, prompt: 'If she _______ (live) near the sea, she _______ (swim) every day.' },
        { id: 'vD-t8-q3', type: QuestionType.FILL_BLANK, prompt: 'I _______ (go) to the moon if I _______ (be) an astronaut.' },
        { id: 'vD-t8-q4', type: QuestionType.FILL_BLANK, prompt: 'If we _______ (know) the answer, we _______ (help) you.' },
        { id: 'vD-t8-q5', type: QuestionType.FILL_BLANK, prompt: 'He _______ (be) happier if he _______ (work) less.' },
        { id: 'vD-t8-q6', type: QuestionType.FILL_BLANK, prompt: 'If I _______ (be) you, I _______ (not buy) that coat. It’s too expensive.' },
        { id: 'vD-t8-q7', type: QuestionType.FILL_BLANK, prompt: 'They _______ (go) to the concert if they _______ (have) tickets.' },
        { id: 'vD-t8-q8', type: QuestionType.FILL_BLANK, prompt: 'If you _______ (be) the President, what _______ (you / do)?' },
    ]
  },
  {
    id: 'task-9',
    title: 'Task 9: Time Clauses',
    instruction: 'Complete with correct time clause.',
    questions: [
        { id: 'vD-t9-q1', type: QuestionType.MCQ, prompt: 'I will brush my teeth _______ I go to bed.', options: ['before', 'if', 'as soon as'] },
        { id: 'vD-t9-q2', type: QuestionType.MCQ, prompt: 'We will start the meeting _______ everyone arrives.', options: ['until', 'when', 'before'] },
        { id: 'vD-t9-q3', type: QuestionType.MCQ, prompt: '_______ I get home, I will relax.', options: ['As soon as', 'Until', 'Before'] },
        { id: 'vD-t9-q4', type: QuestionType.MCQ, prompt: 'Don\'t open the door _______ the train stops.', options: ['if', 'until', 'as soon as'] },
        { id: 'vD-t9-q5', type: QuestionType.MCQ, prompt: 'She will call you _______ she finishes her work.', options: ['before', 'after', 'until'] },
    ]
  },
  {
    id: 'task-10',
    title: 'Task 10 & 11: Passive Voice',
    instruction: 'Complete with correct Passive form.',
    questions: [
        { id: 'vD-t10-q1', type: QuestionType.FILL_BLANK, prompt: 'The old library 1 _______ (renovate) last year.' },
        { id: 'vD-t10-q2', type: QuestionType.FILL_BLANK, prompt: 'New computers 2 __________ (install) in the study room.' },
        { id: 'vD-t10-q3', type: QuestionType.FILL_BLANK, prompt: 'The books 3 __________ (organize) by subject.' },
        { id: 'vD-t10-q4', type: QuestionType.FILL_BLANK, prompt: 'Every day, the floor 4 __________ (clean) by the staff.' },
        { id: 'vD-t10-q5', type: QuestionType.FILL_BLANK, prompt: 'A new cafe 5 __________ (open) next to the entrance next month.' },
        { id: 'vD-t10-q6', type: QuestionType.FILL_BLANK, prompt: 'Fresh coffee 6 __________ (serve) there every morning.' },
        { id: 'vD-t10-q7', type: QuestionType.FILL_BLANK, prompt: 'In the past, papers 7 __________ (write) by hand, but now they are typed.' },
        { id: 'vD-t10-q8', type: QuestionType.FILL_BLANK, prompt: 'The building 8 __________ (visit) by many students daily.' },
    ]
  },
  {
    id: 'task-12',
    title: 'Task 12 & 13: Used To',
    instruction: 'Complete with used to, didn\'t use to, or Did... use to?',
    questions: [
        { id: 'vD-t12-q1', type: QuestionType.FILL_BLANK, prompt: 'I _______ (ride) a bicycle to school, but now I take the bus.' },
        { id: 'vD-t12-q2', type: QuestionType.FILL_BLANK, prompt: '_______ you _______ (play) hide-and-seek when you were young?' },
        { id: 'vD-t12-q3', type: QuestionType.FILL_BLANK, prompt: 'My father _______ (smoke), but he stopped five years ago.' },
        { id: 'vD-t12-q4', type: QuestionType.FILL_BLANK, prompt: 'We _______ (not/have) a TV, so we read books in the evening.' },
        { id: 'vD-t12-q5', type: QuestionType.FILL_BLANK, prompt: 'She _______ (be) very shy, but now she is confident.' },
        { id: 'vD-t12-q6', type: QuestionType.FILL_BLANK, prompt: 'People _______ (write) letters, but now they send emails.' },
    ]
  },
  {
    id: 'task-14',
    title: 'Task 14 & 15: Present Perfect',
    instruction: 'Rewrite using Present Perfect with FOR or SINCE.',
    questions: [
        { id: 'vD-t14-q1', type: QuestionType.SENTENCE_BUILDER, prompt: 'I / live / in Tashkent / 2015.' },
        { id: 'vD-t14-q2', type: QuestionType.SENTENCE_BUILDER, prompt: 'We / be / friends / ten years.' },
        { id: 'vD-t14-q3', type: QuestionType.SENTENCE_BUILDER, prompt: 'She / not/ visit / her hometown / last summer.' },
        { id: 'vD-t14-q4', type: QuestionType.SENTENCE_BUILDER, prompt: 'He / play / the guitar / he was a child.' },
        { id: 'vD-t14-q5', type: QuestionType.SENTENCE_BUILDER, prompt: 'They / not/ eat / sushi / a long time.' },
    ]
  },
  {
    id: 'task-16',
    title: 'Task 16 & 17: Make or Do',
    instruction: 'Fill in with MAKE or DO.',
    questions: [
        { id: 'vD-t16-q1', type: QuestionType.FILL_BLANK, prompt: 'Stop playing and _______ your homework.' },
        { id: 'vD-t16-q2', type: QuestionType.FILL_BLANK, prompt: 'I need to ________ a reservation at the restaurant.' },
        { id: 'vD-t16-q3', type: QuestionType.FILL_BLANK, prompt: 'Don\'t ________ a noise! The baby is asleep.' },
        { id: 'vD-t16-q4', type: QuestionType.FILL_BLANK, prompt: 'She always ________ the shopping on Saturdays.' },
        { id: 'vD-t16-q5', type: QuestionType.FILL_BLANK, prompt: 'Can you ________ me a favor?' },
        { id: 'vD-t16-q6', type: QuestionType.FILL_BLANK, prompt: 'He made a mistake, but he didn\'t ________ it on purpose.' },
        { id: 'vD-t16-q7', type: QuestionType.FILL_BLANK, prompt: 'I want to ________ money so I can buy a car.' },
        { id: 'vD-t16-q8', type: QuestionType.FILL_BLANK, prompt: 'You must ________ an effort to pass the exam.' },
        { id: 'vD-t16-q9', type: QuestionType.FILL_BLANK, prompt: 'Who ________ the cooking in your family?' },
        { id: 'vD-t16-q10', type: QuestionType.FILL_BLANK, prompt: 'I have to ________ an exam tomorrow.' },
    ]
  },
  {
    id: 'task-19',
    title: 'Task 19: Transport & City',
    instruction: 'Complete with: passengers / convenient / pollution / traffic jams / public transport',
    questions: [
        { id: 'vD-t19-q1', type: QuestionType.FILL_BLANK, prompt: 'There are often 1 __________ on the roads in the morning.' },
        { id: 'vD-t19-q2', type: QuestionType.FILL_BLANK, prompt: 'This causes air 2 __________.' },
        { id: 'vD-t19-q3', type: QuestionType.FILL_BLANK, prompt: 'Many people use 3 __________ like the metro or buses.' },
        { id: 'vD-t19-q4', type: QuestionType.FILL_BLANK, prompt: 'The metro is very 4 __________ and cheap.' },
        { id: 'vD-t19-q5', type: QuestionType.FILL_BLANK, prompt: 'However, in the evening, the buses are full of 5 __________ going home.' },
    ]
  },
  {
    id: 'task-21',
    title: 'Task 21 & 22: Prepositions',
    instruction: 'Complete the sentences with correct prepositions.',
    questions: [
        { id: 'vD-t21-q1', type: QuestionType.FILL_BLANK, prompt: 'I am interested ______ history.' },
        { id: 'vD-t21-q2', type: QuestionType.FILL_BLANK, prompt: 'She is good ______ playing the piano.' },
        { id: 'vD-t21-q3', type: QuestionType.FILL_BLANK, prompt: 'He apologized ______ being late.' },
        { id: 'vD-t21-q4', type: QuestionType.FILL_BLANK, prompt: 'They are waiting ______ the teacher.' },
        { id: 'vD-t21-q5', type: QuestionType.FILL_BLANK, prompt: 'This bag belongs ______ me.' },
        { id: 'vD-t21-q6', type: QuestionType.FILL_BLANK, prompt: 'We agreed ______ the plan.' },
        { id: 'vD-t21-q7', type: QuestionType.FILL_BLANK, prompt: 'The salad consists ______ tomatoes and cucumbers.' },
        { id: 'vD-t21-q8', type: QuestionType.FILL_BLANK, prompt: 'I dreamt ______ flying last night.' },
    ]
  },
  {
    id: 'task-23',
    title: 'Task 23: Phrasal Verbs',
    instruction: 'Choose: give up / find out / grow up / put on / carry on',
    questions: [
        { id: 'vD-t23-q1', type: QuestionType.DROPDOWN, prompt: 'I want to __________ the price of this car.', options: ['give up', 'find out', 'grow up', 'put on', 'carry on'] },
        { id: 'vD-t23-q2', type: QuestionType.DROPDOWN, prompt: 'Don\'t stop now! __________ working!', options: ['give up', 'find out', 'grow up', 'put on', 'carry on'] },
        { id: 'vD-t23-q3', type: QuestionType.DROPDOWN, prompt: 'I decided to __________ smoking. It is bad for my health.', options: ['give up', 'find out', 'grow up', 'put on', 'carry on'] },
        { id: 'vD-t23-q4', type: QuestionType.DROPDOWN, prompt: 'Where did you __________? "I was born in Samarkand."', options: ['give up', 'find out', 'grow up', 'put on', 'carry on'] },
        { id: 'vD-t23-q5', type: QuestionType.DROPDOWN, prompt: 'It is sunny. You should __________ your sunglasses.', options: ['give up', 'find out', 'grow up', 'put on', 'carry on'] },
    ]
  },
  {
    id: 'task-24',
    title: 'Task 24: Linking Words',
    instruction: 'Select the correct linking word.',
    questions: [
        { id: 'vD-t24-q1', type: QuestionType.MCQ, prompt: '_______ I was tired, I finished the book.', options: ['Although', 'However'] },
        { id: 'vD-t24-q2', type: QuestionType.MCQ, prompt: 'He loves football, _______ he doesn\'t play very often.', options: ['but', 'despite'] },
        { id: 'vD-t24-q3', type: QuestionType.MCQ, prompt: '_______ the cold weather, we went for a walk.', options: ['In spite of', 'Even though'] },
        { id: 'vD-t24-q4', type: QuestionType.MCQ, prompt: 'The food was delicious. _______, it was very expensive.', options: ['However', 'Although'] },
        { id: 'vD-t24-q5', type: QuestionType.MCQ, prompt: '_______ his age, he is very active.', options: ['Despite', 'But'] },
    ]
  },
  {
    id: 'task-writing',
    title: 'Topic: The Internet',
    instruction: 'Write 80-100 words. Advantages/Disadvantages/Safety.',
    questions: [
        {
            id: 'vD-writing-1',
            type: QuestionType.WRITING,
            prompt: 'Start like this: The internet is a very important part of our lives today. We use it for everything, from studying to talking with friends...',
            subPrompt: 'Write your essay below.'
        }
    ]
  }
];

const VERSION_E_TASKS = [
  {
    id: 'task-1',
    title: 'Task 1: Future Probability',
    instruction: 'Choose: will, won\'t, might or might not.',
    questions: [
      { id: 'vE-t1-q1', type: QuestionType.MCQ, prompt: 'I am feeling very tired. I _______ go to the gym today.', options: ['might', 'won\'t', 'will'] },
      { id: 'vE-t1-q2', type: QuestionType.MCQ, prompt: 'If you study hard, you _______ get a high score.', options: ['will', 'might not', 'won\'t'] },
      { id: 'vE-t1-q3', type: QuestionType.MCQ, prompt: 'We _______ go to the cinema, or we might watch Netflix at home.', options: ['will', 'won\'t', 'might'] },
      { id: 'vE-t1-q4', type: QuestionType.MCQ, prompt: 'Don\'t worry, the bus _______ arrive soon. It is usually on time.', options: ['might not', 'will', 'won\'t'] },
      { id: 'vE-t1-q5', type: QuestionType.MCQ, prompt: 'She _______ like the pilaf. She doesn\'t like carrots.', options: ['might not', 'will', 'won\'t'] },
      { id: 'vE-t1-q6', type: QuestionType.MCQ, prompt: 'There are dark clouds. It _______ rain this afternoon.', options: ['will', 'might', 'won\'t'] },
      { id: 'vE-t1-q7', type: QuestionType.MCQ, prompt: 'I promise I _______ forget your birthday this year.', options: ['might', 'won\'t', 'might not'] },
      { id: 'vE-t1-q8', type: QuestionType.MCQ, prompt: 'They _______ visit us next week, but they are very busy.', options: ['might', 'will', 'won\'t'] },
      { id: 'vE-t1-q9', type: QuestionType.MCQ, prompt: 'He is very smart. He _______ pass the exam easily.', options: ['will', 'might not', 'won\'t'] },
      { id: 'vE-t1-q10', type: QuestionType.MCQ, prompt: 'If you don\'t wear a hat, you _______ get a headache from the sun.', options: ['might', 'will', 'won\'t'] },
    ]
  },
  {
    id: 'task-2',
    title: 'Task 2: Future Predictions',
    instruction: 'Choose: will, won\'t, might or might not.',
    questions: [
      { id: 'vE-t2-q1', type: QuestionType.MCQ, prompt: 'I _______ buy a new laptop this month. I don\'t have enough money.', options: ['won\'t', 'might', 'will'] },
      { id: 'vE-t2-q2', type: QuestionType.MCQ, prompt: 'Take your umbrella. It _______ rain later.', options: ['will', 'might', 'won\'t'] },
      { id: 'vE-t2-q3', type: QuestionType.MCQ, prompt: 'If we leave now, we _______ catch the train.', options: ['will', 'might not', 'won\'t'] },
      { id: 'vE-t2-q4', type: QuestionType.MCQ, prompt: 'She _______ come to the party. She is feeling a bit sick.', options: ['might not', 'will', 'won\'t'] },
      { id: 'vE-t2-q5', type: QuestionType.MCQ, prompt: 'The teacher _______ be angry if we are late again.', options: ['might', 'will', 'won\'t'] },
    ]
  },
  {
    id: 'task-3',
    title: 'Task 3: Past Simple vs Continuous',
    instruction: 'Complete with past simple or past continuous. (Write both verbs)',
    questions: [
        { id: 'vE-t3-q1', type: QuestionType.FILL_BLANK, prompt: 'While my father _______ (drive) to work, he _______ (see) an accident.' },
        { id: 'vE-t3-q2', type: QuestionType.FILL_BLANK, prompt: 'We _______ (have) dinner when the guests _______ (arrive).' },
        { id: 'vE-t3-q3', type: QuestionType.FILL_BLANK, prompt: 'She _______ (clean) the room when she _______ (find) her old photos.' },
        { id: 'vE-t3-q4', type: QuestionType.FILL_BLANK, prompt: 'I _______ (not/sleep) when you _______ (call) me last night.' },
        { id: 'vE-t3-q5', type: QuestionType.FILL_BLANK, prompt: 'What _______ (you / do) when the earthquake _______ (happen)?' },
    ]
  },
  {
    id: 'task-4',
    title: 'Task 4: Past Simple vs Continuous (Part 2)',
    instruction: 'Complete with past simple or past continuous.',
    questions: [
        { id: 'vE-t4-q1', type: QuestionType.FILL_BLANK, prompt: 'He _______ (break) his glass while he _______ (wash) the dishes.' },
        { id: 'vE-t4-q2', type: QuestionType.FILL_BLANK, prompt: 'The students _______ (write) an essay when the bell _______ (ring).' },
        { id: 'vE-t4-q3', type: QuestionType.FILL_BLANK, prompt: 'I _______ (meet) my cousin while I _______ (walk) in the park.' },
        { id: 'vE-t4-q4', type: QuestionType.FILL_BLANK, prompt: 'They _______ (not/listen), so they _______ (not/hear) the instructions.' },
        { id: 'vE-t4-q5', type: QuestionType.FILL_BLANK, prompt: 'While we _______ (wait) for the bus, it _______ (start) to snow.' },
    ]
  },
  {
    id: 'task-5',
    title: 'Task 5: Modals',
    instruction: 'Choose the correct modal verb.',
    questions: [
        { id: 'vE-t5-q1', type: QuestionType.MCQ, prompt: 'You _______ respect your teachers.', options: ['must', 'can'] },
        { id: 'vE-t5-q2', type: QuestionType.MCQ, prompt: 'I _______ wake up early on Sunday. It is a holiday.', options: ['have to', 'don\'t have to'] },
        { id: 'vE-t5-q3', type: QuestionType.MCQ, prompt: 'She _______ play the guitar very well.', options: ['can', 'must'] },
        { id: 'vE-t5-q4', type: QuestionType.MCQ, prompt: 'You _______ use your phone during the lesson.', options: ['mustn\'t', 'don\'t have to'] },
        { id: 'vE-t5-q5', type: QuestionType.MCQ, prompt: 'We _______ buy a ticket to enter the cinema.', options: ['can', 'have to'] },
        { id: 'vE-t5-q6', type: QuestionType.MCQ, prompt: 'He _______ drive a car. He doesn\'t have a license.', options: ['doesn\'t have to', 'can\'t'] },
        { id: 'vE-t5-q7', type: QuestionType.MCQ, prompt: 'You _______ help your mother with the housework.', options: ['must', 'can'] },
        { id: 'vE-t5-q8', type: QuestionType.MCQ, prompt: 'They _______ speak French, but they speak English.', options: ['can\'t', 'don\'t have to'] },
        { id: 'vE-t5-q9', type: QuestionType.MCQ, prompt: 'You _______ wash your hands before eating.', options: ['have to', 'can'] },
        { id: 'vE-t5-q10', type: QuestionType.MCQ, prompt: 'We _______ be late for the exam.', options: ['mustn\'t', 'don\'t have to'] },
    ]
  },
  {
    id: 'task-6',
    title: 'Task 6: Modals (Part 2)',
    instruction: 'Choose: must/mustn\'t, have to/don\'t have to, can/can\'t.',
    questions: [
        { id: 'vE-t6-q1', type: QuestionType.MCQ, prompt: 'I _______ lift this box. It is too heavy.', options: ['can', 'can\'t'] },
        { id: 'vE-t6-q2', type: QuestionType.MCQ, prompt: 'You _______ wear a seatbelt in the car.', options: ['must', 'don\'t have to'] },
        { id: 'vE-t6-q3', type: QuestionType.MCQ, prompt: 'We _______ make noise in the library.', options: ['mustn\'t', 'don\'t have to'] },
        { id: 'vE-t6-q4', type: QuestionType.MCQ, prompt: 'She _______ cook today. We are going to a restaurant.', options: ['doesn\'t have to', 'can\'t'] },
        { id: 'vE-t6-q5', type: QuestionType.MCQ, prompt: 'You _______ borrow my pen if you need it.', options: ['can', 'have to'] },
        { id: 'vE-t6-q6', type: QuestionType.MCQ, prompt: 'He _______ study hard to become a doctor.', options: ['has to', 'can'] },
        { id: 'vE-t6-q7', type: QuestionType.MCQ, prompt: 'Passengers _______ show their passport at the border.', options: ['must', 'can'] },
    ]
  },
  {
    id: 'task-7',
    title: 'Task 7: First Conditional',
    instruction: 'Complete the sentences.',
    questions: [
        { id: 'vE-t7-q1', type: QuestionType.FILL_BLANK, prompt: 'If it _______ (rain) tomorrow, we _______ (stay) home.' },
        { id: 'vE-t7-q2', type: QuestionType.FILL_BLANK, prompt: 'If she _______ (invite) me, I _______ (go) to the party.' },
        { id: 'vE-t7-q3', type: QuestionType.FILL_BLANK, prompt: 'We _______ (be) late if the bus _______ (not/come) soon.' },
        { id: 'vE-t7-q4', type: QuestionType.FILL_BLANK, prompt: 'If you _______ (not/do) your homework, the teacher _______ (be) angry.' },
        { id: 'vE-t7-q5', type: QuestionType.FILL_BLANK, prompt: 'He _______ (buy) a new car if he _______ (save) enough money.' },
    ]
  },
  {
    id: 'task-8',
    title: 'Task 8: Second Conditional',
    instruction: 'Complete the sentences.',
    questions: [
        { id: 'vE-t8-q1', type: QuestionType.FILL_BLANK, prompt: 'If I _______ (win) the lottery, I _______ (travel) the world.' },
        { id: 'vE-t8-q2', type: QuestionType.FILL_BLANK, prompt: 'If she _______ (be) taller, she _______ (play) basketball.' },
        { id: 'vE-t8-q3', type: QuestionType.FILL_BLANK, prompt: 'I _______ (buy) a big house if I _______ (be) a millionaire.' },
        { id: 'vE-t8-q4', type: QuestionType.FILL_BLANK, prompt: 'If we _______ (have) free time, we _______ (go) to the mountains.' },
        { id: 'vE-t8-q5', type: QuestionType.FILL_BLANK, prompt: 'He _______ (feel) better if he _______ (stop) smoking.' },
        { id: 'vE-t8-q6', type: QuestionType.FILL_BLANK, prompt: 'If I _______ (be) you, I _______ (take) that job.' },
        { id: 'vE-t8-q7', type: QuestionType.FILL_BLANK, prompt: 'They _______ (visit) us if they _______ (know) our address.' },
        { id: 'vE-t8-q8', type: QuestionType.FILL_BLANK, prompt: 'If you _______ (have) any superpower, what _______ (you / choose)?' },
    ]
  },
  {
    id: 'task-9',
    title: 'Task 9: Time Clauses',
    instruction: 'Complete with correct time clause option.',
    questions: [
        { id: 'vE-t9-q1', type: QuestionType.MCQ, prompt: 'I will call you _______ I arrive at the airport.', options: ['before', 'as soon as', 'if'] },
        { id: 'vE-t9-q2', type: QuestionType.MCQ, prompt: 'We will wait here _______ the rain stops.', options: ['until', 'when', 'before'] },
        { id: 'vE-t9-q3', type: QuestionType.MCQ, prompt: '_______ you leave the house, please lock the door.', options: ['After', 'Until', 'Before'] },
        { id: 'vE-t9-q4', type: QuestionType.MCQ, prompt: 'He will help you _______ he finishes his lunch.', options: ['if', 'after', 'until'] },
        { id: 'vE-t9-q5', type: QuestionType.MCQ, prompt: 'She watches TV _______ she does her homework.', options: ['before', 'after', 'until'] },
    ]
  },
  {
    id: 'task-10',
    title: 'Task 10 & 11: Passive Voice',
    instruction: 'Complete with correct Passive form.',
    questions: [
        { id: 'vE-t10-q1', type: QuestionType.FILL_BLANK, prompt: 'Navruz is a very popular holiday. It 1 _______ (celebrate) every year in March.' },
        { id: 'vE-t10-q2', type: QuestionType.FILL_BLANK, prompt: 'Sumalak 2 __________ (cook) by women for 24 hours.' },
        { id: 'vE-t10-q3', type: QuestionType.FILL_BLANK, prompt: 'Last year, a big concert 3 __________ (organize) in the city center.' },
        { id: 'vE-t10-q4', type: QuestionType.FILL_BLANK, prompt: 'Traditional songs 4 __________ (sing) by famous artists.' },
        { id: 'vE-t10-q5', type: QuestionType.FILL_BLANK, prompt: 'The streets 5 __________ (decorate) with flowers and flags.' },
        { id: 'vE-t10-q6', type: QuestionType.FILL_BLANK, prompt: 'Many guests 6 __________ (invite) to share the food.' },
        { id: 'vE-t10-q7', type: QuestionType.FILL_BLANK, prompt: 'Next year, more tourists 7 __________ (expect) to visit Uzbekistan for the festival.' },
        { id: 'vE-t10-q8', type: QuestionType.FILL_BLANK, prompt: 'The holiday 8 __________ (love) by everyone.' },
    ]
  },
  {
    id: 'task-12',
    title: 'Task 12 & 13: Used To',
    instruction: 'Complete with used to, didn\'t use to, or Did... use to?',
    questions: [
        { id: 'vE-t12-q1', type: QuestionType.FILL_BLANK, prompt: 'I _______ (play) with dolls, but now I don\'t.' },
        { id: 'vE-t12-q2', type: QuestionType.FILL_BLANK, prompt: '_______ you _______ (live) in a village?' },
        { id: 'vE-t12-q3', type: QuestionType.FILL_BLANK, prompt: 'My mother _______ (not/drive) a car, but now she drives every day.' },
        { id: 'vE-t12-q4', type: QuestionType.FILL_BLANK, prompt: 'We _______ (have) a cat, but it ran away.' },
        { id: 'vE-t12-q5', type: QuestionType.FILL_BLANK, prompt: 'He _______ (be) fat, but he lost weight.' },
        { id: 'vE-t12-q6', type: QuestionType.FILL_BLANK, prompt: 'People _______ (not/have) mobile phones 30 years ago.' },
    ]
  },
  {
    id: 'task-14',
    title: 'Task 14 & 15: Present Perfect',
    instruction: 'Rewrite using Present Perfect with FOR or SINCE.',
    questions: [
        { id: 'vE-t14-q1', type: QuestionType.SENTENCE_BUILDER, prompt: 'She / work / as a teacher / five years.' },
        { id: 'vE-t14-q2', type: QuestionType.SENTENCE_BUILDER, prompt: 'We / not see / that movie / ages.' },
        { id: 'vE-t14-q3', type: QuestionType.SENTENCE_BUILDER, prompt: 'He / live / in Samarkand / he was born.' },
        { id: 'vE-t14-q4', type: QuestionType.SENTENCE_BUILDER, prompt: 'They / have / this car / two months.' },
    ]
  },
  {
    id: 'task-16',
    title: 'Task 16 & 17: Make or Do',
    instruction: 'Fill in with MAKE or DO.',
    questions: [
        { id: 'vE-t16-q1', type: QuestionType.FILL_BLANK, prompt: 'I need to _______ a phone call.' },
        { id: 'vE-t16-q2', type: QuestionType.FILL_BLANK, prompt: 'Don\'t forget to ________ your homework.' },
        { id: 'vE-t16-q3', type: QuestionType.FILL_BLANK, prompt: 'Can you ________ a cup of coffee for me?' },
        { id: 'vE-t16-q4', type: QuestionType.FILL_BLANK, prompt: 'She always ________ a mess in her room.' },
        { id: 'vE-t16-q5', type: QuestionType.FILL_BLANK, prompt: 'He wants to ________ business in China.' },
        { id: 'vE-t16-q6', type: QuestionType.FILL_BLANK, prompt: 'You should ________ exercise every morning.' },
        { id: 'vE-t16-q7', type: QuestionType.FILL_BLANK, prompt: 'It\'s hard to ________ a decision.' },
        { id: 'vE-t16-q8', type: QuestionType.FILL_BLANK, prompt: 'Don\'t ________ noise! I am sleeping.' },
        { id: 'vE-t16-q9', type: QuestionType.FILL_BLANK, prompt: 'She ________ her best to help us.' },
        { id: 'vE-t16-q10', type: QuestionType.FILL_BLANK, prompt: 'I made a cake, but I didn\'t ________ the dishes.' },
    ]
  },
  {
    id: 'task-19',
    title: 'Task 19: Transport & City',
    instruction: 'Complete with: pollution / convenient / traffic jams / public transport / passengers',
    questions: [
        { id: 'vE-t19-q1', type: QuestionType.FILL_BLANK, prompt: 'In big cities, air 1 __________ is a serious problem.' },
        { id: 'vE-t19-q2', type: QuestionType.FILL_BLANK, prompt: 'To solve this, people should use 2 __________ like buses and trains.' },
        { id: 'vE-t19-q3', type: QuestionType.FILL_BLANK, prompt: 'However, during rush hour, there are terrible 3 __________.' },
        { id: 'vE-t19-q4', type: QuestionType.FILL_BLANK, prompt: 'The metro is more 4 __________ because it is fast and clean.' },
        { id: 'vE-t19-q5', type: QuestionType.FILL_BLANK, prompt: 'But sometimes there are too many 5 __________ and you have to stand.' },
    ]
  },
  {
    id: 'task-21',
    title: 'Task 21 & 22: Prepositions',
    instruction: 'Complete the sentences with correct prepositions.',
    questions: [
        { id: 'vE-t21-q1', type: QuestionType.FILL_BLANK, prompt: 'I am waiting _______ the bus.' },
        { id: 'vE-t21-q2', type: QuestionType.FILL_BLANK, prompt: 'She is good ______ math.' },
        { id: 'vE-t21-q3', type: QuestionType.FILL_BLANK, prompt: 'He is afraid ______ dogs.' },
        { id: 'vE-t21-q4', type: QuestionType.FILL_BLANK, prompt: 'They are interested ______ learning English.' },
        { id: 'vE-t21-q5', type: QuestionType.FILL_BLANK, prompt: 'This book belongs ______ the library.' },
        { id: 'vE-t21-q6', type: QuestionType.FILL_BLANK, prompt: 'I agree ______ you.' },
        { id: 'vE-t21-q7', type: QuestionType.FILL_BLANK, prompt: 'The exam consists ______ listening and reading.' },
        { id: 'vE-t21-q8', type: QuestionType.FILL_BLANK, prompt: 'What happened ______ your phone?' },
    ]
  },
  {
    id: 'task-23',
    title: 'Task 23: Phrasal Verbs',
    instruction: 'Choose: give up / turn off / grow up / find out / carry on',
    questions: [
        { id: 'vE-t23-q1', type: QuestionType.DROPDOWN, prompt: 'Please __________ the light when you leave.', options: ['give up', 'turn off', 'grow up', 'find out', 'carry on'] },
        { id: 'vE-t23-q2', type: QuestionType.DROPDOWN, prompt: 'I want to __________ when the football match starts.', options: ['give up', 'turn off', 'grow up', 'find out', 'carry on'] },
        { id: 'vE-t23-q3', type: QuestionType.DROPDOWN, prompt: 'Don\'t __________! Keep trying!', options: ['give up', 'turn off', 'grow up', 'find out', 'carry on'] },
        { id: 'vE-t23-q4', type: QuestionType.DROPDOWN, prompt: 'When I __________, I want to be a pilot.', options: ['give up', 'turn off', 'grow up', 'find out', 'carry on'] },
        { id: 'vE-t23-q5', type: QuestionType.DROPDOWN, prompt: 'He was tired, but he decided to __________ working.', options: ['give up', 'turn off', 'grow up', 'find out', 'carry on'] },
    ]
  },
  {
    id: 'task-24',
    title: 'Task 24: Linking Words',
    instruction: 'Select the correct linking word.',
    questions: [
        { id: 'vE-t24-q1', type: QuestionType.MCQ, prompt: '_______ it was raining, we went for a walk.', options: ['Although', 'However'] },
        { id: 'vE-t24-q2', type: QuestionType.MCQ, prompt: 'I like ice cream, _______ I don\'t eat it in winter.', options: ['but', 'despite'] },
        { id: 'vE-t24-q3', type: QuestionType.MCQ, prompt: '_______ being sick, he came to school.', options: ['In spite of', 'Even though'] },
        { id: 'vE-t24-q4', type: QuestionType.MCQ, prompt: 'The hotel was nice. _______, the food was bad.', options: ['However', 'Although'] },
        { id: 'vE-t24-q5', type: QuestionType.MCQ, prompt: '_______ the traffic, we arrived on time.', options: ['Despite', 'But'] },
    ]
  },
  {
    id: 'task-writing',
    title: 'Topic: Healthy Lifestyle',
    instruction: 'Write 80-100 words. Diet/Exercise/Habits.',
    questions: [
        {
            id: 'vE-writing-1',
            type: QuestionType.WRITING,
            prompt: 'Start like this: Nowadays, many people want to have a healthy lifestyle. It is very important because...',
            subPrompt: 'Write your essay below.'
        }
    ]
  }
];

export const EXAM_VERSIONS: Record<string, ExamPageData[]> = {
  'A': createPages('version-A', VERSION_A_TASKS),
  'B': createPages('version-B', VERSION_B_TASKS),
  'C': createPages('version-C', VERSION_C_TASKS),
  'D': createPages('version-D', VERSION_D_TASKS),
  'E': createPages('version-E', VERSION_E_TASKS),
};

// Default export for backward compatibility if needed, though App.tsx will now use EXAM_VERSIONS
export const EXAM_PAGES = EXAM_VERSIONS['E']; 
