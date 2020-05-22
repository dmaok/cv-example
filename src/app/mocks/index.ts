import { Candidate } from 'src/app/models/candidate/candidate';
import { Contact } from 'src/app/models/contact/contact';
import { Skills } from 'src/app/models/skills/skills';

const aboutHtml = `<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
<p>Assumenda dolorem dolores eligendi molestias tempore?</p>
<p>Atque consequuntur delectus dolore esse hic in incidunt iste laborum placeat,
quas totam velit voluptates voluptatum? Atque consequuntur delectus dolore esse hic in incidunt iste laborum placeat,
quas totam velit ore esse hic in incidunt iste laborum placeat,
quas totam velit voluptates voluptatum? Atque consequuntur delee laborum placeat,
qua velit voluptates voluptatum? Atque consequuntur delectus dolore esse hic in incidunt iste laborum placeat,
quas totam voluptates voluptatum?</p>`;

export const candidate = new Candidate({
  firstName: 'Dmytro',
  lastName: 'Kovtun',
  birthday: '28.06.1991',
  aboutInfo: aboutHtml,
  jobPosition: 'Javascript Developer'
});

export const skillsList: string[] = [
  'Lorem ipsum dolor sit amet',
  'consectetur adipisicing elit.',
  'Accusamus aspernatur assumenda',
  'blanditiis',
  'corporis delectus',
  'dicta eius, error itaque laboriosam',
  'molestiae neque numquam obcaecati',
  'perferendis quaerat',
  'quam quidem temporibus',
  'unde voluptates!'
];

export const contacts: Contact[] = [
  {
    name: 'LinkedIn',
    link: 'http://linkedin.com'
  },
  {
    name: 'Skype',
    link: 'skypeLink'
  },
  {
    name: 'Phone',
    link: '+3809367632646'
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
    startDate: new Date('2016-05-01'),
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
    finishDate: new Date('2019-07-15'),
  },
  {
    name: 'Ember.js',
    progress: 0,
    color: '#dc4930',
    zIndex: 140,
    startDate: new Date('2019-07-15'),
  },
  {
    name: 'React.js',
    progress: 0,
    color: '#5ed5f4',
    zIndex: 70,
    startDate: new Date('2018-07-01'),
    finishDate: new Date('2018-11-15'),
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
    finishDate: new Date('2019-07-15'),
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
    zIndex: 210,
  },
  {
    name: 'webpack',
    progress: 0,
    zIndex: 160,
    startDate: new Date('2018-02-25'),
  },
  {
    name: 'i18n tools',
    progress: 0,
    zIndex: 150,
    startDate: new Date('2018-02-25'),
  },
  {
    name: 'Jest',
    progress: 0,
    zIndex: 10,
    startDate: new Date('2018-10-01'),
    finishDate: new Date('2019-03-01'),
  },
  {
    name: 'Bootstrap',
    progress: 0,
    startDate: new Date('2015-09-01'),
    zIndex: 200,
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
    zIndex: 180,
  },
  {
    name: 'Redux',
    progress: 0,
    zIndex: 60,
    startDate: new Date('2018-07-01'),
    finishDate: new Date('2018-11-15'),
  },
].map(skill => new Skills(skill));
