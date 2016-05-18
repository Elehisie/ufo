(function () {
  var collection = {
    intro: {
      text: 'this is a story that you read in an active way. there are decisions to be made, things to find.',
    },

    gender: {
      text: 'choose your gender',
    },

    male: {
      text: 'you are a tough guy, who like being a tough guy',
    },

    female: {
      text: 'even when you\'re really trying to be delicate, you are still tough',
    }
  };

  var story = ['intro','female'];

  var loadPanels = function (savedPanels) {
    document.getElementById('panels').innerHTML = '';

    var panels = {};
    Object.keys(collection).forEach(function(key) {
      // if (story.find(key)) { panels[key] = collection.key; }
      story.find(function (key){
        panels[key] = collection[key];
      });
    });
    console.log(panels);

    //this way object of objects become array of objects
    Object.keys(panels).forEach(function(key) {
      // console.log(key, panels[key].text);
      var panel = document.createElement('article');
      panel.setAttribute('id', key);
      panel.setAttribute('class', 'panels');
      panel.innerHTML = '<p>'+panels[key].text+'</p>';

      document.getElementById('panels').appendChild(panel);
    });
  };

  loadPanels(story);

})();
