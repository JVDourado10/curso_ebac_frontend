$(document).ready(function() {
fetch('https://api.github.com/users/JVDourado10')
  .then(function(res) {
    return res.json();
  })
  .then(function(json) {
    $('#name').text(json.name)
    $('#username').text(`@${json.login}`)
    $('#avatar').attr("src", json.avatar_url)
    $('#following').text(json.following)
    $('#followers').text(json.followers)
    $('#repos').text(json.public_repos)
    $('#link').attr("href",json.html_url)
 
  })

})