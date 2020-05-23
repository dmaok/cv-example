import { Skills } from '@models/skills/skills';
import { Contact } from '@models/contact/contact';
import { Candidate } from '@models/candidate/candidate';

const aboutHtml = `<p>Hi! I'm a javascript developer with 3 and a half years of experience.</p>
<p>
I specialize in building scalable and maintainable web applications.
I'm looking for a job in a stable, growing company.
I expect long-term collaboration with interesting projects.
</p>
<p>
I can communicate efficiently, work in a team, split big tasks into smaller pieces and quickly crunch through them.
I prefer clear, simple, and readable code.
Passionate about self-learning, innovation, and usability.
Familiar with the Agile and Scrum methodology.
Calm, adequate, responsible, friendly, attentive, forward-looking.
I always try to do my best.
</p>
`;

export const candidate = new Candidate({
  firstName: 'Dmytro',
  lastName: 'Kovtun',
  birthday: '1991-06-28',
  aboutInfo: aboutHtml,
  jobPosition: 'Javascript Developer',
  city: 'Kyiv, Ukraine'
});

export const performanceEvaluation = [
  {
    title: 'Responsibility',
    value: 4.31
  },
  {
    title: 'Customer business focus',
    value: 4.44
  },
  {
    title: 'Teamwork',
    value: 4.08
  },
  {
    title: 'Flexibility',
    value: 4.33
  },
  {
    title: 'Development orientation',
    value: 4.61
  },
  {
    title: 'Proactivity',
    value: 4.0
  },
  {
    title: 'Effective communications',
    value: 4.03
  },
  {
    title: 'Focus on quality',
    value: 4.17
  },
  {
    title: 'Leadership qualities',
    value: 4.3
  }
];

export const contacts: Contact[] = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/dmytro-kovtun-476a96128/'
  },
  {
    name: 'Telegram',
    link: 'https://t.me/dmaok',
  },
  {
    name: '+380 (93) 676 26 46',
    link: 'tel:+3809367632646',
  },
  {
    name: 'Skype',
    link: 'skype:d.ma1991?chat'
  },
  {
    name: 'GitHub',
    link: 'https://github.com/dmaok',
  }
];

export const skills: Skills[] = [
  {
    name: 'JavaScript',
    progress: 0,
    startDate: new Date('2015-11-01'),
    zIndex: 190,
    color: '#f0da1d'
  },
  {
    name: 'ES6+',
    progress: 0,
    zIndex: 190,
    color: '#f6c40f',
    startDate: new Date('2016-05-01')
  },
  {
    name: 'HTML5',
    progress: 0,
    startDate: new Date('2015-06-01'),
    zIndex: 230,
    color: '#de4b26'
  },
  {
    name: 'CSS3',
    progress: 0,
    startDate: new Date('2015-06-01'),
    zIndex: 220,
    color: '#016eb7'
  },
  {
    name: 'Angular',
    progress: 0,
    color: '#dd0032',
    zIndex: 150,
    startDate: new Date('2018-02-25'),
    finishDate: new Date('2019-03-01')
  },
  {
    name: 'Vue.js',
    progress: 0,
    color: '#3fb37f',
    zIndex: 70,
    startDate: new Date('2019-02-20'),
    finishDate: new Date('2019-07-15')
  },
  {
    name: 'Ember.js',
    progress: 0,
    color: '#dc4930',
    zIndex: 140,
    startDate: new Date('2019-07-15')
  },
  {
    name: 'React.js',
    progress: 0,
    color: '#5ed5f4',
    zIndex: 70,
    startDate: new Date('2018-07-01'),
    finishDate: new Date('2018-11-15')
  },
  {
    name: 'TypeScript',
    progress: 0,
    zIndex: 140,
    color: '#0077c7',
    startDate: new Date('2018-02-25'),
    finishDate: new Date('2019-03-01')
  },
  {
    name: 'Vuetify',
    progress: 0,
    color: '#1593ef',
    zIndex: 60,
    startDate: new Date('2019-02-20'),
    finishDate: new Date('2019-07-15')
  },
  {
    name: 'RxJs',
    progress: 0,
    zIndex: 130,
    startDate: new Date('2018-02-25'),
    finishDate: new Date('2019-03-01')
  },
  {
    name: 'REST API',
    progress: 0,
    startDate: new Date('2018-02-25'),
    zIndex: 170
  },
  {
    name: 'Jira',
    progress: 0,
    startDate: new Date('2015-06-01'),
    zIndex: 30,
    finishDate: new Date('2019-07-01')
  },
  {
    name: 'Git',
    startDate: new Date('2015-06-01'),
    zIndex: 210
  },
  {
    name: 'webpack',
    progress: 0,
    zIndex: 160,
    startDate: new Date('2018-02-25')
  },
  {
    name: 'i18n tools',
    progress: 0,
    zIndex: 150,
    startDate: new Date('2018-02-25')
  },
  {
    name: 'Jest',
    progress: 0,
    zIndex: 10,
    startDate: new Date('2018-10-01'),
    finishDate: new Date('2019-03-01')
  },
  {
    name: 'Bootstrap',
    progress: 0,
    startDate: new Date('2015-09-01'),
    zIndex: 200
  },
  {
    name: 'jQuery',
    progress: 0,
    startDate: new Date('2015-11-01'),
    zIndex: 20,
    finishDate: new Date('2018-02-01')
  },
  {
    name: 'SCSS',
    progress: 0,
    startDate: new Date('2016-06-01'),
    zIndex: 180
  },
  {
    name: 'Redux',
    progress: 0,
    zIndex: 60,
    startDate: new Date('2018-07-01'),
    finishDate: new Date('2018-11-15')
  }
].map(skill => new Skills(skill));
