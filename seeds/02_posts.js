exports.seed = function(knex) {
  return knex('posts').insert([
    {
      title: 'Learning how to Learn',
      cover_src: 'test',
      blurb: 'Advice for getting the most out of studying',
      body: 'test',
      date: '2016-11-28'
    },
    {
      title: 'Ember Magic',
      cover_src: 'test',
      blurb: 'A beginner\'s perspective on Ember',
      body: 'test',
      date: '2016-03-23'
    }, 
    {
      title: 'Build an App in 40 Minutes',
      cover_src: 'test',
      blurb: 'An intro to web development',
      body: 'test',
      date: '2016-07-28'
    },
    {
      title: 'Web Components are Neat',
      cover_src: 'test',
      blurb: 'An introduction to web components',
      body: 'test',
      date: '2016-03-20'
    },
    {
      title: 'Jekyll Blog',
      cover_src: 'test',
      blurb: 'Build a blog quickly with Jekyll',
      body: 'test',
      date: '2016-01-28'
    }
  ]);
}
