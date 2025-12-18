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
          { id: 't1-q1', type: QuestionType.MCQ, prompt: 'Don\'t worry about the taxi. I _______ call one for you.', options: ['will', 'might not', 'won\'t'] },
          { id: 't1-q2', type: QuestionType.MCQ, prompt: 'We _______ go to the park later, but it depends on the rain.', options: ['might', 'will', 'won\'t'] },
          { id: 't1-q3', type: QuestionType.MCQ, prompt: 'If you don\'t wear a coat, you _______ catch a cold.', options: ['will', 'might not', 'won\'t'] },
          { id: 't1-q4', type: QuestionType.MCQ, prompt: 'I _______ eat that samsa. I am not hungry at all.', options: ['won\'t', 'might', 'will'] },
          { id: 't1-q5', type: QuestionType.MCQ, prompt: 'They _______ arrive on time because the flight was delayed.', options: ['won\'t', 'will', 'might'] },
          { id: 't1-q6', type: QuestionType.MCQ, prompt: 'Look at those clouds! It _______ rain soon.', options: ['will', 'might', 'won\'t'] },
          { id: 't1-q7', type: QuestionType.MCQ, prompt: 'She _______ be at home. She usually works until 6 PM.', options: ['won\'t', 'might not', 'will'] },
          { id: 't1-q8', type: QuestionType.MCQ, prompt: 'If I see him, I _______ give him your message.', options: ['will', 'might', 'won\'t'] },
          { id: 't1-q9', type: QuestionType.MCQ, prompt: 'We _______ watch a movie tonight, or we might just sleep.', options: ['might', 'will', 'won\'t'] },
          { id: 't1-q10', type: QuestionType.MCQ, prompt: 'He is a very good student. He _______ pass the IELTS exam easily.', options: ['will', 'might not', 'won\'t'] },
        ]
      },
      {
        id: 'task-2',
        title: 'Task 2: Future Predictions',
        instruction: 'Choose the correct option: will, won\'t, might or might not.',
        questions: [
          { id: 't2-q1', type: QuestionType.MCQ, prompt: 'I am very tired. I _______ go to bed early tonight.', options: ['will', 'might not', 'won\'t'] },
          { id: 't2-q2', type: QuestionType.MCQ, prompt: 'If we run, we _______ catch the bus, but it is leaving in one minute!', options: ['might', 'won\'t', 'will'] },
          { id: 't2-q3', type: QuestionType.MCQ, prompt: 'She _______ like this gift. It is not her style.', options: ['won\'t', 'might not', 'will'] },
          { id: 't2-q4', type: QuestionType.MCQ, prompt: 'They _______ move to a new house next year, but they haven\'t found one yet.', options: ['might', 'will', 'won\'t'] },
          { id: 't2-q5', type: QuestionType.MCQ, prompt: 'The teacher _______ be happy if you forget your homework again.', options: ['won\'t', 'will', 'might'] },
        ]
      },
      {
        id: 'task-5',
        title: 'Task 5: Modals',
        instruction: 'Choose the correct modal verb to complete the sentence.',
        questions: [
            { id: 't5-q1', type: QuestionType.MCQ, prompt: 'You _______ turn off your phone in the cinema.', options: ['must', 'can'] },
            { id: 't5-q2', type: QuestionType.MCQ, prompt: 'We _______ go to school tomorrow; it is Sunday.', options: ['don\'t have to', 'mustn\'t'] },
            { id: 't5-q3', type: QuestionType.MCQ, prompt: 'She _______ speak three languages: Uzbek, Russian, and English.', options: ['can', 'must'] },
            { id: 't5-q4', type: QuestionType.MCQ, prompt: 'You _______ buy a ticket before you get on the train.', options: ['have to', 'can\'t'] },
            { id: 't5-q5', type: QuestionType.MCQ, prompt: 'Students _______ cheat during the exam.', options: ['mustn\'t', 'don\'t have to'] },
            { id: 't5-q6', type: QuestionType.MCQ, prompt: 'He _______ help you if he is not busy.', options: ['can', 'has to'] },
            { id: 't5-q7', type: QuestionType.MCQ, prompt: 'I _______ finish this report today. My boss needs it.', options: ['must', 'can'] },
            { id: 't5-q8', type: QuestionType.MCQ, prompt: 'You _______ swim here. The water is dangerous.', options: ['can\'t', 'don\'t have to'] },
            { id: 't5-q9', type: QuestionType.MCQ, prompt: 'We _______ wear warm clothes. It is very cold outside.', options: ['have to', 'can'] },
            { id: 't5-q10', type: QuestionType.MCQ, prompt: 'She _______ wake up early. She is on vacation.', options: ['doesn\'t have to', 'mustn\'t'] },
        ]
      },
      {
        id: 'task-6',
        title: 'Task 6: Modals (Part 2)',
        instruction: 'Choose the correct option: must/mustn\'t, have to / don\'t have to or can / can\'t.',
        questions: [
            { id: 't6-q1', type: QuestionType.MCQ, prompt: 'I _______ work late tonight. I have a deadline.', options: ['have to', 'can'] },
            { id: 't6-q2', type: QuestionType.MCQ, prompt: 'You _______ shout in the library.', options: ['mustn\'t', 'don\'t have to'] },
            { id: 't6-q3', type: QuestionType.MCQ, prompt: 'We _______ walk to the park. It is very close.', options: ['can', 'must'] },
            { id: 't6-q4', type: QuestionType.MCQ, prompt: 'He _______ pay for the coffee. I will pay.', options: ['doesn\'t have to', 'can\'t'] },
            { id: 't6-q5', type: QuestionType.MCQ, prompt: 'Drivers _______ stop at the zebra crossing.', options: ['must', 'can'] },
            { id: 't6-q6', type: QuestionType.MCQ, prompt: 'You _______ use a pencil. You must use a pen.', options: ['can\'t', 'don\'t have to'] },
            { id: 't6-q7', type: QuestionType.MCQ, prompt: 'She _______ cook dinner every day for her large family.', options: ['has to', 'can'] },
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
            { id: 't3-q1', type: QuestionType.FILL_BLANK, prompt: 'While I _______ (do) my homework, the electricity _______ (go) out.' },
            { id: 't3-q2', type: QuestionType.FILL_BLANK, prompt: 'He _______ (drive) too fast when the police _______ (stop) him.' },
            { id: 't3-q3', type: QuestionType.FILL_BLANK, prompt: 'They _______ (have) a picnic when it _______ (start) to snow.' },
            { id: 't3-q4', type: QuestionType.FILL_BLANK, prompt: 'She _______ (not/watch) the movie when I _______ (ask) her about it.' },
            { id: 't3-q5', type: QuestionType.FILL_BLANK, prompt: 'What _______ (you / eat) when I _______ (see) you at the cafe?' },
        ]
      },
      {
        id: 'task-4',
        title: 'Task 4: Past Simple vs Continuous (Part 2)',
        instruction: 'Complete with past simple or past continuous.',
        questions: [
            { id: 't4-q1', type: QuestionType.FILL_BLANK, prompt: 'My brother _______ (find) a wallet while he _______ (run) in the park.' },
            { id: 't4-q2', type: QuestionType.FILL_BLANK, prompt: 'We _______ (wait) for the train when we _______ (see) our neighbor.' },
            { id: 't4-q3', type: QuestionType.FILL_BLANK, prompt: 'I _______ (drop) my phone while I _______ (take) a photo.' },
            { id: 't4-q4', type: QuestionType.FILL_BLANK, prompt: 'She _______ (listen) to music so she _______ (not/hear) the doorbell.' },
            { id: 't4-q5', type: QuestionType.FILL_BLANK, prompt: 'While the teacher _______ (explain) the grammar, the students _______ (listen) carefully.' },
        ]
      },
      {
        id: 'task-7',
        title: 'Task 7: First Conditional',
        instruction: 'Complete the sentences.',
        questions: [
            { id: 't7-q1', type: QuestionType.FILL_BLANK, prompt: 'If you _______ (not/hurry), you _______ (miss) the flight.' },
            { id: 't7-q2', type: QuestionType.FILL_BLANK, prompt: 'If he _______ (practice) every day, he _______ (win) the competition.' },
            { id: 't7-q3', type: QuestionType.FILL_BLANK, prompt: 'We _______ (stay) at home if it _______ (rain).' },
            { id: 't7-q4', type: QuestionType.FILL_BLANK, prompt: 'If she _______ (not/eat) breakfast, she _______ (be) hungry later.' },
            { id: 't7-q5', type: QuestionType.FILL_BLANK, prompt: 'I _______ (call) you if I _______ (need) help.' },
        ]
      },
      {
        id: 'task-8',
        title: 'Task 8: Second Conditional',
        instruction: 'Complete the sentences.',
        questions: [
            { id: 't8-q1', type: QuestionType.FILL_BLANK, prompt: 'If I _______ (be) a bird, I _______ (fly) to the mountains.' },
            { id: 't8-q2', type: QuestionType.FILL_BLANK, prompt: 'If she _______ (win) the lottery, she _______ (buy) a big house in Tashkent.' },
            { id: 't8-q3', type: QuestionType.FILL_BLANK, prompt: 'I _______ (drink) more water if I _______ (be) thirsty.' },
            { id: 't8-q4', type: QuestionType.FILL_BLANK, prompt: 'If we _______ (live) closer to the school, we _______ (can) walk.' },
            { id: 't8-q5', type: QuestionType.FILL_BLANK, prompt: 'He _______ (would learn) English faster if he _______ (watch) more movies.', subPrompt: 'Use appropriate forms (e.g. would learn / watched)' },
            { id: 't8-q6', type: QuestionType.FILL_BLANK, prompt: 'If I _______ (be) you, I _______ (go) to the doctor immediately.' },
            { id: 't8-q7', type: QuestionType.FILL_BLANK, prompt: 'They _______ (be) happy if you _______ (visit) their party.' },
            { id: 't8-q8', type: QuestionType.FILL_BLANK, prompt: 'If I _______ (have) his phone number, I _______ (call) him.' },
        ]
      },
      {
        id: 'task-9',
        title: 'Task 9: Time Clauses',
        instruction: 'Complete with correct time clause option.',
        questions: [
            { id: 't9-q1', type: QuestionType.MCQ, prompt: 'Please take off your shoes _______ you enter the house.', options: ['before', 'as soon as', 'if'] },
            { id: 't9-q2', type: QuestionType.MCQ, prompt: 'I will send you the photo _______ I find it.', options: ['when', 'until', 'before'] },
            { id: 't9-q3', type: QuestionType.MCQ, prompt: 'We will wait outside _______ the store opens.', options: ['if', 'until', 'after'] },
            { id: 't9-q4', type: QuestionType.MCQ, prompt: '_______ the lesson finishes, we will go for lunch.', options: ['Before', 'As soon as', 'If'] },
            { id: 't9-q5', type: QuestionType.MCQ, prompt: 'She always washes her hands _______ cooking dinner.', options: ['before', 'when', 'if'] },
        ]
      },
      {
        id: 'task-12',
        title: 'Task 12 & 13: Used To',
        instruction: 'Complete with used to, didn\'t use to, or Did... use to?',
        questions: [
            { id: 't12-q1', type: QuestionType.FILL_BLANK, prompt: 'I _______ (not/eat) pumpkin, but now I like manti with pumpkin.' },
            { id: 't12-q2', type: QuestionType.FILL_BLANK, prompt: '_______ your grandfather _______ (ride) a horse?' },
            { id: 't12-q3', type: QuestionType.FILL_BLANK, prompt: 'We _______ (play) in the street until late at night when we were kids.' },
            { id: 't12-q4', type: QuestionType.FILL_BLANK, prompt: 'She _______ (have) a Nokia phone, but now she has an iPhone.' },
            { id: 't12-q5', type: QuestionType.FILL_BLANK, prompt: 'People _______ (not/use) the internet so much twenty years ago.' },
            { id: 't12-q6', type: QuestionType.FILL_BLANK, prompt: '_______ you _______ (believe) in Santa Claus?' },
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
                { id: 't10-q1', type: QuestionType.FILL_BLANK, prompt: 'The new metro line 1 _______ (complete) last year.' },
                { id: 't10-q2', type: QuestionType.FILL_BLANK, prompt: 'The stations 2 __________ (decorate) with beautiful Uzbek patterns.' },
                { id: 't10-q3', type: QuestionType.FILL_BLANK, prompt: 'The trains 3 __________ (clean) every night by the staff.' },
                { id: 't10-q4', type: QuestionType.FILL_BLANK, prompt: 'A new schedule 4 __________ (announce) next week.' },
                { id: 't10-q5', type: QuestionType.FILL_BLANK, prompt: 'The tickets 5 __________ (check) by machines at the entrance.' },
                { id: 't10-q6', type: QuestionType.FILL_BLANK, prompt: 'In the past, tokens 6 __________ (use), but now everyone uses QR codes.' },
                { id: 't10-q7', type: QuestionType.FILL_BLANK, prompt: 'The project 7 __________ (finance) by the government.' },
                { id: 't10-q8', type: QuestionType.FILL_BLANK, prompt: 'Soon, more stations 8 __________ (build) in the suburbs.' },
            ]
        },
        {
            id: 'task-14',
            title: 'Task 14 & 15: Present Perfect',
            instruction: 'Rewrite using Present Perfect with FOR or SINCE.',
            questions: [
                { id: 't14-q1', type: QuestionType.SENTENCE_BUILDER, prompt: 'We / be / married / 2010.' },
                { id: 't14-q2', type: QuestionType.SENTENCE_BUILDER, prompt: 'I / not eat / anything / breakfast.' },
                { id: 't14-q3', type: QuestionType.SENTENCE_BUILDER, prompt: 'She / study / English / three years.' },
                { id: 't14-q4', type: QuestionType.SENTENCE_BUILDER, prompt: 'They / know / the teacher / September.' },
                { id: 't14-q5', type: QuestionType.SENTENCE_BUILDER, prompt: 'He / work / in this office / six months.' },
            ]
        },
        {
            id: 'task-16',
            title: 'Task 16 & 17: Make or Do',
            instruction: 'Fill in with MAKE or DO (and correct tense if needed).',
            questions: [
                { id: 't16-q1', type: QuestionType.FILL_BLANK, prompt: 'I need to ________ the laundry this weekend.' },
                { id: 't16-q2', type: QuestionType.FILL_BLANK, prompt: 'Try not to ________ a mess in the kitchen.' },
                { id: 't16-q3', type: QuestionType.FILL_BLANK, prompt: 'She always ________ her best in exams.' },
                { id: 't16-q4', type: QuestionType.FILL_BLANK, prompt: 'Can I ________ a suggestion?' },
                { id: 't16-q5', type: QuestionType.FILL_BLANK, prompt: 'He needs to ________ some research for his project.' },
                { id: 't16-q6', type: QuestionType.FILL_BLANK, prompt: 'I will ________ a cup of tea for you.' },
                { id: 't16-q7', type: QuestionType.FILL_BLANK, prompt: 'Stop talking and ________ your work!' },
                { id: 't16-q8', type: QuestionType.FILL_BLANK, prompt: 'It is time to ________ a choice: science or art?' },
                { id: 't16-q9', type: QuestionType.FILL_BLANK, prompt: 'Did you ________ business with that company?' },
                { id: 't16-q10', type: QuestionType.FILL_BLANK, prompt: 'The noise ________ me angry.' },
            ]
        }
    ]
  },
  {
    id: 'page-4',
    title: 'Vocabulary: General',
    tasks: [
        {
            id: 'task-19',
            title: 'Task 19: Transport & City',
            instruction: 'Complete with: traffic jam / fare / main roads / public transport / convenient',
            questions: [
                { id: 't19-q1', type: QuestionType.FILL_BLANK, prompt: 'I live far from the city center, so I usually take 1 __________.' },
                { id: 't19-q2', type: QuestionType.FILL_BLANK, prompt: 'The bus 2 __________ is very cheap, only 2000 soums.' },
                { id: 't19-q3', type: QuestionType.FILL_BLANK, prompt: 'However, in the morning there is always a big 3 __________ on the bridge.' },
                { id: 't19-q4', type: QuestionType.FILL_BLANK, prompt: 'The 4 __________ are very wide, but there are too many cars.' },
                { id: 't19-q5', type: QuestionType.FILL_BLANK, prompt: 'It is more 5 __________ to take the metro because it is underground and fast.' },
            ]
        },
        {
            id: 'task-21',
            title: 'Task 21 & 22: Prepositions',
            instruction: 'Complete the sentences with correct prepositions.',
            questions: [
                { id: 't21-q1', type: QuestionType.FILL_BLANK, prompt: 'This song reminds me ______ my childhood.' },
                { id: 't21-q2', type: QuestionType.FILL_BLANK, prompt: 'I am waiting ______ the bus. It is late.' },
                { id: 't21-q3', type: QuestionType.FILL_BLANK, prompt: 'She is afraid ______ spiders.' },
                { id: 't21-q4', type: QuestionType.FILL_BLANK, prompt: 'He is famous ______ his delicious plov.' },
                { id: 't21-q5', type: QuestionType.FILL_BLANK, prompt: 'We are looking forward ______ the holiday.' },
                { id: 't21-q6', type: QuestionType.FILL_BLANK, prompt: 'I strongly disagree ______ his opinion.' },
                { id: 't21-q7', type: QuestionType.FILL_BLANK, prompt: 'The book consists ______ five chapters.' },
                { id: 't21-q8', type: QuestionType.FILL_BLANK, prompt: 'Who does this bag belong ______?' },
            ]
        },
        {
            id: 'task-23',
            title: 'Task 23: Phrasal Verbs',
            instruction: 'Choose: give up / carry on / take up / find out / turn off',
            questions: [
                { id: 't23-q1', type: QuestionType.DROPDOWN, prompt: 'Please __________ the TV. I am trying to sleep.', options: ['give up', 'carry on', 'take up', 'find out', 'turn off'] },
                { id: 't23-q2', type: QuestionType.DROPDOWN, prompt: 'I want to __________ painting. It looks like a fun hobby.', options: ['give up', 'carry on', 'take up', 'find out', 'turn off'] },
                { id: 't23-q3', type: QuestionType.DROPDOWN, prompt: 'Even though it was raining, they decided to __________ playing football.', options: ['give up', 'carry on', 'take up', 'find out', 'turn off'] },
                { id: 't23-q4', type: QuestionType.DROPDOWN, prompt: 'I need to __________ what time the movie starts.', options: ['give up', 'carry on', 'take up', 'find out', 'turn off'] },
                { id: 't23-q5', type: QuestionType.DROPDOWN, prompt: 'The puzzle was too hard, so I decided to __________.', options: ['give up', 'carry on', 'take up', 'find out', 'turn off'] },
            ]
        },
        {
            id: 'task-24',
            title: 'Task 24: Linking Words',
            instruction: 'Select the correct linking word.',
            questions: [
                { id: 't24-q1', type: QuestionType.MCQ, prompt: '_______ he is 80 years old, he runs every day.', options: ['However', 'Although'] },
                { id: 't24-q2', type: QuestionType.MCQ, prompt: 'I wanted to go to the park. _______, I stayed home and read a book.', options: ['Instead', 'Despite'] },
                { id: 't24-q3', type: QuestionType.MCQ, prompt: '_______ the rain, we had a great picnic.', options: ['In spite of', 'Even though'] },
                { id: 't24-q4', type: QuestionType.MCQ, prompt: 'She studied very hard, _______ she didn\'t pass the test.', options: ['but', 'however'] },
                { id: 't24-q5', type: QuestionType.MCQ, prompt: '_______ being tired, he finished the race.', options: ['Despite', 'Although'] },
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
            title: 'Topic: Learning a Foreign Language',
            instruction: 'Write 80-100 words. Advantages/Difficulties/Personal Experience.',
            questions: [
                {
                    id: 'writing-1',
                    type: QuestionType.WRITING,
                    prompt: 'Start like this: Learning a new language is very popular today. Many people in Uzbekistan are learning English, Russian, or Arabic...',
                    subPrompt: 'Write your essay below.'
                }
            ]
        }
    ]
  }
];
