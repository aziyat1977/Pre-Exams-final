import { ExamPageData, QuestionType } from './types';

export const EXAM_PAGES: ExamPageData[] = [
  {
    id: 'page-1',
    title: 'Grammar: Future & Modals',
    tasks: [
      {
        id: 'task-1',
        title: 'Task 1: Future Probability',
        instruction: 'Choose the correct option: will, won\'t, might or might not.',
        questions: [
          { id: 't1-q1', type: QuestionType.MCQ, prompt: 'Take your jacket. It is cloudy and it _______ snow later.', options: ['will', 'might', 'won\'t'] },
          { id: 't1-q2', type: QuestionType.MCQ, prompt: 'I am sure he _______ win the race. He is the fastest runner.', options: ['will', 'might', 'might not'] },
          { id: 't1-q3', type: QuestionType.MCQ, prompt: 'She is very busy, so she _______ come to the dinner.', options: ['will', 'might not', 'will not'] },
          { id: 't1-q4', type: QuestionType.MCQ, prompt: 'If you don\'t study for the math test, you _______ pass.', options: ['won\'t', 'might', 'will'] },
          { id: 't1-q5', type: QuestionType.MCQ, prompt: 'They _______ be at the library, or they might be at the cafe.', options: ['will', 'won\'t', 'might'] },
          { id: 't1-q6', type: QuestionType.MCQ, prompt: 'Don\'t drink that coffee. You _______ sleep tonight.', options: ['will', 'won\'t', 'might not'] },
          { id: 't1-q7', type: QuestionType.MCQ, prompt: 'I promise I _______ be late for the meeting tomorrow.', options: ['might', 'won\'t', 'might not'] },
          { id: 't1-q8', type: QuestionType.MCQ, prompt: 'We _______ visit my grandmother on Sunday, but we haven\'t decided.', options: ['might', 'will', 'won\'t'] },
          { id: 't1-q9', type: QuestionType.MCQ, prompt: 'He _______ like the spicy food. He prefers mild dishes.', options: ['might not', 'will', 'will not'] },
          { id: 't1-q10', type: QuestionType.MCQ, prompt: 'The sky is blue. It _______ rain today.', options: ['might', 'won\'t', 'might not'] },
        ]
      },
      {
        id: 'task-2',
        title: 'Task 2: Future Predictions',
        instruction: 'Choose the correct option: will, won\'t, might or might not.',
        questions: [
          { id: 't2-q1', type: QuestionType.MCQ, prompt: 'The traffic is terrible. We _______ be late for the movie.', options: ['might not', 'will', 'won\'t'] },
          { id: 't2-q2', type: QuestionType.MCQ, prompt: 'I _______ buy the Samsung phone, or I might buy the iPhone.', options: ['will', 'won\'t', 'might'] },
          { id: 't2-q3', type: QuestionType.MCQ, prompt: 'Don\'t worry, the doctor _______ see you soon.', options: ['will', 'might not', 'won\'t'] },
          { id: 't2-q4', type: QuestionType.MCQ, prompt: 'If she calls me, I _______ answer. I am angry with her.', options: ['might', 'will', 'won\'t'] },
          { id: 't2-q5', type: QuestionType.MCQ, prompt: 'He _______ become a famous singer one day. He has a great voice.', options: ['might', 'won\'t', 'might not'] },
        ]
      },
      {
        id: 'task-5',
        title: 'Task 5: Modals',
        instruction: 'Choose the correct modal verb to complete the sentence.',
        questions: [
            { id: 't5-q1', type: QuestionType.MCQ, prompt: 'You _______ take photos in the museum.', options: ['mustn\'t', 'don\'t have to'] },
            { id: 't5-q2', type: QuestionType.MCQ, prompt: 'I _______ finish my homework before I play games.', options: ['have to', 'can'] },
            { id: 't5-q3', type: QuestionType.MCQ, prompt: 'Students _______ use a dictionary during the lesson.', options: ['can', 'must'] },
            { id: 't5-q4', type: QuestionType.MCQ, prompt: 'She _______ wear a uniform at university.', options: ['doesn\'t have to', 'can\'t'] },
            { id: 't5-q5', type: QuestionType.MCQ, prompt: 'We _______ respect our elders.', options: ['must', 'can'] },
            { id: 't5-q6', type: QuestionType.MCQ, prompt: 'You _______ run. We have plenty of time.', options: ['don\'t have to', 'mustn\'t'] },
            { id: 't5-q7', type: QuestionType.MCQ, prompt: 'He _______ swim very well. He needs lessons.', options: ['can\'t', 'has to'] },
            { id: 't5-q8', type: QuestionType.MCQ, prompt: 'Drivers _______ wear a seatbelt. It is the law.', options: ['must', 'can'] },
            { id: 't5-q9', type: QuestionType.MCQ, prompt: 'You _______ pay by card or cash. Both are okay.', options: ['can', 'have to'] },
            { id: 't5-q10', type: QuestionType.MCQ, prompt: 'They _______ bring lunch. The school provides it.', options: ['mustn\'t', 'don\'t have to'] },
        ]
      },
      {
        id: 'task-6',
        title: 'Task 6: Modals (Part 2)',
        instruction: 'Choose the correct option: must/mustn\'t, have to / don\'t have to or can / can\'t.',
        questions: [
            { id: 't6-q1', type: QuestionType.MCQ, prompt: 'I _______ come to the party. I am sick.', options: ['can', 'can\'t'] },
            { id: 't6-q2', type: QuestionType.MCQ, prompt: 'You _______ study hard if you want to be a doctor.', options: ['must', 'don\'t have to'] },
            { id: 't6-q3', type: QuestionType.MCQ, prompt: 'We _______ touch the paintings.', options: ['mustn\'t', 'don\'t have to'] },
            { id: 't6-q4', type: QuestionType.MCQ, prompt: 'She _______ wash the dishes. We have a dishwasher.', options: ['doesn\'t have to', 'can\'t'] },
            { id: 't6-q5', type: QuestionType.MCQ, prompt: 'You _______ park here. It is free.', options: ['can', 'have to'] },
            { id: 't6-q6', type: QuestionType.MCQ, prompt: 'He _______ wear glasses to see the board.', options: ['has to', 'can'] },
            { id: 't6-q7', type: QuestionType.MCQ, prompt: 'Passengers _______ turn off their phones during takeoff.', options: ['must', 'can'] },
        ]
      }
    ]
  },
  {
    id: 'page-2',
    title: 'Grammar: Past & Conditionals',
    tasks: [
      {
        id: 'task-3',
        title: 'Task 3: Past Simple vs Continuous',
        instruction: 'Complete with past simple or past continuous. (Write both verbs separated by a space or comma)',
        questions: [
            { id: 't3-q1', type: QuestionType.FILL_BLANK, prompt: 'While we _______ (watch) TV, the lights _______ (go) out.' },
            { id: 't3-q2', type: QuestionType.FILL_BLANK, prompt: 'She _______ (cook) osh when she _______ (burn) her hand.' },
            { id: 't3-q3', type: QuestionType.FILL_BLANK, prompt: 'I _______ (not/drive) fast when the accident _______ (happen).' },
            { id: 't3-q4', type: QuestionType.FILL_BLANK, prompt: 'They _______ (walk) in the mountains when they _______ (see) a wolf.' },
            { id: 't3-q5', type: QuestionType.FILL_BLANK, prompt: 'What _______ (you / do) when the teacher _______ (enter) the room?' },
        ]
      },
      {
        id: 'task-4',
        title: 'Task 4: Past Simple vs Continuous (Part 2)',
        instruction: 'Complete with past simple or past continuous.',
        questions: [
            { id: 't4-q1', type: QuestionType.FILL_BLANK, prompt: 'He _______ (lose) his passport while he _______ (travel) in Turkey.' },
            { id: 't4-q2', type: QuestionType.FILL_BLANK, prompt: 'The children _______ (play) outside when it _______ (start) to rain.' },
            { id: 't4-q3', type: QuestionType.FILL_BLANK, prompt: 'I _______ (meet) my friend while I _______ (wait) for the bus.' },
            { id: 't4-q4', type: QuestionType.FILL_BLANK, prompt: 'She _______ (listen) to music, so she _______ (not/hear) me.' },
            { id: 't4-q5', type: QuestionType.FILL_BLANK, prompt: 'While I _______ (shop) at Chorsu Bazaar, I _______ (buy) some spices.' },
        ]
      },
      {
        id: 'task-7',
        title: 'Task 7: First Conditional',
        instruction: 'Complete the sentences.',
        questions: [
            { id: 't7-q1', type: QuestionType.FILL_BLANK, prompt: 'If I _______ (go) to the bazaar, I _______ (buy) some fruit.' },
            { id: 't7-q2', type: QuestionType.FILL_BLANK, prompt: 'If she _______ (not/hurry), she _______ (be) late for school.' },
            { id: 't7-q3', type: QuestionType.FILL_BLANK, prompt: 'We _______ (play) football if the weather _______ (be) nice.' },
            { id: 't7-q4', type: QuestionType.FILL_BLANK, prompt: 'If you _______ (eat) too much chocolate, you _______ (feel) sick.' },
            { id: 't7-q5', type: QuestionType.FILL_BLANK, prompt: 'He _______ (get) a good job if he _______ (learn) English well.' },
        ]
      },
      {
        id: 'task-8',
        title: 'Task 8: Second Conditional',
        instruction: 'Complete the sentences.',
        questions: [
            { id: 't8-q1', type: QuestionType.FILL_BLANK, prompt: 'If I _______ (have) a million dollars, I _______ (buy) a Ferrari.' },
            { id: 't8-q2', type: QuestionType.FILL_BLANK, prompt: 'If she _______ (live) near the sea, she _______ (swim) every day.' },
            { id: 't8-q3', type: QuestionType.FILL_BLANK, prompt: 'I _______ (go) to the moon if I _______ (be) an astronaut.' },
            { id: 't8-q4', type: QuestionType.FILL_BLANK, prompt: 'If we _______ (know) the answer, we _______ (help) you.' },
            { id: 't8-q5', type: QuestionType.FILL_BLANK, prompt: 'He _______ (be) happier if he _______ (work) less.' },
            { id: 't8-q6', type: QuestionType.FILL_BLANK, prompt: 'If I _______ (be) you, I _______ (not buy) that coat. It’s too expensive.' },
            { id: 't8-q7', type: QuestionType.FILL_BLANK, prompt: 'They _______ (go) to the concert if they _______ (have) tickets.' },
            { id: 't8-q8', type: QuestionType.FILL_BLANK, prompt: 'If you _______ (be) the President, what _______ (you / do)?' },
        ]
      },
      {
        id: 'task-9',
        title: 'Task 9: Time Clauses',
        instruction: 'Complete with correct time clause option.',
        questions: [
            { id: 't9-q1', type: QuestionType.MCQ, prompt: 'I will brush my teeth _______ I go to bed.', options: ['before', 'if', 'as soon as'] },
            { id: 't9-q2', type: QuestionType.MCQ, prompt: 'We will start the meeting _______ everyone arrives.', options: ['until', 'when', 'before'] },
            { id: 't9-q3', type: QuestionType.MCQ, prompt: '_______ I get home, I will relax.', options: ['As soon as', 'Until', 'Before'] },
            { id: 't9-q4', type: QuestionType.MCQ, prompt: 'Don\'t open the door _______ the train stops.', options: ['if', 'until', 'as soon as'] },
            { id: 't9-q5', type: QuestionType.MCQ, prompt: 'She will call you _______ she finishes her work.', options: ['before', 'after', 'until'] },
        ]
      }
    ]
  },
  {
    id: 'page-3',
    title: 'Grammar & Vocabulary',
    tasks: [
        {
            id: 'task-10',
            title: 'Task 10 & 11: Passive Voice',
            instruction: 'Complete with correct Passive form.',
            questions: [
                { id: 't10-q1', type: QuestionType.FILL_BLANK, prompt: 'The old library 1 _______ (renovate) last year.' },
                { id: 't10-q2', type: QuestionType.FILL_BLANK, prompt: 'New computers 2 __________ (install) in the study room.' },
                { id: 't10-q3', type: QuestionType.FILL_BLANK, prompt: 'The books 3 __________ (organize) by subject.' },
                { id: 't10-q4', type: QuestionType.FILL_BLANK, prompt: 'Every day, the floor 4 __________ (clean) by the staff.' },
                { id: 't10-q5', type: QuestionType.FILL_BLANK, prompt: 'A new cafe 5 __________ (open) next to the entrance next month.' },
                { id: 't10-q6', type: QuestionType.FILL_BLANK, prompt: 'Fresh coffee 6 __________ (serve) there every morning.' },
                { id: 't10-q7', type: QuestionType.FILL_BLANK, prompt: 'In the past, papers 7 __________ (write) by hand, but now they are typed.' },
                { id: 't10-q8', type: QuestionType.FILL_BLANK, prompt: 'The building 8 __________ (visit) by many students daily.' },
            ]
        },
        {
            id: 'task-12',
            title: 'Task 12 & 13: Used To',
            instruction: 'Complete with used to, didn\'t use to, or Did... use to?',
            questions: [
                { id: 't12-q1', type: QuestionType.FILL_BLANK, prompt: 'I _______ (ride) a bicycle to school, but now I take the bus.' },
                { id: 't12-q2', type: QuestionType.FILL_BLANK, prompt: '_______ you _______ (play) hide-and-seek when you were young?' },
                { id: 't12-q3', type: QuestionType.FILL_BLANK, prompt: 'My father _______ (smoke), but he stopped five years ago.' },
                { id: 't12-q4', type: QuestionType.FILL_BLANK, prompt: 'We _______ (not/have) a TV, so we read books in the evening.' },
                { id: 't12-q5', type: QuestionType.FILL_BLANK, prompt: 'She _______ (be) very shy, but now she is confident.' },
                { id: 't12-q6', type: QuestionType.FILL_BLANK, prompt: 'People _______ (write) letters, but now they send emails.' },
            ]
        },
        {
            id: 'task-14',
            title: 'Task 14 & 15: Present Perfect',
            instruction: 'Rewrite using Present Perfect with FOR or SINCE.',
            questions: [
                { id: 't14-q1', type: QuestionType.SENTENCE_BUILDER, prompt: 'I / live / in Tashkent / 2015.' },
                { id: 't14-q2', type: QuestionType.SENTENCE_BUILDER, prompt: 'We / be / friends / ten years.' },
                { id: 't14-q3', type: QuestionType.SENTENCE_BUILDER, prompt: 'She / not/ visit / her hometown / last summer.' },
                { id: 't14-q4', type: QuestionType.SENTENCE_BUILDER, prompt: 'He / play / the guitar / he was a child.' },
                { id: 't14-q5', type: QuestionType.SENTENCE_BUILDER, prompt: 'They / not/ eat / sushi / a long time.' },
            ]
        }
    ]
  },
  {
    id: 'page-4',
    title: 'Vocabulary: General',
    tasks: [
        {
            id: 'task-16',
            title: 'Task 16 & 17: Make or Do',
            instruction: 'Fill in with MAKE or DO.',
            questions: [
                { id: 't16-q1', type: QuestionType.FILL_BLANK, prompt: 'Stop playing and _______ your homework.' },
                { id: 't16-q2', type: QuestionType.FILL_BLANK, prompt: 'I need to ________ a reservation at the restaurant.' },
                { id: 't16-q3', type: QuestionType.FILL_BLANK, prompt: 'Don\'t ________ a noise! The baby is asleep.' },
                { id: 't16-q4', type: QuestionType.FILL_BLANK, prompt: 'She always ________ the shopping on Saturdays.' },
                { id: 't16-q5', type: QuestionType.FILL_BLANK, prompt: 'Can you ________ me a favor?' },
                { id: 't16-q6', type: QuestionType.FILL_BLANK, prompt: 'He made a mistake, but he didn\'t ________ it on purpose.' },
                { id: 't16-q7', type: QuestionType.FILL_BLANK, prompt: 'I want to ________ money so I can buy a car.' },
                { id: 't16-q8', type: QuestionType.FILL_BLANK, prompt: 'You must ________ an effort to pass the exam.' },
                { id: 't16-q9', type: QuestionType.FILL_BLANK, prompt: 'Who ________ the cooking in your family?' },
                { id: 't16-q10', type: QuestionType.FILL_BLANK, prompt: 'I have to ________ an exam tomorrow.' },
            ]
        },
        {
            id: 'task-19',
            title: 'Task 19: Transport & City',
            instruction: 'Complete with: passengers / convenient / pollution / traffic jams / public transport',
            questions: [
                { id: 't19-q1', type: QuestionType.FILL_BLANK, prompt: 'There are often 1 __________ on the roads in the morning.' },
                { id: 't19-q2', type: QuestionType.FILL_BLANK, prompt: 'This causes air 2 __________.' },
                { id: 't19-q3', type: QuestionType.FILL_BLANK, prompt: 'Many people use 3 __________ like the metro or buses.' },
                { id: 't19-q4', type: QuestionType.FILL_BLANK, prompt: 'The metro is very 4 __________ and cheap.' },
                { id: 't19-q5', type: QuestionType.FILL_BLANK, prompt: 'However, in the evening, the buses are full of 5 __________ going home.' },
            ]
        },
        {
            id: 'task-21',
            title: 'Task 21 & 22: Prepositions',
            instruction: 'Complete the sentences with correct prepositions.',
            questions: [
                { id: 't21-q1', type: QuestionType.FILL_BLANK, prompt: 'I am interested ______ history.' },
                { id: 't21-q2', type: QuestionType.FILL_BLANK, prompt: 'She is good ______ playing the piano.' },
                { id: 't21-q3', type: QuestionType.FILL_BLANK, prompt: 'He apologized ______ being late.' },
                { id: 't21-q4', type: QuestionType.FILL_BLANK, prompt: 'They are waiting ______ the teacher.' },
                { id: 't21-q5', type: QuestionType.FILL_BLANK, prompt: 'This bag belongs ______ me.' },
                { id: 't21-q6', type: QuestionType.FILL_BLANK, prompt: 'We agreed ______ the plan.' },
                { id: 't21-q7', type: QuestionType.FILL_BLANK, prompt: 'The salad consists ______ tomatoes and cucumbers.' },
                { id: 't21-q8', type: QuestionType.FILL_BLANK, prompt: 'I dreamt ______ flying last night.' },
            ]
        },
        {
            id: 'task-23',
            title: 'Task 23: Phrasal Verbs',
            instruction: 'Choose: give up / find out / grow up / put on / carry on',
            questions: [
                { id: 't23-q1', type: QuestionType.DROPDOWN, prompt: 'I want to __________ the price of this car.', options: ['give up', 'find out', 'grow up', 'put on', 'carry on'] },
                { id: 't23-q2', type: QuestionType.DROPDOWN, prompt: 'Don\'t stop now! __________ working!', options: ['give up', 'find out', 'grow up', 'put on', 'carry on'] },
                { id: 't23-q3', type: QuestionType.DROPDOWN, prompt: 'I decided to __________ smoking. It is bad for my health.', options: ['give up', 'find out', 'grow up', 'put on', 'carry on'] },
                { id: 't23-q4', type: QuestionType.DROPDOWN, prompt: 'Where did you __________? "I was born in Samarkand."', options: ['give up', 'find out', 'grow up', 'put on', 'carry on'] },
                { id: 't23-q5', type: QuestionType.DROPDOWN, prompt: 'It is sunny. You should __________ your sunglasses.', options: ['give up', 'find out', 'grow up', 'put on', 'carry on'] },
            ]
        },
        {
            id: 'task-24',
            title: 'Task 24: Linking Words',
            instruction: 'Select the correct linking word.',
            questions: [
                { id: 't24-q1', type: QuestionType.MCQ, prompt: '_______ I was tired, I finished the book.', options: ['Although', 'However'] },
                { id: 't24-q2', type: QuestionType.MCQ, prompt: 'He loves football, _______ he doesn\'t play very often.', options: ['but', 'despite'] },
                { id: 't24-q3', type: QuestionType.MCQ, prompt: '_______ the cold weather, we went for a walk.', options: ['In spite of', 'Even though'] },
                { id: 't24-q4', type: QuestionType.MCQ, prompt: 'The food was delicious. _______, it was very expensive.', options: ['However', 'Although'] },
                { id: 't24-q5', type: QuestionType.MCQ, prompt: '_______ his age, he is very active.', options: ['Despite', 'But'] },
            ]
        }
    ]
  },
  {
    id: 'page-5',
    title: 'Writing Training',
    tasks: [
        {
            id: 'task-writing',
            title: 'Topic: The Internet',
            instruction: 'Write 80-100 words. Advantages/Disadvantages/Safety.',
            questions: [
                {
                    id: 'writing-1',
                    type: QuestionType.WRITING,
                    prompt: 'Start like this: The internet is a very important part of our lives today. We use it for everything, from studying to talking with friends...',
                    subPrompt: 'Write your essay below.'
                }
            ]
        }
    ]
  }
];
