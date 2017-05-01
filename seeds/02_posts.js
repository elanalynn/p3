exports.seed = function(knex) {
  return knex('posts').insert([
    {
      blurb: 'Advice for getting the most out of studying',
      body: 'test',
      cover_src: 'test',
      date: '2016-11-28',
      title: 'Learning how to Learn'
    },
    {
      blurb: 'A beginner\'s perspective on Ember',
      body: 'test',
      cover_src: 'test',
      date: '2016-03-23',
      title: 'Ember Magic'
    }, 
    {
      blurb: 'An intro to web development',
      body: 'test',
      cover_src: 'test',
      date: '2016-07-28',
      title: 'Build an App in 40 Minutes'
    },
    {
      blurb: 'An introduction to web components',
      body: 'test',
      cover_src: 'test',
      date: '2016-03-20',
      title: 'Web Components are Neat'
    },
    {
      blurb: 'Build a blog quickly with Jekyll',
      body: 'test',
      cover_src: 'test',
      date: '2016-01-28',
      title: 'Jekyll Blog'
    }
  ]);
}
