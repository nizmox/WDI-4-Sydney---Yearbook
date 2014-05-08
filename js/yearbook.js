var yearBook = yearBook || {};

//seed objects for all students. Create one large object/var 


yearBook.yearBookStudents = new yearBook.Students([
  new yearBook.Student({
    name: 'Tom',
    slug: 'tom-dane',
    photoURL: 'tba',
    aboutMe: 'your bio',
    portfolioImage1: 'tba',
    portfolioImage2: 'tba',
    portfolioImage3: 'tba',
    portfolioURL1: 'tba',
    portfolioURL2: 'tba',
    portfolioURL3: 'tba',
    portfolioBlurb1: 'tba',
    portfolioBlurb2: 'tba',
    portfolioBlurb3: 'tba',
    github: 'https://github.com/thomasdane',
    twitter: 'https://twitter.com/tomjdane',
    linkedin: '',
    email: ''
  }),
  new yearBook.Student({
    name: 'Nix',
    slug: 'nix-siow',
    photoURL: 'tba',
    aboutMe: 'your bio',
    portfolioImage1: 'tba',
    portfolioImage2: 'tba',
    portfolioImage3: 'tba',
    portfolioURL1: 'tba',
    portfolioURL2: 'tba',
    portfolioURL3: 'tba',
    portfolioBlurb1: 'tba',
    portfolioBlurb2: 'tba',
    portfolioBlurb3: 'tba',
    github: 'https://github.com/thomasdane',
    twitter: 'https://twitter.com/tomjdane',
    linkedin: '',
    email: ''
  }),
  new yearBook.Student({
    name: 'Kriss',
    slug: 'kriss-heimanis',
    photoURL: 'tba',
    aboutMe: 'your bio',
    portfolioImage1: 'tba',
    portfolioImage2: 'tba',
    portfolioImage3: 'tba',
    portfolioURL1: 'tba',
    portfolioURL2: 'tba',
    portfolioURL3: 'tba',
    portfolioBlurb1: 'tba',
    portfolioBlurb2: 'tba',
    portfolioBlurb3: 'tba',
    github: 'https://github.com/thomasdane',
    twitter: 'https://twitter.com/tomjdane',
    linkedin: '',
    email: ''
  }),
  new yearBook.Student({
    name: 'Olly',
    slug: 'olly-dutton',
    photoURL: 'tba',
    aboutMe: 'your bio',
    portfolioImage1: 'tba',
    portfolioImage2: 'tba',
    portfolioImage3: 'tba',
    portfolioURL1: 'tba',
    portfolioURL2: 'tba',
    portfolioURL3: 'tba',
    portfolioBlurb1: 'tba',
    portfolioBlurb2: 'tba',
    portfolioBlurb3: 'tba',
    github: 'https://github.com/thomasdane',
    twitter: 'https://twitter.com/tomjdane',
    linkedin: '',
    email: ''
  }),
  new yearBook.Student({
    name: 'Charlie',
    slug: 'charlie-gerard',
    photoURL: 'tba',
    aboutMe: 'your bio',
    portfolioImage1: 'tba',
    portfolioImage2: 'tba',
    portfolioImage3: 'tba',
    portfolioURL1: 'tba',
    portfolioURL2: 'tba',
    portfolioURL3: 'tba',
    portfolioBlurb1: 'tba',
    portfolioBlurb2: 'tba',
    portfolioBlurb3: 'tba',
    github: 'https://github.com/thomasdane',
    twitter: 'https://twitter.com/tomjdane',
    linkedin: '',
    email: ''
  }),
  new yearBook.Student({
    name: 'Anne',
    slug: 'anne-homann',
    photoURL: 'tba',
    aboutMe: 'your bio',
    portfolioImage1: 'tba',
    portfolioImage2: 'tba',
    portfolioImage3: 'tba',
    portfolioURL1: 'tba',
    portfolioURL2: 'tba',
    portfolioURL3: 'tba',
    portfolioBlurb1: 'tba',
    portfolioBlurb2: 'tba',
    portfolioBlurb3: 'tba',
    github: 'https://github.com/thomasdane',
    twitter: 'https://twitter.com/tomjdane',
    linkedin: '',
    email: ''
  }),
  new yearBook.Student({
    name: 'Erik',
    slug: 'erik-froese',
    photoURL: 'tba',
    aboutMe: 'your bio',
    portfolioImage1: 'tba',
    portfolioImage2: 'tba',
    portfolioImage3: 'tba',
    portfolioURL1: 'tba',
    portfolioURL2: 'tba',
    portfolioURL3: 'tba',
    portfolioBlurb1: 'tba',
    portfolioBlurb2: 'tba',
    portfolioBlurb3: 'tba',
    github: 'https://github.com/thomasdane',
    twitter: 'https://twitter.com/tomjdane',
    linkedin: '',
    email: ''
  }),
  new yearBook.Student({
    name: 'Mark',
    slug: 'mark-pereira',
    photoURL: 'tba',
    aboutMe: 'your bio',
    portfolioImage1: 'tba',
    portfolioImage2: 'tba',
    portfolioImage3: 'tba',
    portfolioURL1: 'tba',
    portfolioURL2: 'tba',
    portfolioURL3: 'tba',
    portfolioBlurb1: 'tba',
    portfolioBlurb2: 'tba',
    portfolioBlurb3: 'tba',
    github: 'https://github.com/thomasdane',
    twitter: 'https://twitter.com/tomjdane',
    linkedin: '',
    email: ''
  }),
  new yearBook.Student({
    name: 'Simon',
    slug: 'simon-taylor',
    photoURL: 'tba',
    aboutMe: 'your bio',
    portfolioImage1: 'tba',
    portfolioImage2: 'tba',
    portfolioImage3: 'tba',
    portfolioURL1: 'tba',
    portfolioURL2: 'tba',
    portfolioURL3: 'tba',
    portfolioBlurb1: 'tba',
    portfolioBlurb2: 'tba',
    portfolioBlurb3: 'tba',
    github: 'https://github.com/thomasdane',
    twitter: 'https://twitter.com/tomjdane',
    linkedin: '',
    email: ''
  })


  // new yearBook.Student({id:1, title:'Tom', slug: 'tom-dane', content:'Tom content'}),

]);

yearBook.router = new yearBook.AppRouter ();

$(document).ready(function(){
  //fetch main container AppView and insert data from the Students collection.  
  var view = new yearBook.AppView({collection: yearBook.yearBookStudents});
  view.render();
  Backbone.history.start();

  // we will need some dom elements, let's set variables here
  



});