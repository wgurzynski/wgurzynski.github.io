
$('nav a').on('click', function(e) {                 // User clicks nav link
  e.preventDefault();                                // Stop loading new link
  var url = this.href;      
  console.log(url);                        // Get value of href

  $('nav a.current').removeClass('current');         // Clear current indicator
  $(this).addClass('current');                       // New current indicator

  $('#container').remove();                          // Remove old content
  $('#content').load(url + ' #container').hide().fadeIn('slow'); // New content
  console.log($('#content').load(url + ' #container'));
});

$('.educationAndSkillsHeader').on('click', function(){
  $('.educationAndSkillsContainer').hide();
  console.log(elo);
})

let educationAndSkillsHeader = document.getElementsByClassName('educationAndSkillsHeader')[0];
console.log(educationAndSkillsHeader);
educationAndSkillsHeader.addEventListener('click', function(){
  let educationAndSkillsContainer = document.getElementsByClassName('educationAndSkillsContainer')[0]
  educationAndSkillsContainer.style.display = "none";
},false);



document.getElementsByClassName('educationAndSkillsHeader')[0].addEventListener('click', function(){console.log('tego')},false);