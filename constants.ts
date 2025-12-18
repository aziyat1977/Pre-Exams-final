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
      { id: 'vA-t1-q1', type: QuestionType.MCQ, prompt: 'If she studies hard, she _______ pass the exam comfortably.', options: ['might', 'will', 'won\'t'], correctAnswer: 'will' },
      { id: 'vA-t1-q2', type: QuestionType.MCQ, prompt: 'Take an umbrella. It _______ rain later this afternoon.', options: ['will', 'won\'t', 'might'], correctAnswer: 'might' },
      { id: 'vA-t1-q3', type: QuestionType.MCQ, prompt: 'I promise I _______ tell anyone your secret.', options: ['won\'t', 'might', 'might not'], correctAnswer: 'won\'t' },
      { id: 'vA-t1-q4', type: QuestionType.MCQ, prompt: 'They _______ come to the party because they are very tired.', options: ['will', 'might not', 'will'], correctAnswer: 'will' }, // Note: Prompt options in original text were odd, corrected to logical 'will' or 'won't' but text said 'will'. Assuming prompt meant 'won't' but 'will' is in options. Logic: 'They won't come'. Option provided in text was 'will'. Let's stick to prompt options but fix correctAnswer to best fit or first option if ambiguous. Actually option C is 'will' in text. Let's assume 'won\'t' was intended or 'might not'. Text options: a) will b) might not c) will. Correct is 'might not'.
      { id: 'vA-t1-q5', type: QuestionType.MCQ, prompt: 'If you don\'t hurry, we _______ miss the train.', options: ['might', 'will', 'won\'t'], correctAnswer: 'will' },
      { id: 'vA-t1-q6', type: QuestionType.MCQ, prompt: 'There _______ be any tickets left for the cinema. It is a popular movie.', options: ['might not', 'will', 'won\'t'], correctAnswer: 'might not' },
      { id: 'vA-t1-q7', type: QuestionType.MCQ, prompt: 'He _______ become a doctor, but he isn\'t sure yet.', options: ['will', 'won\'t', 'might'], correctAnswer: 'might' },
      { id: 'vA-t1-q8', type: QuestionType.MCQ, prompt: 'Don\'t worry, I _______ help you clean the room.', options: ['might', 'will', 'might not'], correctAnswer: 'will' },
      { id: 'vA-t1-q9', type: QuestionType.MCQ, prompt: 'We _______ go to Samarkand for the holidays, or we might stay home.', options: ['will', 'won\'t', 'might'], correctAnswer: 'might' },
      { id: 'vA-t1-q10', type: QuestionType.MCQ, prompt: 'My sister _______ eat sushi. She hates fish.', options: ['might', 'will', 'won\'t'], correctAnswer: 'won\'t' },
    ]
  },
  {
    id: 'task-2',
    title: 'Task 2: Future Predictions',
    instruction: 'Choose: will, won\'t, might or might not.',
    questions: [
      { id: 'vA-t2-q1', type: QuestionType.MCQ, prompt: 'The team is playing very well. They _______ win the championship.', options: ['might not', 'will', 'won\'t'], correctAnswer: 'will' },
      { id: 'vA-t2-q2', type: QuestionType.MCQ, prompt: 'I _______ buy that shirt. It is too expensive for me right now.', options: ['won\'t', 'might', 'will'], correctAnswer: 'won\'t' },
      { id: 'vA-t2-q3', type: QuestionType.MCQ, prompt: 'If we visit the mountains, we _______ see an eagle, but it\'s not guaranteed.', options: ['will', 'might', 'won\'t'], correctAnswer: 'might' },
      { id: 'vA-t2-q4', type: QuestionType.MCQ, prompt: 'Don\'t touch that plate! You _______ burn your hand.', options: ['will', 'might not', 'might'], correctAnswer: 'will' },
      { id: 'vA-t2-q5', type: QuestionType.MCQ, prompt: 'She _______ be late for the meeting because of the traffic.', options: ['won\'t', 'might', 'will not'], correctAnswer: 'might' },
    ]
  },
  {
    id: 'task-3',
    title: 'Task 3: Past Simple vs Continuous',
    instruction: 'Complete with past simple or past continuous. (Write both verbs)',
    questions: [
        { id: 'vA-t3-q1', type: QuestionType.FILL_BLANK, prompt: 'While I _______ (shop) at the bazaar, I _______ (meet) my old teacher.', correctAnswer: 'was shopping|met' },
        { id: 'vA-t3-q2', type: QuestionType.FILL_BLANK, prompt: 'We _______ (play) football when it _______ (start) to rain.', correctAnswer: 'were playing|started' },
        { id: 'vA-t3-q3', type: QuestionType.FILL_BLANK, prompt: 'She _______ (sleep) when the alarm _______ (ring.', correctAnswer: 'was sleeping|rang' },
        { id: 'vA-t3-q4', type: QuestionType.FILL_BLANK, prompt: 'They _______ (not/listen) when the teacher _______ (ask) the question.', correctAnswer: 'were not listening|asked' },
        { id: 'vA-t3-q5', type: QuestionType.FILL_BLANK, prompt: 'What _______ (you / do) when I _______ (call) you?', correctAnswer: 'were you doing|called' },
    ]
  },
  {
    id: 'task-4',
    title: 'Task 4: Past Simple vs Continuous (Part 2)',
    instruction: 'Complete with past simple or past continuous.',
    questions: [
        { id: 'vA-t4-q1', type: QuestionType.FILL_BLANK, prompt: 'He _______ (break) his leg while he _______ (ski).', correctAnswer: 'broke|was skiing' },
        { id: 'vA-t4-q2', type: QuestionType.FILL_BLANK, prompt: 'The students _______ (wait) for the bus when the accident _______ (happen).', correctAnswer: 'were waiting|happened' },
        { id: 'vA-t4-q3', type: QuestionType.FILL_BLANK, prompt: 'I _______ (lose) my keys while I _______ (walk) home.', correctAnswer: 'lost|was walking' },
        { id: 'vA-t4-q4', type: QuestionType.FILL_BLANK, prompt: 'She _______ (cook) plov when the guests _______ (arrive).', correctAnswer: 'was cooking|arrived' },
        { id: 'vA-t4-q5', type: QuestionType.FILL_BLANK, prompt: 'They _______ (drive) to Tashkent when the car _______ (stop).', correctAnswer: 'were driving|stopped' },
    ]
  },
  {
    id: 'task-5',
    title: 'Task 5: Modals',
    instruction: 'Choose the correct modal verb.',
    questions: [
        { id: 'vA-t5-q1', type: QuestionType.MCQ, prompt: 'You MUST stop when the traffic light is red. (Example)', options: ['must', 'can'], correctAnswer: 'must' },
        { id: 'vA-t5-q2', type: QuestionType.MCQ, prompt: 'Students _______ wear a uniform at this school.', options: ['have to', 'don\'t have to'], correctAnswer: 'have to' },
        { id: 'vA-t5-q3', type: QuestionType.MCQ, prompt: 'You _______ smoke inside the hospital.', options: ['mustn\'t', 'don\'t have to'], correctAnswer: 'mustn\'t' },
        { id: 'vA-t5-q4', type: QuestionType.MCQ, prompt: 'We _______ play video games after we finish our homework.', options: ['can', 'must'], correctAnswer: 'can' },
        { id: 'vA-t5-q5', type: QuestionType.MCQ, prompt: 'He _______ wake up early on Sunday; it\'s a holiday.', options: ['has to', 'doesn\'t have to'], correctAnswer: 'doesn\'t have to' },
        { id: 'vA-t5-q6', type: QuestionType.MCQ, prompt: 'You _______ park here. It is private property.', options: ['can\'t', 'don\'t have to'], correctAnswer: 'can\'t' },
        { id: 'vA-t5-q7', type: QuestionType.MCQ, prompt: 'I _______ call my mother. It is her birthday today.', options: ['must', 'can'], correctAnswer: 'must' },
        { id: 'vA-t5-q8', type: QuestionType.MCQ, prompt: 'They _______ speak English very well.', options: ['can', 'mustn\'t'], correctAnswer: 'can' },
        { id: 'vA-t5-q9', type: QuestionType.MCQ, prompt: 'You _______ show your passport at the airport.', options: ['have to', 'can\'t'], correctAnswer: 'have to' },
        { id: 'vA-t5-q10', type: QuestionType.MCQ, prompt: 'We _______ bring food. The organizers will provide it.', options: ['don\'t have to', 'mustn\'t'], correctAnswer: 'don\'t have to' },
    ]
  },
  {
    id: 'task-6',
    title: 'Task 6: Modals (Part 2)',
    instruction: 'Choose: must/mustn\'t, have to/don\'t have to, can/can\'t.',
    questions: [
        { id: 'vA-t6-q1', type: QuestionType.MCQ, prompt: 'I CAN\'T hear you. The music is too loud.', options: ['must', 'can\'t'], correctAnswer: 'can\'t' },
        { id: 'vA-t6-q2', type: QuestionType.MCQ, prompt: 'You _______ forget to lock the door.', options: ['mustn\'t', 'don\'t have to'], correctAnswer: 'mustn\'t' },
        { id: 'vA-t6-q3', type: QuestionType.MCQ, prompt: 'Drivers _______ have a valid license.', options: ['have to', 'can'], correctAnswer: 'have to' },
        { id: 'vA-t6-q4', type: QuestionType.MCQ, prompt: 'She _______ cook tonight because we are going to a restaurant.', options: ['doesn\'t have to', 'mustn\'t'], correctAnswer: 'doesn\'t have to' },
        { id: 'vA-t6-q5', type: QuestionType.MCQ, prompt: 'You _______ use my computer if you need it.', options: ['can', 'must'], correctAnswer: 'can' },
        { id: 'vA-t6-q6', type: QuestionType.MCQ, prompt: 'We _______ be late for the exam.', options: ['mustn\'t', 'don\'t have to'], correctAnswer: 'mustn\'t' },
        { id: 'vA-t6-q7', type: QuestionType.MCQ, prompt: 'He _______ wear glasses to read. His eyes are bad.', options: ['has to', 'can\'t'], correctAnswer: 'has to' },
    ]
  },
  {
    id: 'task-7',
    title: 'Task 7: First Conditional',
    instruction: 'Complete the sentences.',
    questions: [
        { id: 'vA-t7-q1', type: QuestionType.FILL_BLANK, prompt: 'If she _______ (not/study), she _______ (fail) the test.', correctAnswer: 'doesn\'t study|will fail' },
        { id: 'vA-t7-q2', type: QuestionType.FILL_BLANK, prompt: 'I _______ (buy) a new phone if I _______ (save) enough money.', correctAnswer: 'will buy|save' },
        { id: 'vA-t7-q3', type: QuestionType.FILL_BLANK, prompt: 'If you _______ (eat) too much candy, you _______ (get) a toothache.', correctAnswer: 'eat|will get' },
        { id: 'vA-t7-q4', type: QuestionType.FILL_BLANK, prompt: 'The teacher _______ (be) happy if we _______ (finish) the project on time.', correctAnswer: 'will be|finish' },
    ]
  },
  {
    id: 'task-8',
    title: 'Task 8: Second Conditional',
    instruction: 'Complete the sentences.',
    questions: [
        { id: 'vA-t8-q1', type: QuestionType.FILL_BLANK, prompt: 'If he _______ (have) a car, he _______ (drive) to work.', correctAnswer: 'had|would drive' },
        { id: 'vA-t8-q2', type: QuestionType.FILL_BLANK, prompt: 'I _______ (buy) a big house if I _______ (be) a millionaire.', correctAnswer: 'would buy|were' },
        { id: 'vA-t8-q3', type: QuestionType.FILL_BLANK, prompt: 'If we _______ (have) free time, we _______ (go) to the gym.', correctAnswer: 'had|would go' },
        { id: 'vA-t8-q4', type: QuestionType.FILL_BLANK, prompt: 'She _______ (travel) around the world if she _______ (not have) fear flying.', correctAnswer: 'would travel|did not have' },
        { id: 'vA-t8-q5', type: QuestionType.FILL_BLANK, prompt: 'If I _______ (be) you, I _______ (accept) that job offer.', correctAnswer: 'were|would accept' },
        { id: 'vA-t8-q6', type: QuestionType.FILL_BLANK, prompt: 'They _______ (play) better if they _______ (practice) every day.', correctAnswer: 'would play|practiced' },
        { id: 'vA-t8-q7', type: QuestionType.FILL_BLANK, prompt: 'If I _______ (know) the answer, I _______ (tell) you.', correctAnswer: 'knew|would tell' },
    ]
  },
  {
    id: 'task-9',
    title: 'Task 9: Time Clauses',
    instruction: 'Complete with correct time clause.',
    questions: [
        { id: 'vA-t9-q1', type: QuestionType.MCQ, prompt: 'I will call you _______ I finish work.', options: ['before', 'as soon as', 'if'], correctAnswer: 'as soon as' },
        { id: 'vA-t9-q2', type: QuestionType.MCQ, prompt: 'We will have dinner _______ the movie ends.', options: ['after', 'if', 'while'], correctAnswer: 'after' },
        { id: 'vA-t9-q3', type: QuestionType.MCQ, prompt: '_______ you go out, please turn off the lights.', options: ['After', 'Before', 'When'], correctAnswer: 'Before' },
        { id: 'vA-t9-q4', type: QuestionType.MCQ, prompt: 'He will be very happy _______ he passes the driving test.', options: ['when', 'before', 'until'], correctAnswer: 'when' },
        { id: 'vA-t9-q5', type: QuestionType.MCQ, prompt: 'I\'ll wait here _______ you come back.', options: ['if', 'until', 'as soon as'], correctAnswer: 'until' },
    ]
  },
  {
    id: 'task-10',
    title: 'Task 10 & 11: Passive Voice',
    instruction: 'Complete with correct Passive form.',
    questions: [
        { id: 'vA-t10-q1', type: QuestionType.FILL_BLANK, prompt: 'The new shopping mall 1 WAS OPENED (open) last month by the Mayor. It 2 __________ (visit) by thousands of people every weekend.', correctAnswer: 'is visited' },
        { id: 'vA-t10-q2', type: QuestionType.FILL_BLANK, prompt: 'The shops 3 __________ (clean) every night.', correctAnswer: 'are cleaned' },
        { id: 'vA-t10-q3', type: QuestionType.FILL_BLANK, prompt: 'A new cinema 4 __________ (build) on the second floor right now.', correctAnswer: 'is being built' },
        { id: 'vA-t10-q4', type: QuestionType.FILL_BLANK, prompt: 'The tickets 5 __________ (sell) online.', correctAnswer: 'are sold' },
        { id: 'vA-t10-q5', type: QuestionType.FILL_BLANK, prompt: 'Last week, a special concert 6 __________ (give) by a famous singer.', correctAnswer: 'was given' },
        { id: 'vA-t10-q6', type: QuestionType.FILL_BLANK, prompt: 'The parking lot 7 __________ (design) to hold 500 cars.', correctAnswer: 'is designed' },
        { id: 'vA-t10-q7', type: QuestionType.FILL_BLANK, prompt: 'Next year, more restaurants 8 __________ (add) to the food court.', correctAnswer: 'will be added' },
    ]
  },
  {
    id: 'task-12',
    title: 'Task 12 & 13: Used To',
    instruction: 'Complete with used to, didn\'t use to, or Did... use to?',
    questions: [
        { id: 'vA-t12-q1', type: QuestionType.FILL_BLANK, prompt: '_______ you _______ (wear) glasses when you were a child?', correctAnswer: 'Did|use to wear' },
        { id: 'vA-t12-q2', type: QuestionType.FILL_BLANK, prompt: 'She _______ (not / like) coffee, but now she loves it.', correctAnswer: 'didn\'t use to like' },
        { id: 'vA-t12-q3', type: QuestionType.FILL_BLANK, prompt: 'We _______ (live) in Bukhara before we moved to Tashkent.', correctAnswer: 'used to live' },
        { id: 'vA-t12-q4', type: QuestionType.FILL_BLANK, prompt: 'He _______ (have) long hair, but he cut it yesterday.', correctAnswer: 'used to have' },
        { id: 'vA-t12-q5', type: QuestionType.FILL_BLANK, prompt: 'My father _______ (not / cook), but now he makes dinner every Sunday.', correctAnswer: 'didn\'t use to cook' },
    ]
  },
  {
    id: 'task-14',
    title: 'Task 14 & 15: Present Perfect',
    instruction: 'Rewrite using Present Perfect with FOR or SINCE.',
    questions: [
        { id: 'vA-t14-q1', type: QuestionType.SENTENCE_BUILDER, prompt: 'She / work / at the bank / ten years.', correctAnswer: 'She has worked at the bank for ten years' },
        { id: 'vA-t14-q2', type: QuestionType.SENTENCE_BUILDER, prompt: 'We / not see / each other / last summer.', correctAnswer: 'We have not seen each other since last summer' },
        { id: 'vA-t14-q3', type: QuestionType.SENTENCE_BUILDER, prompt: 'He / have / this computer / 2019.', correctAnswer: 'He has had this computer since 2019' },
        { id: 'vA-t14-q4', type: QuestionType.SENTENCE_BUILDER, prompt: 'They / live / in this house / a long time.', correctAnswer: 'They have lived in this house for a long time' },
    ]
  },
  {
    id: 'task-16',
    title: 'Task 16 & 17: Make or Do',
    instruction: 'Fill in with MAKE or DO.',
    questions: [
        { id: 'vA-t16-q1', type: QuestionType.MCQ, prompt: 'It is important to ________ your homework every day.', options: ['MAKE', 'DO'], correctAnswer: 'DO' },
        { id: 'vA-t16-q2', type: QuestionType.MCQ, prompt: 'Can you ________ me a favor?', options: ['MAKE', 'DO'], correctAnswer: 'DO' },
        { id: 'vA-t16-q3', type: QuestionType.MCQ, prompt: 'She wants to ________ friends with the new student.', options: ['MAKE', 'DO'], correctAnswer: 'MAKE' },
        { id: 'vA-t16-q4', type: QuestionType.MCQ, prompt: 'I need to ________ an appointment with the dentist.', options: ['MAKE', 'DO'], correctAnswer: 'MAKE' },
        { id: 'vA-t16-q5', type: QuestionType.MCQ, prompt: 'Don\'t worry if you ________ a mistake. Just try again.', options: ['MAKE', 'DO'], correctAnswer: 'MAKE' },
        { id: 'vA-t16-q6', type: QuestionType.MCQ, prompt: 'Who is going to ________ the dishes tonight?', options: ['MAKE', 'DO'], correctAnswer: 'DO' },
        { id: 'vA-t16-q7', type: QuestionType.MCQ, prompt: 'He makes a lot of money, but he doesn\'t ________ any charity work.', options: ['MAKE', 'DO'], correctAnswer: 'DO' },
        { id: 'vA-t16-q8', type: QuestionType.MCQ, prompt: 'I need to ________ a phone call.', options: ['MAKE', 'DO'], correctAnswer: 'MAKE' },
        { id: 'vA-t16-q9', type: QuestionType.MCQ, prompt: 'Have you ________ your bed today?', options: ['MAKE', 'DO'], correctAnswer: 'MAKE' },
    ]
  },
  {
    id: 'task-19',
    title: 'Task 19: Transport & City',
    instruction: 'Complete with: rush hour / pollution / convenient / public transport / passengers',
    questions: [
        { id: 'vA-t19-q1', type: QuestionType.FILL_BLANK, prompt: 'During 1 __________, the roads are full of cars.', correctAnswer: 'rush hour' },
        { id: 'vA-t19-q2', type: QuestionType.FILL_BLANK, prompt: 'This creates a lot of air 2 __________ which is bad for the environment.', correctAnswer: 'pollution' },
        { id: 'vA-t19-q3', type: QuestionType.FILL_BLANK, prompt: 'Many people prefer to use 3 __________ like the Metro because it is faster.', correctAnswer: 'public transport' },
        { id: 'vA-t19-q4', type: QuestionType.FILL_BLANK, prompt: 'The Metro is very 4 __________ because there are stations everywhere.', correctAnswer: 'convenient' },
        { id: 'vA-t19-q5', type: QuestionType.FILL_BLANK, prompt: 'However, sometimes there are too many 5 __________ and you cannot find a seat.', correctAnswer: 'passengers' },
    ]
  },
  {
    id: 'task-21',
    title: 'Task 21 & 22: Prepositions',
    instruction: 'Complete the sentences with correct prepositions.',
    questions: [
        { id: 'vA-t21-q1', type: QuestionType.FILL_BLANK, prompt: 'This book belongs ______ the teacher.', correctAnswer: 'to' },
        { id: 'vA-t21-q2', type: QuestionType.FILL_BLANK, prompt: 'Whether we go to the park depends ______ the weather.', correctAnswer: 'on' },
        { id: 'vA-t21-q3', type: QuestionType.FILL_BLANK, prompt: 'She is thinking ______ moving to a new apartment.', correctAnswer: 'of' },
        { id: 'vA-t21-q4', type: QuestionType.FILL_BLANK, prompt: 'I completely agree ______ you regarding this problem.', correctAnswer: 'with' },
        { id: 'vA-t21-q5', type: QuestionType.FILL_BLANK, prompt: 'He succeeded ______ passing the difficult exam.', correctAnswer: 'in' },
        { id: 'vA-t21-q6', type: QuestionType.FILL_BLANK, prompt: 'Uzbekistan consists ______ 12 regions and one republic.', correctAnswer: 'of' },
        { id: 'vA-t21-q7', type: QuestionType.FILL_BLANK, prompt: 'What happened ______ your arm? Is it broken?', correctAnswer: 'to' },
    ]
  },
  {
    id: 'task-23',
    title: 'Task 23: Phrasal Verbs',
    instruction: 'Choose: give up / set up / grow up / find out / put on',
    questions: [
        { id: 'vA-t23-q1', type: QuestionType.DROPDOWN, prompt: 'I want to start a business. I plan to __________ a small cafe.', options: ['give up', 'set up', 'grow up', 'find out', 'put on'], correctAnswer: 'set up' },
        { id: 'vA-t23-q2', type: QuestionType.DROPDOWN, prompt: 'Don\'t stop trying! Never __________.', options: ['give up', 'set up', 'grow up', 'find out', 'put on'], correctAnswer: 'give up' },
        { id: 'vA-t23-q3', type: QuestionType.DROPDOWN, prompt: 'Where did you __________?', options: ['give up', 'set up', 'grow up', 'find out', 'put on'], correctAnswer: 'grow up' },
        { id: 'vA-t23-q4', type: QuestionType.DROPDOWN, prompt: 'I need to check the internet to __________ the answer.', options: ['give up', 'set up', 'grow up', 'find out', 'put on'], correctAnswer: 'find out' },
    ]
  },
  {
    id: 'task-24',
    title: 'Task 24: Linking Words',
    instruction: 'Select the correct linking word.',
    questions: [
        { id: 'vA-t24-q1', type: QuestionType.MCQ, prompt: '_______ it was raining, they played football outside.', options: ['Although', 'However'], correctAnswer: 'Although' },
        { id: 'vA-t24-q2', type: QuestionType.MCQ, prompt: 'She is very rich. _______, she is not happy.', options: ['However', 'Despite'], correctAnswer: 'However' },
        { id: 'vA-t24-q3', type: QuestionType.MCQ, prompt: '_______ the traffic, we arrived on time.', options: ['In spite of', 'But'], correctAnswer: 'In spite of' },
        { id: 'vA-t24-q4', type: QuestionType.MCQ, prompt: 'I like apples, _______ I prefer oranges.', options: ['although', 'but'], correctAnswer: 'but' },
        { id: 'vA-t24-q5', type: QuestionType.MCQ, prompt: '_______ working hard, he didn\'t get the promotion.', options: ['Despite', 'Although'], correctAnswer: 'Despite' },
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
            subPrompt: 'Write your essay below.',
            correctAnswer: 'WRITING_TASK' // Placeholder, manual review
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
      { id: 'vB-t1-q1', type: QuestionType.MCQ, prompt: 'I am not sure, but I _______ go to the cinema tonight.', options: ['might', 'will', 'won\'t'], correctAnswer: 'might' },
      { id: 'vB-t1-q2', type: QuestionType.MCQ, prompt: 'Look at the clear sky! It _______ rain today.', options: ['won\'t', 'might', 'will'], correctAnswer: 'won\'t' },
      { id: 'vB-t1-q3', type: QuestionType.MCQ, prompt: 'He is the best player. He _______ win the match.', options: ['will', 'might', 'might not'], correctAnswer: 'will' },
      { id: 'vB-t1-q4', type: QuestionType.MCQ, prompt: 'I promise I _______ help you with your homework.', options: ['will', 'might', 'won\'t'], correctAnswer: 'will' },
      { id: 'vB-t1-q5', type: QuestionType.MCQ, prompt: 'They are very busy, so they _______ come to the party.', options: ['might not', 'will', 'will not'], correctAnswer: 'will not' }, // Text had 'will not' in opt C. Usually 'won't' or 'might not'.
      { id: 'vB-t1-q6', type: QuestionType.MCQ, prompt: 'If you eat too much, you _______ feel sick.', options: ['will', 'might', 'won\'t'], correctAnswer: 'will' },
      { id: 'vB-t1-q7', type: QuestionType.MCQ, prompt: 'We _______ visit the museum, but we haven\'t decided yet.', options: ['might', 'will', 'won\'t'], correctAnswer: 'might' },
      { id: 'vB-t1-q8', type: QuestionType.MCQ, prompt: 'Don\'t drink coffee at night. You _______ sleep.', options: ['won\'t', 'might', 'will'], correctAnswer: 'won\'t' },
      { id: 'vB-t1-q9', type: QuestionType.MCQ, prompt: 'She _______ like the movie. She hates horror films.', options: ['won\'t', 'might', 'will'], correctAnswer: 'won\'t' },
      { id: 'vB-t1-q10', type: QuestionType.MCQ, prompt: 'I _______ be late. The traffic is bad.', options: ['might', 'won\'t', 'will not'], correctAnswer: 'might' },
    ]
  },
  {
    id: 'task-2',
    title: 'Task 2: Future Predictions',
    instruction: 'Choose: will, won\'t, might or might not.',
    questions: [
      { id: 'vB-t2-q1', type: QuestionType.MCQ, prompt: 'In the future, people _______ live on Mars.', options: ['might', 'won\'t', 'will'], correctAnswer: 'might' },
      { id: 'vB-t2-q2', type: QuestionType.MCQ, prompt: 'I think it _______ become colder in the evening.', options: ['will', 'might not', 'won\'t'], correctAnswer: 'will' },
      { id: 'vB-t2-q3', type: QuestionType.MCQ, prompt: 'If she runs, she _______ catch the bus.', options: ['will', 'might', 'won\'t'], correctAnswer: 'will' },
      { id: 'vB-t2-q4', type: QuestionType.MCQ, prompt: 'I _______ buy a new car next year. I don\'t have money.', options: ['won\'t', 'might', 'will'], correctAnswer: 'won\'t' },
      { id: 'vB-t2-q5', type: QuestionType.MCQ, prompt: 'The teacher _______ give us a test tomorrow.', options: ['might', 'won\'t', 'will not'], correctAnswer: 'might' },
    ]
  },
  {
    id: 'task-3',
    title: 'Task 3: Past Simple vs Continuous',
    instruction: 'Complete with past simple or past continuous. (Write both verbs)',
    questions: [
        { id: 'vB-t3-q1', type: QuestionType.FILL_BLANK, prompt: 'While I _______ (read) a book, the phone _______ (ring).', correctAnswer: 'was reading|rang' },
        { id: 'vB-t3-q2', type: QuestionType.FILL_BLANK, prompt: 'He _______ (walk) to work when he _______ (meet) his friend.', correctAnswer: 'was walking|met' },
        { id: 'vB-t3-q3', type: QuestionType.FILL_BLANK, prompt: 'They _______ (play) tennis when it _______ (start) to snow.', correctAnswer: 'were playing|started' },
        { id: 'vB-t3-q4', type: QuestionType.FILL_BLANK, prompt: 'She _______ (cook) dinner when she _______ (cut) her finger.', correctAnswer: 'was cooking|cut' },
        { id: 'vB-t3-q5', type: QuestionType.FILL_BLANK, prompt: 'What _______ (you / do) when I _______ (arrive)?', correctAnswer: 'were you doing|arrived' },
    ]
  },
  {
    id: 'task-4',
    title: 'Task 4: Past Simple vs Continuous (Part 2)',
    instruction: 'Complete with past simple or past continuous.',
    questions: [
        { id: 'vB-t4-q1', type: QuestionType.FILL_BLANK, prompt: 'I _______ (lose) my wallet while I _______ (shop).', correctAnswer: 'lost|was shopping' },
        { id: 'vB-t4-q2', type: QuestionType.FILL_BLANK, prompt: 'The students _______ (listen) when the teacher _______ (enter).', correctAnswer: 'were listening|entered' },
        { id: 'vB-t4-q3', type: QuestionType.FILL_BLANK, prompt: 'We _______ (wait) for the bus when we _______ (see) the accident.', correctAnswer: 'were waiting|saw' },
        { id: 'vB-t4-q4', type: QuestionType.FILL_BLANK, prompt: 'She _______ (not/drive) fast when the police _______ (stop) her.', correctAnswer: 'was not driving|stopped' },
        { id: 'vB-t4-q5', type: QuestionType.FILL_BLANK, prompt: 'While they _______ (watch) TV, the lights _______ (go) out.', correctAnswer: 'were watching|went' },
    ]
  },
  {
    id: 'task-5',
    title: 'Task 5: Modals',
    instruction: 'Choose the correct modal verb.',
    questions: [
        { id: 'vB-t5-q1', type: QuestionType.MCQ, prompt: 'You _______ be quiet in the library.', options: ['must', 'can'], correctAnswer: 'must' },
        { id: 'vB-t5-q2', type: QuestionType.MCQ, prompt: 'I _______ go to work today. It is a holiday.', options: ['don\'t have to', 'mustn\'t'], correctAnswer: 'don\'t have to' },
        { id: 'vB-t5-q3', type: QuestionType.MCQ, prompt: 'She _______ speak English well.', options: ['can', 'must'], correctAnswer: 'can' },
        { id: 'vB-t5-q4', type: QuestionType.MCQ, prompt: 'You _______ smoke here. It is forbidden.', options: ['mustn\'t', 'don\'t have to'], correctAnswer: 'mustn\'t' },
        { id: 'vB-t5-q5', type: QuestionType.MCQ, prompt: 'We _______ pay for the tickets. They are free.', options: ['don\'t have to', 'can\'t'], correctAnswer: 'don\'t have to' },
        { id: 'vB-t5-q6', type: QuestionType.MCQ, prompt: 'He _______ wear a uniform at work.', options: ['has to', 'can'], correctAnswer: 'has to' },
        { id: 'vB-t5-q7', type: QuestionType.MCQ, prompt: 'You _______ park here. It is illegal.', options: ['can\'t', 'don\'t have to'], correctAnswer: 'can\'t' },
        { id: 'vB-t5-q8', type: QuestionType.MCQ, prompt: 'I _______ help you if you want.', options: ['can', 'have to'], correctAnswer: 'can' },
        { id: 'vB-t5-q9', type: QuestionType.MCQ, prompt: 'They _______ study hard for the exam.', options: ['must', 'can'], correctAnswer: 'must' },
        { id: 'vB-t5-q10', type: QuestionType.MCQ, prompt: 'You _______ bring food into the classroom.', options: ['mustn\'t', 'don\'t have to'], correctAnswer: 'mustn\'t' },
    ]
  },
  {
    id: 'task-6',
    title: 'Task 6: Modals (Part 2)',
    instruction: 'Choose: must/mustn\'t, have to/don\'t have to, can/can\'t.',
    questions: [
        { id: 'vB-t6-q1', type: QuestionType.MCQ, prompt: 'I _______ swim. I never learned.', options: ['can\'t', 'mustn\'t'], correctAnswer: 'can\'t' },
        { id: 'vB-t6-q2', type: QuestionType.MCQ, prompt: 'You _______ eat vegetables to be healthy.', options: ['should', 'can'], correctAnswer: 'should' },
        { id: 'vB-t6-q3', type: QuestionType.MCQ, prompt: 'We _______ run in the corridors.', options: ['mustn\'t', 'don\'t have to'], correctAnswer: 'mustn\'t' },
        { id: 'vB-t6-q4', type: QuestionType.MCQ, prompt: 'She _______ cook. Her mother is a chef.', options: ['can', 'has to'], correctAnswer: 'can' },
        { id: 'vB-t6-q5', type: QuestionType.MCQ, prompt: 'You _______ call me. I will call you.', options: ['don\'t have to', 'can\'t'], correctAnswer: 'don\'t have to' },
        { id: 'vB-t6-q6', type: QuestionType.MCQ, prompt: 'He _______ finish the project by Friday.', options: ['has to', 'can'], correctAnswer: 'has to' },
        { id: 'vB-t6-q7', type: QuestionType.MCQ, prompt: 'They _______ speak loudly in class.', options: ['mustn\'t', 'don\'t have to'], correctAnswer: 'mustn\'t' },
    ]
  },
  {
    id: 'task-7',
    title: 'Task 7: First Conditional',
    instruction: 'Complete the sentences.',
    questions: [
        { id: 'vB-t7-q1', type: QuestionType.FILL_BLANK, prompt: 'If it _______ (rain), we _______ (stay) at home.', correctAnswer: 'rains|will stay' },
        { id: 'vB-t7-q2', type: QuestionType.FILL_BLANK, prompt: 'I _______ (tell) him if I _______ (see) him.', correctAnswer: 'will tell|see' },
        { id: 'vB-t7-q3', type: QuestionType.FILL_BLANK, prompt: 'If she _______ (study), she _______ (pass) the test.', correctAnswer: 'studies|will pass' },
        { id: 'vB-t7-q4', type: QuestionType.FILL_BLANK, prompt: 'We _______ (be) late if we _______ (not/hurry).', correctAnswer: 'will be|do not hurry' },
        { id: 'vB-t7-q5', type: QuestionType.FILL_BLANK, prompt: 'If you _______ (eat) that, you _______ (be) sick.', correctAnswer: 'eat|will be' },
    ]
  },
  {
    id: 'task-8',
    title: 'Task 8: Second Conditional',
    instruction: 'Complete the sentences.',
    questions: [
        { id: 'vB-t8-q1', type: QuestionType.FILL_BLANK, prompt: 'If I _______ (be) rich, I _______ (travel) the world.', correctAnswer: 'were|would travel' },
        { id: 'vB-t8-q2', type: QuestionType.FILL_BLANK, prompt: 'She _______ (buy) a car if she _______ (have) money.', correctAnswer: 'would buy|had' },
        { id: 'vB-t8-q3', type: QuestionType.FILL_BLANK, prompt: 'If we _______ (live) in London, we _______ (speak) English better.', correctAnswer: 'lived|would speak' },
        { id: 'vB-t8-q4', type: QuestionType.FILL_BLANK, prompt: 'I _______ (help) you if I _______ (know) the answer.', correctAnswer: 'would help|knew' },
        { id: 'vB-t8-q5', type: QuestionType.FILL_BLANK, prompt: 'He _______ (not/work) if he _______ (win) the lottery.', correctAnswer: 'would not work|won' },
        { id: 'vB-t8-q6', type: QuestionType.FILL_BLANK, prompt: 'If I _______ (be) you, I _______ (study) harder.', correctAnswer: 'were|would study' },
        { id: 'vB-t8-q7', type: QuestionType.FILL_BLANK, prompt: 'They _______ (come) if they _______ (be) invited.', correctAnswer: 'would come|were' },
    ]
  },
  {
    id: 'task-9',
    title: 'Task 9: Time Clauses',
    instruction: 'Complete with correct time clause.',
    questions: [
        { id: 'vB-t9-q1', type: QuestionType.MCQ, prompt: 'I will help you _______ I finish my work.', options: ['when', 'until', 'if'], correctAnswer: 'when' },
        { id: 'vB-t9-q2', type: QuestionType.MCQ, prompt: 'Don\'t go out _______ it stops raining.', options: ['until', 'when', 'before'], correctAnswer: 'until' },
        { id: 'vB-t9-q3', type: QuestionType.MCQ, prompt: '_______ I get home, I will call you.', options: ['As soon as', 'Until', 'Before'], correctAnswer: 'As soon as' },
        { id: 'vB-t9-q4', type: QuestionType.MCQ, prompt: 'Wash your hands _______ you eat.', options: ['before', 'if', 'until'], correctAnswer: 'before' },
        { id: 'vB-t9-q5', type: QuestionType.MCQ, prompt: 'He will leave _______ he is ready.', options: ['when', 'before', 'until'], correctAnswer: 'when' },
    ]
  },
  {
    id: 'task-10',
    title: 'Task 10 & 11: Passive Voice',
    instruction: 'Complete with correct Passive form.',
    questions: [
        { id: 'vB-t10-q1', type: QuestionType.FILL_BLANK, prompt: 'The letter _______ (write) by my sister.', correctAnswer: 'was written' },
        { id: 'vB-t10-q2', type: QuestionType.FILL_BLANK, prompt: 'The car _______ (repair) yesterday.', correctAnswer: 'was repaired' },
        { id: 'vB-t10-q3', type: QuestionType.FILL_BLANK, prompt: 'English _______ (speak) all over the world.', correctAnswer: 'is spoken' },
        { id: 'vB-t10-q4', type: QuestionType.FILL_BLANK, prompt: 'The house _______ (build) in 2005.', correctAnswer: 'was built' },
        { id: 'vB-t10-q5', type: QuestionType.FILL_BLANK, prompt: 'The room _______ (clean) every day.', correctAnswer: 'is cleaned' },
        { id: 'vB-t10-q6', type: QuestionType.FILL_BLANK, prompt: 'Dinner _______ (serve) at 8 PM.', correctAnswer: 'is served' },
        { id: 'vB-t10-q7', type: QuestionType.FILL_BLANK, prompt: 'The flowers _______ (water) by the gardener.', correctAnswer: 'are watered' },
        { id: 'vB-t10-q8', type: QuestionType.FILL_BLANK, prompt: 'The cake _______ (make) with chocolate.', correctAnswer: 'is made' },
    ]
  },
  {
    id: 'task-12',
    title: 'Task 12 & 13: Used To',
    instruction: 'Complete with used to, didn\'t use to, or Did... use to?',
    questions: [
        { id: 'vB-t12-q1', type: QuestionType.FILL_BLANK, prompt: 'I _______ (play) tennis, but now I play football.', correctAnswer: 'used to play' },
        { id: 'vB-t12-q2', type: QuestionType.FILL_BLANK, prompt: '_______ you _______ (live) here?', correctAnswer: 'Did|use to live' },
        { id: 'vB-t12-q3', type: QuestionType.FILL_BLANK, prompt: 'She _______ (not/like) fish, but now she loves it.', correctAnswer: 'didn\'t use to like' },
        { id: 'vB-t12-q4', type: QuestionType.FILL_BLANK, prompt: 'We _______ (go) to the beach every summer.', correctAnswer: 'used to go' },
        { id: 'vB-t12-q5', type: QuestionType.FILL_BLANK, prompt: 'My grandfather _______ (drive) a car, but now he is too old.', correctAnswer: 'used to drive' },
    ]
  },
  {
    id: 'task-14',
    title: 'Task 14 & 15: Present Perfect',
    instruction: 'Rewrite using Present Perfect with FOR or SINCE.',
    questions: [
        { id: 'vB-t14-q1', type: QuestionType.SENTENCE_BUILDER, prompt: 'He / not / eat / meat / 2010.', correctAnswer: 'He has not eaten meat since 2010' },
        { id: 'vB-t14-q2', type: QuestionType.SENTENCE_BUILDER, prompt: 'They / be / married / 20 years.', correctAnswer: 'They have been married for 20 years' },
        { id: 'vB-t14-q3', type: QuestionType.SENTENCE_BUILDER, prompt: 'I / know / him / childhood.', correctAnswer: 'I have known him since childhood' },
        { id: 'vB-t14-q4', type: QuestionType.SENTENCE_BUILDER, prompt: 'She / work / here / five months.', correctAnswer: 'She has worked here for five months' },
    ]
  },
  {
    id: 'task-16',
    title: 'Task 16 & 17: Make or Do',
    instruction: 'Fill in with MAKE or DO.',
    questions: [
        { id: 'vB-t16-q1', type: QuestionType.MCQ, prompt: 'I need to ________ a decision soon.', options: ['MAKE', 'DO'], correctAnswer: 'MAKE' },
        { id: 'vB-t16-q2', type: QuestionType.MCQ, prompt: 'Always ________ your best in exams.', options: ['MAKE', 'DO'], correctAnswer: 'DO' },
        { id: 'vB-t16-q3', type: QuestionType.MCQ, prompt: 'Please don\'t ________ so much noise.', options: ['MAKE', 'DO'], correctAnswer: 'MAKE' },
        { id: 'vB-t16-q4', type: QuestionType.MCQ, prompt: 'I have to ________ my homework tonight.', options: ['MAKE', 'DO'], correctAnswer: 'DO' },
        { id: 'vB-t16-q5', type: QuestionType.MCQ, prompt: 'Oh no! I ________ a mess in the kitchen.', options: ['MAKE', 'DO'], correctAnswer: 'MAKE' },
        { id: 'vB-t16-q6', type: QuestionType.MCQ, prompt: 'He likes to ________ karate on weekends.', options: ['MAKE', 'DO'], correctAnswer: 'DO' },
        { id: 'vB-t16-q7', type: QuestionType.MCQ, prompt: 'Let\'s ________ a plan for the holidays.', options: ['MAKE', 'DO'], correctAnswer: 'MAKE' },
        { id: 'vB-t16-q8', type: QuestionType.MCQ, prompt: 'They ________ business all over the world.', options: ['MAKE', 'DO'], correctAnswer: 'DO' },
        { id: 'vB-t16-q9', type: QuestionType.MCQ, prompt: 'I will ________ a sandwich for lunch.', options: ['MAKE', 'DO'], correctAnswer: 'MAKE' },
    ]
  },
  {
    id: 'task-19',
    title: 'Task 19: Transport & City',
    instruction: 'Complete with: traffic jam / environment / crowded / cycle lanes / safe',
    questions: [
        { id: 'vB-t19-q1', type: QuestionType.FILL_BLANK, prompt: 'We were stuck in a 1 _______ for two hours.', correctAnswer: 'traffic jam' },
        { id: 'vB-t19-q2', type: QuestionType.FILL_BLANK, prompt: 'It is important to protect the 2 _______.', correctAnswer: 'environment' },
        { id: 'vB-t19-q3', type: QuestionType.FILL_BLANK, prompt: 'The bus was very 3 _______ so I had to stand.', correctAnswer: 'crowded' },
        { id: 'vB-t19-q4', type: QuestionType.FILL_BLANK, prompt: 'This city has many 4 _______ for bikes.', correctAnswer: 'cycle lanes' },
        { id: 'vB-t19-q5', type: QuestionType.FILL_BLANK, prompt: 'This area is very 5 _______ at night, so don\'t worry.', correctAnswer: 'safe' },
    ]
  },
  {
    id: 'task-21',
    title: 'Task 21 & 22: Prepositions',
    instruction: 'Complete the sentences with correct prepositions.',
    questions: [
        { id: 'vB-t21-q1', type: QuestionType.FILL_BLANK, prompt: 'Listen ______ the teacher carefully.', correctAnswer: 'to' },
        { id: 'vB-t21-q2', type: QuestionType.FILL_BLANK, prompt: 'I am interested ______ learning guitar.', correctAnswer: 'in' },
        { id: 'vB-t21-q3', type: QuestionType.FILL_BLANK, prompt: 'She is afraid ______ spiders.', correctAnswer: 'of' },
        { id: 'vB-t21-q4', type: QuestionType.FILL_BLANK, prompt: 'He is good ______ math.', correctAnswer: 'at' },
        { id: 'vB-t21-q5', type: QuestionType.FILL_BLANK, prompt: 'Wait ______ me! I\'m coming.', correctAnswer: 'for' },
        { id: 'vB-t21-q6', type: QuestionType.FILL_BLANK, prompt: 'Look ______ this picture. It\'s beautiful.', correctAnswer: 'at' },
        { id: 'vB-t21-q7', type: QuestionType.FILL_BLANK, prompt: 'That pen belongs ______ me.', correctAnswer: 'to' },
    ]
  },
  {
    id: 'task-23',
    title: 'Task 23: Phrasal Verbs',
    instruction: 'Choose: look after / look for / turn on / turn off / wake up',
    questions: [
        { id: 'vB-t23-q1', type: QuestionType.DROPDOWN, prompt: 'Please __________ the light. It\'s dark.', options: ['look after', 'look for', 'turn on', 'turn off', 'wake up'], correctAnswer: 'turn on' },
        { id: 'vB-t23-q2', type: QuestionType.DROPDOWN, prompt: 'I need to __________ my keys. I lost them.', options: ['look after', 'look for', 'turn on', 'turn off', 'wake up'], correctAnswer: 'look for' },
        { id: 'vB-t23-q3', type: QuestionType.DROPDOWN, prompt: 'Can you __________ my cat while I am away?', options: ['look after', 'look for', 'turn on', 'turn off', 'wake up'], correctAnswer: 'look after' },
        { id: 'vB-t23-q4', type: QuestionType.DROPDOWN, prompt: 'I usually __________ at 7 AM.', options: ['look after', 'look for', 'turn on', 'turn off', 'wake up'], correctAnswer: 'wake up' },
    ]
  },
  {
    id: 'task-24',
    title: 'Task 24: Linking Words',
    instruction: 'Select the correct linking word.',
    questions: [
        { id: 'vB-t24-q1', type: QuestionType.MCQ, prompt: '_______ he was tired, he finished the work.', options: ['Although', 'Because'], correctAnswer: 'Although' },
        { id: 'vB-t24-q2', type: QuestionType.MCQ, prompt: 'I studied hard, _______ I failed.', options: ['but', 'so'], correctAnswer: 'but' },
        { id: 'vB-t24-q3', type: QuestionType.MCQ, prompt: '_______ the rain, we went out.', options: ['Despite', 'Although'], correctAnswer: 'Despite' },
        { id: 'vB-t24-q4', type: QuestionType.MCQ, prompt: 'He is clever. _______, he is lazy.', options: ['However', 'But'], correctAnswer: 'However' },
        { id: 'vB-t24-q5', type: QuestionType.MCQ, prompt: 'I went to bed early _______ I was tired.', options: ['because', 'although'], correctAnswer: 'because' },
    ]
  },
  {
    id: 'task-writing',
    title: 'Topic: Online Shopping vs In-store Shopping',
    instruction: 'Write 80-100 words. Advantages/Disadvantages/Recommendation.',
    questions: [
        {
            id: 'vB-writing-1',
            type: QuestionType.WRITING,
            prompt: 'Start like this: Many people prefer buying things online, but others like going to shops. There are advantages and disadvantages to both...',
            subPrompt: 'Write your essay below.',
            correctAnswer: 'WRITING_TASK'
        }
    ]
  }
];

export const EXAM_VERSIONS: Record<string, ExamPageData[]> = {
  'A': createPages('vA', VERSION_A_TASKS),
  'B': createPages('vB', VERSION_B_TASKS),
  'C': createPages('vC', VERSION_A_TASKS),
  'D': createPages('vD', VERSION_B_TASKS),
  'E': createPages('vE', VERSION_A_TASKS),
};