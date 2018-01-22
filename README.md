# NoteBook

### Brief Summary:
Week 7 Challenge from Makers Academy:

*"Build a notes app as a frontend, single page web app. You'll be guided through this by the high-level challenges listed below. However, there will be no walkthroughs.*

*To get an idea of what you'll be building, here are [some user stories](./user-stories.md) for the notes app. (This is just to give you an idea of the app. You'll work through the challenges below to build it.)"*

This was written completely in Vanilla JavaScript and without the use of any test libraries.

I created my own test library (found in spec/runner directory). Wanted to get my tests looking as much like Jasmine as possible by using describe and it blocks and then setting expectations.

Example below:

```JavaScript
describe('Note', function () {
  it('assigns string to note', function(){
    var note = new Note('My favourite language is JavaScript')
    expect(note.text).toEqual('My favourite language is JavaScript')
  });
});
```

### Get Started:

To clone repo:

```
  git clone git@github.com:tmerrr/note-challenge.git

  cd note-challenge
```

To run tests:

```
  open SpecRunner.html
```

To run App:

```
  open index.html
```

##### Instructions:

1. Write a some text and then click the 'Create Note' button, to create a new Note.
2. Repeat step one to add as many notes as you like.
3. The 'Your Notes' section only displays the first 20 characters of each note. Click on the note to expand the text.
