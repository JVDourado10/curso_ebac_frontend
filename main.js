$(document).ready(function () {
  let tarefas = "";
  const tarefasArray = [];

  $("form").on("submit", function (e) {
    e.preventDefault();

    const novaTarefa = $("input").val();
    const addTarefa = `<li>${novaTarefa}</li>`;

    if (tarefasArray.includes(novaTarefa)) {
      alert("Você já adicinou essa tarefa");
    } else if(novaTarefa == '') {
      alert("Insira um nome para adicionar a tarefa");
    } else {
      $(addTarefa).appendTo(".tarefas ul");
      tarefasArray.push(novaTarefa);
    }

    $("input").val("");
  });

  $("body").on("click", "li", function () {
    console.log($(this).css("text-decoration"));
    if ($(this).css("text-decoration") == "none solid rgb(0, 0, 0)") {
      $(this).css("text-decoration", "line-through");
      console.log($(this).css("text-decoration"));
    } else {
      $(this).css("text-decoration", "none");
      console.log($(this).css("text-decoration"));
    }
  });
});